(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){"use strict";c.r(t);var n=c(0),r=c.n(n),a=c(16),s=c.n(a),i=(c(23),c(10)),o=c(2),j=(c(24),c(25),c(1)),l=function(e){var t=Object(n.useRef)(null),c={backgroundImage:"url(".concat("/Food-App","/assets/icons/search.svg)")};return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("input",{style:c,type:"text",placeholder:"Search",onChange:function(){e.onSearch(t.current.value)},ref:t})})},u=c(8),d=(c(27),function(e){var t=e.data,c=t.title,n=t.image;return Object(j.jsx)(i.b,{to:"/recipe",children:Object(j.jsxs)("div",{className:"Food-Card",children:[Object(j.jsx)("img",{className:"Food-Card--img",src:n,alt:c}),Object(j.jsx)("div",{className:"Food-Card--title",children:Object(j.jsx)("h2",{children:"".concat(c.substr(0,60))})})]})})}),b=(c(36),c(11)),h=c.n(b),O=c(18);var x=0;function f(){return x++}var p=function(){var e=function(e){var t=Object(n.useState)(null),c=Object(u.a)(t,2),r=c[0],a=c[1],s=Object(n.useState)(!0),i=Object(u.a)(s,2),o=i[0],j=i[1],l=Object(n.useState)(null),d=Object(u.a)(l,2),b=d[0],x=d[1];return Object(n.useEffect)((function(){function t(){return(t=Object(O.a)(h.a.mark((function t(){var c,n;return h.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((c=t.sent).ok){t.next=6;break}throw{err:!0,status:c.status,statusText:c.statusText?c.statusText:"An error has ocurred"};case 6:return t.next=8,c.json();case 8:n=t.sent,a(n),j(!1),x({err:!1}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),x(t.t0),j(!0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:r,isPending:o,error:b}}("https://api.spoonacular.com/recipes/random?apiKey=".concat("34d754d5f3e84717acfb7b258157639c","&number=5&tags=vegetarian,dessert")),t=e.data,c=e.isPending,r=Object(n.useState)([]),a=Object(u.a)(r,2),s=a[0],i=a[1];return Object(n.useEffect)((function(){if(!c){var e=t.recipes.map((function(e){return Object(j.jsx)(d,{data:e},f)}));i(e)}}),[c,t]),Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("h1",{children:"Trends"}),Object(j.jsx)("div",{className:"main-trend--trending-foods",children:s})]})},m=(c(38),c(39),"/Food-App".concat("/assets/icons/")),v=function(e){var t=e.name,c=e.width,n=e.height,r=e.color;return Object(j.jsx)("div",{className:"icon",children:Object(j.jsx)("svg",{"data-src":"".concat(m).concat(t,".svg"),fill:"currentColor",width:c,height:n,style:{color:r}})})};v.defaultProps={width:"1.6em",height:"1.6em",color:"#666"};var g=v;c(44);function y(){return Object(j.jsx)("nav",{className:"bottomnav",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{children:Object(j.jsx)(g,{name:"home",alt:"home",color:"var(--bg-secundary)"})}),Object(j.jsx)("li",{children:Object(j.jsx)(g,{name:"cutlery",alt:"find recipes"})}),Object(j.jsx)("li",{children:Object(j.jsx)(g,{name:"user",alt:"account"})}),Object(j.jsx)("li",{children:Object(j.jsx)(g,{name:"recipes",alt:"my recipes"})})]})})}var F=function(){return Object(j.jsx)(n.Fragment,{children:Object(j.jsx)("h1",{children:"Hot Recipes"})})},N=function(){return Object(j.jsxs)(n.Fragment,{children:[Object(j.jsx)("header",{children:Object(j.jsx)("div",{className:"header-search",children:Object(j.jsx)(l,{onSearch:function(e){console.log(e)}})})}),Object(j.jsxs)("main",{children:[Object(j.jsx)("article",{className:"main-trend",children:Object(j.jsx)(p,{})}),Object(j.jsx)("article",{className:"main-hot-recipes",children:Object(j.jsx)(F,{})})]}),Object(j.jsx)(y,{})]})},w=function(){return Object(j.jsx)("div",{children:"Hello World :D"})},S=function(){return Object(j.jsx)(i.a,{basename:"/Food-App",children:Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(j.jsx)(o.a,{path:"/recipe",component:w})]})})};s.a.render(Object(j.jsx)(r.a.StrictMode,{children:Object(j.jsx)(S,{})}),document.getElementById("root"))}},[[45,1,2]]]);
//# sourceMappingURL=main.2e0d5acc.chunk.js.map