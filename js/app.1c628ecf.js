(function(e){function n(n){for(var r,a,u=n[0],i=n[1],s=n[2],l=0,f=[];l<u.length;l++)a=u[l],Object.prototype.hasOwnProperty.call(o,a)&&o[a]&&f.push(o[a][0]),o[a]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);d&&d(n);while(f.length)f.shift()();return c.push.apply(c,s||[]),t()}function t(){for(var e,n=0;n<c.length;n++){for(var t=c[n],r=!0,a=1;a<t.length;a++){var i=t[a];0!==o[i]&&(r=!1)}r&&(c.splice(n--,1),e=u(u.s=t[0]))}return e}var r={},o={app:0},c=[];function a(e){return u.p+"js/"+({}[e]||e)+"."+{"chunk-2d0a47fe":"31346fb7","chunk-2d0c0285":"85e03525","chunk-2d0d040b":"661383ff","chunk-2d210c47":"b353daa8","chunk-2d21f118":"000e2d9e"}[e]+".js"}function u(n){if(r[n])return r[n].exports;var t=r[n]={i:n,l:!1,exports:{}};return e[n].call(t.exports,t,t.exports,u),t.l=!0,t.exports}u.e=function(e){var n=[],t=o[e];if(0!==t)if(t)n.push(t[2]);else{var r=new Promise((function(n,r){t=o[e]=[n,r]}));n.push(t[2]=r);var c,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=a(e);var s=new Error;c=function(n){i.onerror=i.onload=null,clearTimeout(l);var t=o[e];if(0!==t){if(t){var r=n&&("load"===n.type?"missing":n.type),c=n&&n.target&&n.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+c+")",s.name="ChunkLoadError",s.type=r,s.request=c,t[1](s)}o[e]=void 0}};var l=setTimeout((function(){c({type:"timeout",target:i})}),12e4);i.onerror=i.onload=c,document.head.appendChild(i)}return Promise.all(n)},u.m=e,u.c=r,u.d=function(e,n,t){u.o(e,n)||Object.defineProperty(e,n,{enumerable:!0,get:t})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,n){if(1&n&&(e=u(e)),8&n)return e;if(4&n&&"object"===typeof e&&e&&e.__esModule)return e;var t=Object.create(null);if(u.r(t),Object.defineProperty(t,"default",{enumerable:!0,value:e}),2&n&&"string"!=typeof e)for(var r in e)u.d(t,r,function(n){return e[n]}.bind(null,r));return t},u.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(n,"a",n),n},u.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},u.p="/crypto-cocktails/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=n,i=i.slice();for(var l=0;l<i.length;l++)n(i[l]);var d=s;c.push([0,"chunk-vendors"]),t()})({0:function(e,n,t){e.exports=t("56d7")},"56d7":function(e,n,t){"use strict";t.r(n);t("e260"),t("e6cf"),t("cca6"),t("a79d");var r=t("7a23"),o={class:"page"};function c(e,n,t,c,a,u){var i=Object(r["w"])("Menu"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])(i),Object(r["e"])("main",null,[Object(r["g"])(s)])])}t("b0c0");var a=t("82bd"),u=t.n(a),i=function(e){return Object(r["s"])("data-v-414a457d"),e=e(),Object(r["q"])(),e},s=i((function(){return Object(r["e"])("img",{src:u.a,class:"logo",alt:""},null,-1)})),l={class:"nes-container is-rounded"},d=i((function(){return Object(r["e"])("h2",null,"Drink menu",-1)})),f={class:"nes-list is-disc main-menu"};function p(e,n,t,o,c,a){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",null,[s,Object(r["e"])("div",l,[d,Object(r["e"])("ul",f,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(c.links,(function(e){return Object(r["p"])(),Object(r["d"])("li",{key:e.name},[Object(r["g"])(u,{to:e.path},{default:Object(r["B"])((function(){return[Object(r["f"])(Object(r["y"])(e.name),1)]})),_:2},1032,["to"])])})),128))])])])}var b={name:"Menu",data:function(){return{links:[{name:"Info",path:"/"},{name:"Uniqueness Index",path:"/uniqueness-index"},{name:"Top Shelf Drinks",path:"/top-shelf"},{name:"Testimonials",path:"/testimonials"},{name:"Team",path:"/team"},{name:"Contact",path:"/contact"}]}}},m=(t("f39a"),t("6b0d")),h=t.n(m);const j=h()(b,[["render",p],["__scopeId","data-v-414a457d"]]);var v=j,O={name:"App",components:{Menu:v}};t("9add");const g=h()(O,[["render",c],["__scopeId","data-v-ac608ffa"]]);var y=g,k=(t("d3b7"),t("3ca3"),t("ddb0"),t("6c02")),w={class:"home"},x=Object(r["e"])("h1",null,"Home",-1),_=[x];function T(e,n,t,o,c,a){return Object(r["p"])(),Object(r["d"])("div",w,_)}var P={name:"Home",components:{}};const M=h()(P,[["render",T]]);var S=M,q=[{path:"/",name:"Home",component:S},{path:"/team",name:"Team",component:function(){return t.e("chunk-2d0a47fe").then(t.bind(null,"0767"))}},{path:"/contact",name:"Contact",component:function(){return t.e("chunk-2d210c47").then(t.bind(null,"b8fa"))}},{path:"/testimonials",name:"Testimonials",component:function(){return t.e("chunk-2d0d040b").then(t.bind(null,"66d9"))}},{path:"/top-shelf",name:"Top Shelf",component:function(){return t.e("chunk-2d0c0285").then(t.bind(null,"411c"))}},{path:"/uniqueness-index",name:"Uniqueness Index",component:function(){return t.e("chunk-2d21f118").then(t.bind(null,"d7f5"))}}],I=Object(k["a"])({history:Object(k["b"])("/crypto-cocktails/"),routes:q}),C=I;t("33e9");Object(r["c"])(y).use(C).mount("#app")},"6e4b":function(e,n,t){},"82bd":function(e,n,t){e.exports=t.p+"img/cc-logo.d794e32b.png"},"9add":function(e,n,t){"use strict";t("eb0f")},eb0f:function(e,n,t){},f39a:function(e,n,t){"use strict";t("6e4b")}});
//# sourceMappingURL=app.1c628ecf.js.map