const s = document.getElementById("s");
let i = 3;
setInterval(() => {
  s.innerHTML = --i;
}, 1000);
setTimeout(() => {
  location.href = "https://souma.diemoe.net/ff14-overlay-vue/#/";
}, 3000);
