(()=>{var e={635:()=>{window.addOverlayListener||(console.log("common.min.js镜像文件访问失败，加载本地版本。"),function(){let e=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),n=null,t=[],r=0,o={},i={},a=null,s=!1;function l(e){if(i[e.type])for(let n of i[e.type])n(e)}e?(a=e=>{t?t.push(e):n.send(JSON.stringify(e))},function r(){n=new WebSocket(e[1]),n.addEventListener("error",(e=>{console.error(e)})),n.addEventListener("open",(()=>{console.log("Connected!");let e=t;t=null;for(let n of e)a(n)})),n.addEventListener("message",(e=>{try{e=JSON.parse(e.data)}catch(n){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&o[e.rseq]?(o[e.rseq](e),delete o[e.rseq]):l(e)})),n.addEventListener("close",(()=>{t=[],console.log("Trying to reconnect..."),setTimeout((()=>{r()}),300)}))}()):(a=(e,n)=>{t?t.push([e,n]):OverlayPluginApi.callHandler(JSON.stringify(e),n)},function e(){if(!window.OverlayPluginApi||!window.OverlayPluginApi.ready)return void setTimeout(e,300);let n=t;t=null,window.__OverlayCallback=l;for(let[e,t]of n)a(e,t)}()),window.dispatchOverlayEvent=l,window.addOverlayListener=(e,n)=>{s&&i[e]&&console.warn(`A new listener for ${e} has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().`),i[e]||(i[e]=[]),i[e].push(n)},window.removeOverlayListener=(e,n)=>{if(i[e]){let t=i[e],r=t.indexOf(n);r>-1&&t.splice(r,1)}},window.callOverlayHandler=e=>{let t;return n?(e.rseq=r++,t=new Promise((n=>{o[e.rseq]=n})),a(e)):t=new Promise((n=>{a(e,(e=>{n(null==e?null:JSON.parse(e))}))})),t},window.startOverlayEvents=()=>{s=!1,a({call:"subscribe",events:Object.keys(i)})}}())},46:(e,n,t)=>{"use strict";t.d(n,{A:()=>s});var r=t(842),o=t.n(r),i=t(866),a=t.n(i)()(o());a.push([e.id,'*{box-sizing:border-box;padding:0;margin:0}body{font-size:20px;color:#fff;padding:2px 4px}#show{font-size:14px;text-shadow:-1px 0 1.5px #91ba5e,0 1.5px 1.5px #91ba5e,1px 0 1.5px #91ba5e,0 -1.5px 1.5px #91ba5e}#show::before{content:"LB:"}#extra{text-shadow:-1px 0 2px #a91a16,0 1.5px 2px #a91a16,1px 0 2px #a91a16,0 -1.5px 2px #a91a16;font-weight:bold}#extraAll{position:absolute;top:21px;right:0;font-size:14px;text-shadow:-1px 0 2px #a91a16,0 1.5px 2px #a91a16,1px 0 2px #a91a16,0 -1.5px 2px #a91a16}#extraAll::before{content:"奖励:"}.anime{animation:anime 5s;animation-fill-mode:forwards}@keyframes anime{0%{opacity:0;height:0px;font-size:.5em}4%{opacity:1;height:26px;font-size:1.2em}6%{font-size:1em}70%{opacity:1}90%{opacity:0;height:26px}100%{opacity:0;height:0px}}',"",{version:3,sources:["webpack://./src/limitBreakTip/index.scss"],names:[],mappings:"AAAA,EAAA,qBACE,CAAA,SACA,CAAA,QACA,CAAA,KAEF,cACE,CAAA,UACA,CAAA,eACA,CAAA,MAEF,cAIE,CAAA,iGACA,CAAA,cAJA,aACE,CAAA,OAMJ,yFACE,CAAA,gBACA,CAAA,UAEF,iBAIE,CAAA,QACA,CAAA,OACA,CAAA,cACA,CAAA,yFACA,CAAA,kBAPA,aACE,CAAA,OAQJ,kBACE,CAAA,4BACA,CAAA,iBAEF,GACE,SACE,CAAA,UACA,CAAA,cACA,CAAA,GAEF,SACE,CAAA,WACA,CAAA,eACA,CAAA,GAEF,aACE,CAAA,IAEF,SACE,CAAA,IAEF,SACE,CAAA,WACA,CAAA,KAEF,SACE,CAAA,UACA,CAAA",sourcesContent:['* {\n  box-sizing: border-box;\n  padding: 0;\n  margin: 0;\n}\nbody {\n  font-size: 20px;\n  color: white;\n  padding: 2px 4px;\n}\n#show {\n  &::before {\n    content: "LB:";\n  }\n  font-size: 14px;\n  text-shadow: -1px 0 1.5px rgb(145, 186, 94), 0 1.5px 1.5px rgb(145, 186, 94), 1px 0 1.5px rgb(145, 186, 94),\n    0 -1.5px 1.5px rgb(145, 186, 94);\n}\n#extra {\n  text-shadow: -1px 0 2px rgb(169, 26, 22), 0 1.5px 2px rgb(169, 26, 22), 1px 0 2px rgb(169, 26, 22), 0 -1.5px 2px rgb(169, 26, 22);\n  font-weight: bold;\n}\n#extraAll {\n  &::before {\n    content: "奖励:";\n  }\n  position: absolute;\n  top: 21px;\n  right: 0;\n  font-size: 14px;\n  text-shadow: -1px 0 2px rgb(169, 26, 22), 0 1.5px 2px rgb(169, 26, 22), 1px 0 2px rgb(169, 26, 22), 0 -1.5px 2px rgb(169, 26, 22);\n}\n.anime {\n  animation: anime 5s;\n  animation-fill-mode: forwards;\n}\n@keyframes anime {\n  0% {\n    opacity: 0;\n    height: 0px;\n    font-size: 0.5em;\n  }\n  4% {\n    opacity: 1;\n    height: 26px;\n    font-size: 1.2em;\n  }\n  6% {\n    font-size: 1em;\n  }\n  70% {\n    opacity: 1;\n  }\n  90% {\n    opacity: 0;\n    height: 26px;\n  }\n  100% {\n    opacity: 0;\n    height: 0px;\n  }\n}\n'],sourceRoot:""}]);const s=a},866:e=>{"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,i){"string"==typeof e&&(e=[[null,e,void 0]]);var a={};if(r)for(var s=0;s<this.length;s++){var l=this[s][0];null!=l&&(a[l]=!0)}for(var c=0;c<e.length;c++){var p=[].concat(e[c]);r&&a[p[0]]||(void 0!==i&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=i),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),n.push(p))}},n}},842:e=>{"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),i="/*# ".concat(o," */");return[n].concat([i]).join("\n")}return[n].join("\n")}},666:e=>{"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var i={},a=[],s=0;s<e.length;s++){var l=e[s],c=r.base?l[0]+r.base:l[0],p=i[c]||0,d="".concat(c," ").concat(p);i[c]=p+1;var A=t(d),u={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==A)n[A].references++,n[A].updater(u);else{var f=o(u,r);r.byIndex=s,n.splice(s,0,{identifier:d,updater:f,references:1})}a.push(d)}return a}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var i=r(e=e||[],o=o||{});return function(e){e=e||[];for(var a=0;a<i.length;a++){var s=t(i[a]);n[s].references--}for(var l=r(e,o),c=0;c<i.length;c++){var p=t(i[c]);0===n[p].references&&(n[p].updater(),n.splice(p,1))}i=l}}},65:e=>{"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},398:e=>{"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},202:(e,n,t)=>{"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},467:e=>{"use strict";e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var i=t.sourceMap;i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},267:e=>{"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,exports:{}};return e[r](i,i.exports,t),i.exports}t.n=e=>{var n=e&&e.__esModule?()=>e.default:()=>e;return t.d(n,{a:n}),n},t.d=(e,n)=>{for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=(e,n)=>Object.prototype.hasOwnProperty.call(e,n),t.nc=void 0,(()=>{"use strict";t(635);var e,n,r=t(666),o=t.n(r),i=t(467),a=t.n(i),s=t(65),l=t.n(s),c=t(202),p=t.n(c),d=t(398),A=t.n(d),u=t(267),f=t.n(u),x=t(46),m={};m.styleTagTransform=f(),m.setAttributes=p(),m.insert=l().bind(null,"head"),m.domAPI=a(),m.insertStyleElement=A(),o()(x.A,m),x.A&&x.A.locals&&x.A.locals,function(){const e=document.querySelector("#loading");e&&e.remove();let n=document.createElement("div");n.style.height="100vh",n.style.width="100vw",n.style.zIndex="10",n.style.color="white",n.style.textShadow="-1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000",n.style.display="none",n.style.fontFamily="微软雅黑",n.style.fontWeight="bold",n.style.backgroundColor="rgba(0, 0, 150, 0.2)",n.style.position="fixed",n.style.bottom="0",n.style.fontSize="12px",n.style.alignItems="flex-end",n.style.justifyContent="center",n.id="readMe";let t=document.createElement("span");t.innerText="🔒在Overlay悬浮窗(ngld)插件中锁定此悬浮窗以开始使用。",n.appendChild(t),document.body.appendChild(n),document.addEventListener("onOverlayStateUpdate",(e=>document.querySelector("#readMe").style.display=e.detail.isLocked?"none":"flex"))}();let v=new URLSearchParams(new URL(window.location).search);const y=parseInt(null!==(e=v.get("LBMax"))&&void 0!==e?e:3e4),C=Math.ceil(1e3*(parseInt(null!==(n=v.get("automatic"))&&void 0!==n?n:220)/y).toFixed(4))/1e3;let h=0,g=0,b=0,w=0;const T=document.querySelector("#show"),E=document.querySelector("#extra"),O=document.querySelector("#extraAll");function S(){w=0,T.innerHTML="0%",E.innerHTML="",O.innerText="0%"}function L(e){if("36"===e.line[0]){g=parseInt(e.line[2],16)/y;let t=g-h;if(T.innerHTML=`${(100*g).toFixed(2)}%`,t>C){var n;b+=t,w+=t,O.innerText=`${(100*w).toFixed(0)}%`;let e=(100*b).toFixed(0);const r=parseInt(null===(n=E.lastChild)||void 0===n?void 0:n.innerText);if(!E.lastChild||r!==e-1&&r!==e-5){let n=document.createElement("p");n.innerText=`+${e}%`,n.classList.add("anime"),n.setAttribute("data-time",(new Date).toTimeString().substring(0,8)),E.appendChild(n)}else E.lastChild.innerText=`+${e}%`}else b=0;h=g,t<-.1&&S()}else"33"===e.line[0]&&"4000000F"===e.line[3]&&S()}addOverlayListener("ChangeZone",(()=>S())),addOverlayListener("LogLine",(e=>L(e))),startOverlayEvents(),"true"===v.get("test")&&function(e,n){let t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=0;e({line:n[0]});for(let o=1;o<n.length;o++)r+=new Date(n[o][1])-new Date(n[o-1][1]),setTimeout((()=>{e({line:n[o]})}),r/t)}(L,[["36","2021-12-28T21:38:30.3580000+08:00","0000"],["36","2021-12-28T21:38:33.3580000+08:00","00DC"],["36","2021-12-28T21:38:34.8290000+08:00","0208"],["36","2021-12-28T21:38:36.3460000+08:00","02E4"],["36","2021-12-28T21:38:37.8630000+08:00","0410"],["36","2021-12-28T21:38:39.3360000+08:00","04EC"],["36","2021-12-28T21:38:42.3720000+08:00","05C8"],["36","2021-12-28T21:38:45.3620000+08:00","06A4"],["36","2021-12-28T21:38:47.8140000+08:00","07D0"],["36","2021-12-28T21:38:47.8140000+08:00","08FC"],["36","2021-12-28T21:38:47.8140000+08:00","0A28"],["36","2021-12-28T21:38:47.8140000+08:00","0B54"],["36","2021-12-28T21:38:47.8140000+08:00","0C80"],["36","2021-12-28T21:38:48.3510000+08:00","0D5C"],["36","2021-12-28T21:38:50.6220000+08:00","0E88"],["36","2021-12-28T21:38:50.8900000+08:00","0FB4"],["36","2021-12-28T21:38:51.0230000+08:00","10E0"],["36","2021-12-28T21:38:51.1570000+08:00","120C"],["36","2021-12-28T21:38:51.3360000+08:00","12E8"],["36","2021-12-28T21:38:54.3690000+08:00","13C4"],["36","2021-12-28T21:38:57.3570000+08:00","14A0"],["36","2021-12-28T21:38:58.3360000+08:00","15CC"],["36","2021-12-28T21:38:58.3360000+08:00","16F8"],["36","2021-12-28T21:38:58.3360000+08:00","1824"],["36","2021-12-28T21:38:58.3360000+08:00","1950"],["36","2021-12-28T21:38:58.3360000+08:00","1A7C"],["36","2021-12-28T21:39:00.3410000+08:00","1B58"],["36","2021-12-28T21:39:03.3690000+08:00","1C34"],["36","2021-12-28T21:39:04.2630000+08:00","1D60"],["36","2021-12-28T21:39:06.3600000+08:00","1E3C"]],2)})()})();