let xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.github.com/repos/RPGLogs/Uploaders-fflogs/releases/latest", false);
xmlhttp.send();
result = "[" + xmlhttp.responseText + "]";
let jsonObj = eval("(" + result + ")");

window.onload = function () {
  document.getElementById("p1").innerText = "最新版本：" + jsonObj[0]["tag_name"];
  document.getElementById("p2").innerText = "日期时间：" + jsonObj[0]["published_at"];
  document.getElementById("btn1").innerText = "开始下载";
  document.getElementById("btn1").addEventListener("click", () => download());
};

function download() {
  let assetsIndex = document.getElementById("selectAssets").value;
  let proxyUrl = document.getElementById("selectProxy").value;
  let originalUrl = jsonObj[0]["assets"][assetsIndex]["browser_download_url"];
  let newUrl = originalUrl.replace(/^https:\/\/github\.com/gi, proxyUrl);
  let iframe = document.createElement("iframe");
  document.body.appendChild(iframe);
  iframe.style.display = "none";
  iframe.src = newUrl;
  document.getElementById("btn1").innerText = "正在处理...";
  let text = document.createElement("div");
  let time = 30;
  let timer;
  function cd() {
    text.innerText = "若" + time-- + "秒内未弹出下载请更换加速源重试……";
    if (time < 0) {
      iframe.remove();
      text.remove();
      document.getElementById("btn1").innerText = "开始下载";
      clearInterval(timer);
    }
  }
  cd();
  timer = setInterval(() => {
    cd();
  }, 1000);

  document.body.appendChild(text);
}
