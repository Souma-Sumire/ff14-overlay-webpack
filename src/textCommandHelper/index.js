"use strict";
import "./index.scss";
const postNamazuPost = new URLSearchParams(new URL(window.location).search).get("postNamazuPost") ?? "2019";
localStorage.setItem("textCommandHelperPostNamazuPost", postNamazuPost);
document.querySelector("button").addEventListener("click", (e) => {
  window.open(
    "./textCommandHelperOpen.html" + "?postNamazuPost=" + postNamazuPost,
    "_blank",
    `width=240,height=200,left=${e.screenX - 240},top=${e.screenY - 200}`
  );
});
if (!window.OverlayPluginApi) {
  document.body.append("请将当前页面链接填入ACT悬浮窗中，或点击左侧按钮，直接在浏览器中使用弹出的页面链接");
}
