!function(){var e={378:function(){function e(e,n){return function(e){if(Array.isArray(e))return e}(e)||function(e,n){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var r,o,a=[],i=!0,c=!1;try{for(t=t.call(e);!(i=(r=t.next()).done)&&(a.push(r.value),!n||a.length!==n);i=!0);}catch(e){c=!0,o=e}finally{try{i||null==t.return||t.return()}finally{if(c)throw o}}return a}}(e,n)||t(e,n)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(e,n){var r="undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!r){if(Array.isArray(e)||(r=t(e))||n&&e&&"number"==typeof e.length){r&&(e=r);var o=0,a=function(){};return{s:a,n:function(){return o>=e.length?{done:!0}:{done:!1,value:e[o++]}},e:function(e){throw e},f:a}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var i,c=!0,s=!1;return{s:function(){r=r.call(e)},n:function(){var e=r.next();return c=e.done,e},e:function(e){s=!0,i=e},f:function(){try{c||null==r.return||r.return()}finally{if(s)throw i}}}}function t(e,n){if(e){if("string"==typeof e)return r(e,n);var t=Object.prototype.toString.call(e).slice(8,-1);return"Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?r(e,n):void 0}}function r(e,n){(null==n||n>e.length)&&(n=e.length);for(var t=0,r=new Array(n);t<n;t++)r[t]=e[t];return r}window.addOverlayListener||(console.log("common.min.js镜像文件访问失败，加载本地版本。"),function(){var t=/[\?&]OVERLAY_WS=([^&]+)/.exec(location.href),r=null,o=[],a=0,i={},c={},s=null,l=!1;function u(e){if(c[e.type]){var t,r=n(c[e.type]);try{for(r.s();!(t=r.n()).done;)(0,t.value)(e)}catch(e){r.e(e)}finally{r.f()}}}t?(s=function(e){o?o.push(e):r.send(JSON.stringify(e))},function e(){(r=new WebSocket(t[1])).addEventListener("error",(function(e){console.error(e)})),r.addEventListener("open",(function(){console.log("Connected!");var e=o;o=null;var t,r=n(e);try{for(r.s();!(t=r.n()).done;){var a=t.value;s(a)}}catch(e){r.e(e)}finally{r.f()}})),r.addEventListener("message",(function(e){try{e=JSON.parse(e.data)}catch(n){return void console.error("Invalid message received: ",e)}void 0!==e.rseq&&i[e.rseq]?(i[e.rseq](e),delete i[e.rseq]):u(e)})),r.addEventListener("close",(function(){o=[],console.log("Trying to reconnect..."),setTimeout((function(){e()}),300)}))}()):(s=function(e,n){o?o.push([e,n]):OverlayPluginApi.callHandler(JSON.stringify(e),n)},function t(){if(window.OverlayPluginApi&&window.OverlayPluginApi.ready){var r=o;o=null,window.__OverlayCallback=u;var a,i=n(r);try{for(i.s();!(a=i.n()).done;){var c=e(a.value,2),l=c[0],d=c[1];s(l,d)}}catch(e){i.e(e)}finally{i.f()}}else setTimeout(t,300)}()),window.dispatchOverlayEvent=u,window.addOverlayListener=function(e,n){l&&c[e]&&console.warn("A new listener for ".concat(e," has been registered after event transmission has already begun.\nSome events might have been missed and no cached values will be transmitted.\nPlease register your listeners before calling startOverlayEvents().")),c[e]||(c[e]=[]),c[e].push(n)},window.removeOverlayListener=function(e,n){if(c[e]){var t=c[e],r=t.indexOf(n);r>-1&&t.splice(r,1)}},window.callOverlayHandler=function(e){var n;return r?(e.rseq=a++,n=new Promise((function(n){i[e.rseq]=n})),s(e)):n=new Promise((function(n){s(e,(function(e){n(null==e?null:JSON.parse(e))}))})),n},window.startOverlayEvents=function(){l=!1,s({call:"subscribe",events:Object.keys(c)})}}())},160:function(e,n,t){"use strict";var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([e.id,"body{margin:10px;font-size:24px;text-shadow:-1px 0 2px #a91a16,0 1.5px 2px #a91a16,1px 0 2px #a91a16,0 -1.5px 2px #a91a16;font-weight:bold;color:#fff}*{padding:0;margin:0}","",{version:3,sources:["webpack://./src/majiang/index.scss"],names:[],mappings:"AAAA,KACE,WAAA,CACA,cAAA,CACA,yFAAA,CACA,gBAAA,CACA,UAAA,CAGF,EACE,SAAA,CACA,QAAA",sourcesContent:["body {\r\n  margin: 10px;\r\n  font-size: 24px;\r\n  text-shadow: -1px 0 2px rgb(169, 26, 22), 0 1.5px 2px rgb(169, 26, 22), 1px 0 2px rgb(169, 26, 22), 0 -1.5px 2px rgb(169, 26, 22);\r\n  font-weight: bold;\r\n  color: white;\r\n}\r\n\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n}\r\n"],sourceRoot:""}]),n.Z=i},645:function(e){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map((function(n){var t="",r=void 0!==n[5];return n[4]&&(t+="@supports (".concat(n[4],") {")),n[2]&&(t+="@media ".concat(n[2]," {")),r&&(t+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),t+=e(n),r&&(t+="}"),n[2]&&(t+="}"),n[4]&&(t+="}"),t})).join("")},n.i=function(e,t,r,o,a){"string"==typeof e&&(e=[[null,e,void 0]]);var i={};if(r)for(var c=0;c<this.length;c++){var s=this[c][0];null!=s&&(i[s]=!0)}for(var l=0;l<e.length;l++){var u=[].concat(e[l]);r&&i[u[0]]||(void 0!==a&&(void 0===u[5]||(u[1]="@layer".concat(u[5].length>0?" ".concat(u[5]):""," {").concat(u[1],"}")),u[5]=a),t&&(u[2]?(u[1]="@media ".concat(u[2]," {").concat(u[1],"}"),u[2]=t):u[2]=t),o&&(u[4]?(u[1]="@supports (".concat(u[4],") {").concat(u[1],"}"),u[4]=o):u[4]="".concat(o)),n.push(u))}},n}},537:function(e){"use strict";e.exports=function(e){var n=e[1],t=e[3];if(!t)return n;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(e){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([a]).join("\n")}return[n].join("\n")}},379:function(e){"use strict";var n=[];function t(e){for(var t=-1,r=0;r<n.length;r++)if(n[r].identifier===e){t=r;break}return t}function r(e,r){for(var a={},i=[],c=0;c<e.length;c++){var s=e[c],l=r.base?s[0]+r.base:s[0],u=a[l]||0,d="".concat(l," ").concat(u);a[l]=u+1;var f=t(d),p={css:s[1],media:s[2],sourceMap:s[3],supports:s[4],layer:s[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var y=o(p,r);r.byIndex=c,n.splice(c,0,{identifier:d,updater:y,references:1})}i.push(d)}return i}function o(e,n){var t=n.domAPI(n);return t.update(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap&&n.supports===e.supports&&n.layer===e.layer)return;t.update(e=n)}else t.remove()}}e.exports=function(e,o){var a=r(e=e||[],o=o||{});return function(e){e=e||[];for(var i=0;i<a.length;i++){var c=t(a[i]);n[c].references--}for(var s=r(e,o),l=0;l<a.length;l++){var u=t(a[l]);0===n[u].references&&(n[u].updater(),n.splice(u,1))}a=s}}},569:function(e){"use strict";var n={};e.exports=function(e,t){var r=function(e){if(void 0===n[e]){var t=document.querySelector(e);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(e){t=null}n[e]=t}return n[e]}(e);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(e){"use strict";e.exports=function(e){var n=document.createElement("style");return e.setAttributes(n,e.attributes),e.insert(n,e.options),n}},565:function(e,n,t){"use strict";e.exports=function(e){var n=t.nc;n&&e.setAttribute("nonce",n)}},795:function(e){"use strict";e.exports=function(e){var n=e.insertStyleElement(e);return{update:function(t){!function(e,n,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(r,e,n.options)}(n,e,t)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)}}}},589:function(e){"use strict";e.exports=function(e,n){if(n.styleSheet)n.styleSheet.cssText=e;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(e))}}}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var a=n[r]={id:r,exports:{}};return e[r](a,a.exports,t),a.exports}t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,{a:n}),n},t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},function(){"use strict";var e=t(379),n=t.n(e),r=t(795),o=t.n(r),a=t(569),i=t.n(a),c=t(565),s=t.n(c),l=t(216),u=t.n(l),d=t(589),f=t.n(d),p=t(160),y={};y.styleTagTransform=f(),y.setAttributes=s(),y.insert=i().bind(null,"head"),y.domAPI=o(),y.insertStyleElement=u(),n()(p.Z,y),p.Z&&p.Z.locals&&p.Z.locals,function(){var e=document.querySelector("#loading");e&&e.remove();var n=document.createElement("div");n.style.height="100vh",n.style.width="100vw",n.style.zIndex="10",n.style.color="white",n.style.textShadow="-1px 0 2px #000, 0 1px 2px #000, 1px 0 2px #000, 0 -1px 2px #000",n.style.display="none",n.style.fontFamily="微软雅黑",n.style.fontWeight="bold",n.style.backgroundColor="rgba(0, 0, 150, 0.2)",n.style.position="fixed",n.style.bottom="0",n.style.fontSize="12px",n.style.alignItems="flex-end",n.style.justifyContent="center",n.id="readMe";var t=document.createElement("span");t.innerText="🔒这是供用户调整悬浮窗尺寸的蓝色背景，在ACT的Overlay(ngld)插件中锁定此悬浮窗便即会消失。",n.appendChild(t),document.body.appendChild(n),document.addEventListener("onOverlayStateUpdate",(function(e){return document.querySelector("#readMe").style.display=e.detail.isLocked?"none":"flex"}));var r=document.createElement("span");r.style.height="5px",r.style.width="1px",r.style.position="fixed",r.style.top="0px",r.style.left="50%",r.style.backgroundColor="rgba(0,0,0,0.1)",n.appendChild(r)}();var v,m=new URLSearchParams(new URL(window.location).search),h=(setTimeout((function(){if(!window.OverlayPluginApi&&null===m.get("OVERLAY_WS")&&null===m.get("HOST_PORT")){var e=document.createElement("header");e.innerText="找不到OverlayPluginApi或WS服务，请在ACT悬浮窗中添加此页面，而不是浏览器中。\n若在OBS中添加请启用OverlayPlugin WSServer并在OBS的浏览器链接后追加OVERLAY_WS参数",document.body.appendChild(e),e.style.position="absolute",e.style.top=0,e.style.fontFamily="微软雅黑",e.style.fontSize="16px",e.style.color="white",e.style.textShadow="black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px"}}),1e3),t(378),""),g=[],x=new Set,b=document.querySelector("main");addOverlayListener("ChangePrimaryPlayer",(function(e){return function(e){h=e.charID.toString(16).toUpperCase()}(e)})),addOverlayListener("LogLine",(function(e){return function(e){"27"===e.line[0]&&-1!==g.findIndex((function(n){return n.id===e.line[2]}))&&function(e){if(x.add(e),x.size===g.length){var n=Array.from(x);if(n.reduce((function(e,n){return e.add(n.icon),e}),new Set).size<=x.size/2)return;n.sort((function(e,n){return parseInt(e.icon,16)-parseInt(n.icon,16)})),b.innerHTML=n.map((function(e,n){if(e.id===h){var t=n+1;return(r="".concat(t,"号").concat(t,"号"))&&callOverlayHandler({call:"cactbotSay",text:r}),"".concat(t,"号").concat(t>4?"（".concat(t-4,"）"):"")}var r})).join(""),clearTimeout(v),x.clear()}clearTimeout(v),v=setTimeout((function(){x.clear(),b.innerHTML=""}),1e4)}({id:e.line[2],name:e.line[3],icon:e.line[6]})}(e)})),addOverlayListener("PartyChanged",(function(e){return n=e.party,void(g=n.filter((function(e){return e.inParty})));var n})),startOverlayEvents()}()}();