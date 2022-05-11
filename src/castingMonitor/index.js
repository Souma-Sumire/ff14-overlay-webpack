"use strict";
import "../../resources/function/loadOverlayPluginCommon.js";
import { getAction } from "../../resources/data/actions.js";
import { getJobByID } from "../../resources/data/job";
import { logProcessing } from "../../resources/function/logProcessing.js";
import { getItem } from "../../resources/data/item.js";
import "../../resources/function/xianyu.js";
import "../../resources/function/loadComplete.js";
import "./index.scss";
import "../../resources/function/isOverlayPlugin.js";

const aside = document.querySelector("aside");
const header = document.querySelector("header");
let targetID, playerID, timer;

let params = new URLSearchParams(new URL(window.location).search);
let durationTime = parseInt(params.get("duration") ?? "35");
document.body.style.backgroundColor = `rgba(5,5,5,${params.get("bgOpacity") ?? 0.25})`;
addOverlayListener("ChangePrimaryPlayer", (e) => {
  playerID = e?.charID?.toString(16)?.toUpperCase();
  targetID = playerID?.toString();
});
addOverlayListener("PartyChanged", (e) => {
  document.body.style.display = "block";
  header.innerHTML = "";
  targetID = playerID?.toString();
  if (e.party.length > 0) {
    for (const p of e.party) {
      if (!p.inParty) break;
      const member = document.createElement("article");
      member.innerText = getJobByID(p.job)?.simple2 ?? "??";
      member.setAttribute("data-id", p.id);
      member.title = p.name;
      member.addEventListener("click", function () {
        clearCasting();
        if (targetID === this.getAttribute("data-id")) {
          document.querySelectorAll("header>article").forEach((dom) => {
            dom.classList.remove("selecting");
            if (dom.innerText === "YOU") dom.classList.add("selecting");
          });
          targetID = playerID?.toString();
        } else {
          document.querySelectorAll("header>article").forEach((dom) => dom.classList.remove("selecting"));
          this.classList.add("selecting");
          targetID = this.getAttribute("data-id");
        }
      });
      if (p.id === playerID) {
        member.innerText = "YOU";
        member.classList.add("selecting");
        targetID = p.id;
      }
      header.appendChild(member);
    }
  }
});
addOverlayListener("LogLine", (e) => {
  if (e.line[0] === "20" || e.line[0] === "21" || (e.line[0] === "22" && e.line[45] === "0")) {
    let l = logProcessing(e.line, "action");
    if (l.casterID === targetID) {
      let action = getAction(parseInt(l.actionID, 16));
      if (action.ActionCategory !== 1) {
        let section = document.createElement("section");
        section.setAttribute("data-action-name", l.actionName);
        const img = new Image();
        const itemReg = /^item_(.+)$/;
        if (itemReg.test(l?.actionName)) {
          const item = getItem(parseInt(l.actionName.match(itemReg)[1], 16));
          img.src = `https://cafemaker.wakingsands.com/i/${item?.Url ?? "000000/000405"}.png`;
        } else {
          img.src = `https://cafemaker.wakingsands.com/i/${action?.Url ?? "000000/000405"}.png`;
        }
        if (e.line[0] === "20") {
          section.classList.add("casting");
        } else {
          clearCasting();
          if (action.ActionCategory === 4) {
            section.classList.add("oGCD");
          }
        }
        section.appendChild(img);
        section.style.animationDuration = durationTime + "s";
        section.classList.add("icon");
        {
          //俄罗斯方块部分
          if (params.get("tetris") === "true" && e.line[0] !== "20") {
            let tetrisImg = new Image();
            tetrisImg.src = img.src;
            let tetrisDiv = document.createElement("div");
            tetrisDiv.appendChild(tetrisImg);
            aside.appendChild(tetrisDiv);
            tetrisDiv.classList.add("icon");
            if (action.ActionCategory === 4) tetrisDiv.classList.add("oGCD");
            if (aside.clientHeight > (1 + tetrisDiv.clientHeight) * 2) aside.firstChild?.remove();
          }
        }
        document.querySelector("main").appendChild(section);
        document.body.style.display = "block";
        clearTimeout(timer);
        if (params.get("autoHideTime") !== "0") autoHide();
        setTimeout(() => {
          section.remove();
        }, durationTime * 1500);
      }
    }
  } else if (e.line[0] === "23" && e.line[2] === targetID) {
    clearCasting();
  }
});
startOverlayEvents();
autoHide();
function clearCasting() {
  document.querySelectorAll(".casting").forEach((value) => value?.remove());
}

function autoHide() {
  timer = setTimeout(() => {
    document.body.style.display = "none";
  }, Math.max(parseInt(params.get("autoHideTime")), 10000) || 30000);
}
