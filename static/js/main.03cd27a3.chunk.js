(this.webpackJsonpsrc=this.webpackJsonpsrc||[]).push([[0],{31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},35:function(e,t,n){},37:function(e,t,n){},42:function(e,t,n){},57:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(22),i=n.n(s),r=(n(31),n(14)),o=n(2),l=(n(32),n(23)),d=n(9),u=(n(33),n(24)),h=n.n(u),j=(n(35),function(e){var t=(new Date-new Date(e))/36e5;return t<=.5?"New Post!":t<48?"1 day ago":t<168?"".concat(Math.floor(t/24)," days ago"):t/24<30?"".concat(Math.floor(t/168)," week").concat(Math.floor(t/168)>1?"s":""," ago"):"".concat(Math.floor(t/720)," month").concat(Math.floor(t/720)>1?"s":""," ago")}),b=function(e){return e&&e.map((function(e){return"#".concat(e)})).join(" ")},m=n(0),f=function(e){var t=e.id,n=e.title,c=e.publishedAt,a=e.bait,s=e.tags,i=e.numMinRead,r=e.lastPost,o=b(s).split(" ").map((function(e,t){return Object(m.jsx)("a",{href:"/#/?search=in:".concat(s[t]),children:e},e)})),l=j(c);return Object(m.jsxs)("div",{className:"post-view",onClick:function(){return window.location.href="/#/".concat(t)},children:[Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"title",children:n}),Object(m.jsx)("span",{className:"date",children:l}),Object(m.jsxs)("span",{className:"reading-time right-circle",children:[i," min read"]})]}),Object(m.jsxs)("div",{children:[Object(m.jsx)("span",{className:"bait",children:a}),Object(m.jsx)("span",{className:"tags",children:o})]}),!r&&Object(m.jsx)("hr",{})]})},p=function(e){var t=e.searchText,n=e.onChange;return Object(m.jsx)("input",{className:"search-input",type:"text",onChange:function(e){return n(e.target.value)},value:t,placeholder:"Search (use in:<tag name> to search by tags)"})},O=[{id:1,title:"React on Github",bait:"Combine the powers of gh-pages and create-react-app!",tags:["tutorial","react","github"],numMinRead:3,publishedAt:"2021-08-07T00:00:00"},{id:4,title:"Finding research papers",bait:"",tags:["programming","project","utility","python"],numMinRead:10,publishedAt:"2022-03-23T20:27:00"}],g=function(e){var t=e.searchQuery,n=Object(c.useState)(t||""),a=Object(d.a)(n,2),s=a[0],i=a[1],r=Object(c.useState)(O),o=Object(d.a)(r,2),u=o[0],j=o[1],b=function(e){if(e.length>0){var t=e.split(/\s/).filter((function(e){return e})).map((function(e){return e.trim()})),n=O.filter((function(e){var n,c=!1,a=Object(l.a)(t);try{for(a.s();!(n=a.n()).done;){var s=n.value;if(s.startsWith("in:")){var i=s.slice(3);c|=-1!==e.tags.indexOf(i.toLowerCase())}else c|=-1!==e.title.toLowerCase().indexOf(s.toLowerCase()),c|=-1!==e.bait.toLowerCase().indexOf(s.toLowerCase())}}catch(r){a.e(r)}finally{a.f()}return c}));j(n)}else j(O)};Object(c.useEffect)((function(){i(t||""),b(t||"")}),[t]);var g=Object(c.useCallback)(h.a.debounce((function(e){return b(e)}),500),[]);return Object(m.jsxs)("div",{className:"post-list-container",children:[Object(m.jsx)(p,{searchText:s,onChange:function(e){i(e),g(e)}}),u.length>0&&Object(m.jsx)(m.Fragment,{children:Object(m.jsx)("div",{className:"post-list",children:u.map((function(e,t){return Object(m.jsx)(f,{id:e.id,title:e.title,bait:e.bait,publishedAt:e.publishedAt,numMinRead:e.numMinRead,tags:e.tags,lastPost:t===u.length-1},e.id.toString())}))})}),0===u.length&&Object(m.jsx)("div",{className:"no-results-msg",children:"No results found for your search."})]})},x=(n(37),function(){return Object(m.jsxs)("div",{className:"nav-bar",children:[Object(m.jsx)("div",{className:"brand",children:"Sachin Kukreja"}),Object(m.jsx)("div",{className:"nav-items",children:[{id:"resume",name:"Resume",route:"./resume.pdf",icon:"./resume.png"},{id:"github",name:"Github",route:"https://github.com/sk364",icon:"./github.png"},{id:"li",name:"Linked In",route:"https://www.linkedin.com/in/supah-hakah",icon:"./linkedIn.png"}].map((function(e){return Object(m.jsxs)("div",{className:"nav-item",children:[Object(m.jsx)("img",{src:e.icon,className:"icon ".concat(e.id),alt:"icon"}),e.route&&Object(m.jsx)("a",{href:e.route,target:"_blank",rel:"noreferrer",children:e.name})]},e.id)}))})]})}),v=function(){var e=new URLSearchParams(Object(o.e)().search).get("search");return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)(g,{searchQuery:e})]})},N=(n(42),n(26)),w=function(e){var t=e.match.params.id,n=O.find((function(e){return e.id.toString()===t}))||{},a=n.title,s=n.bait,i=n.tags,r=n.publishedAt,o=n.numMinRead,l=Object(c.useState)(""),u=Object(d.a)(l,2),h=u[0],f=u[1];Object(c.useEffect)((function(){fetch("posts/".concat(t,".html")).then((function(e){return e.text()})).then((function(e){return f(e)}))}),[t]),Object(c.useEffect)((function(){h&&function(){for(var e=document.getElementsByClassName("accordion"),t=document.getElementsByClassName("accordion-content"),n=function(n){var c=e[n];c.onclick=function(){var e=t[n];e.classList.contains("hidden")?e.classList.remove("hidden"):e.classList.add("hidden"),c.classList.contains("accordion-closed")?c.classList.remove("accordion-closed"):c.classList.add("accordion-closed")}},c=0;c<t.length;c++)n(c)}()}),[h]);var p=b(i),g=j(r);return Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)(x,{}),Object(m.jsx)("div",{className:"post-detail",children:Object(m.jsxs)("div",{className:"container",children:[Object(m.jsxs)("div",{className:"post-header",children:[Object(m.jsxs)("div",{className:"post-title-container",children:[Object(m.jsx)("div",{className:"post-title",children:a}),Object(m.jsx)("div",{className:"post-bait",children:s})]}),Object(m.jsxs)("div",{className:"post-metadata",children:[Object(m.jsxs)("div",{className:"post-reading-time right-circle",children:[o," min read"]}),Object(m.jsx)("div",{className:"post-published-since",children:g}),Object(m.jsx)("div",{className:"post-tags",children:p})]})]}),Object(N.a)(h)]})})]})},y=function(){return Object(m.jsxs)(r.a,{basename:"/",children:[Object(m.jsx)(o.a,{exact:!0,path:"/",component:v}),Object(m.jsx)(o.a,{exact:!0,path:"/:id",component:w})]})};i.a.render(Object(m.jsx)(a.a.StrictMode,{children:Object(m.jsx)(y,{})}),document.getElementById("root"))}},[[57,1,2]]]);
//# sourceMappingURL=main.03cd27a3.chunk.js.map