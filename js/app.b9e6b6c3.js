(function(e){function t(t){for(var r,c,u=t[0],i=t[1],s=t[2],f=0,d=[];f<u.length;f++)c=u[f],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&d.push(o[c][0]),o[c]=0;for(r in i)Object.prototype.hasOwnProperty.call(i,r)&&(e[r]=i[r]);l&&l(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),n()}function n(){for(var e,t=0;t<a.length;t++){for(var n=a[t],r=!0,c=1;c<n.length;c++){var i=n[c];0!==o[i]&&(r=!1)}r&&(a.splice(t--,1),e=u(u.s=n[0]))}return e}var r={},o={app:0},a=[];function c(e){return u.p+"js/"+({about:"about"}[e]||e)+"."+{about:"1628a683","chunk-2d0a47fe":"b271acb8"}[e]+".js"}function u(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,u),n.l=!0,n.exports}u.e=function(e){var t=[],n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,r){n=o[e]=[t,r]}));t.push(n[2]=r);var a,i=document.createElement("script");i.charset="utf-8",i.timeout=120,u.nc&&i.setAttribute("nonce",u.nc),i.src=c(e);var s=new Error;a=function(t){i.onerror=i.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var r=t&&("load"===t.type?"missing":t.type),a=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+r+": "+a+")",s.name="ChunkLoadError",s.type=r,s.request=a,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){a({type:"timeout",target:i})}),12e4);i.onerror=i.onload=a,document.head.appendChild(i)}return Promise.all(t)},u.m=e,u.c=r,u.d=function(e,t,n){u.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},u.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},u.t=function(e,t){if(1&t&&(e=u(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(u.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)u.d(n,r,function(t){return e[t]}.bind(null,r));return n},u.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return u.d(t,"a",t),t},u.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},u.p="/",u.oe=function(e){throw console.error(e),e};var i=window["webpackJsonp"]=window["webpackJsonp"]||[],s=i.push.bind(i);i.push=t,i=i.slice();for(var f=0;f<i.length;f++)t(i[f]);var l=s;a.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"09f2":function(e,t,n){},"09fb":function(e,t,n){e.exports=n.p+"img/drank.3a60c9c2.png"},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),o={class:"page"};function a(e,t,n,a,c,u){var i=Object(r["w"])("Menu"),s=Object(r["w"])("router-view");return Object(r["p"])(),Object(r["d"])("div",o,[Object(r["g"])(i),Object(r["e"])("main",null,[Object(r["g"])(s)])])}n("b0c0");var c=n("09fb"),u=n.n(c),i=function(e){return Object(r["s"])("data-v-003d543a"),e=e(),Object(r["q"])(),e},s=i((function(){return Object(r["e"])("h1",null,"Cool Drinks",-1)})),f={class:"nes-list is-disc main-menu nes-container is-rounded"},l=i((function(){return Object(r["e"])("img",{src:u.a,class:"drank",alt:""},null,-1)}));function d(e,t,n,o,a,c){var u=Object(r["w"])("router-link");return Object(r["p"])(),Object(r["d"])("nav",null,[s,Object(r["e"])("ul",f,[(Object(r["p"])(!0),Object(r["d"])(r["a"],null,Object(r["v"])(a.links,(function(e){return Object(r["p"])(),Object(r["d"])("li",{key:e.name},[Object(r["g"])(u,{to:e.path},{default:Object(r["B"])((function(){return[Object(r["f"])(Object(r["y"])(e.name),1)]})),_:2},1032,["to"])])})),128))]),l])}var p={name:"Menu",data:function(){return{links:[{name:"Home",path:"/"},{name:"About",path:"/about"},{name:"Team",path:"/team"}]}}},b=(n("dde6"),n("6b0d")),m=n.n(b);const v=m()(p,[["render",d],["__scopeId","data-v-003d543a"]]);var j=v,O={name:"App",components:{Menu:j}};n("9add");const h=m()(O,[["render",a],["__scopeId","data-v-ac608ffa"]]);var g=h,y=(n("d3b7"),n("3ca3"),n("ddb0"),n("6c02")),w={class:"home"};function k(e,t,n,o,a,c){return Object(r["p"])(),Object(r["d"])("div",w," Home ")}var _={name:"Home",components:{}};const P=m()(_,[["render",k]]);var x=P,M=[{path:"/",name:"Home",component:x},{path:"/about",name:"About",component:function(){return n.e("about").then(n.bind(null,"f820"))}},{path:"/team",name:"Team",component:function(){return n.e("chunk-2d0a47fe").then(n.bind(null,"0767"))}}],T=Object(y["a"])({history:Object(y["b"])("/"),routes:M}),S=T;n("33e9");Object(r["c"])(g).use(S).mount("#app")},"9add":function(e,t,n){"use strict";n("eb0f")},dde6:function(e,t,n){"use strict";n("09f2")},eb0f:function(e,t,n){}});
//# sourceMappingURL=app.b9e6b6c3.js.map