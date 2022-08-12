const xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", "https://api.github.com/repos/RPGLogs/Uploaders-fflogs/releases/latest", false);
xmlhttp.send();
const jsonObj = eval("(" + "[" + xmlhttp.responseText + "]" + ")");
window.onload = function () {
  document.getElementById("p1").innerText = "最新版本号：" + jsonObj[0]["tag_name"];
  document.getElementById("p2").innerText = "版本时间：" + jsonObj[0]["published_at"];
  const h5 = document.createElement("h5");
  h5.innerText = "选择一个节点尝试下载：";
  document.body.appendChild(h5);
  const art = document.createElement("article");
  [
    { url: "https://gh.gh2233.ml/https://github.com", title: "美国" },
    { url: "https://gh.ddlc.top/https://github.com", title: "美国" },
    { url: "https://gh2.yanqishui.work/https://github.com", title: "美国" },
    { url: "https://gh-proxy-misakano7545.koyeb.app/https://github.com", title: "美国" },
    { url: "https://gh.flyinbug.top/gh/https://github.com", title: "美国" },
    { url: "https://github.91chi.fun/https://github.com", title: "美国" },
    { url: "https://proxy.zyun.vip/https://github.com", title: "美国" },
    { url: "https://git.xfj0.cn/https://github.com", title: "美国" },
    { url: "https://gh.con.sh/https://github.com", title: "美国" },
    { url: "https://ghps.cc/https://github.com", title: "美国" },
    { url: "https://cors.isteed.cc/github.com", title: "美国" },
    { url: "https://cdn.githubjs.cf", title: "美国" },
    { url: "https://download.fastgit.org", title: "日本" },
    { url: "https://gitclone.com", title: "国内" },
    { url: "https://hub.fastgit.xyz", title: "日本" },
    { url: "https://ghproxy.com/https://github.com", title: "韩国" },
    { url: "https://gh.gcdn.mirr.one", title: "俄罗斯" },
  ].forEach((data, index) => {
    const a = document.createElement("a");
    a.title = data.title;
    a.href = `${data.url}/RPGLogs/Uploaders-fflogs/releases/download/v${jsonObj[0].name}/FF-Logs-Uploader-Setup-${jsonObj[0].name}.exe`;
    index++;
    if (index < 10) index = "0" + index;
    a.innerText = `下载节点${index}`;
    art.appendChild(a);
  });
  document.body.appendChild(art);
};
