"use strict";

import { actions, getAction } from "../../resources/data/actions.js";
import { baseClass } from "../../resources/data/baseClass.js";
import { getJobByID } from "../../resources/data/job.js";
import { compareSame } from "../../resources/function/compareSameGroup.js";
import { loadItem, saveItem } from "../../resources/function/localStorage.js";
import { watchJobsActionsID } from "./default.js";
import { sortRule } from "../../resources/data/sortRule.js";
import "./settings.scss";

let params = new URLSearchParams(new URL(window.location).search);
document.querySelector("#loading").remove();
let namespace = "TeamWatch4";
const load = (t, a = undefined) => loadItem(namespace, t, a);
const save = (t, a) => saveItem(namespace, t, a);
const main = document.querySelector("main");
const resetButton = document.createElement("button");
const editDiv = document.querySelector("#editDiv");

resetButton.innerText = "清除用户数据";
resetButton.addEventListener("click", function () {
  if (confirm("清除技能设定吗？")) {
    save("watchJobsActionsIDUser", watchJobsActionsID);
  }
  if (confirm("清除职业排序吗？")) {
    save("sortRuleUser", sortRule);
  }
  location.reload();
});
const p = document.createElement("p");
p.innerText = "下方顺序需要与游戏内的职能排序保持一致。";

let saveButton = document.createElement("button");
saveButton.innerText = "保存设置";
saveButton.addEventListener("click", saveSettings);

main.appendChild(p);
main.appendChild(resetButton);
main.appendChild(saveButton);

const role = {
  3: "tank", //斧术师
  19: "tank", //骑士
  21: "tank", //战士
  32: "tank", //暗黑骑士
  37: "tank", //绝枪战士
  6: "healer", //幻术师
  24: "healer", //白魔法师
  28: "healer", //学者
  33: "healer", //占星术士
  40: "healer", //贤者
  1: "dps", //剑术师
  2: "dps", //格斗家
  4: "dps", //枪术士
  5: "dps", //弓箭手
  7: "dps", //咒术师
  20: "dps", //武僧
  22: "dps", //龙骑士
  23: "dps", //吟游诗人
  25: "dps", //黑魔法师
  26: "dps", //秘术师
  27: "dps", //召唤师
  29: "dps", //双剑师
  30: "dps", //忍者
  31: "dps", //机工士
  34: "dps", //武士
  35: "dps", //赤魔法师
  36: "dps", //青魔法师
  38: "dps", //舞者
  39: "dps", //钐镰
};
const allJob = [1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40];
const sortRuleUser = load("sortRuleUser", undefined) ?? sortRule;
let sortRuleShow = allJob.sort(
  (a, b) => sortRuleUser.indexOf((baseClass[a] ?? a).toString()) - sortRuleUser.indexOf((baseClass[b] ?? b).toString())
);
let watchJobsActionsIDShow = load("watchJobsActionsIDUser") ?? watchJobsActionsID;

function loadAction(watchJobsActionsIDShow) {
  document.querySelector("#sortRuleDiv")?.remove();
  const sortRuleDiv = document.createElement("table");
  sortRuleDiv.id = "sortRuleDiv";
  for (const jobID of sortRuleShow) {
    let tr = document.createElement("tr");
    const jobInfo = getJobByID(jobID);
    tr.setAttribute("data-job-name", jobInfo.jp);
    let name = document.createElement("article");
    name.classList.add(jobInfo?.en);
    name.classList.add("job");
    name.classList.add(role[jobID] ?? "");
    let nameCN = document.createElement("aside");
    let nameEN = document.createElement("aside");
    nameCN.innerText = jobInfo?.cn ?? "?";
    nameEN.innerText = `${jobID}-${jobInfo?.en ?? "?"}`;
    name.appendChild(nameCN);
    name.appendChild(nameEN);
    tr.appendChild(name);
    tr.id = `${jobID}`;
    sortRuleDiv.appendChild(tr);
    let dragArea = document.createElement("td");
    let dragUp = document.createElement("div");
    let dragDown = document.createElement("div");
    dragUp.classList.add("dragElement");
    dragDown.classList.add("dragElement");
    dragUp.innerText = "∧";
    dragDown.innerText = "∨";
    dragArea.appendChild(dragUp);
    dragArea.appendChild(dragDown);
    dragArea.classList.add("dragArea");
    tr.appendChild(dragArea);
    if (!baseClass[jobID]) {
      dragUp.addEventListener("click", function () {
        const index = Array.prototype.indexOf.call(sortRuleDiv.childNodes, tr);
        if (index > 0) sortRuleDiv.insertBefore(tr, tr.previousElementSibling);
      });
      dragDown.addEventListener("click", function () {
        const index = Array.prototype.indexOf.call(sortRuleDiv.childNodes, tr);
        if (index < sortRuleShow.length - 1) sortRuleDiv.insertBefore(tr, tr.nextElementSibling.nextElementSibling);
      });
    } else {
      dragArea.style.opacity = "0";
    }

    for (const watchJobActionsID of watchJobsActionsIDShow?.[jobID] ?? {}) {
      tr.appendChild(newTD(watchJobActionsID));
    }
    let addDom = document.createElement("aside");
    let addButton = document.createElement("button");
    addButton.innerText = "+";
    addDom.appendChild(addButton);
    tr.appendChild(addDom);
    addButton.addEventListener("click", function () {
      tr.insertBefore(newTD(0), this.parentNode);
    });
  }
  main.appendChild(sortRuleDiv);
}
loadAction(watchJobsActionsIDShow);
function newTD(id) {
  let td = document.createElement("td");
  const action = getAction(id);
  let skillName = document.createElement("article");
  skillName.innerText = action?.Name;
  td.appendChild(skillName);
  let icon = document.createElement("aside");
  let img = new Image();
  // cafeOrXiavpiUrl(action?.Url, img);
  img.src = `https://souma.diemoe.net/resources/icon/${action?.Url ?? "000000/000405"}.png`;
  img.classList.add("icon");
  icon.appendChild(img);
  td.appendChild(icon);
  td.setAttribute("data-action-id", id);
  td.addEventListener("click", function () {
    if (!/opacity/.test(main.className)) editWatch(this, td);
  });
  return td;
}

function saveSettings() {
  let toSaveSortRuleUser = [];
  sortRuleDiv.childNodes.forEach((v) => {
    toSaveSortRuleUser.push(v.id);
  });

  let toSaveWatchJobsActionsID = [].reduce.call(
    sortRuleDiv.childNodes,
    (pre, value) => {
      pre[value.id] = [].reduce.call(
        [].slice.call(value.querySelectorAll("td:not(.dragArea)"), 0),
        (arr, td) => {
          arr.push(parseInt(td.getAttribute("data-action-id")));
          return arr;
        },
        []
      );
      return pre;
    },
    {}
  );
  try {
    save("sortRuleUser", toSaveSortRuleUser);
    save("watchJobsActionsIDUser", toSaveWatchJobsActionsID);
    alert("已保存!");
    window.opener?.location?.reload();
  } catch (e) {
    alert("保存失败" + e);
  }
  location.reload();
}
function editWatch(dom, td) {
  const tdList = Array.from(td.parentElement.querySelectorAll("td"))?.reduce((pre, value) => {
    const id = value?.getAttribute("data-action-id");
    if (id) pre?.push(id);
    return pre;
  }, []);
  main.classList.add("opacity");
  editDiv.classList.remove("hide");
  editDiv.innerHTML = "";
  let ul = document.createElement("ul");
  let editID = document.createElement("li");
  let editName = document.createElement("li");
  let editIcon = document.createElement("li");
  ul.appendChild(editID);
  ul.appendChild(editName);
  ul.appendChild(editIcon);
  let deleteButton = document.createElement("button");
  deleteButton.innerText = "删除";
  editDiv.appendChild(deleteButton);
  deleteButton.addEventListener("click", function () {
    if (confirm("确定要删除吗？")) {
      dom.remove();
      closeEditDiv();
    }
  });
  editID.innerText =
    "技能ID：" + dom.getAttribute("data-action-id") + " (" + parseInt(dom.getAttribute("data-action-id")).toString(16).toUpperCase() + ")";
  editName.innerText = "技能名称：" + dom.querySelector("article").innerText;
  editIcon.appendChild(dom.querySelector("img").cloneNode(true));
  editDiv.appendChild(ul);

  let closeButton = document.createElement("button");
  closeButton.innerText = "X";
  closeButton.id = "closeButton";
  closeButton.addEventListener("click", closeEditDiv);
  editDiv.appendChild(closeButton);

  let candidateDiv = document.createElement("div");
  candidateDiv.classList.add("candidate");
  editDiv.appendChild(candidateDiv);

  for (const id in actions) {
    const action = getAction(id);
    if (
      ((action.ClassJobCategory.indexOf(dom?.parentNode?.getAttribute("data-job-name")) > -1 &&
        action.ClassJobLevel > 0 &&
        compareSame(id) === id &&
        (action.Recast100ms >= 100 || params.get("ignoreRecast") === "true")) ||
        id === "0") &&
      !tdList?.some((value) => value === id)
    ) {
      action.Name = action.Name;
      let actionDom = document.createElement("div");
      for (const key in action) {
        actionDom.setAttribute(`data-action-${key}`, action[key]);
      }
      let actionNameDom = document.createElement("article");
      actionNameDom.innerText = `${action.Name}\n${action.ID} (${parseInt(action.ID).toString(16).toUpperCase()})`;
      let actionIconDom = document.createElement("aside");
      let actionIconImg = new Image();
      actionIconImg.src = `https://souma.diemoe.net/resources/icon/${action?.Url ?? "000000/000405"}.png`;
      actionIconDom.appendChild(actionIconImg);
      let actionRecast100ms = document.createElement("footer");
      actionRecast100ms.innerText = action.Recast100ms / 10 + "S";
      actionDom.appendChild(actionNameDom);
      actionDom.appendChild(actionIconDom);
      actionDom.appendChild(actionRecast100ms);
      candidateDiv.appendChild(actionDom);
      actionDom.addEventListener("click", function () {
        const newID = this.getAttribute("data-action-id");
        const newName = this.getAttribute("data-action-name");
        const newImg = this.querySelector("aside>img").getAttribute("src");
        dom.setAttribute("data-action-id", newID);
        dom.querySelector("article").innerText = newName;
        dom.querySelector("aside>img").src = newImg;
        closeEditDiv();
      });
    }
  }
}
function closeEditDiv() {
  main.classList.remove("opacity");
  editDiv.classList.add("hide");
  editDiv.innerHTML = "";
}
document.body.addEventListener("keyup", (e) => {
  if (e.key === "Escape") closeEditDiv();
});

const share = document.querySelector("#share");
let exp = document.createElement("button");
exp.addEventListener("click", () => {
  let toSaveSortRuleUser = [];
  sortRuleDiv.childNodes.forEach((v) => {
    toSaveSortRuleUser.push(v.id);
  });
  let toSaveWatchJobsActionsID = [].reduce.call(
    sortRuleDiv.childNodes,
    (pre, value) => {
      pre[value.id] = [].reduce.call(
        [].slice.call(value.querySelectorAll("td:not(.dragArea)"), 0),
        (arr, td) => {
          arr.push(parseInt(td.getAttribute("data-action-id")));
          return arr;
        },
        []
      );
      return pre;
    },
    {}
  );
  try {
    share.value = window.btoa(JSON.stringify(toSaveWatchJobsActionsID));
  } catch (e) {
    alert(e);
  }
});
exp.innerText = "导出";
document.body.appendChild(exp);
let imp = document.createElement("button");
imp.addEventListener("click", () => {
  try {
    loadAction(JSON.parse(window.atob(share.value)));
    alert("导入成功！记得保存。");
  } catch (e) {
    alert(e);
  }
});
imp.innerText = "导入";
document.body.appendChild(imp);
