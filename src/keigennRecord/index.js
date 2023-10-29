"use strict";
import { getJobByID } from "../../resources/data/job";
import { getStatus } from "../../resources/data/status";
import { getDamage } from "../../resources/function/damage";
import { logProcessing } from "../../resources/function/logProcessing";
import { keigenns } from "./keigenns";
import { actionChinese } from "../../resources/data/actionChinese";
// import "../../resources/function/xianyu";
import "../../resources/function/loadComplete";
import "./index.scss";
import "../../resources/function/isOverlayPlugin";
import "../../resources/function/loadOverlayPluginCommon.js";

if (new Date() < new Date("2024-01-01")) {
  console.log(
    "2023年10月26日更新,带来3个新功能参数,他们分别是originAction用于控制技能名是否取原文(默认关), originStatus用于控制状态名是否取原文(默认关), hideOnStartup用于控制启动时是否自动缩起(默认关)",
  );
}

const trueStr = ["true", "1", "yes", "y", "t", "on", "enable", "enabled", "ok", "okay", "agree", "agreed"];
const getConfig = (key, defaultresult) => {
  const p = params?.get(key)?.toLocaleLowerCase();
  if (p && trueStr.includes(p)) return true;
  return defaultresult;
};
const params = new URLSearchParams(new URL(window.location).search);
const miniMode = getConfig("mini", false);
const autoClean = getConfig("autoclean", false);
const showName = getConfig("showName", false);
const abbreviationID = getConfig("abbreviationID", true);
const originAction = getConfig("originAction", false);
const originStatus = getConfig("originStatus", false);
const hideOnStartup = getConfig("hideOnStartup", false);

miniMode && import("./index_mini.scss");
const body = document.body;
const main = document.querySelector("main");
const header = document.querySelector("header");
const footer = document.querySelector("footer");

document.querySelector("body main table th:nth-child(1)").style.width = params?.get("th1") ?? "36px";
document.querySelector("body main table th:nth-child(2)").style.width = params?.get("th2") ?? "75px";
document.querySelector("body main table th:nth-child(3)").style.width = params?.get("th3") ?? "34px";
document.querySelector("body main table th:nth-child(4)").style.width = params?.get("th4") ?? "46px";

let party = [],
  youID = "",
  playerName = "",
  duration = "00:00",
  FFXIVObject = {},
  scrollMove = true,
  inCombat = false,
  combatTimer = 0,
  maxLength = parseInt(params?.get("maxLength") || 800),
  is24Mode = params?.get("24Mode") === "true" || false;
let lethal = {};
class FFObject {
  constructor(id, name) {
    this.ID = id;
    this.Name = name;
    this.Status = {};
  }
}
try {
  party = JSON.parse(localStorage.getItem("keigennRecordParty"));
  if (!(party instanceof Array)) party = [];
} catch {
  party = [];
}
if (!miniMode) {
  main.style.backgroundColor = `rgba(5,5,5,${params?.get("bgOpacity") || 0.45})`;
  body.style.opacity = params?.get("bodyOpacity") || 1;
}
body.style.fontSize = params?.get("fontSize") || "12px";
function addFooter() {
  document.querySelector(
    "body > footer > ul",
  ).innerHTML = `<li class="select" data-select="true" data-job-name="All" data-reality-name="All" id="all">ALL</li>`;
  if (party.length) {
    document.querySelector("body > footer > ul").append(
      ...party.map((value) => {
        let li = document.createElement("li");
        li.setAttribute("data-reality-name", value.id === youID ? "YOU" : value.name);
        li.setAttribute("data-job-name", value.id === youID ? "YOU" : getJobByID(value.job)?.simple1 ?? "?");
        li.appendChild(document.createTextNode(li.getAttribute("data-job-name")));
        li.setAttribute("data-object-id", value.id);
        li.setAttribute("data-select", "false");
        return li;
      }),
    );
  }
  document.querySelectorAll("body > footer > ul > li ").forEach((li) => {
    li.onclick = function () {
      document.querySelectorAll("body > footer > ul > li ").forEach((li) => {
        li.setAttribute("data-select", "false");
        li.classList.remove(`select`);
      });
      this.setAttribute("data-select", "true");
      li.classList.add(`select`);
      document.querySelectorAll("body > main > table > tbody > tr").forEach((element) => {
        if (li.getAttribute("id") === "all" || element.getAttribute("data-master-id") === li.getAttribute("data-object-id")) {
          element.style.display = "table-row";
        } else {
          element.style.display = "none";
        }
      });
    };
    li.oncontextmenu = () =>
      document
        .querySelectorAll("body > footer > ul > li ")
        .forEach(
          (li) =>
            (li.innerText = li.innerText === li.getAttribute("data-reality-name") ? li.getAttribute("data-job-name") : li.getAttribute("data-reality-name")),
        );
  });
}
addOverlayListener("ChangePrimaryPlayer", (e) => {
  youID = e.charID.toString(16).toUpperCase();
  playerName = e.charName;
  addFooter();
});
addOverlayListener("PartyChanged", (e) => {
  party = e.party.filter((p) => p.inParty || is24Mode);
  localStorage.setItem("keigennRecordParty", JSON.stringify(party));
  addFooter();
});

callOverlayHandler({ call: "cactbotRequestState" }).then(
  () => {
    // console.log("存在cactbot");
    addOverlayListener("onInCombatChangedEvent", (e) => (e.detail.inACTCombat && !inCombat ? startCombat() : ""));
  },
  () => {
    console.log("不存在cactbot,采用次选方案,战斗计时可能存在偏差");
    addOverlayListener("CombatData", (e) => (duration = e.Encounter.duration));
  },
);
function speTr(text, className = null, colSpan = 5) {
  let td = tbody.insertRow(-1).insertCell(0);
  td.innerText = text;
  if (className) td.classList.add(className);
  td.setAttribute("data-type", className);
  td.classList.add("spe");
  td.colSpan = colSpan;
  main.scrollTop = main.scrollHeight;
  return td.parentNode;
}
addOverlayListener("ChangeZone", (e) => {
  FFXIVObject = {};
  if (tbody.lastChild !== null && tbody.lastChild.firstChild.getAttribute("data-type") === "changeZone") tbody.lastChild.remove();
  if (!miniMode) speTr(e.zoneName, "changeZone");
  if (autoClean) {
    cleanTable();
  }
  inCombat = false;
  clearTimeout(combatTimer);
  duration = "00:00";
});
function partyWipe() {
  FFXIVObject = {};
  if (!miniMode) {
    speTr("团灭", "ace");
  } else {
    let aceTr = speTr(`🗑️团灭了！`, "deathEvent", 4);
    aceTr.insertCell(0).innerHTML = duration; //战斗时间
  }
  inCombat = false;
  clearTimeout(combatTimer);
  duration = "00:00";
  lethal = {};
}
const tbody = document.querySelector("body > main > table > tbody");
addOverlayListener("LogLine", (e) => {
  switch (e.line[0]) {
    case "39":
      lethal[e.line[3]] = Number(e.line[4]);
      break;
    case "24":
    case "21":
    case "22":
      const ability = getDamage(e);
      const isDoT = e.line[0] === "24";
      const dot = isDoT
        ? {
            id: e.line[2],
            name: e.line[3],
            which: e.line[4],
            effectId: e.line[5],
            damage: e.line[6],
            value: parseInt(e.line[6], 16),
          }
        : null;
      if (
        (isDoT && dot.which === "DoT" && dot.id[0] === "1" && (dot.id === youID || party.some((v) => v.id === dot.id && (v.inParty || is24Mode)))) ||
        (ability.type === "damage" &&
          ability.fromIsEnemy &&
          ability.targetisFriendly &&
          (ability.targetID === youID || party.some((value) => value.id === ability.targetID && (value.inParty || is24Mode))))
      ) {
        if (!inCombat && duration === "00:00") startCombat();
        if (maxLength > 0 && tbody.childElementCount >= maxLength) {
          tbody.deleteRow(0);
        }
        let tr = tbody.insertRow(-1);
        if (isDoT) {
          tr.setAttribute("data-master-id", dot.id);
          tr.setAttribute("data-master-name", "");
        } else {
          tr.setAttribute("data-master-id", ability.targetID);
          tr.setAttribute("data-master-name", ability.targetName);
        }
        if (
          document.querySelector("#all").getAttribute("data-select") === "true" ||
          document.querySelector(`body > footer > ul > li[data-object-id="${isDoT ? dot.id : ability.targetID}"]`).getAttribute("data-select") === "true"
        ) {
          tr.style.display = "table-row";
        } else {
          tr.style.display = "none";
        }
        let td1 = tr.insertCell(0); //时间
        let td2 = tr.insertCell(1); //技能名
        let td3 = tr.insertCell(2); //目标
        let td4 = tr.insertCell(3); //伤害值
        let td5 = tr.insertCell(4); //状态
        let td5inside = document.createElement("article");
        td1.innerHTML = duration; //战斗时间
        td2.innerHTML = isDoT
          ? "DoT"
          : /unknown_/i.test(ability.skillName)
          ? "未知"
          : originAction
          ? ability.skillName
          : actionChinese?.[parseInt(ability.skillID, 16)] ?? ability.skillName ?? "未知";
        try {
          if ((isDoT ? dot.id : ability.targetID) === youID) {
            td3.innerText = "YOU";
            td3.classList.add("YOU");
          } else {
            let job = getJobByID(party.find((p) => p.id === (isDoT ? dot.id : ability.targetID))?.job);
            let name = isDoT ? dot.name : ability.targetName;
            if (showName && abbreviationID) {
              name = name.replace(/([A-Z])\S+ ([A-Z])\S+/, `$1.$2.`);
            }

            td3.innerText = (showName ? job.simple1 : job.simple2) + (showName ? "(" + name + ")" : "");
            td3.classList.add(job?.en);
          }
        } catch (e) {
          console.warn(e);
          td3.innerHTML = isDoT ? dot.name : ability.targetName;
        }
        const damageValue = isDoT ? dot.value : ability.value;
        td4.innerHTML = damageValue.toLocaleString();
        const curHP = Number(e.line[isDoT ? 7 : 24]);
        lethal[ability.targetName] = curHP;
        td4.setAttribute("data-damage-effect", isDoT ? "" : ability.damageEffect);
        td4.title = isDoT ? "DoT" : ability.fromName;
        td4.classList.add(isDoT ? "DoT" : ability.damageType);
        td4.setAttribute(
          "data-damage-type",
          isDoT
            ? "(DoT)"
            : {
                dodge: "(回避)",
                death: "(即死)",
                physics: "(物理)",
                magic: "(魔法)",
                darkness: "(黑暗)",
                heal: "(治疗)",
                unknown: "(未知)",
              }[ability.damageType] ?? "",
        );
        function createImg(name, key, stack = 0) {
          let span = document.createElement("span");
          let img = new Image();
          img.style.height = parseInt(params?.get("imgHeight") ?? 20) + 5 + "px";
          let statusNow = getStatus(parseInt(key, 16));
          img.src = `https://cafemaker.wakingsands.com/i/${stackUrl(statusNow.url)}.png`;
          img.onerror = () => {
            img.src = `https://xivapi.com/i/${stackUrl(statusNow.url)}.png`;
            img.onerror = null;
          };
          function stackUrl(url) {
            return stack > 1 && stack <= 16 ? url.substring(0, 7) + (Array(6).join(0) + (parseInt(url.substring(7)) + stack - 1)).slice(-6) : url;
          }
          img.title = FFXIVObject[name].Status[key].name;
          if (keigenns?.[key]?.[ability.damageType] === 0) {
            span.classList.add("useless");
          } else if (keigenns?.[key]?.[ability.damageType] === 0.5) {
            span.classList.add("halfUseful");
          }
          span.appendChild(img);
          let seconds = document.createElement("aside");
          seconds.style.width = ((parseInt(img.style.height) / 32) * 24) / 0.75 + "px";
          if (FFXIVObject[name].Status[key].caster === playerName) seconds.classList.add("playerself");
          seconds.innerText = Math.max(Math.ceil((FFXIVObject[name].Status[key].expiration - new Date(e.line[1]).getTime()) / 1000), 0);
          span.appendChild(seconds);
          td5inside.appendChild(span);
        }
        if (isDoT) {
          // if (FFXIVObject[dot.name]) forStatus(dot.name);
        } else {
          if (FFXIVObject[ability.targetName]) forStatus(ability.targetName);
          if (FFXIVObject[ability.fromName]) forStatus(ability.fromName);
        }
        td5.appendChild(td5inside);
        function forStatus(name) {
          for (const key in FFXIVObject[name].Status) createImg(name, key, parseInt(FFXIVObject[name].Status[key].stack));
        }
        if (
          scrollMove &&
          (document.querySelector("#all").getAttribute("data-select") === "true" ||
            document.querySelector(`body > footer > ul > li[data-object-id="${isDoT ? dot.id : ability.targetID}"]`).getAttribute("data-select") === "true")
        ) {
          main.scrollTop = main.scrollHeight;
        }
        tr.onclick = () => {
          let result = [];
          result.push(tr.children[0].innerHTML);
          result.push(tr.children[3].title);
          result.push(tr.children[1].innerHTML);
          result.push(tr.getAttribute("data-master-name"));
          result.push(tr.children[3].innerHTML + tr.children[3].getAttribute("data-damage-type"));
          for (const kg of tr.querySelectorAll("td>article>span>img")) result.push(kg.title);
          document.querySelector("#toCopy").value = result.join(" ");
          document.querySelector("#toCopy").select();
          document.execCommand("copy");
          document.querySelector("#hint").innerText = "已复制！";
          document.querySelector("#hint").classList.add("anim-opacity2");
          setTimeout(() => document.querySelector("#hint").classList.remove("anim-opacity2"), 1000);
        };
      }
      break;
    case "26":
    case "30":
      let statusLog = logProcessing(e.line, "status");
      const logStatus = statusLog["statusID"].toLowerCase();
      const statusCN = getStatus(parseInt(logStatus, 16))?.CN ?? "";
      let playerKeigenn;
      if (/(受伤|耐性|防御力)(提升|(大幅)?降低|低下|加重|减轻)|体力(增加|减少|衰减)/.test(statusCN)) {
        playerKeigenn = { dodge: 1, physics: 1, magic: 1, darkness: 1, condition: "player" };
      } else if (/(精神|力量|灵巧|智力){1,2}(大幅)?降低/.test(statusCN)) {
        playerKeigenn = { dodge: 1, physics: 1, magic: 1, darkness: 1, condition: "enemy" };
      } else {
        playerKeigenn = keigenns?.[logStatus];
      }
      if (
        playerKeigenn !== undefined &&
        ((playerKeigenn?.condition === "player" && (party.some((value) => value.id === statusLog["targetID"]) || statusLog["targetID"] === youID)) ||
          (playerKeigenn?.condition === "enemy" && statusLog["targetID"].substring(0, 1) === "4"))
      ) {
        if (e.line[0] === "26") {
          FFXIVObject[statusLog["targetName"]] = FFXIVObject[statusLog["targetName"]] || new FFObject(statusLog["targetID"], statusLog["targetName"]);
          FFXIVObject[statusLog["targetName"]].Status[logStatus] = {
            name: originStatus ? statusLog.statusName : statusCN ?? statusLog["statusName"],
            caster: statusLog["casterName"],
            stack: e.line[9] > 1 ? e.line[9] : 0,
            expiration: new Date(e.line[1]).getTime() + Number(statusLog["statusTime"]) * 1000,
          };
        } else {
          try {
            delete FFXIVObject[statusLog["targetName"]].Status[logStatus];
          } catch {}
        }
      }
      break;
    case "25":
      if (e.line[2] === youID || party.some((p) => p.id === e.line[2] && (p.inParty || is24Mode))) {
        let target;
        try {
          target = e.line[2] === youID ? "你" : getJobByID(party.find((p) => p.id === e.line[2])?.job)?.simple2 ?? "unknown";
        } catch {
          target = e.line[3];
        }
        let deathTr = speTr(`💀${target}被${e.line[5]}做掉了！${lethal[e.line[3]] ? "生前大概HP：" + lethal[e.line[3]] : ""}`, "deathEvent", 4);
        deathTr.setAttribute("data-master-id", e.line[2]);
        deathTr.setAttribute("data-master-name", e.line[3]);
        if (
          document.querySelector("#all").getAttribute("data-select") === "true" ||
          document.querySelector(`body > footer > ul > li[data-object-id="${e.line[2]}"]`).getAttribute("data-select") === "true"
        ) {
          deathTr.style.display = "table-row";
        } else {
          deathTr.style.display = "none";
        }
        deathTr.insertCell(0).innerHTML = duration; //战斗时间
      }
    case "33":
      if (e.line[3] === "4000000F") partyWipe();
    default:
      break;
  }
});
startOverlayEvents();
main.onscroll = (e) => {
  scrollMove = main.scrollHeight - body.offsetHeight - e.target.scrollTop < body.clientHeight;
};

if (hideOnStartup) {
  main.style.opacity = "0";
  footer.style.opacity = "0";
  header.classList.add(`hide`);
} else {
  main.style.opacity = "1";
  footer.style.opacity = "1";
  header.classList.remove(`hide`);
}

header.onclick = function () {
  if (main.style.opacity === "0") {
    main.style.opacity = "1";
    footer.style.opacity = "1";
    header.classList.remove(`hide`);
  } else {
    main.style.opacity = "0";
    footer.style.opacity = "0";
    header.classList.add(`hide`);
  }
};
function startCombat() {
  main.scrollTop = main.scrollHeight;
  inCombat = true;
  if (autoClean) {
    cleanTable();
  }
  clearTimeout(combatTimer);
  let d = 0;
  combatTimer = setInterval(() => {
    duration = `${parseInt(++d / 60)
      .toString()
      .padStart(2, "0")}:${parseInt(d % 60)
      .toString()
      .padStart(2, "0")}`;
  }, 1000);
}
function cleanTable() {
  var tbody = document.querySelector("body > main > table > tbody");
  while (tbody.firstChild) {
    tbody.removeChild(tbody.lastChild);
  }
}
