(function(e){function t(t){for(var r,l,s=t[0],u=t[1],c=t[2],p=0,f=[];p<s.length;p++)l=s[p],Object.prototype.hasOwnProperty.call(a,l)&&a[l]&&f.push(a[l][0]),a[l]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);i&&i(t);while(f.length)f.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,s=1;s<n.length;s++){var u=n[s];0!==a[u]&&(r=!1)}r&&(o.splice(t--,1),e=l(l.s=n[0]))}return e}var r={},a={app:0},o=[];function l(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,l),n.l=!0,n.exports}l.m=e,l.c=r,l.d=function(e,t,n){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(l.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)l.d(n,r,function(t){return e[t]}.bind(null,r));return n},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],u=s.push.bind(s);s.push=t,s=s.slice();for(var c=0;c<s.length;c++)t(s[c]);var i=u;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("2b0e"),a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("AppNav"),n("router-view")],1)},o=[],l=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},s=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nav",{staticClass:"navbar navbar-expand-lg navbar-dark bg-primary"},[n("a",{staticClass:"navbar-brand",attrs:{href:"#"}},[e._v("Community")]),n("button",{staticClass:"navbar-toggler",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarColor01","aria-controls":"navbarColor01","aria-expanded":"false","aria-label":"Toggle navigation"}},[n("span",{staticClass:"navbar-toggler-icon"})])])}],u=n("2877"),c={},i=Object(u["a"])(c,l,s,!1,null,null,null),p=i.exports,f={components:{AppNav:p}},d=f,m=Object(u["a"])(d,a,o,!1,null,null,null),v=m.exports,b=(n("422b"),n("8c4f")),h=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"welcome"},[n("Welcome",{attrs:{msg:"Welcome to Your Vue.js App"}})],1)},y=[],g=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},_=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("div",{staticClass:"jumbotron"},[n("h1",{staticClass:"display-3"},[e._v("Welcome to Community!")]),n("p",{staticClass:"lead"},[e._v("A fully open source forum made by Coding Garden and Laurent")]),n("hr",{staticClass:"my-4"}),n("p",[e._v("This forum is all about community. Be kind! Be helpful!")]),n("p",{staticClass:"lead"},[n("a",{staticClass:"btn btn-primary btn-lg",attrs:{href:"#",role:"button"}},[e._v("Learn more")])])])])}],C={name:"Welcome"},j=C,w=Object(u["a"])(j,g,_,!1,null,"a41eb312",null),O=w.exports,x={name:"Home",components:{Welcome:O}},P=x,$=Object(u["a"])(P,h,y,!1,null,null,null),E=$.exports;r["a"].use(b["a"]);var S=[{path:"/",name:"Home",component:E}],k=new b["a"]({mode:"history",base:"/",routes:S}),T=k,W=n("2f62");r["a"].use(W["a"]);var A=new W["a"].Store({state:{},mutations:{},actions:{},modules:{}});r["a"].config.productionTip=!1,new r["a"]({router:T,store:A,render:function(e){return e(v)}}).$mount("#app")}});
//# sourceMappingURL=app.5f958d22.js.map