let params = new URLSearchParams(new URL(window.location).search);
export default (() =>
  setTimeout(() => {
    if (!window.OverlayPluginApi && params.get("OVERLAY_WS") === null && params.get("HOST_PORT") === null) {
      let header = document.createElement("header");
      header.innerText =
        "找不到OverlayPluginApi或WS服务，请在ACT悬浮窗中添加此页面，而不是浏览器中。\n若在OBS中添加请启用OverlayPlugin WSServer并在OBS的浏览器链接后追加OVERLAY_WS参数";
      document.body.appendChild(header);
      header.style.position = "absolute";
      header.style.top = 0;
      header.style.fontFamily = "微软雅黑";
      header.style.fontSize = "16px";
      header.style.color = "white";
      header.style.textShadow = `black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px`;
    }
  }, 1000))();
