"use strict";

import { textCommand } from "../../resources/data/textCommand";
import "./textCommandHelperOpen.scss";
(() => {
  const input = document.querySelector("#input");
  const list = document.querySelector("#list");
  const toCopy = document.querySelector("#toCopy");
  let params = new URLSearchParams(new URL(window.location).search);
  const postNamazuPort = params.get("postNamazuPort") ?? "2019";
  const postNamazuHttpUrl = `http://127.0.0.1:${postNamazuPort}/command`;

  input.addEventListener("keyup", handleInputKeyup, false);
  list.addEventListener("click", handleListClick, true);
  let historyUsed = localStorage.getItem("textCommandHelperHistoryUsed")?.split(",") ?? [];

  function handleInputKeyup() {
    filterCommand(this.value.replace(" ", ""));
  }

  function handleListClick(e) {
    const str = e.path.find((node) => node.nodeName === "LI")?.title;
    if (!str) return;
    if (postNamazuPort !== "false") {
      fetch(postNamazuHttpUrl, {
        method: "POST",
        body: str,
        mode: "no-cors",
      });
    }
    toCopy.value = str;
    toCopy.select();
    document.execCommand("copy");
    let hisStr = nodeToString(e.path.find((node) => node.nodeName === "LI"));
    if (historyUsed.indexOf(hisStr) === -1) historyUsed.push(hisStr);
    if (historyUsed.length > 3) historyUsed.shift();
    localStorage.setItem("textCommandHelperHistoryUsed", historyUsed);
    window.close();
  }

  function filterCommand(reg = "") {
    let res = [];
    let regex = new RegExp(["", ...reg, ""].join(".*"));
    for (const k in textCommand) {
      if (Object.hasOwnProperty.call(textCommand, k)) {
        const command = textCommand[k];
        if (regex.test(k + command)) {
          res.push({ en: k, cn: command });
        }
      }
    }
    list.innerHTML = "";
    if (reg === "") {
      list.innerHTML = historyUsed.join("");
      list.childNodes.forEach((value) => value.classList.add("his"));
    }
    list.innerHTML += res
      .map((value) => {
        return `<li title="${value.en}"><article>${value.cn}</article><aside>${value.en}</aside></li>`;
      })
      .join("");
  }

  function nodeToString(node) {
    var tmpNode = document.createElement("div");
    tmpNode.appendChild(node.cloneNode(true));
    var str = tmpNode.innerHTML;
    tmpNode = node = null; // prevent memory leaks in IE
    return str;
  }

  filterCommand();
})();
