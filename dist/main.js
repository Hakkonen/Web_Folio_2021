(()=>{"use strict";var e,t={235:(e,t,o)=>{var i=o(379),r=o.n(i),n=o(192);r()(n.Z,{insert:"head",singleton:!1}),n.Z.locals;const a=function(e,t){var o=document.createElement(e);for(var i in t)o.setAttribute(i,t[i]);for(var r=arguments.length,n=new Array(r>2?r-2:0),a=2;a<r;a++)n[a-2]=arguments[a];return n.forEach((function(e){"string"==typeof e?o.appendChild(document.createTextNode(e)):o.appendChild(e)})),o};var l=function(){var e=a("div",{class:"folio"},a("span",{class:"folio-text"},"folio")),t=a("div",{class:"folio-menu visible"}),o=a("span",{class:"folio-menu-item-one"},"front-end");o.addEventListener("click",(function(){var e=document.querySelector(".cube");e.classList.remove("show-front"),e.classList.add("show-right");var t=document.querySelector(".folio-text");t.innerHTML="home",t.addEventListener("click",(function(){e.classList.remove("show-right"),e.classList.add("show-front"),t.innerHTML="folio"}))})),t.appendChild(o);var i=a("span",{class:"folio-menu-item-two"},"programming");i.addEventListener("click",(function(){var e=document.querySelector(".cube");e.classList.remove("show-front"),e.classList.add("show-right")})),t.appendChild(i);var r=a("span",{class:"folio-menu-item-three"},"photography");return r.addEventListener("click",(function(){var e=document.querySelector(".cube");e.classList.remove("show-front"),e.classList.add("show-right")})),t.appendChild(r),e.appendChild(t),e},s=function(){var e=a("div",{class:"info"},"info");return e.addEventListener("click",(function(){console.log("info")})),e},c=function(){var e=a("div",{class:"mode"},"night");return e.addEventListener("click",(function(){var t=document.getElementById("root");t.classList.contains("theme--light")?(t.setAttribute("class","root theme--dark"),e.innerHTML="day",console.log("day")):(t.setAttribute("class","root theme--light"),e.innerHTML="night",console.log("night"))})),e},h=function(){var e=a("div",{class:"social"},"social");return e.addEventListener("click",(function(){console.log("social")})),e},d=o(345),m=o.n(d);const f=o.p+"06423c60f281246adb6ba681823546e5.png",u=o.p+"55ba28bfa6228b70a431359aa5318dfc.png",p=o.p+"996717da809175244bf544c332f23c3d.png";var g=function(){var e,t,o=a("div",{class:"cube show-front"});return o.appendChild(((t=a("div",{class:"page-one cube__face cube__face--front"})).appendChild(a("div",{class:"header"},a("div",{class:"header-square"},a("span",{},"JAYDEN"),a("br",{}),a("span",{},"REYNOLDS")))),t.appendChild((e=a("div",{class:"sub-header"},a("span",{},"Jayden is a "),a("span",{class:"highlight",id:"typewriter"},"front-end dev"),a("br",{}),a("span",{},"based in Melbourne"),a("br",{}),a("span",{},"Australia")),setTimeout((function(){var e=document.getElementById("typewriter");new(m())(e,{loop:!1}).start().typeString("front-end dev").pauseFor(600).pauseFor(2500).deleteAll().typeString("programmer").pauseFor(600).pauseFor(2500).deleteAll().typeString("photographer").pauseFor(600).pauseFor(2500).deleteAll().typeString("front-end dev")}),[100]),e)),t)),o.appendChild(function(){var e=a("div",{class:"page-two cube__face cube__face--right "}),t=a("div",{class:"alt-header"},a("div",{class:"alt-header-square"},a("span",{},"FRONT"),a("br",{}),a("span",{},"END"),a("br",{}),a("span",{},"DEV"))),o=a("div",{class:"display-col"},a("div",{class:"tile"},a("img",{src:f,alt:"web1"}),a("span",{class:"tile-header"},"BILL BUSTER")),a("div",{class:"tile"},a("img",{src:u,alt:"web2"}),a("span",{class:"tile-header"},"SIMPLE NOTE")),a("div",{class:"tile"},a("img",{src:p,alt:"web3"}),a("span",{class:"tile-header"},"WORD COUNTER")));return e.appendChild(t),e.appendChild(o),e}()),o.appendChild(a("div",{class:"page-three cube__face cube__face--left "},"Test")),o};var b=document.getElementById("root");[l(),s(),c(),h(),g()].forEach((function(e){b.appendChild(e)}))},192:(e,t,o)=>{o.d(t,{Z:()=>n});var i=o(645),r=o.n(i)()((function(e){return e[1]}));r.push([e.id,"@import url(https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,400;0,500;1,100;1,300;1,400;1,500&display=swap);"]),r.push([e.id,'.theme--light{background-color:#f6eed7;color:#48484a;font-family:Roboto,Helvetica,sans-serif;transition:.5s}.theme--light .folio{position:fixed;top:1vh;left:2vw;transform:rotate(0deg);color:#e09dff;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex}@media(orientation: portrait){.theme--light .folio{flex-direction:column}}.theme--light .folio:hover .folio-menu{visibility:visible;opacity:1}.theme--light .folio-menu{display:flex;visibility:hidden;opacity:0;transition:.2s .1s;background-color:#f6eed7}@media(orientation: portrait){.theme--light .folio-menu{flex-direction:column;width:50vw}}.theme--light .folio-menu-item-one{color:#ff9090;margin:0 1ch 0 0}@media(orientation: landscape){.theme--light .folio-menu-item-one{margin:0 1ch 0 1ch}}.theme--light .folio-menu-item-one:hover{filter:invert(1)}.theme--light .folio-menu-item-two{color:#85c4ff;margin:0 1ch 0 0}.theme--light .folio-menu-item-two:hover{filter:invert(1)}.theme--light .folio-menu-item-three{color:#73cc73;margin:0 1ch 0 0}.theme--light .folio-menu-item-three:hover{filter:invert(1)}.theme--light .info{position:fixed;top:3vh;right:1vw;transform:rotate(90deg);color:#ffb800;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.theme--light .mode{position:fixed;bottom:1vh;right:2vw;transform:rotate(180deg);color:#569999;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.theme--light .social{position:fixed;bottom:5vh;left:0vw;transform:rotate(270deg);color:#73cc73;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.theme--light .header{width:100%;position:relative;display:inline-block;margin:0rem 0 0 6rem;font-size:12rem;color:#ff9090;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(orientation: portrait){.theme--light .header{font-size:4rem;margin:0 0 0 1.5rem}}.theme--light .header .header-square{display:block;background:rgba(0,0,0,0);width:100%;height:100%}.theme--light .header .header-square::after{content:"";position:absolute;width:91%;height:80%;border:1px solid #48484a;box-shadow:2px 2px #48484a;top:0vh;left:-2vw}.theme--light .sub-header{position:relative;width:90%;left:-5vw;margin:-2rem 0 0 0;color:#48484a;font-weight:200;text-align:right;font-size:5vw;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(orientation: portrait){.theme--light .sub-header{font-size:1.5rem;margin:0 0 0 0rem}}.theme--light .sub-header .highlight{color:#85c4ff}.theme--light .alt-header{width:auto;position:relative;display:inline-block;margin-left:4%;margin-bottom:10%;font-size:10rem;color:#ff9090;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:flex-start;z-index:10}@media(orientation: portrait){.theme--light .alt-header{font-size:3.5rem;margin-bottom:58vh;margin-left:5.5vw}}.theme--light .alt-header .alt-header-square{display:block;background:rgba(0,0,0,0);width:auto;height:100%}.theme--light .alt-header .alt-header-square::after{content:"";position:absolute;width:8ch;height:85%;border:1px solid #48484a;box-shadow:2px 2px #48484a;top:0vh;left:-2vw}.theme--light .display-col{scrollbar-width:none;-ms-overflow-style:none;display:flex;align-items:center}.theme--light .display-col::-webkit-scrollbar{width:0;height:0}.theme--light .display-col ::-webkit-scrollbar{display:none}@media(orientation: landscape){.theme--light .display-col{overflow-y:scroll;width:40vw;height:100%;position:absolute;right:6vw;top:0;flex-direction:row;flex-wrap:wrap}}@media(orientation: portrait){.theme--light .display-col{overflow-y:hidden;overflow-x:scroll;width:100%;height:46vh;padding:0 0 10vh 0;position:absolute;left:0;bottom:0;flex-direction:column;flex-wrap:wrap}}.theme--light .display-col .tile{transition:1s}@media(orientation: landscape){.theme--light .display-col .tile{width:40vw;height:40vw;margin:2vh 0 2vh 0;padding:2vh 2px 4vh 2px}}@media(orientation: portrait){.theme--light .display-col .tile{width:40vh;height:40vh;padding:2px 3vw 2px 3vw}}.theme--light .display-col .tile .tile-header{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#ff9090;background-color:#f6eed7}@media(orientation: landscape){.theme--light .display-col .tile .tile-header{width:100%;position:relative;top:-5%;left:3%;filter:opacity(90%);font-size:3rem;text-align:right;transition:.2s}}@media(orientation: portrait){.theme--light .display-col .tile .tile-header{height:100%;position:relative;top:-7%;left:3%;font-size:2rem;text-align:right;transition:.2s}}.theme--light .display-col .tile .tile-header:hover{transition:.2s;background-color:#f6eed7;filter:opacity(100%)}.theme--light .display-col .tile img{width:100%;height:100%;object-fit:cover;object-position:80% 80%;border:1px solid #48484a;box-shadow:2px 2px #48484a}.theme--light .display-col .tile:hover{transition:1s}.theme--light .page-one{background-color:#f6eed7}.theme--light .page-two{background-color:#f6eed7}.theme--light .page-three{background-color:#f6eed7}.theme--light .page-four{background-color:#f6eed7}.theme--light .page-five{background-color:#f6eed7}.theme--light .page-six{background-color:#f6eed7}.theme--dark{background-color:#1c1c1e;color:#fff;font-family:Roboto,Helvetica,sans-serif;transition:.5s}.theme--dark .folio{position:fixed;top:1vh;left:2vw;transform:rotate(0deg);color:#e09dff;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;display:flex}@media(orientation: portrait){.theme--dark .folio{flex-direction:column}}.theme--dark .folio:hover .folio-menu{visibility:visible;opacity:1}.theme--dark .folio-menu{display:flex;visibility:hidden;opacity:0;transition:.2s .1s;background-color:#1c1c1e}@media(orientation: portrait){.theme--dark .folio-menu{flex-direction:column;width:50vw}}.theme--dark .folio-menu-item-one{color:#ff2d55;margin:0 1ch 0 0}@media(orientation: landscape){.theme--dark .folio-menu-item-one{margin:0 1ch 0 1ch}}.theme--dark .folio-menu-item-one:hover{filter:invert(1)}.theme--dark .folio-menu-item-two{color:#ff5;margin:0 1ch 0 0}.theme--dark .folio-menu-item-two:hover{filter:invert(1)}.theme--dark .folio-menu-item-three{color:#71ff2d;margin:0 1ch 0 0}.theme--dark .folio-menu-item-three:hover{filter:invert(1)}.theme--dark .info{position:fixed;top:3vh;right:1vw;transform:rotate(90deg);color:#ff792d;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.theme--dark .mode{position:fixed;bottom:1vh;right:2vw;transform:rotate(180deg);color:#71ff2d;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.theme--dark .social{position:fixed;bottom:5vh;left:0vw;transform:rotate(270deg);color:#ceff2d;font-size:2rem;z-index:150;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.theme--dark .header{width:100%;position:relative;display:inline-block;margin:0rem 0 0 6rem;font-size:12rem;color:#ff2d55;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(orientation: portrait){.theme--dark .header{font-size:4rem;margin:0 0 0 1.5rem}}.theme--dark .header .header-square{display:block;background:rgba(0,0,0,0);width:100%;height:100%}.theme--dark .header .header-square::after{content:"";position:absolute;width:91%;height:80%;border:1px solid #fff;box-shadow:2px 2px #fff;top:0vh;left:-2vw}.theme--dark .sub-header{position:relative;width:90%;left:-5vw;margin:-2rem 0 0 0;color:#fff;font-weight:200;text-align:right;font-size:5vw;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}@media(orientation: portrait){.theme--dark .sub-header{font-size:1.5rem;margin:0 0 0 0rem}}.theme--dark .sub-header .highlight{color:#ff5}.theme--dark .alt-header{width:auto;position:relative;display:inline-block;margin-left:4%;margin-bottom:10%;font-size:10rem;color:#ff2d55;text-align:left;-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;align-self:flex-start;z-index:10}@media(orientation: portrait){.theme--dark .alt-header{font-size:3.5rem;margin-bottom:58vh;margin-left:5.5vw}}.theme--dark .alt-header .alt-header-square{display:block;background:rgba(0,0,0,0);width:auto;height:100%}.theme--dark .alt-header .alt-header-square::after{content:"";position:absolute;width:8ch;height:85%;border:1px solid #fff;box-shadow:2px 2px #fff;top:0vh;left:-2vw}.theme--dark .display-col{scrollbar-width:none;-ms-overflow-style:none;display:flex;align-items:center}.theme--dark .display-col::-webkit-scrollbar{width:0;height:0}.theme--dark .display-col ::-webkit-scrollbar{display:none}@media(orientation: landscape){.theme--dark .display-col{overflow-y:scroll;width:40vw;height:100%;position:absolute;right:6vw;top:0;flex-direction:row;flex-wrap:wrap}}@media(orientation: portrait){.theme--dark .display-col{overflow-y:hidden;overflow-x:scroll;width:100%;height:46vh;padding:0 0 10vh 0;position:absolute;left:0;bottom:0;flex-direction:column;flex-wrap:wrap}}.theme--dark .display-col .tile{transition:1s}@media(orientation: landscape){.theme--dark .display-col .tile{width:40vw;height:40vw;margin:2vh 0 2vh 0;padding:2vh 2px 4vh 2px}}@media(orientation: portrait){.theme--dark .display-col .tile{width:40vh;height:40vh;padding:2px 3vw 2px 3vw}}.theme--dark .display-col .tile .tile-header{-webkit-touch-callout:none;-webkit-user-select:none;-khtml-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none;color:#ff2d55;background-color:#1c1c1e}@media(orientation: landscape){.theme--dark .display-col .tile .tile-header{width:100%;position:relative;top:-5%;left:3%;filter:opacity(90%);font-size:3rem;text-align:right;transition:.2s}}@media(orientation: portrait){.theme--dark .display-col .tile .tile-header{height:100%;position:relative;top:-7%;left:3%;font-size:2rem;text-align:right;transition:.2s}}.theme--dark .display-col .tile .tile-header:hover{transition:.2s;background-color:#1c1c1e;filter:opacity(100%)}.theme--dark .display-col .tile img{width:100%;height:100%;object-fit:cover;object-position:80% 80%;border:1px solid #fff;box-shadow:2px 2px #fff}.theme--dark .display-col .tile:hover{transition:1s}.theme--dark .page-one{background-color:#1c1c1e}.theme--dark .page-two{background-color:#1c1c1e}.theme--dark .page-three{background-color:#1c1c1e}.theme--dark .page-four{background-color:#1c1c1e}.theme--dark .page-five{background-color:#1c1c1e}.theme--dark .page-six{background-color:#1c1c1e}body{width:100vw;height:100vh;margin:0;padding:0;overflow:hidden}.root{width:100%;height:100%;display:flex;align-items:center;justify-content:center;perspective:100vw}.cube{width:100%;height:100%;position:relative;transform-style:preserve-3d;transform:translateZ(-100vw);transition:transform 1s}.cube__face{position:absolute;width:100%;height:100%}.cube__face--front{transform:rotateY(0deg) translateZ(100vw)}.cube__face--right{transform:rotateY(90deg) translateZ(100vw)}.cube__face--back{transform:rotateY(180deg) translateZ(100vw)}.cube__face--left{transform:rotateY(-90deg) translateZ(100vw)}.cube__face--top{transform:rotateX(90deg) translateZ(100vw)}.cube__face--bottom{transform:rotateX(-90deg) translateZ(100vw)}.cube.show-front{transform:translateZ(-100vw) rotateY(0deg)}.cube.show-right{transform:translateZ(-100vw) rotateY(-90deg)}.cube.show-back{transform:translateZ(-100vw) rotateY(-180deg)}.cube.show-left{transform:translateZ(-100vw) rotateY(90deg)}.cube.show-top{transform:translateZ(-100vw) rotateX(-90deg)}.cube.show-bottom{transform:translateZ(-100vw) rotateX(90deg)}.page-one{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex-direction:column;backface-visibility:hidden}.page-two{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex-direction:column;backface-visibility:hidden}.page-three{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex-direction:column;backface-visibility:hidden;background-color:#3535af}.page_four{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex-direction:column;backface-visibility:hidden;background-color:#35af76}.page_five{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex-direction:column;backface-visibility:hidden;background-color:#35af76}.page_six{width:100%;height:100%;display:flex;align-items:center;justify-content:center;flex-wrap:wrap;flex-direction:column;backface-visibility:hidden;background-color:#af9235}',""]);const n=r}},o={};function i(e){var r=o[e];if(void 0!==r)return r.exports;var n=o[e]={id:e,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.exports}i.m=t,e=[],i.O=(t,o,r,n)=>{if(!o){var a=1/0;for(c=0;c<e.length;c++){for(var[o,r,n]=e[c],l=!0,s=0;s<o.length;s++)(!1&n||a>=n)&&Object.keys(i.O).every((e=>i.O[e](o[s])))?o.splice(s--,1):(l=!1,n<a&&(a=n));l&&(e.splice(c--,1),t=r())}return t}n=n||0;for(var c=e.length;c>0&&e[c-1][2]>n;c--)e[c]=e[c-1];e[c]=[o,r,n]},i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var o in t)i.o(t,o)&&!i.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})},i.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{var e;i.g.importScripts&&(e=i.g.location+"");var t=i.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var o=t.getElementsByTagName("script");o.length&&(e=o[o.length-1].src)}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),i.p=e})(),(()=>{var e={179:0};i.O.j=t=>0===e[t];var t=(t,o)=>{var r,n,[a,l,s]=o,c=0;for(r in l)i.o(l,r)&&(i.m[r]=l[r]);for(s&&s(i),t&&t(o);c<a.length;c++)n=a[c],i.o(e,n)&&e[n]&&e[n][0](),e[a[c]]=0;i.O()},o=self.webpackChunkWeb_Folio_2021=self.webpackChunkWeb_Folio_2021||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))})();var r=i.O(void 0,[560],(()=>i(235)));r=i.O(r)})();