let params = new URLSearchParams(new URL(window.location).search);
export default (() =>
  setTimeout(() => {
    if (!window.OverlayPluginApi && params.get("OVERLAY_WS") === null && params.get("HOST_PORT") === null) {
      let header = document.createElement("header");
      document.body.appendChild(header);
      header.style.position = "absolute";
      header.style.top = 0;
      header.style.fontFamily = "微软雅黑";
      header.style.fontSize = "16px";
      header.style.color = "white";
      header.style.textShadow = `black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px`;
      let timeCD = 30;
      let timer = setInterval(() => {
        header.innerText = `请在ACT悬浮窗中添加此页面。（${timeCD--}秒后消失）`;
        if (timeCD <= -1) {
          clearInterval(timer);
          header.remove();
        }
      }, 1000);
    }
  }, 1000))();
