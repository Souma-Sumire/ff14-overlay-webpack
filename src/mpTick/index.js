"use strict";

import "./index.scss";
import "../../resources/function/loadComplete";
import "../../resources/function/isOverlayPlugin";
import "../../resources/function/loadOverlayPluginCommon.js";
const tick = document.querySelector("main");
let playerID;

function anime() {
  tick.classList.remove("anime");
  window.requestAnimationFrame(() => window.requestAnimationFrame(() => tick.classList.add("anime")));
}
addOverlayListener("ChangePrimaryPlayer", (e) => (playerID = e.charID.toString(16).toUpperCase()));
addOverlayListener("LogLine", (e) => (e.line[0] === "39" && e.line[2] === playerID && e.line[6] === e.line[7] ? anime() : ""));
startOverlayEvents();
