"use strict";
import "../../resources/function/loadOverlayPluginCommon.js";
import "../../resources/function/loadComplete";
import { logProcessing } from "../../resources/function/logProcessing";
import { TTS } from "../../resources/function/TTS";
import { actionChinese } from "../../resources/data/actionChinese";
import "./index.scss";
import { toRoomaji } from "../../resources/function/roomaji";
import "../../resources/function/isOverlayPlugin";

let target;
const params = new URLSearchParams(new URL(window.location).search);
const main = document.querySelector("main");
// const castingType = document.querySelector("#type"); //留坑
const castingId = document.querySelector("#cast-id");
const castingCountdown = document.querySelector("#countdown");
const castingName = document.querySelector("section");
const castingProgress = document.querySelector("article");
const castingProgressInner = document.querySelector("aside");
const ttsEnable = params.get("tts") === "true";
const roomajiEnable = params.get("roomaji") !== "false";
let casting = {};
let castDirective;
if (params.get("directive") === "true") import("./whatShouldIDo.js").then((e) => (castDirective = e.whatShouldIDo));
if (params.get("hideCountdown") === "true") castingCountdown.style.display = "none";
if (params.get("hideProg") === "true") castingProgress.style.display = "none";
if (params.get("showCastId") !== "true") castingId.style.display = "none";
castingName.style.fontSize = params.get("fontSize") ?? "20px";
main.style.opacity = "0";
document.body.style.fontFamily = params.get("fontFamily") ?? "SmartisanHei";
const progHeight = params.get("progHeight") ?? "10px";
castingProgress.style.height = progHeight;
castingName.style.top = 20 + parseInt(castingProgress.style.height) + "px";
addOverlayListener("LogLine", (e) => {
  if (e.line[0] === "20") {
    const log = logProcessing(e.line, "action");
    // console.log(castDirective?.[parseInt(log?.actionID, 16)]);
    casting[log.casterID] = {
      name:
        castDirective?.[parseInt(log.actionID, 16)] ??
        actionChinese?.[parseInt(log.actionID, 16)] ??
        (() => {
          if (/^_rsv/.test(log.actionName)) return parseInt(log.actionID, 16);
          let res = roomajiEnable ? toRoomaji(log.actionName) : log.actionName;
          // if (res === log.actionName) {
          // console.log(log.actionID, parseInt(log.actionID, 16));
          // }
          return res;
        })(),
      startTime: Date.now(),
      castTime: log.castTime * 1000,
      overTime: Date.now() + log.castTime * 1000,
      // damageType: null, //留坑
      alreadyTTS: false,
      castIdHex: log.actionID.toUpperCase(),
      castIdDec: parseInt(log.actionID, 16),
    };
  } else if (e.line[0] === "23") {
    const log = logProcessing(e.line, "action");
    delete casting[log.casterID];
  }
});

addOverlayListener("EnmityTargetData", (e) => {
  target = e?.[params.get("focus") === "true" ? "Focus" : "Target"]?.ID?.toString(16).toUpperCase();
  casting?.[target] !== undefined ? show() : clear();
});

startOverlayEvents();

function show() {
  main.style.opacity = "1";
  castingName.innerText = casting?.[target]?.name;
  // castingType.innerText = casting?.[target]?.damageType ?? ""; //留坑
  if (ttsEnable && casting?.[target]?.alreadyTTS === false) {
    TTS(castingName.innerText);
    casting[target].alreadyTTS = true;
  }
}

function clear() {
  main.style.opacity = "0";
}
const pingMs = parseInt(params.get("ping") ?? 80);
function update() {
  if (casting?.[target] !== undefined) {
    const now = Date.now();
    const count = (casting[target].overTime - now - pingMs) / 1000;
    castingProgressInner.style.width = `${((now - casting[target].startTime + pingMs) / casting[target].castTime) * 100}%`;
    castingCountdown.innerText = Math.max(count, 0).toFixed(2);
    castingId.innerText = `${casting[target].castIdDec} (${casting[target].castIdHex})`;
    if (count <= -0.1) {
      delete casting[target];
      clear();
    }
  }
  window.requestAnimationFrame(update);
}
window.requestAnimationFrame(update);
console.log("该版本已停止维护，访问 https://nga.178.com/read.php?tid=29937582 以获得新版");
