(this["webpackJsonp@coreui/coreui-free-react-admin-template"]=this["webpackJsonp@coreui/coreui-free-react-admin-template"]||[]).push([[18],{621:function(e,t,n){"use strict";t.a="http://localhost:81"},725:function(e,t,n){"use strict";n.r(t);var a=n(159),c=n(160),s=n(162),r=n(161),i=n(20),l=n(1),o=n.n(l),d=n(622),j=n.n(d),h=n(621),u=n(620),m=function(e){Object(s.a)(n,e);var t=Object(r.a)(n);function n(e){var c;Object(a.a)(this,n),(c=t.call(this,e)).submitHandler=function(e){e.preventDefault(),j.a.post("".concat(h.a)+"/api/v1/user",{username:c.state.username,email:c.state.email,password:c.state.password,role:c.state.role,description:c.state.description}).then((function(){window.location.href="".concat(window.origin,"/#/user")}))},c.handleChange=function(e){c.setState(e)};var s=localStorage.getItem("uuid");return""!=s&&void 0!=s||(window.location.href="".concat(window.origin,"/#/login")),c.state={rolesOption:[],username:"",email:"",password:"",role:"",description:""},c}return Object(c.a)(n,[{key:"componentDidMount",value:function(){var e=this;j.a.get("".concat(h.a)+"/api/v1/role").then((function(t){e.setState({rolesOption:t.data.data})})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return Object(i.jsx)(u.f,{children:Object(i.jsx)(u.g,{children:Object(i.jsxs)(u.u,{children:[Object(i.jsx)(u.N,{children:Object(i.jsx)(u.k,{className:"md-12 xs-12",children:Object(i.jsxs)(u.v,{children:[Object(i.jsxs)(u.H,{children:["Username ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)(u.C,{className:"form-control",placeholder:"Enter Username",name:"username",onChange:function(t){return e.handleChange({username:t.target.value})}})]})})}),Object(i.jsx)(u.N,{children:Object(i.jsx)(u.k,{className:"md-12 xs-12",children:Object(i.jsxs)(u.v,{children:[Object(i.jsx)(u.H,{children:"Email"}),Object(i.jsx)(u.C,{className:"form-control",name:"email",placeholder:"Enter Email",onChange:function(t){return e.handleChange({email:t.target.value})}})]})})}),Object(i.jsx)(u.N,{children:Object(i.jsx)(u.k,{className:"md-12 xs-12",children:Object(i.jsxs)(u.v,{children:[Object(i.jsxs)(u.H,{children:["Password ",Object(i.jsx)("span",{className:"text-danger",children:"*"})]}),Object(i.jsx)(u.C,{className:"form-control",placeholder:"Enter Password",name:"password",onChange:function(t){return e.handleChange({password:t.target.value})}})]})})}),Object(i.jsx)(u.N,{children:Object(i.jsx)(u.k,{className:"md-12 xs-12",children:Object(i.jsxs)(u.v,{children:[Object(i.jsx)(u.H,{children:"Description"}),Object(i.jsx)(u.ab,{placeholder:"Enter Description",name:"description",onChange:function(t){return e.handleChange({description:t.target.value})}})]})})}),Object(i.jsx)(u.N,{children:Object(i.jsx)(u.k,{className:"md-12 xs-12",children:Object(i.jsxs)(u.v,{children:[Object(i.jsx)(u.e,{to:"/user",className:"float-right",children:"Cancel"}),Object(i.jsx)(u.e,{type:"submit",onClick:this.submitHandler,className:"float-right",children:"Save Change"})]})})})]})})})}}]),n}(o.a.Component);t.default=m}}]);
//# sourceMappingURL=18.3ca82174.chunk.js.map