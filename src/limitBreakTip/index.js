"use strict";

import "./index.scss";
import "../../resources/function/loadComplete";
import { testLogLine } from "../../resources/function/testLogLine";
import "../../resources/function/isOverlayPlugin";

let params = new URLSearchParams(new URL(window.location).search);
const LBMax = parseInt(params.get("LBMax") ?? 30000);
const LBAutomaticBaseline = Math.ceil((parseInt(params.get("automatic") ?? 220) / LBMax).toFixed(4) * 1000) / 1000;
let LBBefore = 0;
let LBNow = 0;
let LBAddUp = 0;
let LBextraAll = 0;
const show = document.querySelector("#show");
const extra = document.querySelector("#extra");
const extraAll = document.querySelector("#extraAll");
addOverlayListener("ChangeZone", () => handleClear());
addOverlayListener("onPartyWipe", () => handleClear());
addOverlayListener("LogLine", (e) => handleLogLine(e));
startOverlayEvents();

if (params.get("test") === "true")
  testLogLine(
    handleLogLine,
    [
      ["36", "2021-12-28T21:38:30.3580000+08:00", "0000"],
      ["36", "2021-12-28T21:38:33.3580000+08:00", "00DC"],
      ["36", "2021-12-28T21:38:34.8290000+08:00", "0208"],
      ["36", "2021-12-28T21:38:36.3460000+08:00", "02E4"],
      ["36", "2021-12-28T21:38:37.8630000+08:00", "0410"],
      ["36", "2021-12-28T21:38:39.3360000+08:00", "04EC"],
      ["36", "2021-12-28T21:38:42.3720000+08:00", "05C8"],
      ["36", "2021-12-28T21:38:45.3620000+08:00", "06A4"],
      ["36", "2021-12-28T21:38:47.8140000+08:00", "07D0"],
      ["36", "2021-12-28T21:38:47.8140000+08:00", "08FC"],
      ["36", "2021-12-28T21:38:47.8140000+08:00", "0A28"],
      ["36", "2021-12-28T21:38:47.8140000+08:00", "0B54"],
      ["36", "2021-12-28T21:38:47.8140000+08:00", "0C80"],
      ["36", "2021-12-28T21:38:48.3510000+08:00", "0D5C"],
      ["36", "2021-12-28T21:38:50.6220000+08:00", "0E88"],
      ["36", "2021-12-28T21:38:50.8900000+08:00", "0FB4"],
      ["36", "2021-12-28T21:38:51.0230000+08:00", "10E0"],
      ["36", "2021-12-28T21:38:51.1570000+08:00", "120C"],
      ["36", "2021-12-28T21:38:51.3360000+08:00", "12E8"],
      ["36", "2021-12-28T21:38:54.3690000+08:00", "13C4"],
      ["36", "2021-12-28T21:38:57.3570000+08:00", "14A0"],
      ["36", "2021-12-28T21:38:58.3360000+08:00", "15CC"],
      ["36", "2021-12-28T21:38:58.3360000+08:00", "16F8"],
      ["36", "2021-12-28T21:38:58.3360000+08:00", "1824"],
      ["36", "2021-12-28T21:38:58.3360000+08:00", "1950"],
      ["36", "2021-12-28T21:38:58.3360000+08:00", "1A7C"],
      ["36", "2021-12-28T21:39:00.3410000+08:00", "1B58"],
      ["36", "2021-12-28T21:39:03.3690000+08:00", "1C34"],
      ["36", "2021-12-28T21:39:04.2630000+08:00", "1D60"],
      ["36", "2021-12-28T21:39:06.3600000+08:00", "1E3C"],
    ],
    2
  );

function handleClear() {
  LBextraAll = 0;
  show.innerHTML = "0%";
  extra.innerHTML = "";
  extraAll.innerText = "0%";
}

export function handleLogLine(e) {
  if (e.line[0] === "36") {
    LBNow = parseInt(e.line[2], 16) / LBMax;
    let LBAdd = LBNow - LBBefore;
    show.innerHTML = `${(LBNow * 100).toFixed(2)}%`;
    if (LBAdd > LBAutomaticBaseline) {
      LBAddUp += LBAdd;
      LBextraAll += LBAdd;
      extraAll.innerText = `${(LBextraAll * 100).toFixed(0)}%`;
      let value = (LBAddUp * 100).toFixed(0);
      let continuousIncrease = parseInt(extra.lastChild?.innerText) === value - 1;
      if (continuousIncrease) {
        extra.lastChild.innerText = `+${value}%`;
      } else {
        let addValue = document.createElement("p");
        addValue.innerText = `+${value}%`;
        addValue.classList.add("anime");
        addValue.setAttribute("data-time", new Date().toTimeString().substring(0, 8));
        extra.appendChild(addValue);
      }
    } else {
      LBAddUp = 0;
    }
    LBBefore = LBNow;
    if (LBAdd < -0.1) handleClear();
  }
}
