(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11c76848"],{"3ce5":function(t,e,a){},"501d":function(t,e,a){"use strict";a.r(e);var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("main",{staticClass:"main"},[a("section",{staticClass:"page__header"},[a("h3",{staticClass:"page__title"},[t._v("Updates")]),t.loader?a("Loader"):t._e(),a("Update",{attrs:{updates:t.updates}})],1)])},n=[],o=a("555f"),c=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"updates"},t._l(t.updates,function(e){return a("article",{key:e.id,staticClass:"updates__update"},[a("header",{staticClass:"updates__update__header"},[a("h3",{staticClass:"updates__update__title"},[t._v(t._s(e.title))])]),a("section",{staticClass:"updates__update__article"},[a("p",[t._v(t._s(e.body))])]),a("footer",{staticClass:"updates__update__footer"},[a("p",[a("strong",[t._v("Brought by:")]),t._v("\n        "+t._s(t.authors[Math.floor(Math.random()*t.authors.length)])+"\n      ")])])])}))},u=[],r={name:"Update",data:function(){return{authors:["Ino42O","Pottus","Slice"]}},props:["updates"]},i=r,d=(a("7fc6"),a("2877")),p=Object(d["a"])(i,c,u,!1,null,"45403900",null);p.options.__file="Update.vue";var _=p.exports,l="https://jsonplaceholder.typicode.com/posts",f={name:"changelog",data:function(){return{updates:[],loader:!0}},created:function(){var t=this,e="".concat(l);fetch(e).then(function(t){return t.json()}).then(function(e){t.loader=!1,t.updates=e})},components:{Update:_,Loader:o["a"]}},h=f,v=(a("f77f"),Object(d["a"])(h,s,n,!1,null,"786c3332",null));v.options.__file="Updates.vue";e["default"]=v.exports},"7fc6":function(t,e,a){"use strict";var s=a("b28a"),n=a.n(s);n.a},b28a:function(t,e,a){},f77f:function(t,e,a){"use strict";var s=a("3ce5"),n=a.n(s);n.a}}]);
//# sourceMappingURL=chunk-11c76848.e16f142d.js.map