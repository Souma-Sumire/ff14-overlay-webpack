import { sortParty } from "../../resources/function/sortParty";
import { sortRule as jobSortRule } from "../../resources/data/sortRule";
import { getJobByID } from "../../resources/data/job";
import "./index.scss";
import { testLogLine } from "../../resources/function/testLogLine";
import "../../resources/function/isOverlayPlugin";
import "../../resources/function/loadOverlayPluginCommon.js";
const markingSortRule = [
  "20",
  "22",
  "30",
  "34",
  "39",
  "23",
  "31",
  "38",
  "25",
  "27",
  "35",
  "36",
  "37",
  "32",
  "21",
  "19",
  "40",
  "33",
  "28",
  "24",
];
const fakeParty = [
  { id: "10000001", name: "测试张三", job: 24, inParty: true },
  { id: "10000002", name: "测试李四", job: 25, inParty: true },
  { id: "10000004", name: "测试王五", job: 19, inParty: true },
  { id: "10000005", name: "测试赵六", job: 23, inParty: true },
  { id: "10000006", name: "测试孙七", job: 39, inParty: true },
  { id: "10000007", name: "测试周八", job: 40, inParty: true },
  { id: "10000008", name: "测试吴九", job: 37, inParty: true },
  { id: "10000009", name: "测试郑十", job: 38, inParty: true },
];
let connecting = false;
let playerID = "";
let party = [];
let params = new URLSearchParams(new URL(window.location).search);
let markingList = [];
let timer = 0;
const jobSortRuleUsed = params.get("jobSortRule")?.split(",") ?? jobSortRule;
const markingSortRuleUsed = params.get("markingSortRule")?.split(",") ?? markingSortRule;
const postNamazuPort = params.get("postNamazuPort") ?? "2019";
const postNamazuHttpUrl = `http://127.0.0.1:${postNamazuPort}/command`;
const header = document.querySelector("header");
const main = document.querySelector("main");
const footer = document.querySelector("footer");
const LogEnum = {
  MESSAGE: "信息",
  POSTNAMAZU: "邮差",
  ERROR: "错误",
  WARN: "警告",
};

addOverlayListener("ChangePrimaryPlayer", (e) => handleChangePrimaryPlayer(e));

addOverlayListener("LogLine", (e) => handleLogLine(e));

addOverlayListener("PartyChanged", (e) => handlePartyChanged(e.party));

startOverlayEvents();

init();

function init() {
  if (window.OverlayPluginApi) {
    header.innerHTML = `
  <p>小队排序：</p>
  ${jobSortRuleUsed.map((value) => {
    let job = getJobByID(value);
    return `<span class="${job.Role}">${job.simple2}<aside class="tip-job">${value}</aside></span>`;
  })}
  <p>标记排序：</p>
  ${markingSortRuleUsed.map((value) => {
    let job = getJobByID(value);
    return `<span class="${job.Role}">${job.simple2}<aside class="tip-job">${value}</aside></span>`;
  })}
    <p>当前端口：</p>
    <span>${postNamazuPort}</span>`;

    postNamazuConnectingTest();

    function postNamazuConnectingTest() {
      postNamazuCommand(
        "/e 连通性测试。",
        () => {
          log("连接成功", LogEnum.MESSAGE);
          connecting = true;
        },
        () => {
          log(`Error:通信失败！`, LogEnum.ERROR);
          connecting = false;
        }
      );
    }

    let reloadBtn = document.createElement("button");
    reloadBtn.innerText = "刷新页面";
    reloadBtn.addEventListener("click", () => location.reload());
    document.body.appendChild(reloadBtn);

    let testBtn = document.createElement("button");
    testBtn.innerText = "单人测试";
    testBtn.addEventListener("click", handleTest);
    document.body.appendChild(testBtn);

    let testRealPartyBtn = document.createElement("button");
    testRealPartyBtn.innerText = "小队测试";
    testRealPartyBtn.addEventListener("click", testRealParty);
    document.body.appendChild(testRealPartyBtn);
  } else {
    document.body.innerHTML = "请在ACT悬浮窗中添加此页面，而不是浏览器直接访问。";
  }
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

function postNamazuCommand(
  str,
  then = () => {},
  error = () => {
    log(`Error:通信失败！`, LogEnum.ERROR);
  }
) {
  if (/^[^/]/.test(str)) str = "/e " + str;
  fetch(postNamazuHttpUrl, {
    method: "POST",
    body: str,
    mode: "no-cors",
  })
    .then(then)
    .catch(error);
  log(`${str}`, LogEnum.POSTNAMAZU);
}

function log(str, type = LogEnum.MESSAGE) {
  let log = document.createElement("p");
  log.classList.add(Object.keys(LogEnum).find((k) => LogEnum[k] === type));
  log.innerText = `[${dateFormat("HH:MM:SS", new Date())}] [${type}] ${str}`;
  footer.appendChild(log);
  window.scrollTo(0, document.documentElement.clientHeight); //js
}

function handleChangePrimaryPlayer(e) {
  playerID = e.charID.toString(16).toUpperCase();
}

function handlePartyChanged(p, timeout = 1000) {
  if (timeout > 0) {
    setTimeout(() => {
      changeParty();
    }, timeout);
  } else {
    changeParty();
  }

  function changeParty() {
    party = p.filter((p) => p.inParty);
    if (party.length > 0) {
      party = sortParty(party, playerID, jobSortRuleUsed);
      main.innerHTML = `
    <p>当前小队：</p>
    <ul>
    ${party
      .map((value) => {
        let job = getJobByID(value.job);
        return `<li class="${job.Role}">${job.simple2} ${value.id} ${value.name}</li>`;
      })
      .join("")}
      </ul>
      `;
    }
  }
}

function handleLogLine(e) {
  if (e.line[0] === "21" && /2B6[BC]/i.test(e.line[4]) && /^1/.test(e.line[6])) {
    let index = party.findIndex((value) => value.id === e.line[6]);
    log(`石牢：${e.line[7]}`, LogEnum.MESSAGE);
    markingAttack({ id: e.line[6], name: e.line[7], job: party[index].job, partyIndex: index });
  }
}

function markingAttack(index) {
  markingList.push(index);
  if (markingList.length === 3) {
    log("三连桶！", LogEnum.MESSAGE);
    log("开始排序：" + markingList.map((v) => getJobByID(v.job).simple2), LogEnum.MESSAGE);
    markingList.sort((a, b) => {
      let ai = markingSortRuleUsed.findIndex((k) => k === a.job.toString());
      let bi = markingSortRuleUsed.findIndex((k) => k === b.job.toString());
      return ai - bi;
    });
    log("排序结果：" + markingList.map((v) => getJobByID(v.job).simple2), LogEnum.MESSAGE);
    log("开始标记", LogEnum.MESSAGE);
    for (let i = 0; i < markingList.length; i++) {
      const member = markingList[i];
      postNamazuCommand(`/marking attack${i + 1} <${member.partyIndex + 1}>`);
    }
    log("标记结束", LogEnum.MESSAGE);
    markingList = [];
  } else {
    clearTimeout(timer);
    timer = setTimeout(() => {
      markingList = [];
      log("清理", LogEnum.MESSAGE);
    }, 3000);
  }
}

function handleTest() {
  if (!connecting) {
    log("请先连通邮差，且启动游戏并成功注入，然后刷新页面。", LogEnum.WARN);
    return;
  }
  log("开始测试，覆写数据...", LogEnum.MESSAGE);
  handlePartyChanged(fakeParty, 0);
  log("覆写小队列表...成功！", LogEnum.MESSAGE);
  playerID = fakeParty[4].id;
  log("覆写玩家ID为:" + playerID + fakeParty[4].name + "...成功！", LogEnum.MESSAGE);
  testLogLine(
    handleLogLine,
    [
      `21|2021-12-31T16:15:16.0680000+08:00|40000B9E|タイタン|2B6C|グラナイト・ジェイル|10000008|测试吴九|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|13264|18160|10000|10000|||106.95|86.11|0.00|0.21|739195|1408008|0|10000|||80.63|100.00|0.00|1.57|00002514|0|1|1808c5be7165787a`.split(
        "|"
      ),
      `21|2021-12-31T16:15:16.0680000+08:00|40000B9D|タイタン|2B6C|グラナイト・ジェイル|10000005|测试赵六|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|11966|16695|9868|10000|||104.54|85.77|0.00|-2.21|739195|1408008|0|10000|||100.00|80.63|0.00|0.00|00002515|0|1|d8995ddfa6b74847`.split(
        "|"
      ),
      `21|2021-12-31T16:15:16.0680000+08:00|40000BA3|タイタン|2B6B|グラナイト・ジェイル|10000001|测试张三|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|21146|23492|9600|10000|||103.38|86.90|0.00|-0.13|961673|1449210|10000|10000|||100.00|114.00|0.00|-3.14|00002516|0|1|61b5b567481f24af`.split(
        "|"
      ),
    ],
    1
  );
  setTimeout(() => {
    log("测试结束，若小队成员显示为测试成员，请刷新页面！", LogEnum.WARN);
  }, 1000);
}

function testRealParty() {
  if (!connecting) {
    log("请先连通邮差，且启动游戏并成功注入，然后刷新页面。", LogEnum.WARN);
    return;
  }
  log("开始测试，覆写数据...", LogEnum.MESSAGE);
  log("当前小队人数：" + party.length, LogEnum.MESSAGE);
  if (party.length < 3) {
    log("小队人员未超过3人，将会覆写伪造数据进行测试...", LogEnum.WARN);
    handlePartyChanged(fakeParty, 0);
    log("覆写小队列表...成功！", LogEnum.MESSAGE);
    playerID = fakeParty[4].id;
    log("覆写玩家ID为:" + playerID + fakeParty[4].name + "...成功！", LogEnum.MESSAGE);
  }
  log("随机选出3位幸运队员...", LogEnum.MESSAGE);
  let randomList = new Set();
  while (randomList.size < 3 && party.length > 0) {
    let num = Math.floor(Math.random() * party.length);
    if (!randomList.has(num)) randomList.add(num);
  }
  randomList = Array.from(randomList);
  log("生成3个随机数：" + randomList, LogEnum.MESSAGE);
  log("生成假日志...", LogEnum.MESSAGE);
  for (const i of randomList) {
    testLogLine(handleLogLine, [`21|0|40000000|タイタン|2B6C|グラナイト・ジェイル|${party[i].id}|${party[i].name}|`.split("|")], 1);
  }
  log("测试结束，若小队成员显示为测试成员，请刷新页面！", LogEnum.WARN);
}
