(this["webpackJsonpfood-app"]=this["webpackJsonpfood-app"]||[]).push([[0],{23:function(e,t,c){},24:function(e,t,c){},25:function(e,t,c){},27:function(e,t,c){},36:function(e,t,c){},38:function(e,t,c){},44:function(e,t,c){},45:function(e,t,c){},46:function(e,t,c){},47:function(e,t,c){"use strict";c.r(t);var r=c(1),s=c.n(r),a=c(16),i=c.n(a),n=(c(23),c(7)),o=c(2),l=(c(24),c(25),c(0)),b=function(e){var t=Object(r.useRef)(null),c={backgroundImage:"url(".concat("/Food-App","/assets/icons/search.svg)")};return Object(l.jsx)(r.Fragment,{children:Object(l.jsx)("input",{style:c,type:"text",placeholder:"Search",onChange:function(){e.onSearch(t.current.value)},ref:t})})},d=c(8),j=(c(27),function(e){var t=e.data,c=t.title,r=t.image;return Object(l.jsx)(n.b,{to:"/recipe",children:Object(l.jsxs)("div",{className:"Food-Card",children:[Object(l.jsx)("img",{className:"Food-Card--img",src:r,alt:c}),Object(l.jsx)("div",{className:"Food-Card--title",children:Object(l.jsx)("h2",{children:"".concat(c.substr(0,60))})})]})})}),h=(c(36),c(11)),u=c.n(h),p=c(18);var m=0;var f=function(){var e=function(e){var t=Object(r.useState)(null),c=Object(d.a)(t,2),s=c[0],a=c[1],i=Object(r.useState)(!0),n=Object(d.a)(i,2),o=n[0],l=n[1],b=Object(r.useState)(null),j=Object(d.a)(b,2),h=j[0],m=j[1];return Object(r.useEffect)((function(){function t(){return(t=Object(p.a)(u.a.mark((function t(){var c,r;return u.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,fetch(e);case 3:if((c=t.sent).ok){t.next=6;break}throw{err:!0,status:c.status,statusText:c.statusText?c.statusText:"An error has ocurred"};case 6:return t.next=8,c.json();case 8:r=t.sent,a(r),l(!1),m({err:!1}),t.next=18;break;case 14:t.prev=14,t.t0=t.catch(0),m(t.t0),l(!0);case 18:case"end":return t.stop()}}),t,null,[[0,14]])})))).apply(this,arguments)}!function(){t.apply(this,arguments)}()}),[e]),{data:s,isPending:o,error:h}}("https://api.spoonacular.com/recipes/random?apiKey=".concat("7cff3793d3024c2b94b14bebaf10a454","&number=5&tags=vegetarian,dessert")),t=e.data,c=e.isPending,s=Object(r.useState)([]),a=Object(d.a)(s,2),i=a[0],n=a[1];return Object(r.useEffect)((function(){if(!c){var e=t.recipes.map((function(e){return Object(l.jsx)(j,{data:e},++m)}));n(e)}}),[c,t]),Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("h1",{children:"Random"}),Object(l.jsx)("div",{className:"main-trend--trending-foods",children:i})]})},x=(c(38),c(39),"/Food-App".concat("/assets/icons/")),O=function(e){var t=e.name,c=e.width,r=e.height,s=e.color;return Object(l.jsx)("div",{className:"icon",children:Object(l.jsx)("svg",{"data-src":"".concat(x).concat(t,".svg"),fill:"currentColor",width:c,height:r,style:{color:s}})})};O.defaultProps={width:"1.6em",height:"1.6em",color:"#666"};var g=O;c(44);function v(){return Object(l.jsx)("nav",{className:"bottomnav",children:Object(l.jsxs)("ul",{children:[Object(l.jsx)("li",{children:Object(l.jsx)(g,{name:"home",alt:"home",color:"var(--bg-secundary)"})}),Object(l.jsx)("li",{children:Object(l.jsx)(g,{name:"cutlery",alt:"find recipes"})}),Object(l.jsx)("li",{children:Object(l.jsx)(g,{name:"user",alt:"account"})}),Object(l.jsx)("li",{children:Object(l.jsx)(g,{name:"recipes",alt:"my recipes"})})]})})}c(45),c(46);var y=function(e){var t=Object(r.useState)(e.summary),c=Object(d.a)(t,2),s=c[0],a=c[1];return Object(r.useEffect)((function(){return a(s.replace(/(&nbsp;|<([^>]+)>)/gi,""))}),[s]),Object(l.jsx)(n.b,{to:"/recipe",className:"Link",children:Object(l.jsxs)("article",{className:"Recipe-Card",children:[Object(l.jsx)("div",{className:"Recipe-Card--recipeImage",children:Object(l.jsx)("img",{src:e.img,alt:"recipe"})}),Object(l.jsxs)("div",{className:"Recipe-Card--recipeContent",children:[Object(l.jsx)("h2",{children:e.title.substr(0,50)+".."}),Object(l.jsx)("p",{children:"".concat(s.substr(0,55),"...")})]})]})})},w=function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsxs)("div",{className:"main-hot-recipes--header",children:[Object(l.jsx)("h1",{children:"Hot Recipes"}),Object(l.jsxs)(n.b,{to:"/",className:"link",children:[Object(l.jsx)("p",{children:"More"})," ",Object(l.jsx)(g,{name:"next",width:"27",height:"27",color:"#FFF",className:"icon"})]})]}),Object(l.jsxs)("div",{className:"main-hot-recipes--recipes",children:[Object(l.jsx)(y,{img:"https://spoonacular.com/recipeImages/716426-312x231.jpg",title:"Cauliflower, Brown Rice, and Vegetable Fried Rice",summary:"Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked."}),Object(l.jsx)(y,{img:"https://spoonacular.com/recipeImages/716426-312x231.jpg",title:"Cauliflower, Brown Rice, and Vegetable Fried Rice",summary:"Cauliflower, Brown Rice, and Vegetable Fried Rice might be a good recipe to expand your side dish recipe box. Watching your figure? This gluten free, dairy free, lacto ovo vegetarian, and vegan recipe has <b>192 calories</b>, <b>7g of protein</b>, and <b>6g of fat</b> per serving. For <b>$1.12 per serving</b>, this recipe <b>covers 19%</b> of your daily requirements of vitamins and minerals. This recipe serves 8. This recipe from fullbellysisters.blogspot.com has 3689 fans. This recipe is typical of Chinese cuisine. From preparation to the plate, this recipe takes about <b>30 minutes</b>. Head to the store and pick up peas, broccoli, salt, and a few other things to make it today. Overall, this recipe earns an <b>awesome spoonacular score of 100%</b>. Users who liked this recipe also liked."})]})]})},F=function(){return Object(l.jsxs)(r.Fragment,{children:[Object(l.jsx)("header",{children:Object(l.jsx)("div",{className:"header-search",children:Object(l.jsx)(b,{onSearch:function(e){console.log(e)}})})}),Object(l.jsxs)("main",{children:[Object(l.jsx)("article",{className:"main-trend",children:Object(l.jsx)(f,{})}),Object(l.jsx)("article",{className:"main-hot-recipes",children:Object(l.jsx)(w,{})})]}),Object(l.jsx)(v,{})]})},k=function(){return Object(l.jsx)("div",{children:"Hello World :D"})},N=function(){return Object(l.jsx)(n.a,{basename:"/Food-App",children:Object(l.jsxs)(o.c,{children:[Object(l.jsx)(o.a,{exact:!0,path:"/",component:F}),Object(l.jsx)(o.a,{path:"/recipe",component:k})]})})};i.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(N,{})}),document.getElementById("root"))}},[[47,1,2]]]);
//# sourceMappingURL=main.7ac9f91d.chunk.js.map