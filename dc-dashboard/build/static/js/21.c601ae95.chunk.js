(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[21],{743:function(e,n,a){"use strict";a.r(n);var t=a(20),c=a(1),o=a.n(c),r=a(50),s=a(19),i=a(620),l=o.a.lazy((function(){return Promise.all([a.e(0),a.e(11)]).then(a.bind(null,723))})),m=o.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(20)]).then(a.bind(null,724))})),d=o.a.lazy((function(){return Promise.all([a.e(0),a.e(18)]).then(a.bind(null,725))})),u=o.a.lazy((function(){return Promise.all([a.e(0),a.e(19)]).then(a.bind(null,726))})),b=o.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(16)]).then(a.bind(null,727))})),p=o.a.lazy((function(){return Promise.all([a.e(0),a.e(15)]).then(a.bind(null,728))})),h=o.a.lazy((function(){return Promise.all([a.e(0),a.e(17)]).then(a.bind(null,729))})),j=o.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(3),a.e(13)]).then(a.bind(null,730))})),x=o.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(12)]).then(a.bind(null,731))})),O=o.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(14)]).then(a.bind(null,732))})),f=[{path:"/",exact:!0,name:"Dashboard",component:l},{path:"/home",name:"Dashboard",component:l},{path:"/user",exact:!0,name:"Users",component:m},{path:"/user/create",name:"Create User",component:d},{path:"/user/edit/:id",name:"Update User",component:u},{path:"/role",exact:!0,name:"Roles",component:b},{path:"/role/create",name:"Create Roles",component:p},{path:"/role/edit/:id",name:"Update Roles",component:h},{path:"/category",exact:!0,name:"Categories",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(22)]).then(a.bind(null,733))}))},{path:"/category/create",name:"Creaate Categories",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(23)]).then(a.bind(null,734))}))},{path:"/category/edit/:id",name:"Update Categories",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(24)]).then(a.bind(null,735))}))},{path:"/post",exact:!0,name:"Posts",component:j},{path:"/post/create",name:"Create Posts",component:x},{path:"/post/edit/:id",name:"Update Posts",component:O},{path:"/tag",exact:!0,name:"Tags",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(2),a.e(28)]).then(a.bind(null,736))}))},{path:"/tag/create",name:"Create Tags",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(27)]).then(a.bind(null,737))}))},{path:"/tag/edit/:id",name:"Update Tags",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(29)]).then(a.bind(null,738))}))},{path:"/menu",exact:!0,name:"Menus",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(25)]).then(a.bind(null,739))}))},{path:"/menu/edit/:id",name:"Update Menus",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(33),a.e(26)]).then(a.bind(null,740))}))},{path:"/company",exact:!0,name:"Companies",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(3),a.e(9)]).then(a.bind(null,741))}))},{path:"/company/edit/:id",name:"Update Companies",component:o.a.lazy((function(){return Promise.all([a.e(0),a.e(4),a.e(10)]).then(a.bind(null,742))}))}],v=Object(t.jsx)("div",{className:"pt-3 text-center",children:Object(t.jsx)("div",{className:"sk-spinner sk-spinner-pulse"})}),y=function(){return Object(t.jsx)("main",{className:"c-main",children:Object(t.jsx)(i.l,{fluid:!0,children:Object(t.jsx)(c.Suspense,{fallback:v,children:Object(t.jsx)(s.c,{children:f.map((function(e,n){return e.component&&Object(t.jsx)(s.a,{path:e.path,exact:e.exact,name:e.name,render:function(n){return Object(t.jsx)(i.s,{children:Object(t.jsx)(e.component,Object(r.a)({},n))})}},n)}))})})})})},N=o.a.memo(y),g=function(){return Object(t.jsxs)(i.t,{fixed:!1,children:[Object(t.jsxs)("div",{children:[Object(t.jsx)("a",{href:"https://coreui.io",target:"_blank",rel:"noopener noreferrer"}),Object(t.jsx)("span",{className:"ml-1",children:"\xa9 2020 creativeLabs."})]}),Object(t.jsxs)("div",{className:"mfs-auto",children:[Object(t.jsx)("span",{className:"mr-1",children:"Powered by"}),Object(t.jsx)("a",{href:"https://coreui.io/react",target:"_blank",rel:"noopener noreferrer",children:"DC Version 1.0"})]})]})},C=o.a.memo(g),P=a(166),w=a(623),z=function(){var e=Object(P.b)(),n=Object(P.c)((function(e){return e.sidebarShow}));return Object(t.jsxs)(i.w,{withSubheader:!0,children:[Object(t.jsx)(i.bb,{inHeader:!0,className:"ml-md-3 d-lg-none",onClick:function(){var a=!![!1,"responsive"].includes(n)||"responsive";e({type:"set",sidebarShow:a})}}),Object(t.jsx)(i.bb,{inHeader:!0,className:"ml-3 d-md-down-none",onClick:function(){var a=![!0,"responsive"].includes(n)&&"responsive";e({type:"set",sidebarShow:a})}}),Object(t.jsx)(i.x,{className:"mx-auto d-lg-none",to:"/",children:Object(t.jsx)(w.a,{name:"logo",height:"48",alt:"Logo"})}),Object(t.jsx)(i.y,{className:"d-md-down-none mr-auto",children:Object(t.jsx)(i.z,{className:"px-3",children:Object(t.jsx)(i.A,{to:"/home",children:"Dashboard"})})}),Object(t.jsx)(i.y,{className:"px-3",children:Object(t.jsx)(S,{})}),Object(t.jsx)(i.W,{className:"px-3 justify-content-between",children:Object(t.jsx)(i.d,{className:"border-0 c-subheader-nav m-0 px-0 px-md-3",routes:f})})]})},S=function(){return Object(t.jsxs)(i.o,{inNav:!0,className:"c-header-nav-items mx-2",direction:"down",children:[Object(t.jsx)(i.r,{className:"c-header-nav-link",caret:!1,children:Object(t.jsx)("div",{className:"c-avatar",children:Object(t.jsx)(i.B,{height:50,src:"avatars/profile.png",className:"c-avatar-img",alt:"admin@bootstrapmaster.com"})})}),Object(t.jsx)(i.q,{className:"pt-0",placement:"bottom-end",children:Object(t.jsxs)(i.p,{onClick:function(){return localStorage.clear(),void window.location.reload()},children:[Object(t.jsx)(w.a,{name:"cil-lock-locked",className:"mfe-2"}),"Signout Account"]})})]})},k=[{_tag:"CSidebarNavItem",name:"Dashboard",to:"/home",icon:Object(t.jsx)(w.a,{name:"cil-home",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info"}},{_tag:"CSidebarNavTitle",_children:["Components"]},{_tag:"CSidebarNavDropdown",name:"Authentications",route:"/authentication",icon:"cil-user",_children:[{_tag:"CSidebarNavItem",name:"Users",to:"/user"}]},{_tag:"CSidebarNavItem",name:"Companies",to:"/company",icon:Object(t.jsx)(w.a,{name:"cil-speedometer",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info"}},{_tag:"CSidebarNavItem",name:"Posts",to:"/post",icon:Object(t.jsx)(w.a,{name:"cil-list",customClasses:"c-sidebar-nav-icon"}),badge:{color:"info"}}],U=function(){var e=Object(P.b)(),n=Object(P.c)((function(e){return e.sidebarShow}));return Object(t.jsxs)(i.P,{show:n,onShowChange:function(n){return e({type:"set",sidebarShow:n})},children:[Object(t.jsx)(i.R,{children:Object(t.jsx)(i.m,{items:k,components:{CSidebarNavDivider:i.S,CSidebarNavDropdown:i.T,CSidebarNavItem:i.U,CSidebarNavTitle:i.V}})}),Object(t.jsx)(i.Q,{className:"c-d-md-down-none"})]})},_=o.a.memo(U);n.default=function(){return Object(t.jsxs)("div",{className:"c-app c-default-layout",children:[Object(t.jsx)(_,{}),Object(t.jsxs)("div",{className:"c-wrapper",children:[Object(t.jsx)(z,{}),Object(t.jsx)("div",{className:"c-body",children:Object(t.jsx)(N,{})}),Object(t.jsx)(C,{})]})]})}}}]);
//# sourceMappingURL=21.c601ae95.chunk.js.map