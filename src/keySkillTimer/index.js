import "../../resources/function/loadOverlayPluginCommon.js";
import { compareSame } from "../../resources/function/compareSameGroup";
import "../../resources/function/loadComplete";
import { logProcessing } from "../../resources/function/logProcessing";
import { TTS as tts } from "../../resources/function/TTS";
import "./index.scss";
import { raidBuffs国服, raidBuffs国际服 } from "./raidbuffs";
import "../../resources/function/isOverlayPlugin";
import { getJobByID } from "../../resources/data/job";

let params = new URLSearchParams(new URL(window.location).search);
let timers = [];
let party = [];
let youID = null;
let inFaker = true;


const TTS_CONFIG = [
  params.get("dajinengTTS") !== "false",
  params.get("jianshangTTS") !== "false",
  params.get("tuanfuTTS") !== "false"
]

const MODE = params.get("international") === "true" ? 'global' : 'cn'

const raidbuffs = MODE === 'global' ? raidBuffs国际服 : raidBuffs国服;

console.log(`当前处于${MODE === 'global' ? '国际服' : '国服'}模式`)

addOverlayListener("ChangePrimaryPlayer", (e) => (youID = e.charID.toString(16).toUpperCase()));
addOverlayListener("PartyChanged", (e) => {
  party = e.party || [];
  if (!inFaker) {
    setTimeout(() => {
      show(party);
    }, 1000);
  }
});
addOverlayListener("LogLine", (e) => {
  if (e.line[0] === "21" || (e.line[0] === "22" && e.line[45] === "0")) {
    let log = logProcessing(e.line, "action");
    let actionID = parseInt(log["actionID"], 16);
    const member = document.querySelector(`article[data-from="${log["casterID"]}-${compareSame(actionID)}"]`)
    if (member) {
      member.use();
      if (TTS_CONFIG[member.getAttribute("data-type")])
        doTTS(member.getAttribute("data-tts"));
    } else if (log["casterID"] === youID) {
      const buff = raidbuffs.find(v => v.id === actionID);
      if (buff && TTS_CONFIG[buff.type] && buff.tts) {
        doTTS(buff.tts);
      }
    }
  } else if (e.line[0] === "33" && e.line[3] === "4000000F") resetEverything();
});
addOverlayListener("ChangeZone", () => resetEverything());

function doTTS(string) {
  if (string) {
    tts(string);
  }
}

function resetEverything() {
  document.querySelectorAll("body > article > article").forEach((article) => {
    article?.cancel();
  });
}

function createIconUrl(icon) {
  if (!icon) return;
  let head = [..."000000"];
  let iconStr = icon.toString();
  if (iconStr.length > 3) {
    const temp = [...iconStr].slice(0, iconStr.length - 3).concat(..."000");
    head = [...head.slice(0, 6 - temp.length), ...temp];
  }
  let foot = [..."000000"];
  foot = [...foot.slice(0, 6 - iconStr.length), ...iconStr];
  return `${head.join("")}/${foot.join("")}`;
}

document.addEventListener("onOverlayStateUpdate", (e) => {
  if (e.detail.isLocked) {
    inFaker = false;
    show(party);
  } else {
    inFaker = true;
    faker();
  }
});
startOverlayEvents();

if (location.href.includes("localhost") || location.href.includes("127.0.0.1")) {
  faker();
}

// setTimeout(() => {
//   document.querySelectorAll("body > article > article").forEach((element) => {
//     element.use();
//   });
// }, 1000);
// setTimeout(() => resetEverything(), 3000);

function faker() {
  show([
    { id: "骑士ID", name: "虚构骑士", job: 19, inParty: true, level: 100 },
    { id: "武僧ID", name: "虚构武僧", job: 20, inParty: true, level: 100 },
    { id: "战士ID", name: "虚构战士", job: 21, inParty: true, level: 100 },
    { id: "龙骑ID", name: "虚构龙骑", job: 22, inParty: true, level: 100 },
    { id: "诗人ID", name: "虚构诗人", job: 23, inParty: true, level: 100 },
    { id: "白魔ID", name: "虚构白魔", job: 24, inParty: true, level: 100 },
    { id: "黑魔ID", name: "虚构黑魔", job: 25, inParty: true, level: 100 },
    { id: "召唤ID", name: "虚构召唤", job: 27, inParty: true, level: 100 },
    { id: "学者ID", name: "虚构学者", job: 28, inParty: true, level: 100 },
    { id: "忍者ID", name: "虚构忍者", job: 30, inParty: true, level: 100 },
    { id: "机工ID", name: "虚构机工", job: 31, inParty: true, level: 100 },
    { id: "暗骑ID", name: "虚构暗骑", job: 32, inParty: true, level: 100 },
    { id: "占星ID", name: "虚构占星", job: 33, inParty: true, level: 100 },
    { id: "武士ID", name: "虚构武士", job: 34, inParty: true, level: 100 },
    { id: "赤魔ID", name: "虚构赤魔", job: 35, inParty: true, level: 100 },
    { id: "青魔ID", name: "虚构青魔", job: 36, inParty: true, level: 100 },
    { id: "绝枪ID", name: "虚构绝枪", job: 37, inParty: true, level: 100 },
    { id: "舞者ID", name: "虚构舞者", job: 38, inParty: true, level: 100 },
    { id: "钐镰ID", name: "虚构钐镰", job: 39, inParty: true, level: 100 },
    { id: "贤者ID", name: "虚构贤者", job: 40, inParty: true, level: 100 },
    { id: "蝰蛇ID", name: "虚构蝰蛇", job: 41, inParty: true, level: 100 },
    { id: "画家ID", name: "虚构画家", job: 42, inParty: true, level: 100 },
  ]);
}

function getProp(prop, player) {
  return typeof prop === "function" ? prop(player.level) : prop;
}

function show(party) {
  document.querySelectorAll("body > article").forEach((article) => {
    article.innerHTML = "";
  });
  for (const p of party) {
    if (!p.inParty && params.get("inPartyOnly") !== "false") break;
    for (let index = 0; index < raidbuffs.length; index++) {
      const item = raidbuffs[index];
      if (item.job.includes(p.job)) {
        const art = document.createElement("article");
        const id = typeof item.id === 'function' ? item.id(p.level) : item.id;
        art.style.order = index;
        if ((p.level || 100) < item.level) {
          continue;
        }
        art.setAttribute("data-from", `${p.id}-${id}`);
        const aside = document.createElement("aside");
        const recast = getProp(item.recast1000ms, p);
        const duration = getProp(item.duration, p);
        const tts = getProp(item.tts, p);
        const type = getProp(item.type, p);
        aside.setAttribute("data-recast", recast);
        aside.setAttribute("data-duration", duration);
        aside.setAttribute("data-type", type);
        aside.setAttribute("data-tts", tts);
        aside.innerText = "";
        art.append(aside);
        let section = document.createElement("img");
        if (!item.icon) {
          throw new Error('icon is required')
        }
        const url = createIconUrl(item.icon)
        section.src = `https://cafemaker.wakingsands.com/i/${url ?? "000000/000405"}.png`;
        section.onerror = () => {
          section.src = `https://xivapi.com/i/${url ?? "000000/000405"}.png`;
          section.onerror = null;
        };
        art.append(section);
        let shadow = document.createElement("div");
        shadow.classList.add("shadow");
        art.append(shadow);
        if (
          party?.reduce((pre, cur) => {
            if (cur.job === p.job || item.job.find((value) => value === cur.job)) pre++;
            return pre;
          }, 0) >= 2
        ) {
          let masterName = document.createElement("footer");
          const job = getJobByID(p.job);
          masterName.innerText = job.simple1;
          masterName.classList.add(job.en);
          art.append(masterName);
        }
        document.querySelector(`#no${item.type}`).append(art);

        art.use = function () {
          let recast = aside.getAttribute("data-recast");
          let time = parseInt(recast);
          let duration = aside.getAttribute("data-duration");
          aside.innerText = duration;
          clearInterval(art.timer);
          if (duration === "0") {
            shadow.style.clipPath = `inset(0 0 0 0)`;
            aside.innerText = time;
          } else {
            aside.style.color = "gold";
          }
          let i = 0;
          art.timer = setInterval(() => {
            time -= 0.25;
            i++;
            if (time > recast - duration) {
              if (i % 4 === 0) aside.innerText = parseInt(duration - (recast - time));
              shadow.style.clipPath = `inset(${100 - ((recast - time) / duration) * 100}% 0 0 0)`;
            } else {
              if (i % 4 === 0) {
                aside.innerText = parseInt(time);
                aside.style.color = "white";
              }
              shadow.style.clipPath = `inset(${100 - (time / (recast - duration)) * 100}% 0 0 0)`;
            }
            if (time <= 0) art?.cancel();
          }, 250);
          timers.push(art.timer);
        };
        // art.use();
        art.cancel = () => {
          clearInterval(art.timer);
          aside.innerText = "";
          shadow.style.clipPath = `inset(100% 0 0 0)`;
        };
      }
    }
  }
}
