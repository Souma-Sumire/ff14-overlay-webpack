"use strict";
import "../../resources/function/isOverlayPlugin";
import "./index.scss";

let focusTargetID;
let settings = document.querySelector("#settings");
let show = document.querySelector("#show");
let battleStartTime = 0;
let copyInput = document.querySelector("#toCopy");
let copyButon = document.querySelector("#copy");
let clearButton = document.querySelector("#clear");
let justStartButton = document.querySelector("#justStart");
let logElement = {
  casterID: { text: "施法ID", index: 2, enable: false },
  casterName: { text: "施法人", index: 3, enable: false },
  actionID: { text: "行动ID", index: 4, enable: false },
  actionName: { text: "行动名", index: 5, enable: true },
  castTime: { text: "施法时间", index: 8, enable: false },
};

init();

function init() {
  copyButon.addEventListener("click", handleCopyButtonClick);
  clearButton.addEventListener("click", handleClearButtonClick);
  justStartButton.addEventListener("click", handleJustStartButton);
  addOverlayListener("LogLine", handleLogLine);
  addOverlayListener("EnmityTargetData", handeleEnmityTargetData);
  startOverlayEvents();
  let ul = document.createElement("ul");
  settings.appendChild(ul);
  for (const key in logElement) {
    const element = logElement[key];
    let li = document.createElement("li");
    ul.appendChild(li);
    let label = document.createElement("label");
    li.appendChild(label);
    let checkbox = document.createElement("input");
    checkbox.title = key;
    checkbox.type = "checkbox";
    checkbox.checked = element.enable ? "checked" : "";
    label.appendChild(checkbox);
    let text = document.createTextNode(element.text);
    label.appendChild(text);
  }
  settings.addEventListener("click", handleSettingsClick, true);
  function handleSettingsClick() {
    settings.querySelectorAll("input[type=checkbox]").forEach((input) => {
      logElement[input.title].enable = input.checked;
    });
  }
}

function battleStart(time) {
  battleStartTime = time;
}

function handleLogLine(e) {
  if (e.line[0] === "00" && e.line[2] === "0039") {
    switch (e.line[4]) {
      case "戦闘開始！":
      case "战斗开始！":
      case "Engage!":
        battleStart(new Date(e.line[1]));
    }
  } else if (e.line[0] === "20" && e.line[2] === focusTargetID && battleStartTime > 0) {
    let time = dateFormat("MM:SS", new Date(new Date(e.line[1]) - battleStartTime));
    let li = document.createElement("li");
    show.appendChild(li);
    li.innerHTML = `<span>${time}</span>`;
    for (const key in logElement) {
      const element = logElement[key];
      if (element.enable) li.innerHTML += `<span>${e.line[element.index]}</span>`;
    }
  }
}

function handeleEnmityTargetData(e) {
  focusTargetID = e.Focus?.ID.toString(16).toUpperCase();
}

function dateFormat(fmt, date) {
  let ret;
  const opt = {
    "Y+": date.getFullYear().toString(), // 年
    "m+": (date.getMonth() + 1).toString(), // 月
    "d+": date.getDate().toString(), // 日
    "H+": date.getHours().toString(), // 时
    "M+": date.getMinutes().toString(), // 分
    "S+": date.getSeconds().toString(), // 秒
  };
  for (let k in opt) {
    ret = new RegExp("(" + k + ")").exec(fmt);
    if (ret) {
      fmt = fmt.replace(ret[1], ret[1].length == 1 ? opt[k] : opt[k].padStart(ret[1].length, "0"));
    }
  }
  return fmt;
}

function handleCopyButtonClick() {
  let text = show.innerHTML;
  text = text.replaceAll(/\<\/li\>/g, "\n");
  text = text.replaceAll(new RegExp(`</span><span>`, "g"), " ");
  text = text.replaceAll(/\<.+?\>/g, "");
  copyInput.value = text;
  copyInput.select();
  document.execCommand("copy");
}

function handleClearButtonClick() {
  show.innerHTML = "";
}

function handleJustStartButton() {
  handleClearButtonClick();
  battleStart(new Date());
}
