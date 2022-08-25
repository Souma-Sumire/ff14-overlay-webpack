"use strict";
import "../../resources/function/loadOverlayPluginCommon.js";
import { actionChinese } from "../../resources/data/actionChinese.js";
import { loadItem, saveItem } from "../../resources/function/localStorage";
import { logProcessing } from "../../resources/function/logProcessing.js";
import { TTS } from "../../resources/function/TTS.js";
import "./index.scss";
import "../../resources/function/isOverlayPlugin";

let playerID;
const namespace = "GeneralSkillTimer";
const load = (t, a = undefined) => loadItem(namespace, t, a);
const save = (t, a) => saveItem(namespace, t, a);
let skillList = load("skillList", []);
const list = document.querySelector("#list");
const inputID = document.querySelector("#inputID");
const showAction = document.querySelector("#showAction");
let addBtn = document.createElement("button");
addBtn.innerText = "+";
let saveBtn = document.createElement("button");
saveBtn.innerText = "save";
list.innerHTML = skillList
  .map(
    (value) =>
      `<li><input type="number" value="${value.id}"><span>${value.name}</span><input type="number" step="1000" value="${value.delay}"><input type="number" value="${value.tts}"></li>`,
  )
  .join("");
document.querySelector("main").appendChild(addBtn);
document.querySelector("main").appendChild(saveBtn);

addBtn.addEventListener("click", handleAddBtnClick, false);
saveBtn.addEventListener("click", handleSaveBtnClick, false);
inputID.addEventListener("keyup", handleInputIDKeyup, false);
addOverlayListener("ChangePrimaryPlayer", handleChangePrimaryPlayer);
addOverlayListener("LogLine", handelLogLine);
addOverlayListener("ChangeZone", () => clearTimer());
startOverlayEvents();

function handleChangePrimaryPlayer(e) {
  playerID = e.charID.toString(16).toUpperCase();
}

function handelLogLine(e) {
  if (e.line[0] === "21" || (e.line[0] === "22" && e.line[45] === "0")) {
    let log = logProcessing(e.line, "action");
    if (log?.casterID === playerID) {
      let has = false;
      let delay = 0;
      let tts = "";
      let skill;
      for (const key in skillList) {
        skill = skillList[key];
        if (skill.id === parseInt(log.actionID, 16).toString()) {
          has = true;
          delay = skill.delay;
          tts = skill.tts;
          break;
        }
      }
      if (has) {
        clearTimeout(skill?.timer ?? -1);
        skill.timer = setTimeout(() => {
          TTS(tts);
        }, delay);
      }
    }
  } else if (e.line[0] === "33" && (e.line[3] === "40000010" || e.line[3] === "4000000F")) clearTimer();
}

function handleAddBtnClick() {
  let li = document.createElement("li");
  li.innerHTML = `<input value="" type="number" placeholder="技能ID"><span></span><input value="" placeholder="延迟毫秒" step="1000" type="number"><input value="" placeholder="TTS内容">`;
  list.appendChild(li);
}

function handleSaveBtnClick() {
  let res = [];
  list.childNodes.forEach((value) => {
    let skill = {
      id: value.childNodes[0].value,
      name: actionChinese[value.childNodes[0].value] ?? "",
      delay: value.childNodes[2].value,
      tts: value.childNodes[3].value,
    };
    res.push(skill);
  });
  save("skillList", res);
  skillList = res;
}

function handleInputIDKeyup() {
  this.value = this.value.replace(" ", "");
  if (this.value.length) {
    let regex = new RegExp(["", ...this.value, ""].join(".*"));
    let res = [];
    for (const key in actionChinese) {
      let action = actionChinese[key];
      if (regex.test(action)) {
        res.push({ id: key, name: action });
      }
    }
    showAction.innerHTML = res.map((value) => `<li>${value.id},${value.name}</li>`).join("");
  } else {
    showAction.innerHTML = "";
  }
}

function clearTimer() {
  for (const key in skillList) {
    const skill = skillList[key];
    clearTimeout(skill?.timer ?? -1);
  }
}
