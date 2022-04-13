/*
 * @Author: Souma
 * @LastEditTime: 2021-11-30 18:19:27
 */
"use strict";
const params = new URLSearchParams(new URL(window.location).search);
(function () {
  if (!!window?.OverlayPluginApi && window.localStorage.getItem(`${document.title}-Xianyu`) !== "true" && document.title !== "") {
    if (params.get("OVERLAY_WS") !== null || params.get("HOST_PORT") !== null) return;
    if (window.localStorage.getItem(`Souma-Xianyu`) === "true") return;
    let show = document.createElement("div");
    show.innerText = "本悬浮窗永久免费公开使用，若您是通过闲鱼购买，说明受骗！\n作者：猫小胖 海猫茶屋 Souma";
    let button = document.createElement("button");
    button.innerText = "不再显示";
    button.onclick = () => {
      show.remove();
      window.localStorage.setItem(`${document.title}-Xianyu`, "true");
      window.localStorage.setItem(`Souma-Xianyu`, "true");
    };
    show.appendChild(button);
    show.style.fontFamily = "'微软雅黑', 'Microsoft Yahei UI', Lato, Arial, Helvetica, sans-serif";
    show.style.borderRadius = "10px";
    show.style.color = "white";
    show.style.background = "rgba(55,155,55,0.8)";
    show.style.fontSize = "12px";
    show.style.position = "fixed";
    show.style.top = "0";
    show.style.margin = "0 auto";
    show.style.padding = "5px";
    show.style.zIndex = "20";
    document.body.append(show);
  }
})();
