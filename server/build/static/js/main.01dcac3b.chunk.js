(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{100:function(e,t,n){},179:function(e,t,n){},180:function(e,t,n){},181:function(e,t,n){},182:function(e,t,n){},183:function(e,t,n){},184:function(e,t,n){},185:function(e,t,n){},186:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n.n(c),s=n(13),r=n.n(s),i=n(3),u=(n(68),n(18)),o=n(4),j=(n(69),n(1));function l(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)();function a(){e.current.classList.remove("active"),t.current.classList.remove("active"),n.current.classList.remove("active")}return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"background",ref:n}),Object(j.jsx)("header",{className:"header",children:Object(j.jsxs)("nav",{className:"navbar",children:[Object(j.jsxs)("ul",{className:"nav-menu",ref:t,children:[Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(u.b,{to:"/",className:"nav-link",onClick:a,children:[" ","\u05d1\u05d9\u05ea"]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(u.b,{to:"/setting",className:"nav-link",onClick:a,children:["\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea"," "]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsxs)(u.b,{to:"/aboutUs",className:"nav-link",onClick:a,children:["\u05e2\u05dc\u05d9\u05e0\u05d5"," "]})}),Object(j.jsx)("li",{className:"nav-item",children:Object(j.jsx)(u.b,{to:"/contactUS",className:"nav-link",onClick:a,children:"\u05d3\u05d1\u05e8\u05d5 \u05d0\u05d9\u05ea\u05e0\u05d5"})})]}),Object(j.jsxs)("div",{className:"hamburger",ref:e,onClick:function(){e.current.classList.toggle("active"),t.current.classList.toggle("active"),n.current.classList.toggle("active")},children:[Object(j.jsx)("span",{className:"bar"}),Object(j.jsx)("span",{className:"bar"}),Object(j.jsx)("span",{className:"bar"})]})]})})]})}var b=n(5),O=n.n(b),d=n(10),f=n(8),x=n.n(f),m="";function h(e){var t=e.user;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h2",{children:t.name}),Object(j.jsx)("h2",{children:t.email}),Object(j.jsx)("h2",{children:t.address.city}),Object(j.jsx)("a",{href:"mailto:".concat(t.email),children:"\u05e9\u05dc\u05d7 \u05dc\u05d9 \u05de\u05d9\u05d9\u05dc"})]})}var p=Object(c.createContext)(null);function v(e){var t=e.values,n=e.setState,c=e.header;return Object(j.jsxs)("div",{children:[Object(j.jsx)("p",{children:c}),t.map((function(e){return Object(j.jsxs)(a.a.Fragment,{children:[Object(j.jsx)("input",{type:"radio",value:e[0],name:c,onChange:function(e){return n(e.target.value)}}),Object(j.jsxs)("label",{htmlFor:e[1],children:[" ",e[1]]}),Object(j.jsx)("br",{})]},e[0])}))]})}var g=n(7),S={headers:{Authorization:(new g.a).get("token")}},k=n(63);n(95),n(96);function N(){var e=Object(c.useContext)(p),t=e.user,n=(e.setUser,e.setIsLoading),a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],u=s[1],o=Object(c.useState)(null),l=Object(i.a)(o,2),b=l[0],f=l[1],g=Object(c.useState)(0),N=Object(i.a)(g,2),w=N[0],C=N[1],y=Object(c.useState)(null),E=Object(i.a)(y,2),I=E[0],U=E[1],F=Object(c.useRef)(),L=function(){var e=Object(d.a)(O.a.mark((function e(){var c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(I&&w&&r){e.next=2;break}return e.abrupt("return",f("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea"));case 2:return e.prev=2,n(!0),e.next=6,x.a.post("".concat(m,"/search"),{item:r,city:t.address.city,range:w,gps:t.address.gps},S);case 6:(c=e.sent)&&c.data||f("\u05d0\u05d9\u05df \u05d0\u05e3 \u05de\u05e9\u05ea\u05de\u05e9 \u05e9\u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05e7\u05e8\u05d9\u05d8\u05e8\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da"),f(c.data.map((function(e){return Object(j.jsx)(h,{user:e},e._id)}))),n(!1),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(2),n(!1),f(e.t0.response.data);case 16:case"end":return e.stop()}}),e,null,[[2,12]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"SearchMainDiv",children:[Object(j.jsx)("input",{type:"text",value:r,placeholder:"\u05d1\u05d0 \u05e0\u05d7\u05e4\u05e9!!",onChange:function(e){return u(e.target.value)}}),Object(j.jsx)("div",{className:"SearchOptions",children:Object(j.jsx)(v,{values:[["Medicine","\u05ea\u05e8\u05d5\u05e4\u05d4"],["Tool","\u05db\u05dc\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4"],["Food","\u05d0\u05d5\u05db\u05dc/\u05e9\u05ea\u05d9\u05d4"]],setState:U,header:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05de\u05d5\u05e6\u05e8"})}),Object(j.jsx)("h3",{children:"\u05d4\u05de\u05e8\u05d7\u05e7 \u05e9\u05d1\u05d0 \u05dc\u05da \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2(\u05de\u05d8\u05e8\u05d9\u05dd)"}),Object(j.jsx)(k.a,{className:"slider",ref:F,marks:{1e3:"1000",2e3:"2000",3e3:"3000",4e3:"4000",5e3:"5000",6e3:"6000"},min:0,max:6e3,value:w,onChange:function(e){return C(e)}}),Object(j.jsx)("button",{onClick:L,children:"\u05d9\u05d0\u05dc\u05dc\u05d4 \u05ea\u05d1\u05d9\u05d0 \u05de\u05d5\u05e6\u05e8!"}),b&&Object(j.jsx)("h2",{children:b})]})}var w=function(){var e=Object(d.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(m,"/profile"),{},S);case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function C(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(o.f)();return Object(c.useEffect)((function(){t||((new g.a).get("token")?w().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("div",{children:Object(j.jsx)(N,{})})})}n(97);var y=n(23),E=n.n(y);function I(e){var t=e.item,n=e.setItem,a=Object(c.useState)(!1),s=Object(i.a)(a,2),r=s[0],u=s[1],o=Object(c.useState)(t.info||"\u05d0\u05d9\u05df \u05de\u05d9\u05d3\u05e2"),l=Object(i.a)(o,2),b=l[0],O=l[1];return console.log(),Object(c.useEffect)((function(){t.info=b,n(t)}),[b]),Object(j.jsxs)("div",{className:"EditInfoItem",children:[Object(j.jsx)("h5",{children:"\u05de\u05d9\u05d3\u05e2 \u05e2\u05dc \u05d4\u05de\u05d5\u05e6\u05e8:"}),r?Object(j.jsx)("input",{onChange:function(e){return O(e.target.value)},value:b}):Object(j.jsx)("h5",{children:b}),Object(j.jsx)("div",{className:""}),Object(j.jsxs)("button",{onClick:function(){u(!r)},children:[Object(j.jsx)("br",{}),r?Object(j.jsx)("i",{className:"far fa-check-circle"},E()()):Object(j.jsx)("i",{className:"far fa-edit"},E()())]})]})}function U(e){var t=e.item,n=e.addItem,a=Object(c.useContext)(p),s=a.user,r=a.setUser,u=Object(c.useState)(t),o=Object(i.a)(u,2),l=o[0],b=o[1],O=function(){return!!s.items.find((function(e){return t.name===e.name}))},d=function(){var e=JSON.parse(JSON.stringify(s));O()?(e.items=e.items.filter((function(e){return e.name!==t.name})),n(t)):e.items.push(t),r(e)};return Object(j.jsxs)("div",{className:"CardItem",children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("img",{src:t.img,alt:t.name,onClick:function(){O()||d()}}),Object(j.jsx)("h2",{children:t.name})]}),Object(j.jsx)("div",{children:Object(j.jsx)("button",{onClick:d,children:O()&&Object(j.jsx)("i",{className:"far fa-trash-alt"},E()())})}),O()&&Object(j.jsx)(I,{item:l,setItem:b})]})}n(98);function F(){var e=Object(c.useContext)(p),t=e.user,n=(e.setUser,e.setIsLoading),a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],u=s[1],o=Object(c.useState)(""),l=Object(i.a)(o,2),b=l[0],f=l[1],h=Object(c.useState)(null),g=Object(i.a)(h,2),k=g[0],N=g[1];Object(c.useEffect)((function(){if(b.length){console.log(b),console.log(t.items);var e=b.filter((function(e){if(!t.items.find((function(t){return t.name===e.props.item.name})))return e}));console.log(e),f(e)}}),[t]);var w=function(e){var t=JSON.parse(JSON.stringify(b));t.push(Object(j.jsx)(U,{item:e},e._id)),f(t)},C=function(){var e=Object(d.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(k){e.next=2;break}return e.abrupt("return",f("\u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea \u05d7\u05d5\u05d1\u05d4!"));case 2:return e.prev=2,n(!0),e.next=6,x.a.get("".concat(m,"/manager/items/").concat(k,"?name=").concat(r),S);case 6:if((t=e.sent).data){e.next=9;break}return e.abrupt("return",f("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05de\u05d5\u05e6\u05e8"));case 9:f(t.data.map((function(e){return Object(j.jsx)(U,{item:e,addItem:w},e._id)}))),n(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),n(!1),console.log(e.t0.message);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"addItemDivMain",children:[Object(j.jsxs)("div",{className:"addItemDivOptions",children:[Object(j.jsx)(v,{setState:N,name:"type",header:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05de\u05d5\u05e6\u05e8",values:[["Medicine","\u05ea\u05e8\u05d5\u05e4\u05d4"],["Tool","\u05db\u05dc\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4"],["Food","\u05d0\u05d5\u05db\u05dc/\u05e9\u05ea\u05d9\u05d4"]]}),Object(j.jsx)("input",{type:"text",value:r,placeholder:"\u05d1\u05d0 \u05e0\u05d7\u05e4\u05e9!!",onChange:function(e){return u(e.target.value)}})]}),Object(j.jsx)("button",{onClick:C,children:"\u05d4\u05e8\u05e5 \u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05de\u05d5\u05e6\u05e8"}),Object(j.jsx)("div",{className:"items",children:b})]})}n(99);function L(){var e=Object(c.useContext)(p),t=e.user,n=(e.setUser,e.setIsLoading),a=Object(c.useState)([]),s=Object(i.a)(a,2),r=s[0],u=s[1];Object(c.useEffect)((function(){console.log(t),u(t.items.map((function(e){return Object(j.jsx)(U,{item:e},e._id)})))}),[t]);var o=function(){var e=Object(d.a)(O.a.mark((function e(){var c,a;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),c=r.map((function(e){return e.props.item})),e.prev=2,e.next=5,x.a.patch("".concat(m,"/list"),{mail:t.email,items:c,names:c.map((function(e){return e.name}))},S);case 5:a=e.sent,console.log(a.data),n(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),n(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsx)("div",{className:"tabHeader",children:":\u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e9\u05dc\u05da"}),Object(j.jsxs)("div",{className:"ItemsDiv",children:[Object(j.jsx)("button",{className:"saveButton",onClick:o,children:Object(j.jsx)("i",{className:"far fa-save fa-2x"})}),r.length&&r]})]})}function R(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(o.f)();return Object(c.useEffect)((function(){t||((new g.a).get("token")?w().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsxs)("div",{children:[Object(j.jsx)(L,{}),Object(j.jsx)("div",{className:"tabHeader",children:"\u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05dc\u05d4\u05d5\u05e1\u05e4\u05d4:"}),Object(j.jsx)(F,{})]})})}function D(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser;Object(c.useEffect)((function(){t||((new g.a).get("token")?w().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]);var a=Object(o.f)();return Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("div",{children:Object(j.jsx)("h1",{children:"\u05e2\u05dc\u05d9\u05e0\u05d5"})})})}n(100);function J(e){var t=e.text,n=e.state,a=e.setState,s=e.cities,r=void 0===s?null:s,u=e.streets,o=void 0===u?null:u,l=e.isPassword,b=void 0!==l&&l,O=e.isNumber,d=void 0!==O&&O,f=Object(c.useState)(null),x=Object(i.a)(f,2),m=x[0],h=x[1],p=Object(c.useState)(!1),v=Object(i.a)(p,2),g=v[0],S=v[1],k=b&&g?"password":"text";return Object(c.useEffect)((function(){r&&h(r.map((function(e){return Object(j.jsx)("div",{onClick:function(e){a(e.target.innerText),h(null)},children:e})})))}),[r]),Object(c.useEffect)((function(){o&&h(o.map((function(e){return Object(j.jsx)("div",{onClick:function(e){a(e.target.innerText),h(null)},children:e})})))}),[o]),Object(j.jsxs)("div",{className:"field",children:[Object(j.jsxs)("label",{children:[t,":"]}),Object(j.jsx)("input",{type:d?"number":k,name:t,placeholder:t,value:n,onChange:function(e){return a(e.target.value)}}),m,b&&Object(j.jsx)("button",{onClick:function(){return S(!g)},children:g?"show":"hide"})]})}var P=n(17),T=n.n(P);function M(e){var t=e.setRegistered,n=e.registered,a=Object(c.useContext)(p),s=(a.user,a.setUser),r=a.setIsLoading,u=Object(c.useState)(""),o=Object(i.a)(u,2),l=o[0],b=o[1],f=Object(c.useState)(""),h=Object(i.a)(f,2),v=h[0],S=h[1],k=Object(c.useState)(""),N=Object(i.a)(k,2),w=N[0],C=N[1],y=Object(c.useState)(""),E=Object(i.a)(y,2),I=E[0],U=E[1],F=Object(c.useState)(""),L=Object(i.a)(F,2),R=L[0],D=L[1],P=Object(c.useState)(""),M=Object(i.a)(P,2),_=M[0],A=M[1],B=Object(c.useState)(""),q=Object(i.a)(B,2),H=q[0],z=q[1],G=Object(c.useState)(""),K=Object(i.a)(G,2),Q=K[0],V=K[1],W=Object(c.useState)(""),X=Object(i.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)(null),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(""),ae=Object(i.a)(ce,2),se=ae[0],re=ae[1],ie=Object(c.useState)(""),ue=Object(i.a)(ie,2),oe=ue[0],je=ue[1],le=Object(c.useState)(null),be=Object(i.a)(le,2),Oe=be[0],de=be[1],fe=Object(c.useState)(null),xe=Object(i.a)(fe,2),me=xe[0],he=xe[1];Object(c.useEffect)((function(){return function(){var e=Object(d.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(m,"/address-list"));case 3:t=e.sent,n=JSON.parse(t.data.data),ne(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(c.useEffect)((function(){if(I){var e=new RegExp("^".concat(I),"m"),t=Object.keys(te).filter((function(t){return e.test(t)}));t.splice(10),0===t.length?re("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e2\u05d9\u05e8 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc"):re(null),de(t)}else de([]),re(null);return function(){}}),[I]),Object(c.useEffect)((function(){if(R){if(!I)return D("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05e9\u05d9\u05dd \u05e2\u05d9\u05e8!");var e=new RegExp("^".concat(R),"m"),t=te[I];if(!t)return D("\u05d0\u05d9\u05df \u05e8\u05d7\u05d5\u05d1\u05d5\u05ea \u05d1\u05e2\u05d9\u05e8 \u05d6\u05d5");var n=t.filter((function(t){return e.test(t)}));n.splice(10),0===n.length?je("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e8\u05d7\u05d5\u05d1 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc"):je(null),he(n)}else he([]),je(null);return function(){}}),[R]);var pe=function(){var e=Object(d.a)(O.a.mark((function e(){var t,n,c,a,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v&&l&&R&&I&&_){e.next=2;break}return e.abrupt("return",Z("all fields are required"));case 2:if(T.a.isEmail(v)){e.next=4;break}return e.abrupt("return",Z("must put valid email"));case 4:if(T.a.isStrongPassword(l,{minSymbols:0})){e.next=8;break}return e.abrupt("return",Z("must put valid password"));case 8:return e.prev=8,r(!0),t=new FormData,n={name:w,city:I,street:R,number:_,email:v,password:l},Object.entries(n).forEach((function(e){t.append(e[0],e[1])})),t.append("img",Q),e.next=16,x.a.post("".concat(m,"/signup"),t);case 16:return c=e.sent,a=c.data,(new g.a).set("token",a.tokens[a.tokens.length-1]),e.next=21,x.a.post("".concat(m,"/login"),{email:v,password:l});case 21:i=e.sent,r(!1),Z("\u05de\u05e9\u05ea\u05de\u05e9 \u05e0\u05e8\u05e9\u05dd \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4,\u05d0\u05e0\u05d0 \u05d4\u05de\u05ea\u05df \u05e2\u05d3 \u05dc\u05d4\u05e2\u05d1\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9..."),setTimeout((function(){s(i.data)}),1500),e.next=31;break;case 27:e.prev=27,e.t0=e.catch(8),r(!1),Z(e.t0.response.data);case 31:case"end":return e.stop()}}),e,null,[[8,27]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"form",style:{position:"unset"},onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)(J,{text:"\u05de\u05d9\u05d9\u05dc",state:v,setState:S}),Object(j.jsx)(J,{text:"\u05e9\u05dd",state:w,setState:C}),Object(j.jsx)(J,{text:"\u05e2\u05d9\u05e8",state:I,setState:U,cities:Oe}),Object(j.jsx)("h4",{children:se}),Object(j.jsx)(J,{text:"\u05e8\u05d7\u05d5\u05d1",state:R,setState:D,streets:me}),Object(j.jsx)("h4",{children:oe}),Object(j.jsx)(J,{text:"\u05de\u05e1\u05e4\u05e8",state:_,setState:A,isNumber:!0}),Object(j.jsx)(J,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:l,setState:b,isPassword:!0}),Object(j.jsx)("input",{type:"file",value:H,onChange:function(e){V(e.target.files[0]),z(e.target.value)}}),Object(j.jsx)("button",{disabled:!(!se&&!oe),className:"ui button",type:"submit",onClick:pe,children:"Submit"}),Object(j.jsx)("button",{onClick:function(){t(!n)},children:"\u05db\u05d1\u05e8 \u05e8\u05e9\u05d5\u05dd?"}),Y&&Object(j.jsx)("h3",{children:Y})]})}function _(e){var t=e.registered,n=e.setRegistered,a=Object(c.useContext)(p),s=(a.user,a.setUser),r=a.setIsLoading,u=Object(c.useState)(""),o=Object(i.a)(u,2),l=o[0],b=o[1],f=Object(c.useState)(""),h=Object(i.a)(f,2),v=h[0],S=h[1],k=Object(c.useState)(""),N=Object(i.a)(k,2),w=N[0],C=N[1],y=function(){var e=Object(d.a)(O.a.mark((function e(){var t,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(v&&l||C("all fields are required"),T.a.isEmail(v)){e.next=5;break}C("must put valid email"),e.next=23;break;case 5:return r(!0),e.prev=6,t=new g.a,e.next=10,x.a.post("".concat(m,"/login"),{email:v,password:l});case 10:n=e.sent,c=n.data,t.set("token",c.tokens[c.tokens.length-1]),r(!1),C("\u05de\u05e9\u05ea\u05de\u05e9 \u05d4\u05ea\u05d7\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4,\u05d0\u05e0\u05d0 \u05d4\u05de\u05ea\u05df \u05e2\u05d3 \u05dc\u05d4\u05e2\u05d1\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9..."),setTimeout((function(){s(c)}),1500),e.next=23;break;case 18:e.prev=18,e.t0=e.catch(6),r(!1),console.log(e.t0),C(e.t0.response.data);case 23:case"end":return e.stop()}}),e,null,[[6,18]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("form",{className:"ui form",style:{position:"unset"},onSubmit:function(e){return e.preventDefault()},children:[Object(j.jsx)(J,{text:"\u05de\u05d9\u05d9\u05dc",state:v,setState:S}),Object(j.jsx)(J,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:l,setState:b,isPassword:!0}),Object(j.jsx)("button",{className:"ui button",type:"submit",onClick:y,children:"Submit"}),Object(j.jsx)("button",{onClick:function(){n(!t)},children:"\u05d7\u05d3\u05e9 \u05e4\u05d4??"}),Object(j.jsx)("h3",{children:w})]})}n(179);function A(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(p),r=s.user,u=s.setUser,l=Object(o.f)();return Object(c.useEffect)((function(){r&&l.replace("/home"),(new g.a).get("token")&&(console.log("wow"),w().then((function(e){return u(e)})).catch((function(e){return console.log(e.message)})))}),[r]),Object(j.jsx)("div",{className:"loginPage",children:n?Object(j.jsx)(_,{setRegistered:a,registered:n}):Object(j.jsx)(M,{setRegistered:a,registered:n})})}n(180);var B=n(32);function q(e){var t=e.field,n=e.state,a=e.setState,s=e.type,r=void 0===s?"text":s,u=e.setFile,o=void 0!==u&&u,l=Object(c.useState)(!1),b=Object(i.a)(l,2),O=b[0],d=b[1],f="\u05ea\u05de\u05d5\u05e0\u05d4"===t?{}:{value:n};return Object(j.jsxs)("div",{children:[Object(j.jsx)("label",{children:t}),O?Object(j.jsx)("input",Object(B.a)(Object(B.a)({type:r,name:n,placeholder:t},f),{},{onChange:function(e){"\u05ea\u05de\u05d5\u05e0\u05d4"===t&&o(e.target.files[0]),a(e.target.value)}})):Object(j.jsx)("h5",{children:n}),Object(j.jsx)("button",{onClick:function(){return d(!O)},children:O?Object(j.jsx)("i",{className:"far fa-check-circle"}):Object(j.jsx)("i",{className:"far fa-edit"})})]})}function H(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=e.setIsLoading,s=Object(c.useState)(""),r=Object(i.a)(s,2),u=r[0],o=r[1],l=Object(c.useState)(t.name),b=Object(i.a)(l,2),f=b[0],h=b[1],v=Object(c.useState)(),g=Object(i.a)(v,2),k=g[0],N=g[1],w=Object(c.useState)(""),C=Object(i.a)(w,2),y=C[0],E=C[1],I=Object(c.useState)(""),U=Object(i.a)(I,2),F=U[0],L=U[1],R=Object(c.useState)(""),D=Object(i.a)(R,2),P=D[0],M=D[1],_=Object(c.useState)(""),A=Object(i.a)(_,2),B=A[0],H=A[1],z=Object(c.useRef)(),G=Object(c.useState)(null),K=Object(i.a)(G,2),Q=K[0],V=K[1],W=Object(c.useState)(""),X=Object(i.a)(W,2),Y=X[0],Z=X[1],$=Object(c.useState)(""),ee=Object(i.a)($,2),te=ee[0],ne=ee[1],ce=Object(c.useState)(""),ae=Object(i.a)(ce,2),se=ae[0],re=ae[1],ie=Object(c.useState)(null),ue=Object(i.a)(ie,2),oe=ue[0],je=ue[1],le=Object(c.useState)(null),be=Object(i.a)(le,2),Oe=be[0],de=be[1];Object(c.useEffect)((function(){x.a.post("".concat(m,"/myAddress"),{id:t.address.id},S).then((function(e){var t=e.data,n=t.city,c=t.street,a=t.number;N(n),E(c),L(a)})).catch((function(e){return console.log(e.message)})),x.a.get("".concat(m,"/address-list")).then((function(e){var t=e.data;V(JSON.parse(t.data))})).catch((function(e){return console.log(e.message)}))}),[]),Object(c.useEffect)((function(){if(k&&Q){var e=new RegExp("^".concat(k),"m"),t=Object.keys(Q).filter((function(t){return e.test(t)}));t.splice(10),0===t.length?Z("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e2\u05d9\u05e8 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc,\u05e9\u05de\u05d9\u05e8\u05d4 \u05de\u05d5\u05e9\u05d1\u05ea\u05ea"):Z(null),je(t)}else je([]),Z(null);return function(){}}),[k]),Object(c.useEffect)((function(){if(y&&Q){if(!k)return E("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05e9\u05d9\u05dd \u05e2\u05d9\u05e8!");var e=new RegExp("^".concat(y),"m"),t=Q[k];if(!t)return E("\u05d0\u05d9\u05df \u05e8\u05d7\u05d5\u05d1\u05d5\u05ea \u05d1\u05e2\u05d9\u05e8 \u05d6\u05d5");var n=t.filter((function(t){return e.test(t)}));n.splice(10),0===n.length?ne("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e8\u05d7\u05d5\u05d1 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc,\u05e9\u05de\u05d9\u05e8\u05d4 \u05de\u05d5\u05e9\u05d1\u05ea\u05ea"):ne(null),de(n)}else de([]),ne(null);return function(){}}),[y]),Object(c.useEffect)((function(){u&&(T.a.isStrongPassword(u,{minSymbols:0})?re(""):re("\u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d9\u05d9\u05d1\u05ea \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d0\u05d5\u05e8\u05da \u05e9\u05de\u05d5\u05e0\u05d4 \u05ea\u05d5\u05d5\u05d9\u05dd \u05d5\u05dc\u05db\u05dc\u05d5\u05dc \u05de\u05e1\u05e4\u05e8 \u05d5 \u05d0\u05d5\u05ea \u05d2\u05d3\u05d5\u05dc\u05d4 \u05d1\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea"))}),[u]);var fe=function(){var e=Object(d.a)(O.a.mark((function e(n){var c,a,s,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,x.a.post("".concat(m,"/myAddress"),{id:t.address.id},S);case 2:c=e.sent,a=c.data,s=a.city,r=a.street,i=a.number,n.city===s&&n.street===r&&n.number===i&&(delete n.city,delete n.street,delete n.number);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),xe=function(){var e=Object(d.a)(O.a.mark((function e(){var c,s,r,i,o;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),c=t.email,s=new FormData,r={password:u,name:f,city:k,street:y,number:F,img:P,email:c},e.next=6,fe(r);case 6:return Object.entries(r).forEach((function(e){e[1]&&s.append(e[0],e[1])})),e.prev=7,e.next=10,x.a.patch("".concat(m,"/settings"),s,S);case 10:i=e.sent,o=i.data,n(o),a(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),a(!1),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(){return e.apply(this,arguments)}}();return Object(j.jsxs)("div",{className:"EditInfoDiv",children:[Object(j.jsx)("button",{className:"saveButton",onClick:xe,disabled:!!(te||Y||se),children:Object(j.jsx)("i",{className:"far fa-save fa-2x",children:" "})}),Object(j.jsx)(q,{field:"\u05e9\u05dd",state:f,setState:h}),Object(j.jsx)(q,{field:"\u05ea\u05de\u05d5\u05e0\u05d4",w:!0,state:B,setState:H,type:"file",setFile:M}),Object(j.jsx)(q,{field:"\u05e1\u05d9\u05e1\u05de\u05d0",state:u,setState:o}),se,Object(j.jsx)("div",{className:"",onClick:function(){var e=z.current.classList;e.value.includes("hidden")?e.remove("hidden"):e.add("hidden")},children:Object(j.jsx)("label",{children:"\u05e2\u05d3\u05db\u05df \u05db\u05ea\u05d5\u05d1\u05ea"})}),Object(j.jsxs)("div",{className:"locationInfo hidden",ref:z,children:[Object(j.jsx)(J,{text:"\u05e2\u05d9\u05e8",state:k,setState:N,cities:oe}),Y,Object(j.jsx)(J,{text:"\u05e8\u05d7\u05d5\u05d1",state:y,setState:E,streets:Oe}),te,Object(j.jsx)(J,{text:"\u05de\u05e1\u05e4\u05e8",state:F,setState:L})]})]})}function z(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(o.f)();return Object(c.useEffect)((function(){t||((new g.a).get("token")?w().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(j.jsx)(j.Fragment,{children:t&&Object(j.jsx)("div",{children:Object(j.jsx)(H,{})})})}n(181),n(182);function G(){return Object(j.jsx)("div",{className:"logo",children:Object(j.jsx)("img",{src:"".concat(m,"/logo/big "),alt:"logo pic"})})}n(183);function K(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(c.useState)(!0),s=Object(i.a)(a,2),r=(s[0],s[1],Object(o.f)());return Object(j.jsxs)("div",{className:"userProfile",children:[Object(j.jsx)("img",{src:t.avatar?"".concat(t.avatar,"?t=").concat(Date.now()):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"pic of ".concat(t.name)}),Object(j.jsx)("h4",{children:t.name}),Object(j.jsx)("a",{onClick:function(e){e.preventDefault(),(new g.a).remove("token"),n(null),r.replace("/")},href:"/",className:"red",children:"\u05d4\u05ea\u05e0\u05ea\u05e7"})]})}function Q(){return Object(j.jsxs)("div",{className:"head",children:[Object(j.jsx)(G,{}),Object(j.jsx)(K,{})]})}n(184);n(185);function V(){return Object(j.jsx)("div",{className:"spinner",children:Object(j.jsx)("img",{src:"".concat(m,"/logo/small"),alt:"logo spin"})})}var W=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),r=Object(i.a)(s,2),b=r[0],O=r[1];return Object(j.jsx)("div",{className:"App",children:Object(j.jsxs)(u.a,{children:[b&&Object(j.jsx)(V,{}),Object(j.jsx)(l,{}),Object(j.jsxs)(p.Provider,{value:{user:n,setUser:a,setIsLoading:O},children:[n&&Object(j.jsx)(Q,{}),Object(j.jsxs)(o.c,{children:[Object(j.jsx)(o.a,{exact:!0,path:"/",children:(new g.a).get("token")?Object(j.jsx)(C,{}):Object(j.jsx)(A,{})}),Object(j.jsx)(o.a,{path:"/home",exact:!0,component:C}),Object(j.jsx)(o.a,{path:"/setting",exact:!0,component:R}),Object(j.jsx)(o.a,{path:"/aboutUs",exact:!0,component:D}),Object(j.jsx)(o.a,{path:"/contactUs",exact:!0,component:z})]})]})]})})};r.a.render(Object(j.jsx)(a.a.StrictMode,{children:Object(j.jsx)(W,{})}),document.getElementById("root"))},68:function(e,t,n){},69:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){},98:function(e,t,n){},99:function(e,t,n){}},[[186,1,2]]]);
//# sourceMappingURL=main.01dcac3b.chunk.js.map