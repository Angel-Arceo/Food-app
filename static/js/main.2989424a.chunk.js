(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{25:function(e,t,c){},26:function(e,t,c){},27:function(e,t,c){},28:function(e,t,c){},30:function(e,t,c){},39:function(e,t,c){},41:function(e,t,c){},47:function(e,t,c){},48:function(e,t,c){},49:function(e,t,c){},50:function(e,t,c){"use strict";c.r(t);var r=c(0),a=c.n(r),s=c(11),i=c.n(s),n=(c(25),c(26),c(9)),o=c(3),l=c(54),b=c(53),d=(c(27),c(28),c(1)),j=function(e){var t=Object(r.useRef)(null),c={backgroundImage:"url(".concat("/Food-App","/assets/icons/search.svg)")};return Object(d.jsx)(r.Fragment,{children:Object(d.jsx)("input",{style:c,type:"text",placeholder:"Search",onChange:function(){e.onSearch(t.current.value)},ref:t})})},u=c(10),h=(c(30),function(e){var t=e.data,c=t.title,r=t.image;return Object(d.jsx)(n.b,{to:"/recipe",children:Object(d.jsxs)("div",{className:"Food-Card",children:[Object(d.jsx)("img",{className:"Food-Card--img",src:r,alt:c}),Object(d.jsx)("div",{className:"Food-Card--title",children:Object(d.jsx)("h2",{children:"".concat(c.substr(0,60))})})]})})}),p=(c(39),c(13)),m=c.n(p),f=c(19);var x=0;var O=function(){var e=function(e){var t=Object(r.useState)(null),c=Object(u.a)(t,2),a=c[0],s=c[1],i=Object(r.useState)(!0),n=Object(u.a)(i,2),o=n[0],l=n[1],b=Object(r.useState)(null),d=Object(u.a)(b,2),j=d[0],h=d[1];return Object(r.useEffect)((function(){function t(){return(t=Object(f.a)(m.a.mark((function t(){var c,r;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((c=t.sent).ok){t.next=6;break}throw{err:!0,status:c.status,statusText:c.statusText?c.statusText:"An error has ocurred"};case 6:return t.next=8,c.json();case 8:r=t.sent,s(r),l(!1),h({err:!1}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),h(t.t0),l(!0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:a,isPending:o,error:j}}("https://api.spoonacular.com/recipes/random?apiKey=".concat("7cff3793d3024c2b94b14bebaf10a454","&number=5&tags=vegetarian,dessert")),t=e.data,c=e.isPending,a=Object(r.useState)([]),s=Object(u.a)(a,2),i=s[0],n=s[1];return Object(r.useEffect)((function(){if(!c){var e=t.recipes.map((function(e){return Object(d.jsx)(h,{data:e},++x)}));n(e)}}),[c,t]),Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("h1",{children:"Random"}),Object(d.jsx)("div",{className:"main-trend--trending-foods",children:i})]})},g=(c(41),c(42),"/Food-App".concat("/assets/icons/")),v=function(e){var t=e.name,c=e.width,r=e.height,a=e.color;return Object(d.jsx)("div",{className:"icon",children:Object(d.jsx)("svg",{"data-src":"".concat(g).concat(t,".svg"),fill:"currentColor",width:c,height:r,style:{color:a}})})};v.defaultProps={width:"1.6em",height:"1.6em",color:"#666"};var y=v;c(47);function w(){return Object(d.jsx)("nav",{className:"bottomnav",children:Object(d.jsxs)("ul",{children:[Object(d.jsx)("li",{children:Object(d.jsx)(y,{name:"home",alt:"home",color:"var(--bg-secundary)"})}),Object(d.jsx)("li",{children:Object(d.jsx)(y,{name:"cutlery",alt:"find recipes"})}),Object(d.jsx)("li",{children:Object(d.jsx)(y,{name:"user",alt:"account"})}),Object(d.jsx)("li",{children:Object(d.jsx)(y,{name:"recipes",alt:"my recipes"})})]})})}c(48),c(49);var k=function(e){var t=Object(r.useState)(e.summary),c=Object(u.a)(t,2),a=c[0],s=c[1];return Object(r.useEffect)((function(){return s(a.replace(/(&nbsp;|<([^>]+)>)/gi,""))}),[a]),Object(d.jsx)(n.b,{to:"/recipe",className:"Link",children:Object(d.jsxs)("article",{className:"Recipe-Card",children:[Object(d.jsx)("div",{className:"Recipe-Card--recipeImage",children:Object(d.jsx)("img",{src:e.img,alt:"recipe"})}),Object(d.jsxs)("div",{className:"Recipe-Card--recipeContent",children:[Object(d.jsx)("h2",{children:e.title.substr(0,50)+".."}),Object(d.jsx)("p",{children:"".concat(a.substr(0,55),"...")})]})]})})},F=function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsxs)("div",{className:"main-hot-recipes--header",children:[Object(d.jsx)("h1",{children:"Hot Recipes"}),Object(d.jsxs)(n.b,{to:"/",className:"link",children:[Object(d.jsx)("p",{children:"More"})," ",Object(d.jsx)(y,{name:"next",width:"27",height:"27",color:"#FFF",className:"icon"})]})]}),Object(d.jsxs)("div",{className:"main-hot-recipes--recipes",children:[Object(d.jsx)(k,{img:"https://spoonacular.com/recipeImages/716426-312x231.jpg",title:"Cauliflower, Brown Rice, and Vegetable Fried Rice",summary:"Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked."}),Object(d.jsx)(k,{img:"https://spoonacular.com/recipeImages/716426-312x231.jpg",title:"Cauliflower, Brown Rice, and Vegetable Fried Rice",summary:"Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked."})]})]})},N=function(){return Object(d.jsxs)(r.Fragment,{children:[Object(d.jsx)("header",{children:Object(d.jsx)("div",{className:"header-search",children:Object(d.jsx)(j,{onSearch:function(e){console.log(e)}})})}),Object(d.jsxs)("main",{children:[Object(d.jsx)("article",{className:"main-trend",children:Object(d.jsx)(O,{})}),Object(d.jsx)("article",{className:"main-hot-recipes",children:Object(d.jsx)(F,{})})]}),Object(d.jsx)(w,{})]})},C=function(){return Object(d.jsx)("div",{children:"Hello World :D"})},R=function(){return Object(d.jsx)(n.a,{basename:"/Food-App",children:Object(d.jsx)(o.a,{render:function(e){var t=e.location;return Object(d.jsx)(l.a,{className:"container",children:Object(d.jsx)(b.a,{appear:!0,timeout:{enter:400,exit:200},classNames:"fade",children:Object(d.jsx)("div",{className:"inner",children:Object(d.jsxs)(o.c,{location:t,children:[Object(d.jsx)(o.a,{exact:!0,path:"/",component:N}),Object(d.jsx)(o.a,{path:"/recipe",component:C})]},t.key)})},t.key)})}})})};i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(R,{})}),document.getElementById("root"))}},[[50,1,2]]]);
//# sourceMappingURL=main.2989424a.chunk.js.map