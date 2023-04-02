"use strict";

import "./index.scss";
import IMGkeigennRecord from "./images/keigennRecord.jpg";
import IMGkeySkillTimer from "./images/keySkillTimer.jpg";
import IMGteamWatch from "./images/teamWatch.jpg";
import IMGlimitBreakTip from "./images/limitBreakTip.gif";

const table = document.querySelector("table");
const list = {
  keigennRecord: {
    type: "ACT悬浮窗",
    describe: "减伤监控",
    img: IMGkeigennRecord,
    params:
      "?maxLength=800&24Mode=false&bgOpacity=0.45&bodyOpacity=1&fontSize=12px&th1=36px&th2=75px&th3=34px&th4=46px&imgHeight=20&mini=false&autoclean=false&showName=false&abbreviationID=true",
  },
  keySkillTimer: {
    type: "ACT悬浮窗",
    describe: "团辅监控",
    img: IMGkeySkillTimer,
    params: "?international=false&dajinengTTS=true&jianshangTTS=true&tuanfuTTS=true",
  },
  teamWatch: {
    type: "ACT悬浮窗",
    describe: "技能监控",
    img: IMGteamWatch,
    params: "?scale=1&reverse=false&rightAlign=false&postNamazu=false",
  },
  limitBreakTip: {
    type: "ACT悬浮窗",
    describe: "LB额外增长监控",
    img: IMGlimitBreakTip,
    params: "?LBMax=30000&automatic=220",
  },
};
for (const key in list) {
  const project = list[key];
  let tr = document.createElement("tr");
  let tdText = document.createElement("td");
  let tdImg = document.createElement("td");
  let td3A = document.createElement("a");
  td3A.href = `./${key}.html${project.params}`;
  td3A.innerText = project.describe;
  let td4Img = new Image();
  td4Img.src = project.img;
  tdImg.appendChild(td4Img);
  tr.appendChild(tdText);
  tdText.appendChild(td3A);
  tr.appendChild(tdImg);
  table.appendChild(tr);
}
