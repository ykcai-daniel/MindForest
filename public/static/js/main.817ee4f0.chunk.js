(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{10:function(e,t,a){e.exports=a.p+"static/media/1.450a123f.jpeg"},13:function(e,t,a){},16:function(e,t,a){e.exports=a(29)},25:function(e,t,a){},27:function(e,t,a){},29:function(e,t,a){"use strict";a.r(t);var n=a(1),l=a.n(n),r=a(15),s=a.n(r),c=a(2),o=a(3),i=a(5),m=a(4),u=a(6),p=a(11),d=a(0),f=a(9),b=a(8),h=a.n(b),v=(a(13),a(10)),E=a.n(v),g=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSubmit=function(t){t.preventDefault(),console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/signup",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email,username:e.state.username,password:e.state.password})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status||console.log("signup failed!")}).catch(function(e){console.log(e)});var a=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{e.state.data;!0===a.test(e.state.email)&&(window.location="/#/signup/verify")}catch(t){e.state.data;!1===a.test(e.state.email)&&(window.location="/")}},e.changeHandle=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.state={username:"",email:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.username,a=e.email,n=e.password,r=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Sign Up")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-person-circle"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===r.email}),type:"text",name:"username",value:t,onChange:this.changeHandle,placeholder:"username"}),""===r.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===r.email}),type:"text",name:"email",value:a,onChange:this.changeHandle,placeholder:"email address"}),""===r.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===r.password}),type:"password",name:"password",value:n,onChange:this.changeHandle,placeholder:"password"}),""===r.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Sign up"))))}}]),t}(n.Component),y=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3 "}),l.a.createElement("div",{className:"col-md-6 "},l.a.createElement(g,null)),l.a.createElement("div",{className:"col-md-3 "}))}}]),t}(n.Component),N=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{class:"container"})}}]),t}(n.Component),j=(a(25),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("nav",{className:"navbar navbar-expand-md navbar-light bg-faded"},l.a.createElement("div",{className:"collapse navbar-collapse"},l.a.createElement("ul",{className:"nav navbar-nav navbar-right"},l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{className:"nav-link",to:"/"},"Mind Forest")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{className:"nav-link",to:"/signup"},"Sign up")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{className:"nav-link",to:"/login"},"Login")),l.a.createElement("li",{className:"nav-item"},l.a.createElement(p.b,{className:"nav-link",to:"/forget"},"Forget password")))))}}]),t}(n.Component)),O=function(e){function t(e){var a;return Object(c.a)(this,t),(a=Object(i.a)(this,Object(m.a)(t).call(this,e))).onSubmit=function(e){e.preventDefault(),console.log(a.state),a.setState({errors:a.state}),fetch("http://localhost:8080/login",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:a.state.email,password:a.state.password})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status||console.log("login failed!")}).catch(function(e){console.log(e)})},a.changeHandle=function(e){a.setState(Object(f.a)({},e.target.name,e.target.value))},a.state={email:"",password:"",errors:{}},a}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Login")),l.a.createElement("div",{className:"clearfix"},l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===n.email}),type:"text",name:"email",value:t,onChange:this.changeHandle,placeholder:"email address"}),""===n.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):"")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===n.password}),type:"password",name:"password",value:a,onChange:this.changeHandle,placeholder:"password"}),""===n.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Login"))))}}]),t}(n.Component),w=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(O,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),t}(n.Component),S=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSubmit=function(t){t.preventDefault(),console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/forget",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status||console.log("Email wrong!")}).catch(function(e){console.log(e)});var a=/^([A-Za-z0-9_\-\.\u4e00-\u9fa5])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,12})$/;try{e.state.data;!0===a.test(e.state.email)&&(window.location="/#/forget/verify")}catch(t){e.state.data;!1===a.test(e.state.email)&&(window.location="/")}},e.changeHandle=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.state={email:"",errors:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.email,a=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Forget Password")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===a.email}),type:"text",name:"email",value:t,onChange:this.changeHandle,placeholder:"email address"}),""===a.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"Email address should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Send verification email"),l.a.createElement("hr",null))))}}]),t}(n.Component),C=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(S,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),t}(n.Component),x=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSubmit=function(t){console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/signup/verify",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({verification:e.state.verification})}).then(function(e){200===e.status||console.log("signup verification failed!")}).catch(function(e){console.log(e)})},e.changeHandle=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.state={verification:"",errors:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.verification,a=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Verify")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===a.email}),type:"text",name:"verification",value:t,onChange:this.changeHandle,placeholder:"verification"}),""===a.email?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"verification should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Verify"))))}}]),t}(n.Component),k=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(x,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),t}(n.Component),z=function(e){function t(){var e;return Object(c.a)(this,t),(e=Object(i.a)(this,Object(m.a)(t).call(this))).onSubmit=function(t){t.preventDefault(),console.log(e.state),e.setState({errors:e.state}),fetch("http://localhost:8080/forget/verify",{method:"post",headers:{"Content-Type":"application/json"},body:JSON.stringify({verification:e.state.verification,password:e.state.password})}).then(function(e){console.log("\u670d\u52a1\u5668",e),200===e.status||console.log("verification wrong!")}).catch(function(e){console.log(e)})},e.changeHandle=function(t){e.setState(Object(f.a)({},t.target.name,t.target.value))},e.state={verification:"",password:"",errors:{}},e}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){var e=this.state,t=e.verification,a=e.password,n=e.errors;return l.a.createElement("div",{className:"form-horizontal"},l.a.createElement("form",{onSubmit:this.onSubmit},l.a.createElement("div",{className:"logo-wrapper"},l.a.createElement("img",{src:E.a,className:"logo",alt:"\u80cc\u666f\u56fe"}),l.a.createElement("span",{className:"title"},"Verify")),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-envelope-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===n.verification}),type:"text",name:"verification",value:t,onChange:this.changeHandle,placeholder:"verification"}),""===n.verification?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"verification should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("i",{class:"bi bi-key-fill"}),l.a.createElement("input",{className:h()("form-control",{"is-invalid":""===n.password}),type:"password",name:"password",value:a,onChange:this.changeHandle,placeholder:"new password"}),""===n.password?l.a.createElement("span",{style:{color:"red",fontSize:"10px"}},"New password should not be empty."):""),l.a.createElement("div",{className:"form-group"},l.a.createElement("button",{class:"btn btn-primary",type:"submit",className:"submitbutton"},"Verify"))))}}]),t}(n.Component),H=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-md-3"}),l.a.createElement("div",{className:"col-md-6"},l.a.createElement(z,null)),l.a.createElement("div",{className:"col-md-3"}))}}]),t}(n.Component),J=(a(27),function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){return l.a.createElement("div",{className:"bg"},l.a.createElement(p.a,null,l.a.createElement(j,null),l.a.createElement(d.c,null,l.a.createElement(d.a,{exact:!0,path:"/signup",element:l.a.createElement(y,null)}),l.a.createElement(d.a,{exact:!0,path:"/login",element:l.a.createElement(w,null)}),l.a.createElement(d.a,{exact:!0,path:"/forget",element:l.a.createElement(C,null)}),l.a.createElement(d.a,{exact:!0,path:"/signup/verify",element:l.a.createElement(k,null)}),l.a.createElement(d.a,{exact:!0,path:"/forget/verify",element:l.a.createElement(H,null)}),l.a.createElement(d.a,{exact:!0,path:"/",element:l.a.createElement(N,null)}))))}}]),t}(n.Component));s.a.render(l.a.createElement(J,null),document.getElementById("root"))}},[[16,2,1]]]);
//# sourceMappingURL=main.817ee4f0.chunk.js.map