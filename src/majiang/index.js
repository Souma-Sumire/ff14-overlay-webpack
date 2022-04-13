import { TTS } from "../../resources/function/TTS";
import "./index.scss";
import "../../resources/function/loadComplete";
import "../../resources/function/isOverlayPlugin";

let playerID = "";
let party = [];
let markingList = new Set();
let timer;
const main = document.querySelector("main");

addOverlayListener("ChangePrimaryPlayer", (e) => handleChangePrimaryPlayer(e));
addOverlayListener("LogLine", (e) => handleLogLine(e));
addOverlayListener("PartyChanged", (e) => handlePartyChanged(e.party));
startOverlayEvents();

function handleChangePrimaryPlayer(e) {
  playerID = e.charID.toString(16).toUpperCase();
}

function handlePartyChanged(p) {
  party = p.filter((p) => p.inParty);
}

function handleLogLine(e) {
  if (e.line[0] === "27") {
    if (party.findIndex((p) => p.id === e.line[2]) !== -1) {
      markingAttack({ id: e.line[2], name: e.line[3], icon: e.line[6] });
    }
  }
}

function markingAttack(str) {
  markingList.add(str);
  if (markingList.size === party.length) {
    let markingListArr = Array.from(markingList);
    let check = markingListArr.reduce((pre, cur) => {
      pre.add(cur.icon);
      return pre;
    }, new Set());
    if (check.size <= markingList.size / 2) return;
    markingListArr.sort((a, b) => parseInt(a.icon, 16) - parseInt(b.icon, 16));
    main.innerHTML = markingListArr
      .map((element, index) => {
        if (element.id === playerID) {
          let i = index + 1;
          TTS(`${i}号${i}号`);
          return `${i}号${i > 4 ? `（${i - 4}）` : ""}`;
        }
      })
      .join("");

    clearTimeout(timer);
    markingList.clear();
  }
  clearTimeout(timer);
  timer = setTimeout(() => {
    markingList.clear();
    main.innerHTML = "";
  }, 10000);
}

function test() {
  playerID = `10000006`;
  party = [
    { id: "10000001", name: "测试1号", job: 24, inParty: true },
    { id: "10000002", name: "测试2号", job: 25, inParty: true },
    { id: "10000003", name: "测试3号", job: 19, inParty: true },
    { id: "10000004", name: "测试4号", job: 23, inParty: true },
    { id: "10000005", name: "测试5号", job: 39, inParty: true },
    { id: "10000006", name: "测试6号", job: 40, inParty: true },
    { id: "10000007", name: "测试7号", job: 37, inParty: true },
    { id: "10000008", name: "测试8号", job: 38, inParty: true },
  ];
  let log = [
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000005|测试5号|0000|0000|0146|0000|0000|0000|58c4dff36df8b683`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000008|测试8号|0000|0000|0147|0000|0000|0000|e78e1391a822c967`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000001|测试1号|0000|0000|0148|0000|0000|0000|92d8d6f7caecf7c1`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000003|测试3号|0000|0000|0149|0000|0000|0000|72e008c236b77c93`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000006|测试6号|0000|0000|014A|0000|0000|0000|d253dae2146fb97f`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000007|测试7号|0000|0000|014B|0000|0000|0000|592e96bed0f29d5d`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000002|测试2号|0000|0000|014C|0000|0000|0000|bc21c310bb335fef`.split("|") },
    { line: `27|2022-01-05T23:21:03.1950000+08:00|10000004|测试4号|0000|0000|014D|0000|0000|0000|33f5b43a446e3846`.split("|") },
  ];
  for (const iterator of log) {
    handleLogLine(iterator);
  }
}

// test();
