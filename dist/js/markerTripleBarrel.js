!function(){"use strict";var n={748:function(n,e,t){var r=t(537),o=t.n(r),a=t(645),i=t.n(a)()(o());i.push([n.id,".Tank{color:#00008b}.Healer{color:#006400}.Dps{color:darkred}.Tank,.Healer,.Dps{padding:0px 1px}body{background-color:#fff;margin:10px}body header p{font-weight:bold}body main p{font-weight:bold}body main ul{margin-left:20px;list-style:decimal}body footer{margin:5px;padding:5px;border:1px solid #000}body footer .MESSAGE{color:#000}body footer .POSTNAMAZU{color:green}body footer .WARN{color:#8b008b;font-weight:bold}body footer .ERROR{font-weight:bold;color:red}.tip-job{display:inline-block}*{padding:0;margin:0;box-sizing:border-box}button{margin:0px 2px;padding:2px 5px}","",{version:3,sources:["webpack://./src/markerTripleBarrel/index.scss"],names:[],mappings:"AAAA,MACE,aAAA,CAEF,QACE,aAAA,CAEF,KACE,aAAA,CAEF,mBAGE,eAAA,CAGF,KACE,qBAAA,CACA,WAAA,CAEE,cACE,gBAAA,CAIF,YACE,gBAAA,CAEF,aACE,gBAAA,CACA,kBAAA,CAGJ,YACE,UAAA,CACA,WAAA,CACA,qBAAA,CACA,qBACE,UAAA,CAEF,wBACE,WAAA,CAEF,kBACE,aAAA,CACA,gBAAA,CAEF,mBACE,gBAAA,CACA,SAAA,CAIN,SACE,oBAAA,CAEF,EACE,SAAA,CACA,QAAA,CACA,qBAAA,CAEF,OACE,cAAA,CACA,eAAA",sourcesContent:[".Tank {\r\n  color: darkblue;\r\n}\r\n.Healer {\r\n  color: darkgreen;\r\n}\r\n.Dps {\r\n  color: darkred;\r\n}\r\n.Tank,\r\n.Healer,\r\n.Dps {\r\n  padding: 0px 1px;\r\n}\r\n\r\nbody {\r\n  background-color: white;\r\n  margin: 10px;\r\n  header {\r\n    p {\r\n      font-weight: bold;\r\n    }\r\n  }\r\n  main {\r\n    p {\r\n      font-weight: bold;\r\n    }\r\n    ul {\r\n      margin-left: 20px;\r\n      list-style: decimal;\r\n    }\r\n  }\r\n  footer {\r\n    margin: 5px;\r\n    padding: 5px;\r\n    border: 1px solid black;\r\n    .MESSAGE {\r\n      color: black;\r\n    }\r\n    .POSTNAMAZU {\r\n      color: green;\r\n    }\r\n    .WARN {\r\n      color: darkmagenta;\r\n      font-weight: bold;\r\n    }\r\n    .ERROR {\r\n      font-weight: bold;\r\n      color: red;\r\n    }\r\n  }\r\n}\r\n.tip-job {\r\n  display: inline-block;\r\n}\r\n* {\r\n  padding: 0;\r\n  margin: 0;\r\n  box-sizing: border-box;\r\n}\r\nbutton {\r\n  margin: 0px 2px;\r\n  padding: 2px 5px;\r\n}\r\n"],sourceRoot:""}]),e.Z=i},645:function(n){n.exports=function(n){var e=[];return e.toString=function(){return this.map((function(e){var t="",r=void 0!==e[5];return e[4]&&(t+="@supports (".concat(e[4],") {")),e[2]&&(t+="@media ".concat(e[2]," {")),r&&(t+="@layer".concat(e[5].length>0?" ".concat(e[5]):""," {")),t+=n(e),r&&(t+="}"),e[2]&&(t+="}"),e[4]&&(t+="}"),t})).join("")},e.i=function(n,t,r,o,a){"string"==typeof n&&(n=[[null,n,void 0]]);var i={};if(r)for(var s=0;s<this.length;s++){var c=this[s][0];null!=c&&(i[c]=!0)}for(var l=0;l<n.length;l++){var p=[].concat(n[l]);r&&i[p[0]]||(void 0!==a&&(void 0===p[5]||(p[1]="@layer".concat(p[5].length>0?" ".concat(p[5]):""," {").concat(p[1],"}")),p[5]=a),t&&(p[2]?(p[1]="@media ".concat(p[2]," {").concat(p[1],"}"),p[2]=t):p[2]=t),o&&(p[4]?(p[1]="@supports (".concat(p[4],") {").concat(p[1],"}"),p[4]=o):p[4]="".concat(o)),e.push(p))}},e}},537:function(n){n.exports=function(n){var e=n[1],t=n[3];if(!t)return e;if("function"==typeof btoa){var r=btoa(unescape(encodeURIComponent(JSON.stringify(t)))),o="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(r),a="/*# ".concat(o," */"),i=t.sources.map((function(n){return"/*# sourceURL=".concat(t.sourceRoot||"").concat(n," */")}));return[e].concat(i).concat([a]).join("\n")}return[e].join("\n")}},379:function(n){var e=[];function t(n){for(var t=-1,r=0;r<e.length;r++)if(e[r].identifier===n){t=r;break}return t}function r(n,r){for(var a={},i=[],s=0;s<n.length;s++){var c=n[s],l=r.base?c[0]+r.base:c[0],p=a[l]||0,u="".concat(l," ").concat(p);a[l]=p+1;var d=t(u),f={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==d)e[d].references++,e[d].updater(f);else{var A=o(f,r);r.byIndex=s,e.splice(s,0,{identifier:u,updater:A,references:1})}i.push(u)}return i}function o(n,e){var t=e.domAPI(e);return t.update(n),function(e){if(e){if(e.css===n.css&&e.media===n.media&&e.sourceMap===n.sourceMap&&e.supports===n.supports&&e.layer===n.layer)return;t.update(n=e)}else t.remove()}}n.exports=function(n,o){var a=r(n=n||[],o=o||{});return function(n){n=n||[];for(var i=0;i<a.length;i++){var s=t(a[i]);e[s].references--}for(var c=r(n,o),l=0;l<a.length;l++){var p=t(a[l]);0===e[p].references&&(e[p].updater(),e.splice(p,1))}a=c}}},569:function(n){var e={};n.exports=function(n,t){var r=function(n){if(void 0===e[n]){var t=document.querySelector(n);if(window.HTMLIFrameElement&&t instanceof window.HTMLIFrameElement)try{t=t.contentDocument.head}catch(n){t=null}e[n]=t}return e[n]}(n);if(!r)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");r.appendChild(t)}},216:function(n){n.exports=function(n){var e=document.createElement("style");return n.setAttributes(e,n.attributes),n.insert(e,n.options),e}},565:function(n,e,t){n.exports=function(n){var e=t.nc;e&&n.setAttribute("nonce",e)}},795:function(n){n.exports=function(n){var e=n.insertStyleElement(n);return{update:function(t){!function(n,e,t){var r="";t.supports&&(r+="@supports (".concat(t.supports,") {")),t.media&&(r+="@media ".concat(t.media," {"));var o=void 0!==t.layer;o&&(r+="@layer".concat(t.layer.length>0?" ".concat(t.layer):""," {")),r+=t.css,o&&(r+="}"),t.media&&(r+="}"),t.supports&&(r+="}");var a=t.sourceMap;a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleTagTransform(r,n,e.options)}(e,n,t)},remove:function(){!function(n){if(null===n.parentNode)return!1;n.parentNode.removeChild(n)}(e)}}}},589:function(n){n.exports=function(n,e){if(e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}}},e={};function t(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={id:r,exports:{}};return n[r](a,a.exports,t),a.exports}t.n=function(n){var e=n&&n.__esModule?function(){return n.default}:function(){return n};return t.d(e,{a:e}),e},t.d=function(n,e){for(var r in e)t.o(e,r)&&!t.o(n,r)&&Object.defineProperty(n,r,{enumerable:!0,get:e[r]})},t.o=function(n,e){return Object.prototype.hasOwnProperty.call(n,e)},function(){var n={1:19,2:20,3:21,4:22,5:23,6:24,7:25,26:27,29:30};function e(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"00000000",r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:["19","21","32","37","24","28","33","40","20","22","30","34","39","23","31","38","25","27","35","36"];return e.sort((function(e,o){var a,i;return e.id===t?-1:o.id===t?1:(e.job=null!==(a=n[e.job])&&void 0!==a?a:e.job,o.job=null!==(i=n[o.job])&&void 0!==i?i:o.job,e.job===o.job?parseInt(o.id,16)-parseInt(e.id,16):r.indexOf(e.job.toString())-r.indexOf(o.job.toString()))}))}var r=[{ID:"1",en:"GLA",cn:"剑术师",jp:"剣術士",Role:"Tank",IsBaseCLass:!0,simple1:"剑",simple2:"剑术"},{ID:"2",en:"PGL",cn:"格斗家",jp:"格闘士",Role:"Dps",IsBaseCLass:!0,simple1:"格",simple2:"格斗"},{ID:"3",en:"MRD",cn:"斧术师",jp:"斧術士",Role:"Tank",IsBaseCLass:!0,simple1:"斧",simple2:"斧术"},{ID:"4",en:"LNC",cn:"枪术师",jp:"槍術士",Role:"Dps",IsBaseCLass:!0,simple1:"枪",simple2:"枪术"},{ID:"5",en:"ARC",cn:"弓箭手",jp:"弓術士",Role:"Dps",IsBaseCLass:!0,simple1:"弓",simple2:"弓箭"},{ID:"6",en:"CNJ",cn:"幻术师",jp:"幻術士",Role:"Healer",IsBaseCLass:!0,simple1:"幻",simple2:"幻术"},{ID:"7",en:"THM",cn:"咒术师",jp:"呪術士",Role:"Dps",IsBaseCLass:!0,simple1:"咒",simple2:"咒术"},{ID:"19",en:"PLD",cn:"骑士",jp:"ナイト",Role:"Tank",IsBaseCLass:!1,simple1:"骑",simple2:"骑士"},{ID:"20",en:"MNK",cn:"武僧",jp:"モンク",Role:"Dps",IsBaseCLass:!1,simple1:"僧",simple2:"武僧"},{ID:"21",en:"WAR",cn:"战士",jp:"戦士",Role:"Tank",IsBaseCLass:!1,simple1:"战",simple2:"战士"},{ID:"22",en:"DRG",cn:"龙骑士",jp:"竜騎士",Role:"Dps",IsBaseCLass:!1,simple1:"龙",simple2:"龙骑"},{ID:"23",en:"BRD",cn:"吟游诗人",jp:"吟遊詩人",Role:"Dps",IsBaseCLass:!1,simple1:"诗",simple2:"诗人"},{ID:"24",en:"WHM",cn:"白魔法师",jp:"白魔道士",Role:"Healer",IsBaseCLass:!1,simple1:"白",simple2:"白魔"},{ID:"25",en:"BLM",cn:"黑魔法师",jp:"黒魔道士",Role:"Dps",IsBaseCLass:!1,simple1:"黑",simple2:"黑魔"},{ID:"26",en:"ACN",cn:"秘术师",jp:"巴術士",Role:"Dps",IsBaseCLass:!0,simple1:"秘",simple2:"秘术"},{ID:"27",en:"SMN",cn:"召唤师",jp:"召喚士",Role:"Dps",IsBaseCLass:!1,simple1:"召",simple2:"召唤"},{ID:"28",en:"SCH",cn:"学者",jp:"学者",Role:"Healer",IsBaseCLass:!1,simple1:"学",simple2:"学者"},{ID:"29",en:"ROG",cn:"双剑师",jp:"双剣士",Role:"Dps",IsBaseCLass:!0,simple1:"双",simple2:"双剑"},{ID:"30",en:"NIN",cn:"忍者",jp:"忍者",Role:"Dps",IsBaseCLass:!1,simple1:"忍",simple2:"忍者"},{ID:"31",en:"MCH",cn:"机工士",jp:"機工士",Role:"Dps",IsBaseCLass:!1,simple1:"机",simple2:"机工"},{ID:"32",en:"DRK",cn:"暗黑骑士",jp:"暗黒騎士",Role:"Tank",IsBaseCLass:!1,simple1:"暗",simple2:"暗骑"},{ID:"33",en:"AST",cn:"占星术士",jp:"占星術師",Role:"Healer",IsBaseCLass:!1,simple1:"占",simple2:"占星"},{ID:"34",en:"SAM",cn:"武士",jp:"侍",Role:"Dps",IsBaseCLass:!1,simple1:"侍",simple2:"武士"},{ID:"35",en:"RDM",cn:"赤魔法师",jp:"赤魔道士",Role:"Dps",IsBaseCLass:!1,simple1:"赤",simple2:"赤魔"},{ID:"36",en:"BLU",cn:"青魔法师",jp:"青魔道士",Role:"Dps",IsBaseCLass:!1,simple1:"青",simple2:"青魔"},{ID:"37",en:"GNB",cn:"绝枪战士",jp:"ガンブレイカー",Role:"Tank",IsBaseCLass:!1,simple1:"绝",simple2:"绝枪"},{ID:"38",en:"DNC",cn:"舞者",jp:"踊り子",Role:"Dps",IsBaseCLass:!1,simple1:"舞",simple2:"舞者"},{ID:"39",en:"RPR",cn:"钐镰客",jp:"リーパー",Role:"Dps",IsBaseCLass:!1,simple1:"镰",simple2:"钐镰"},{ID:"40",en:"SGE",cn:"贤者",jp:"賢者",Role:"Healer",IsBaseCLass:!1,simple1:"贤",simple2:"贤者"}];function o(n){return r.find((function(e){return e.ID===n.toString()}))}var a=t(379),i=t.n(a),s=t(795),c=t.n(s),l=t(569),p=t.n(l),u=t(565),d=t.n(u),f=t(216),A=t.n(f),m=t(589),v=t.n(m),b=t(748),g={};function C(n,e){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:1,r=0;n({line:e[0]});for(var o=function(o){var a=new Date(e[o][1])-new Date(e[o-1][1]);r+=a,setTimeout((function(){n({line:e[o]})}),r/t)},a=1;a<e.length;a++)o(a)}g.styleTagTransform=v(),g.setAttributes=d(),g.insert=p().bind(null,"head"),g.domAPI=c(),g.insertStyleElement=A(),i()(b.Z,g),b.Z&&b.Z.locals&&b.Z.locals;var S,y,E,h,I,R=new URLSearchParams(new URL(window.location).search);function j(n,e){(null==e||e>n.length)&&(e=n.length);for(var t=0,r=new Array(e);t<e;t++)r[t]=n[t];return r}setTimeout((function(){if(!window.OverlayPluginApi&&null===R.get("OVERLAY_WS")&&null===R.get("HOST_PORT")){var n=document.createElement("div");n.innerText="找不到OverlayPluginApi或WS服务，请在ACT悬浮窗中添加此页面，而不是浏览器中。\n若在OBS中添加请启用OverlayPlugin WSServer并在OBS的浏览器链接后追加OVERLAY_WS参数",document.body.appendChild(n),n.style.position="absolute",n.style.top=0,n.style.fontFamily="微软雅黑",n.style.fontSize="16px",n.style.color="white",n.style.textShadow="black -1px 0px 2px, black 0px 1px 2px, black 1px 0px 2px, black 0px -1px 2px"}}),1e3);var x=[{id:"10000001",name:"测试张三",job:24,inParty:!0},{id:"10000002",name:"测试李四",job:25,inParty:!0},{id:"10000004",name:"测试王五",job:19,inParty:!0},{id:"10000005",name:"测试赵六",job:23,inParty:!0},{id:"10000006",name:"测试孙七",job:39,inParty:!0},{id:"10000007",name:"测试周八",job:40,inParty:!0},{id:"10000008",name:"测试吴九",job:37,inParty:!0},{id:"10000009",name:"测试郑十",job:38,inParty:!0}],D=!1,B="",L=[],M=new URLSearchParams(new URL(window.location).search),T=[],w=0,k=null!==(S=null===(y=M.get("jobSortRule"))||void 0===y?void 0:y.split(","))&&void 0!==S?S:["19","21","32","37","24","28","33","40","20","22","30","34","39","23","31","38","25","27","35","36"],O=null!==(E=null===(h=M.get("markingSortRule"))||void 0===h?void 0:h.split(","))&&void 0!==E?E:["20","22","30","34","39","23","31","38","25","27","35","36","37","32","21","19","40","33","28","24"],P=null!==(I=M.get("postNamazuPort"))&&void 0!==I?I:"2019",G="http://127.0.0.1:".concat(P,"/command"),N=document.querySelector("header"),H=document.querySelector("main"),U=document.querySelector("footer"),W={MESSAGE:"信息",POSTNAMAZU:"邮差",ERROR:"错误",WARN:"警告"};function F(n,e){var t,r={"Y+":e.getFullYear().toString(),"m+":(e.getMonth()+1).toString(),"d+":e.getDate().toString(),"H+":e.getHours().toString(),"M+":e.getMinutes().toString(),"S+":e.getSeconds().toString()};for(var o in r)(t=new RegExp("("+o+")").exec(n))&&(n=n.replace(t[1],1==t[1].length?r[o]:r[o].padStart(t[1].length,"0")));return n}function Z(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){},t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){q("Error:通信失败！",W.ERROR)};/^[^/]/.test(n)&&(n="/e "+n),fetch(G,{method:"POST",body:n,mode:"no-cors"}).then(e).catch(t),q("".concat(n),W.POSTNAMAZU)}function q(n){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:W.MESSAGE,t=document.createElement("p");t.classList.add(Object.keys(W).find((function(n){return W[n]===e}))),t.innerText="[".concat(F("HH:MM:SS",new Date),"] [").concat(e,"] ").concat(n),U.appendChild(t),window.scrollTo(0,document.documentElement.clientHeight)}function Y(n){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1e3;function r(){(L=n.filter((function(n){return n.inParty}))).length>0&&(L=e(L,B,k),H.innerHTML="\n    <p>当前小队：</p>\n    <ul>\n    ".concat(L.map((function(n){var e=o(n.job);return'<li class="'.concat(e.Role,'">').concat(e.simple2," ").concat(n.id," ").concat(n.name,"</li>")})).join(""),"\n      </ul>\n      "))}t>0?setTimeout((function(){r()}),t):r()}function z(n){if("21"===n.line[0]&&/2B6[BC]/i.test(n.line[4])&&/^1/.test(n.line[6])){var e=L.findIndex((function(e){return e.id===n.line[6]}));q("石牢：".concat(n.line[7]),W.MESSAGE),function(n){if(T.push(n),3===T.length){q("三连桶！",W.MESSAGE),q("开始排序："+T.map((function(n){return o(n.job).simple2})),W.MESSAGE),T.sort((function(n,e){return O.findIndex((function(e){return e===n.job.toString()}))-O.findIndex((function(n){return n===e.job.toString()}))})),q("排序结果："+T.map((function(n){return o(n.job).simple2})),W.MESSAGE),q("开始标记",W.MESSAGE);for(var e=0;e<T.length;e++){var t=T[e];Z("/marking attack".concat(e+1," <").concat(t.partyIndex+1,">"))}q("标记结束",W.MESSAGE),T=[]}else clearTimeout(w),w=setTimeout((function(){T=[],q("清理",W.MESSAGE)}),3e3)}({id:n.line[6],name:n.line[7],job:L[e].job,partyIndex:e})}}function _(){D?(q("开始测试，覆写数据...",W.MESSAGE),Y(x,0),q("覆写小队列表...成功！",W.MESSAGE),q("覆写玩家ID为:"+(B=x[4].id)+x[4].name+"...成功！",W.MESSAGE),C(z,["21|2021-12-31T16:15:16.0680000+08:00|40000B9E|タイタン|2B6C|グラナイト・ジェイル|10000008|测试吴九|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|13264|18160|10000|10000|||106.95|86.11|0.00|0.21|739195|1408008|0|10000|||80.63|100.00|0.00|1.57|00002514|0|1|1808c5be7165787a".split("|"),"21|2021-12-31T16:15:16.0680000+08:00|40000B9D|タイタン|2B6C|グラナイト・ジェイル|10000005|测试赵六|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|11966|16695|9868|10000|||104.54|85.77|0.00|-2.21|739195|1408008|0|10000|||100.00|80.63|0.00|0.00|00002515|0|1|d8995ddfa6b74847".split("|"),"21|2021-12-31T16:15:16.0680000+08:00|40000BA3|タイタン|2B6B|グラナイト・ジェイル|10000001|测试张三|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|0|21146|23492|9600|10000|||103.38|86.90|0.00|-0.13|961673|1449210|10000|10000|||100.00|114.00|0.00|-3.14|00002516|0|1|61b5b567481f24af".split("|")],1),setTimeout((function(){q("测试结束，若小队成员显示为测试成员，请刷新页面！",W.WARN)}),1e3)):q("请先连通邮差，且启动游戏并成功注入，然后刷新页面。",W.WARN)}function J(){if(D){q("开始测试，覆写数据...",W.MESSAGE),q("当前小队人数："+L.length,W.MESSAGE),L.length<3&&(q("小队人员未超过3人，将会覆写伪造数据进行测试...",W.WARN),Y(x,0),q("覆写小队列表...成功！",W.MESSAGE),q("覆写玩家ID为:"+(B=x[4].id)+x[4].name+"...成功！",W.MESSAGE)),q("随机选出3位幸运队员...",W.MESSAGE);for(var n=new Set;n.size<3&&L.length>0;){var e=Math.floor(Math.random()*L.length);n.has(e)||n.add(e)}q("生成3个随机数："+(n=Array.from(n)),W.MESSAGE),q("生成假日志...",W.MESSAGE);var t,r=function(n,e){var t="undefined"!=typeof Symbol&&n[Symbol.iterator]||n["@@iterator"];if(!t){if(Array.isArray(n)||(t=function(n,e){if(n){if("string"==typeof n)return j(n,e);var t=Object.prototype.toString.call(n).slice(8,-1);return"Object"===t&&n.constructor&&(t=n.constructor.name),"Map"===t||"Set"===t?Array.from(n):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?j(n,e):void 0}}(n))||e&&n&&"number"==typeof n.length){t&&(n=t);var r=0,o=function(){};return{s:o,n:function(){return r>=n.length?{done:!0}:{done:!1,value:n[r++]}},e:function(n){throw n},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var a,i=!0,s=!1;return{s:function(){t=t.call(n)},n:function(){var n=t.next();return i=n.done,n},e:function(n){s=!0,a=n},f:function(){try{i||null==t.return||t.return()}finally{if(s)throw a}}}}(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;C(z,["21|0|40000000|タイタン|2B6C|グラナイト・ジェイル|".concat(L[o].id,"|").concat(L[o].name,"|").split("|")],1)}}catch(n){r.e(n)}finally{r.f()}q("测试结束，若小队成员显示为测试成员，请刷新页面！",W.WARN)}else q("请先连通邮差，且启动游戏并成功注入，然后刷新页面。",W.WARN)}addOverlayListener("ChangePrimaryPlayer",(function(n){return function(n){B=n.charID.toString(16).toUpperCase()}(n)})),addOverlayListener("LogLine",(function(n){return z(n)})),addOverlayListener("PartyChanged",(function(n){return Y(n.party)})),startOverlayEvents(),function(){if(window.OverlayPluginApi){N.innerHTML="\n  <p>小队排序：</p>\n  ".concat(k.map((function(n){var e=o(n);return'<span class="'.concat(e.Role,'">').concat(e.simple2,'<aside class="tip-job">').concat(n,"</aside></span>")})),"\n  <p>标记排序：</p>\n  ").concat(O.map((function(n){var e=o(n);return'<span class="'.concat(e.Role,'">').concat(e.simple2,'<aside class="tip-job">').concat(n,"</aside></span>")})),"\n    <p>当前端口：</p>\n    <span>").concat(P,"</span>"),Z("/e 连通性测试。",(function(){q("连接成功",W.MESSAGE),D=!0}),(function(){q("Error:通信失败！",W.ERROR),D=!1}));var n=document.createElement("button");n.innerText="刷新页面",n.addEventListener("click",(function(){return location.reload()})),document.body.appendChild(n);var e=document.createElement("button");e.innerText="单人测试",e.addEventListener("click",_),document.body.appendChild(e);var t=document.createElement("button");t.innerText="小队测试",t.addEventListener("click",J),document.body.appendChild(t)}else document.body.innerHTML="请在ACT悬浮窗中添加此页面，而不是浏览器直接访问。"}()}()}();