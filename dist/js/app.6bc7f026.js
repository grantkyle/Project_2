<<<<<<< HEAD:dist/js/app.4de1f741.js
(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&m.push(s[r][0]),s[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==s[c]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"015e":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("85ec"),s=n.n(a);s.a},"04b7":function(t,e,n){"use strict";var a=n("3c89"),s=n.n(a);s.a},"3c89":function(t,e,n){},"567a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.authenticated?n("router-link",{attrs:{to:"/logout",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e(),n("router-view",{on:{authenticated:t.setAuthenticated}})],1)},o=[],r=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,mockAccount:{username:"secureuser",password:"securepassword"}}},mounted:function(){this.authenticated||(console.log("this: ",this.$router),this.$router.replace({name:"login"}))},methods:{setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1}}}),i=r,c=(n("034f"),n("2877")),l=Object(c["a"])(i,s,o,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("img",{staticClass:"logo",attrs:{src:n("ca48"),alt:"c19 logo"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{id:"bubbles",type:"text",name:"username",placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{id:"bubbles",type:"password",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),a("button",{attrs:{id:"bubbles-two",type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")]),a("router-link",{attrs:{to:"/signUp",id:"new-login"}},[t._v("Create New Login")]),a("h6",{staticClass:"covid"},[t._v("A COVID-19 PATIENT DATABASE")])],1)},p=[],v={name:"login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!==this.input.username&&""!==this.input.password?this.input.username===this.$parent.mockAccount.username&&this.input.password===this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}},f=v,h=(n("9ce0"),Object(c["a"])(f,m,p,!1,null,null,null)),_=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"secure"}},[a("img",{staticClass:"logo-two",attrs:{src:n("ca48"),alt:"c19 logo"}}),a("div",[a("h1",[t._v("Patient List - "+t._s(t.search))]),a("h4",[t._v("Patient Search")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"bubbles",type:"text",placeholder:"Patient Name"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("h5",[t._v("If patient not found")]),a("router-link",{attrs:{to:"/new_patient",id:"new-patient"}},[t._v("Add New Patient")])],1),t.search?a("div",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table-hover"},[a("tbody",[a("td",[t._v(t._s(t.patients.id))]),a("td",[t._v(t._s(t.patients.name))]),a("td",[t._v(t._s(t.patients.lastName))]),a("td",[t._v(t._s(t.patients.phone_number))]),a("td",[t._v(t._s(t.patients.city))]),a("td",[t._v(t._s(t.patients.symptoms))]),a("td",[t._v(t._s(t.patients.infected))]),a("td",[t._v(t._s(t.patients.treatment))]),a("td",[t._v(t._s(t.patients.admitted))]),a("td",[t._v(t._s(t.patients.doctor))])])])])]):t._e(),t.flag?t._e():a("div",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table-hover"},[t._m(0),a("tbody",t._l(t.filteredPatients,(function(e){return a("tr",{key:e.id,attrs:{"data-id":e.id}},[a("td",[a("button",{staticClass:"btn btn-success",attrs:{id:e.id},on:{click:function(n){return t.deletePatient(e.id)}}},[t._v("Delete Patient "+t._s(e.id))])]),a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.lastName))]),a("td",[t._v(t._s(e.phone_number))]),a("td",[t._v(t._s(e.city))]),a("td",[t._v(t._s(e.symptoms))]),a("td",[t._v(t._s(e.infected))]),a("td",[t._v(t._s(e.treatment))]),a("td",[t._v(t._s(e.admitted))]),a("td",[t._v(t._s(e.doctor))])])})),0)])])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td"),n("th",[t._v("Id")]),n("th",[t._v("First Name")]),n("th",[t._v("Last Name")]),n("th",[t._v("Phone Number")]),n("th",[t._v("City")]),n("th",[t._v("Symptoms")]),n("th",[t._v("Infected")]),n("th",[t._v("Treatment")]),n("th",[t._v("Admitted")]),n("th",[t._v("Doctor")])])])}],w=(n("4de4"),n("b0c0"),n("4d63"),n("25f0"),n("466d"),n("841c"),n("bc3a")),y=n.n(w),C={name:"Patients",data:function(){return{patients:[],results:"",search:"",info:null,allPatients:[],searchData:"",flag:!1}},computed:{filteredPatients:function(){var t=this,e=this.allPatients.filter((function(e){return e.name.match(new RegExp(t.search,"i"))}));return e.sort((function(t,e){return t.name-e.name}))}},mounted:function(){var t=this;y.a.get("/api/patients").then((function(e){t.info=e.data,t.allPatients=t.info})).catch((function(t){console.log("Error: ",t)}))},patientSearch:function(){var t=this;y.a.get("/api/patients").then((function(e){return t.info=e.data}));var e=this.info,n=e.filter((function(e){return e.name.toLowerCase()===t.search.toLowerCase()}));this.patients=n,this.flag=!0},methods:{deletePatient:function(t){y.a.delete("/api/patient/".concat(t)).then((function(t){alert("Patient Deleted!"),location.reload("/")})).catch((function(t){console.log("error: ",t)}))}}},P=C,x=(n("04b7"),Object(c["a"])(P,g,b,!1,null,null,null)),N=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-center-content"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card"},[n("router-link",{attrs:{to:"/secure",id:"secureButton"}},[t._v("Back to Patient List")]),n("div",{staticClass:"card-header"},[t._v(" New Patient "),n("strong",[t._v(": "+t._s(t.name)+" "+t._s(t.lastName))])]),n("div",{staticClass:"card-body",attrs:{id:"myapp"}},[n("form",{on:{submit:t.addPatient}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_number,expression:"phone_number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"(XXX) XXX-XXXX",template:"template"},domProps:{value:t.phone_number},on:{input:function(e){e.target.composing||(t.phone_number=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.symptoms,expression:"symptoms"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Symptoms"},domProps:{value:t.symptoms},on:{input:function(e){e.target.composing||(t.symptoms=e.target.value)}}}),n("div",{staticClass:"infected-box"},[n("b-form-group",{attrs:{label:"Infected?"}},[n("b-form-radio",{attrs:{name:"some-radios",value:"true"},model:{value:t.infected,callback:function(e){t.infected=e},expression:"infected"}},[t._v("Yes")]),n("b-form-radio",{attrs:{name:"some-radios",value:"false"},model:{value:t.infected,callback:function(e){t.infected=e},expression:"infected"}},[t._v("No")])],1),n("div",{staticClass:"mt-3"},[t._v(" Selected: "),n("strong",[t._v(t._s(t.infected))])])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.treatment,expression:"treatment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Treatment"},domProps:{value:t.treatment},on:{input:function(e){e.target.composing||(t.treatment=e.target.value)}}}),n("div",{staticClass:"admitted-box"},[n("b-form-group",{attrs:{label:"Admitted to Hospital?"}},[n("b-form-radio",{attrs:{name:"admitted-radio",value:"true"},model:{value:t.admitted,callback:function(e){t.admitted=e},expression:"admitted"}},[t._v("Yes")]),n("b-form-radio",{attrs:{name:"admitted-radio",value:"false"},model:{value:t.admitted,callback:function(e){t.admitted=e},expression:"admitted"}},[t._v("No")])],1),n("div",{staticClass:"mt-3"},[t._v(" Selected: "),n("strong",[t._v(t._s(t.admitted))])])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor,expression:"doctor"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Doctor Name"},domProps:{value:t.doctor},on:{input:function(e){e.target.composing||(t.doctor=e.target.value)}}}),n("button",{staticClass:"btn btn-success",attrs:{id:"btn"}},[t._v("Submit New Patient")])])])],1)])])])},$=[],O={mounted:function(){},props:["template"],data:function(){return{name:"",lastName:"",phone_number:"",city:"",symptoms:"",infected:"",treatment:"",admitted:"",doctor:""}},watch:{phone_number:function(){this.phone_number=this.phone_number.replace(/[^0-9]/g,"").replace(/^(\d{3})?(\d{3})?(\d{4})/g,"($1) $2-$3")}},methods:{addPatient:function(t){var e=this;t.preventDefault();var n={name:this.name,lastName:this.lastName,phone_number:this.phone_number,city:this.city,symptoms:this.symptoms,infected:this.infected,treatment:this.treatment,admitted:this.admitted,doctor:this.doctor};y.a.post("/api/patient",n).then((function(t){console.log("response: ",t),alert("New Patient Added!"),e.$router.push("/secure"),console.log("Success")})).catch((function(t){console.log("error: ",t)}))}}},j=O,A=(n("d317"),Object(c["a"])(j,k,$,!1,null,null,null)),S=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("img",{staticClass:"logo",attrs:{src:n("ca48"),alt:"c19 logo"}}),a("h3",[t._v("You are now logged out.")]),a("router-link",{staticClass:"return",attrs:{to:"/",replace:""}},[t._v("Return to login")]),t._m(0)],1)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"cdc"},[t._v(" For the latest COVID-19 guidelines and information please visit "),n("a",{attrs:{href:"https://www.cdc.gov/"}},[t._v("CDC.gov")])])}],D={name:"Patients",data:function(){return{}},mounted:function(){},methods:{logout:function(){}}},X=D,T=(n("88ee"),Object(c["a"])(X,E,L,!1,null,null,null)),U=T.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-center-content"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card"},[n("router-link",{attrs:{to:"/"}},[t._v("Back to Login Page")]),n("div",{staticClass:"card-header"},[t._v(" New User Login "),n("strong",[t._v(": "+t._s(t.newUserID))])]),n("div",{staticClass:"card-body",attrs:{id:"myNewLogin"}},[n("form",{on:{submit:t.SignUp}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control bubbles-three",attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control bubbles-three",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{staticClass:"btn btn-success"},[t._v("Submit")])])])],1)])])])},B=[],M={mounted:function(){},data:function(){return{email:"",password:""}},methods:{SignUp:function(){var t={email:this.email,password:this.password};y.a.post("/api/user",t).then((function(t){console.log("userResponse: ",t),alert("New User Added!")})).catch((function(t){console.log(t)}))}}},F=M,R=(n("f8c2"),Object(c["a"])(F,I,B,!1,null,null,null)),Y=R.exports,J=[{path:"/",component:_,name:"login"},{path:"/secure",component:N,name:"secure"},{path:"/new_patient",component:S,name:"new_patient"},{path:"/signUp",component:Y,name:"signUp"},{path:"/logout",component:U,name:"logout"}],V=n("a7fe"),H=n.n(V),q=n("5f5b");n("f9e3"),n("2dd8");a["default"].use(H.a,y.a),a["default"].use(q["a"]),a["default"].use(d["a"]);var z=new d["a"]({routes:J});a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(u)},router:z}).$mount("#app")},"85ec":function(t,e,n){},"88ee":function(t,e,n){"use strict";var a=n("bf63"),s=n.n(a);s.a},"9ce0":function(t,e,n){"use strict";var a=n("d64c"),s=n.n(a);s.a},bf63:function(t,e,n){},ca48:function(t,e,n){t.exports=n.p+"img/c19-logo.abdf39cb.jpg"},d317:function(t,e,n){"use strict";var a=n("567a"),s=n.n(a);s.a},d64c:function(t,e,n){},f8c2:function(t,e,n){"use strict";var a=n("015e"),s=n.n(a);s.a}});
//# sourceMappingURL=app.4de1f741.js.map
=======
(function(t){function e(e){for(var a,r,i=e[0],c=e[1],l=e[2],d=0,m=[];d<i.length;d++)r=i[d],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&m.push(o[r][0]),o[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(m.length)m.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,i=1;i<n.length;i++){var c=n[i];0!==o[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},o={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"015e":function(t,e,n){},"034f":function(t,e,n){"use strict";var a=n("85ec"),o=n.n(a);o.a},"04b7":function(t,e,n){"use strict";var a=n("3c89"),o=n.n(a);o.a},"3c89":function(t,e,n){},"567a":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t.authenticated?n("router-link",{attrs:{to:"/logout",replace:""},nativeOn:{click:function(e){return t.logout()}}},[t._v("Logout")]):t._e(),n("router-view",{on:{authenticated:t.setAuthenticated}})],1)},s=[],r=(n("ac1f"),n("5319"),{name:"App",data:function(){return{authenticated:!1,mockAccount:{username:"secureuser",password:"securepassword"}}},mounted:function(){this.authenticated||(console.log("this: ",this.$router),this.$router.replace({name:"login"}))},methods:{setAuthenticated:function(t){this.authenticated=t},logout:function(){this.authenticated=!1}}}),i=r,c=(n("034f"),n("2877")),l=Object(c["a"])(i,o,s,!1,null,null,null),u=l.exports,d=n("8c4f"),m=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("img",{staticClass:"logo",attrs:{src:n("ca48"),alt:"c19 logo"}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.username,expression:"input.username"}],attrs:{id:"bubbles",type:"text",name:"username",placeholder:"Username"},domProps:{value:t.input.username},on:{input:function(e){e.target.composing||t.$set(t.input,"username",e.target.value)}}}),a("input",{directives:[{name:"model",rawName:"v-model",value:t.input.password,expression:"input.password"}],attrs:{id:"bubbles",type:"password",name:"password",placeholder:"Password"},domProps:{value:t.input.password},on:{input:function(e){e.target.composing||t.$set(t.input,"password",e.target.value)}}}),a("button",{attrs:{id:"bubbles-two",type:"button"},on:{click:function(e){return t.login()}}},[t._v("Login")]),a("router-link",{attrs:{to:"/signUp",id:"new-login"}},[t._v("Create New Login")]),a("h6",{staticClass:"covid"},[t._v("A COVID-19 PATIENT DATABASE")])],1)},p=[],v={name:"login",data:function(){return{input:{username:"",password:""}}},methods:{login:function(){""!==this.input.username&&""!==this.input.password?this.input.username===this.$parent.mockAccount.username&&this.input.password===this.$parent.mockAccount.password?(this.$emit("authenticated",!0),this.$router.replace({name:"secure"})):console.log("The username and / or password is incorrect"):console.log("A username and password must be present")}}},f=v,h=(n("9ce0"),Object(c["a"])(f,m,p,!1,null,null,null)),_=h.exports,g=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"secure"}},[a("img",{staticClass:"logo-two",attrs:{src:n("ca48"),alt:"c19 logo"}}),a("div",[a("h1",[t._v("Patient List - "+t._s(t.search))]),a("h4",[t._v("Patient Search")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.search,expression:"search"}],attrs:{id:"bubbles",type:"text",placeholder:"Patient Name"},domProps:{value:t.search},on:{input:function(e){e.target.composing||(t.search=e.target.value)}}}),a("h5",[t._v("If patient not found")]),a("router-link",{attrs:{to:"/new_patient",id:"new-patient"}},[t._v("Add New Patient")])],1),t.search?a("div",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table-hover"},[a("tbody",[a("td",[t._v(t._s(t.patients.id))]),a("td",[t._v(t._s(t.patients.name))]),a("td",[t._v(t._s(t.patients.lastName))]),a("td",[t._v(t._s(t.patients.phone_number))]),a("td",[t._v(t._s(t.patients.city))]),a("td",[t._v(t._s(t.patients.symptoms))]),a("td",[t._v(t._s(t.patients.infected))]),a("td",[t._v(t._s(t.patients.treatment))]),a("td",[t._v(t._s(t.patients.admitted))]),a("td",[t._v(t._s(t.patients.doctor))])])])])]):t._e(),t.flag?t._e():a("div",[a("div",{staticClass:"table-responsive"},[a("table",{staticClass:"table-hover"},[t._m(0),a("tbody",t._l(t.filteredPatients,(function(e){return a("tr",{key:e.id,attrs:{"data-id":e.id}},[a("td",[a("button",{staticClass:"btn btn-success",attrs:{id:e.id},on:{click:function(n){return t.deletePatient(e.id)}}},[t._v("Delete Patient "+t._s(e.id))])]),a("td",[t._v(t._s(e.id))]),a("td",[t._v(t._s(e.name))]),a("td",[t._v(t._s(e.lastName))]),a("td",[t._v(t._s(e.phone_number))]),a("td",[t._v(t._s(e.city))]),a("td",[t._v(t._s(e.symptoms))]),a("td",[t._v(t._s(e.infected))]),a("td",[t._v(t._s(e.treatment))]),a("td",[t._v(t._s(e.admitted))]),a("td",[t._v(t._s(e.doctor))])])})),0)])])])])},b=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("thead",[n("tr",[n("td"),n("th",[t._v("Id")]),n("th",[t._v("First Name")]),n("th",[t._v("Last Name")]),n("th",[t._v("Phone Number")]),n("th",[t._v("City")]),n("th",[t._v("Symptoms")]),n("th",[t._v("Infected")]),n("th",[t._v("Treatment")]),n("th",[t._v("Admitted")]),n("th",[t._v("Doctor")])])])}],w=(n("4de4"),n("b0c0"),n("4d63"),n("25f0"),n("466d"),n("841c"),n("bc3a")),y=n.n(w),C={name:"Patients",data:function(){return{patients:[],results:"",search:"",info:null,allPatients:[],searchData:"",flag:!1}},computed:{filteredPatients:function(){var t=this,e=this.allPatients.filter((function(e){return e.name.match(new RegExp(t.search,"i"))}));return e.sort((function(t,e){return t.name-e.name}))}},mounted:function(){var t=this;y.a.get("/api/patients").then((function(e){t.info=e.data,t.allPatients=t.info})).catch((function(t){console.log("Error: ",t)}))},patientSearch:function(){var t=this;y.a.get("/api/patients").then((function(e){return t.info=e.data}));var e=this.info,n=e.filter((function(e){return e.name.toLowerCase()===t.search.toLowerCase()}));this.patients=n,this.flag=!0},methods:{deletePatient:function(t){y.a.delete("/api/patient/".concat(t)).then((function(t){alert("Patient Deleted!"),location.reload("/")})).catch((function(t){console.log("error: ",t)}))}}},P=C,x=(n("04b7"),Object(c["a"])(P,g,b,!1,null,null,null)),N=x.exports,k=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-center-content"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card"},[n("router-link",{attrs:{to:"/secure",id:"secureButton"}},[t._v("Back to Patient List")]),n("div",{staticClass:"card-header"},[t._v(" New Patient "),n("strong",[t._v(": "+t._s(t.name)+" "+t._s(t.lastName))])]),n("div",{staticClass:"card-body",attrs:{id:"myapp"}},[n("form",{on:{submit:t.addPatient}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.name,expression:"name"}],staticClass:"form-control",attrs:{type:"text",placeholder:"First Name"},domProps:{value:t.name},on:{input:function(e){e.target.composing||(t.name=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.lastName,expression:"lastName"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Last Name"},domProps:{value:t.lastName},on:{input:function(e){e.target.composing||(t.lastName=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.phone_number,expression:"phone_number"}],staticClass:"form-control",attrs:{type:"text",placeholder:"(XXX) XXX-XXXX",template:"template"},domProps:{value:t.phone_number},on:{input:function(e){e.target.composing||(t.phone_number=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.city,expression:"city"}],staticClass:"form-control",attrs:{type:"text",placeholder:"City"},domProps:{value:t.city},on:{input:function(e){e.target.composing||(t.city=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.symptoms,expression:"symptoms"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Symptoms"},domProps:{value:t.symptoms},on:{input:function(e){e.target.composing||(t.symptoms=e.target.value)}}}),n("div",{staticClass:"infected-box"},[n("b-form-group",{attrs:{label:"Infected?"}},[n("b-form-radio",{attrs:{name:"some-radios",value:"true"},model:{value:t.infected,callback:function(e){t.infected=e},expression:"infected"}},[t._v("Yes")]),n("b-form-radio",{attrs:{name:"some-radios",value:"false"},model:{value:t.infected,callback:function(e){t.infected=e},expression:"infected"}},[t._v("No")])],1),n("div",{staticClass:"mt-3"},[t._v(" Selected: "),n("strong",[t._v(t._s(t.infected))])])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.treatment,expression:"treatment"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Treatment"},domProps:{value:t.treatment},on:{input:function(e){e.target.composing||(t.treatment=e.target.value)}}}),n("div",{staticClass:"admitted-box"},[n("b-form-group",{attrs:{label:"Admitted to Hospital?"}},[n("b-form-radio",{attrs:{name:"admitted-radio",value:"true"},model:{value:t.admitted,callback:function(e){t.admitted=e},expression:"admitted"}},[t._v("Yes")]),n("b-form-radio",{attrs:{name:"admitted-radio",value:"false"},model:{value:t.admitted,callback:function(e){t.admitted=e},expression:"admitted"}},[t._v("No")])],1),n("div",{staticClass:"mt-3"},[t._v(" Selected: "),n("strong",[t._v(t._s(t.admitted))])])],1),n("input",{directives:[{name:"model",rawName:"v-model",value:t.doctor,expression:"doctor"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Doctor Name"},domProps:{value:t.doctor},on:{input:function(e){e.target.composing||(t.doctor=e.target.value)}}}),n("button",{staticClass:"btn btn-success"},[t._v("Submit New Patient")])])])],1)])])])},$=[],O={mounted:function(){},props:["template"],data:function(){return{name:"",lastName:"",phone_number:"",city:"",symptoms:"",infected:"",treatment:"",admitted:"",doctor:""}},watch:{phone_number:function(){this.phone_number=this.phone_number.replace(/[^0-9]/g,"").replace(/^(\d{3})?(\d{3})?(\d{4})/g,"($1) $2-$3")}},methods:{addPatient:function(t){var e=this;t.preventDefault();var n={name:this.name,lastName:this.lastName,phone_number:this.phone_number,city:this.city,symptoms:this.symptoms,infected:this.infected,treatment:this.treatment,admitted:this.admitted,doctor:this.doctor};y.a.post("/api/patient",n).then((function(t){console.log("response: ",t),alert("New Patient Added!"),e.$router.push("/secure"),console.log("Success")})).catch((function(t){console.log("error: ",t)}))}}},j=O,A=(n("d317"),Object(c["a"])(j,k,$,!1,null,null,null)),S=A.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"login"}},[a("img",{staticClass:"logo",attrs:{src:n("ca48"),alt:"c19 logo"}}),a("h3",[t._v("You are now logged out.")]),a("router-link",{staticClass:"return",attrs:{to:"/",replace:""}},[t._v("Return to login")]),t._m(0)],1)},L=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h6",{staticClass:"cdc"},[t._v(" For the latest COVID-19 guidelines and information please visit "),n("a",{attrs:{href:"https://www.cdc.gov/"}},[t._v("CDC.gov")])])}],D={name:"Patients",data:function(){return{}},mounted:function(){},methods:{logout:function(){}}},X=D,T=(n("88ee"),Object(c["a"])(X,E,L,!1,null,null,null)),U=T.exports,I=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("div",{staticClass:"row justify-center-content"},[n("div",{staticClass:"col-md-12"},[n("div",{staticClass:"card"},[n("router-link",{attrs:{to:"/"}},[t._v("Back to Login Page")]),n("div",{staticClass:"card-header"},[t._v(" New User Login "),n("strong",[t._v(": "+t._s(t.newUserID))])]),n("div",{staticClass:"card-body",attrs:{id:"myNewLogin"}},[n("form",{on:{submit:t.SignUp}},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"form-control bubbles-three",attrs:{type:"text",placeholder:"email"},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),n("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],staticClass:"form-control bubbles-three",attrs:{type:"password",placeholder:"password"},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}}),n("button",{staticClass:"btn btn-success"},[t._v("Submit")])])])],1)])])])},B=[],M={mounted:function(){},data:function(){return{email:"",password:""}},methods:{SignUp:function(){var t={email:this.email,password:this.password};y.a.post("/api/user",t).then((function(t){console.log("userResponse: ",t),alert("New User Added!")})).catch((function(t){console.log(t)}))}}},F=M,R=(n("f8c2"),Object(c["a"])(F,I,B,!1,null,null,null)),Y=R.exports,J=[{path:"/",component:_,name:"login"},{path:"/secure",component:N,name:"secure"},{path:"/new_patient",component:S,name:"new_patient"},{path:"/signUp",component:Y,name:"signUp"},{path:"/logout",component:U,name:"logout"}],V=n("a7fe"),H=n.n(V),q=n("5f5b");n("f9e3"),n("2dd8");a["default"].use(H.a,y.a),a["default"].use(q["a"]),a["default"].use(d["a"]);var z=new d["a"]({routes:J});a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(u)},router:z}).$mount("#app")},"85ec":function(t,e,n){},"88ee":function(t,e,n){"use strict";var a=n("bf63"),o=n.n(a);o.a},"9ce0":function(t,e,n){"use strict";var a=n("d64c"),o=n.n(a);o.a},bf63:function(t,e,n){},ca48:function(t,e,n){t.exports=n.p+"img/c19-logo.abdf39cb.jpg"},d317:function(t,e,n){"use strict";var a=n("567a"),o=n.n(a);o.a},d64c:function(t,e,n){},f8c2:function(t,e,n){"use strict";var a=n("015e"),o=n.n(a);o.a}});
//# sourceMappingURL=app.6bc7f026.js.map
>>>>>>> 6754c13a9049d5bc15379cf28c596feabea56f04:dist/js/app.6bc7f026.js
