(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{170:function(e,t,n){},171:function(e,t,n){},172:function(e,t,n){},173:function(e,t,n){},174:function(e,t,n){},175:function(e,t,n){},176:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n.n(c),s=n(55),r=n.n(s),i=n(3),u=(n(61),n(15)),j=n(4),o=(n(62),n(0));function l(){var e=Object(c.useRef)(),t=Object(c.useRef)();function n(){e.current.classList.remove("active"),t.current.classList.remove("active")}return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("header",{className:"header",children:Object(o.jsxs)("nav",{className:"navbar",children:[Object(o.jsxs)("ul",{className:"nav-menu",ref:t,children:[Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(u.b,{to:"/",className:"nav-link",onClick:n,children:" \u05d1\u05d9\u05ea"})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(u.b,{to:"/setting",className:"nav-link",onClick:n,children:"\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(u.b,{to:"/aboutUs",className:"nav-link",onClick:n,children:"\u05e2\u05dc\u05d9\u05e0\u05d5 "})}),Object(o.jsx)("li",{className:"nav-item",children:Object(o.jsx)(u.b,{to:"/contactUS",className:"nav-link",onClick:n,children:"\u05d3\u05d1\u05e8\u05d5 \u05d0\u05d9\u05ea\u05e0\u05d5"})})]}),Object(o.jsxs)("div",{className:"hamburger",ref:e,onClick:function(){e.current.classList.toggle("active"),t.current.classList.toggle("active")},children:[Object(o.jsx)("span",{className:"bar"}),Object(o.jsx)("span",{className:"bar"}),Object(o.jsx)("span",{className:"bar"})]})]})})})}var b=n(5),O=n.n(b),f=n(9),d=n(8),x=n.n(d),h="";function m(e){var t=e.user;return Object(o.jsxs)("div",{children:[Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("h2",{children:t.email}),Object(o.jsx)("h2",{children:t.address.city}),Object(o.jsx)("a",{href:"mailto:".concat(t.email),children:"\u05e9\u05dc\u05d7 \u05dc\u05d9 \u05de\u05d9\u05d9\u05dc"})]})}var p=Object(c.createContext)(null);function v(e){var t=e.values,n=e.setState,c=e.header;return Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{children:c}),t.map((function(e){return Object(o.jsxs)(a.a.Fragment,{children:[Object(o.jsx)("input",{type:"radio",value:e[0],name:c,onChange:function(e){return n(e.target.value)}}),Object(o.jsxs)("label",{htmlFor:e[1],children:[" ",e[1]]}),Object(o.jsx)("br",{})]},e[0])}))]})}var g=n(7),S={headers:{Authorization:(new g.a).get("token")}};n(87);function k(){var e=Object(c.useContext)(p),t=e.user,n=(e.setUser,Object(c.useState)("")),a=Object(i.a)(n,2),s=a[0],r=a[1],u=Object(c.useState)(null),j=Object(i.a)(u,2),l=j[0],b=j[1],d=Object(c.useState)(null),g=Object(i.a)(d,2),k=g[0],N=g[1],w=Object(c.useState)(null),C=Object(i.a)(w,2),y=C[0],E=C[1],U=function(){var e=Object(f.a)(O.a.mark((function e(){var n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(y&&k&&s){e.next=2;break}return e.abrupt("return",b("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea"));case 2:return e.prev=2,e.next=5,x.a.post("".concat(h,"/search"),{item:s,city:t.address.city,range:k,gps:t.address.gps},S);case 5:(n=e.sent)&&n.data||b("\u05d0\u05d9\u05df \u05d0\u05e3 \u05de\u05e9\u05ea\u05de\u05e9 \u05e9\u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05e7\u05e8\u05d9\u05d8\u05e8\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da"),b(n.data.map((function(e){return Object(o.jsx)(m,{user:e},e._id)}))),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(2),b(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"SearchMainDiv",children:[Object(o.jsx)("input",{type:"text",value:s,placeholder:"\u05d1\u05d0 \u05e0\u05d7\u05e4\u05e9!!",onChange:function(e){return r(e.target.value)}}),Object(o.jsxs)("div",{className:"SearchOptions",children:[Object(o.jsx)(v,{values:[["500","0.5 \u05e7\u05d9\u05dc\u05d5\u05de\u05d8\u05e8"],["1500","1.5 \u05e7\u05d9\u05dc\u05d5\u05de\u05d8\u05e8"],["3000","3 \u05e7\u05d9\u05dc\u05d5\u05de\u05d8\u05e8"],["5000","5 \u05e7\u05d9\u05dc\u05d5\u05de\u05d8\u05e8"],["6000","6 \u05e7\u05d9\u05dc\u05d5\u05de\u05d8\u05e8"]],setState:N,header:"\u05d1\u05d7\u05e8 \u05e8\u05d3\u05d9\u05d5\u05e1"}),Object(o.jsx)(v,{values:[["Medicine","\u05ea\u05e8\u05d5\u05e4\u05d4"],["Tool","\u05db\u05dc\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4"],["Food","\u05d0\u05d5\u05db\u05dc/\u05e9\u05ea\u05d9\u05d4"]],setState:E,header:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05de\u05d5\u05e6\u05e8"})]}),Object(o.jsx)("button",{onClick:U,children:"\u05d9\u05d0\u05dc\u05dc\u05d4 \u05ea\u05d1\u05d9\u05d0 \u05de\u05d5\u05e6\u05e8!"}),l&&Object(o.jsx)("h2",{children:l})]})}var N=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.post("".concat(h,"/profile"),{},S);case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function w(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(j.f)();return Object(c.useEffect)((function(){t||((new g.a).get("token")?N().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("div",{children:Object(o.jsx)(k,{})})})}n(88);var C=n(18),y=n.n(C);function E(e){var t=e.item,n=e.setItem,a=Object(c.useState)(!1),s=Object(i.a)(a,2),r=s[0],u=s[1],j=Object(c.useState)(t.info||"\u05d0\u05d9\u05df \u05de\u05d9\u05d3\u05e2"),l=Object(i.a)(j,2),b=l[0],O=l[1];return Object(c.useEffect)((function(){t.info=b,n(t)}),[b]),Object(o.jsxs)("div",{className:"EditInfoItem",children:[Object(o.jsx)("h5",{children:"\u05de\u05d9\u05d3\u05e2 \u05e2\u05dc \u05d4\u05de\u05d5\u05e6\u05e8:"}),r?Object(o.jsx)("input",{onChange:function(e){return O(e.target.value)},value:b}):Object(o.jsx)("h5",{children:b}),Object(o.jsx)("div",{className:""}),Object(o.jsxs)("button",{onClick:function(){u(!r)},children:[Object(o.jsx)("br",{}),r?Object(o.jsx)("i",{class:"far fa-check-circle"},y()()):Object(o.jsx)("i",{class:"far fa-edit"},y()())]})]})}function U(e){var t=e.item,n=Object(c.useContext)(p),a=n.user,s=n.setUser,r=Object(c.useState)(t),u=Object(i.a)(r,2),j=u[0],l=u[1],b=function(){return!!a.items.find((function(e){return t.name===e.name}))};return Object(o.jsxs)("div",{className:"CardItem",children:[Object(o.jsxs)("div",{children:[Object(o.jsx)("img",{src:t.img,alt:t.name}),Object(o.jsx)("h2",{children:t.name}),Object(o.jsx)("button",{onClick:function(){var e=JSON.parse(JSON.stringify(a));b()?e.items=e.items.filter((function(e){return e.name!==t.name})):e.items.push(t),s(e)},children:b()?Object(o.jsx)("i",{className:"far fa-trash-alt"},y()()):Object(o.jsx)("i",{className:"fas fa-plus-circle"},y()())})]}),b()&&Object(o.jsx)(E,{item:j,setItem:l})]})}n(89);function F(){var e=Object(c.useContext)(p),t=(e.user,e.setUser,Object(c.useState)("")),n=Object(i.a)(t,2),a=n[0],s=n[1],r=Object(c.useState)(""),u=Object(i.a)(r,2),j=u[0],l=u[1],b=Object(c.useState)(null),d=Object(i.a)(b,2),m=d[0],g=d[1],k=function(){var e=Object(f.a)(O.a.mark((function e(){var t;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m){e.next=2;break}return e.abrupt("return",l("\u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea \u05d7\u05d5\u05d1\u05d4!"));case 2:return e.prev=2,e.next=5,x.a.get("".concat(h,"/manager/items/").concat(m,"?name=").concat(a),S);case 5:if((t=e.sent).data){e.next=8;break}return e.abrupt("return",l("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05de\u05d5\u05e6\u05e8"));case 8:l(t.data.map((function(e){return Object(o.jsx)(U,{item:e},e._id)}))),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(2),console.log(e.t0.message);case 14:case"end":return e.stop()}}),e,null,[[2,11]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"addItemDivMain",children:[Object(o.jsxs)("div",{className:"addItemDivOptions",children:[Object(o.jsx)(v,{setState:g,name:"type",header:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05de\u05d5\u05e6\u05e8",values:[["Medicine","\u05ea\u05e8\u05d5\u05e4\u05d4"],["Tool","\u05db\u05dc\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4"],["Food","\u05d0\u05d5\u05db\u05dc/\u05e9\u05ea\u05d9\u05d4"]]}),Object(o.jsx)("input",{type:"text",value:a,placeholder:"\u05d1\u05d0 \u05e0\u05d7\u05e4\u05e9!!",onChange:function(e){return s(e.target.value)}})]}),Object(o.jsx)("button",{onClick:k,children:"\u05d4\u05e8\u05e5 \u05d7\u05d9\u05e4\u05d5\u05e9 \u05dc\u05de\u05d5\u05e6\u05e8"}),j]})}n(90);function D(){var e=Object(c.useContext)(p),t=e.user,n=(e.setUser,Object(c.useState)([])),a=Object(i.a)(n,2),s=a[0],r=a[1];Object(c.useEffect)((function(){console.log(t),r(t.items.map((function(e){return Object(o.jsx)(U,{item:e},e._id)})))}),[t]);var u=function(){var e=Object(f.a)(O.a.mark((function e(){var n,c,a,r,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:console.log(s),n=[],c=0;case 3:if(!(c<s.length)){e.next=19;break}return a=s[c].props.item,n.push(a.name),e.prev=6,e.next=9,x.a.patch("".concat(h,"/list"),{mail:t.email,item:a.name,type:a.type,info:a.info});case 9:r=e.sent,console.log(r.data),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(6),console.log(e.t0);case 16:c++,e.next=3;break;case 19:return e.next=21,x.a.delete("".concat(h,"/list"),{data:{names:n,mail:t.email}},S);case 21:i=e.sent,console.dir(i);case 23:case"end":return e.stop()}}),e,null,[[6,13]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"ItemsDiv",children:[Object(o.jsx)("button",{className:"saveButton",onClick:u,children:Object(o.jsx)("i",{className:"far fa-save fa-2x"})}),Object(o.jsx)("h2",{children:":\u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e9\u05dc\u05da"}),s.length&&s]})}function I(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(j.f)();return Object(c.useEffect)((function(){t||((new g.a).get("token")?N().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsxs)("div",{children:[Object(o.jsx)(D,{}),Object(o.jsx)("h2",{children:"\u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05dc\u05d4\u05d5\u05e1\u05e4\u05d4:"}),Object(o.jsx)(F,{})]})})}function R(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser;Object(c.useEffect)((function(){t||((new g.a).get("token")?N().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]);var a=Object(j.f)();return Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("div",{children:Object(o.jsx)("h1",{children:"\u05e2\u05dc\u05d9\u05e0\u05d5"})})})}n(91);function P(e){var t=e.text,n=e.state,a=e.setState,s=e.cities,r=void 0===s?null:s,u=e.streets,j=void 0===u?null:u,l=e.isPassword,b=void 0!==l&&l,O=e.isNumber,f=void 0!==O&&O,d=Object(c.useState)(null),x=Object(i.a)(d,2),h=x[0],m=x[1],p=Object(c.useState)(!1),v=Object(i.a)(p,2),g=v[0],S=v[1],k=b&&g?"password":"text";return Object(c.useEffect)((function(){r&&m(r.map((function(e){return Object(o.jsx)("div",{onClick:function(e){a(e.target.innerText),m(null)},children:e})})))}),[r]),Object(c.useEffect)((function(){j&&m(j.map((function(e){return Object(o.jsx)("div",{onClick:function(e){a(e.target.innerText),m(null)},children:e})})))}),[j]),Object(o.jsxs)("div",{className:"field",children:[Object(o.jsxs)("label",{children:[t,":"]}),Object(o.jsx)("input",{type:f?"number":k,name:t,placeholder:t,value:n,onChange:function(e){return a(e.target.value)}}),h,b&&Object(o.jsx)("button",{onClick:function(){return S(!g)},children:g?"show":"hide"})]})}var T=n(21),J=n.n(T);function L(e){var t=e.setRegistered,n=e.registered,a=Object(c.useContext)(p),s=(a.user,a.setUser),r=Object(c.useState)(""),u=Object(i.a)(r,2),j=u[0],l=u[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),m=d[0],v=d[1],S=Object(c.useState)(""),k=Object(i.a)(S,2),N=k[0],w=k[1],C=Object(c.useState)(""),y=Object(i.a)(C,2),E=y[0],U=y[1],F=Object(c.useState)(""),D=Object(i.a)(F,2),I=D[0],R=D[1],T=Object(c.useState)(""),L=Object(i.a)(T,2),M=L[0],_=L[1],B=Object(c.useState)(""),q=Object(i.a)(B,2),A=q[0],z=q[1],G=Object(c.useState)(""),H=Object(i.a)(G,2),K=H[0],Q=H[1],V=Object(c.useState)(""),W=Object(i.a)(V,2),X=W[0],Y=W[1],Z=Object(c.useState)(null),$=Object(i.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(""),ce=Object(i.a)(ne,2),ae=ce[0],se=ce[1],re=Object(c.useState)(""),ie=Object(i.a)(re,2),ue=ie[0],je=ie[1],oe=Object(c.useState)(null),le=Object(i.a)(oe,2),be=le[0],Oe=le[1],fe=Object(c.useState)(null),de=Object(i.a)(fe,2),xe=de[0],he=de[1];Object(c.useEffect)((function(){return function(){var e=Object(f.a)(O.a.mark((function e(){var t,n;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,x.a.get("".concat(h,"/address-list"));case 3:t=e.sent,n=JSON.parse(t.data.data),te(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(c.useEffect)((function(){if(E){var e=new RegExp("^".concat(E),"m"),t=Object.keys(ee).filter((function(t){return e.test(t)}));t.splice(10),0===t.length?se("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e2\u05d9\u05e8 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc"):se(null),Oe(t)}else Oe([]),se(null);return function(){}}),[E]),Object(c.useEffect)((function(){if(I){if(!E)return R("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05e9\u05d9\u05dd \u05e2\u05d9\u05e8!");var e=new RegExp("^".concat(I),"m"),t=ee[E];if(!t)return R("\u05d0\u05d9\u05df \u05e8\u05d7\u05d5\u05d1\u05d5\u05ea \u05d1\u05e2\u05d9\u05e8 \u05d6\u05d5");var n=t.filter((function(t){return e.test(t)}));n.splice(10),0===n.length?je("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e8\u05d7\u05d5\u05d1 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc"):je(null),he(n)}else he([]),je(null);return function(){}}),[I]);var me=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,c,a,r;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m&&j&&I&&E&&M){e.next=2;break}return e.abrupt("return",Y("all fields are required"));case 2:if(J.a.isEmail(m)){e.next=4;break}return e.abrupt("return",Y("must put valid email"));case 4:if(J.a.isStrongPassword(j,{minSymbols:0})){e.next=8;break}return e.abrupt("return",Y("must put valid password"));case 8:return e.prev=8,t=new FormData,n={name:N,city:E,street:I,number:M,email:m,password:j},Object.entries(n).forEach((function(e){t.append(e[0],e[1])})),t.append("img",K),e.next=15,x.a.post("".concat(h,"/signup"),t);case 15:return c=e.sent,a=c.data,(new g.a).set("token",a.tokens[a.tokens.length-1]),e.next=20,x.a.post("".concat(h,"/login"),{email:m,password:j});case 20:r=e.sent,Y("\u05de\u05e9\u05ea\u05de\u05e9 \u05e0\u05e8\u05e9\u05dd \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4,\u05d0\u05e0\u05d0 \u05d4\u05de\u05ea\u05df \u05e2\u05d3 \u05dc\u05d4\u05e2\u05d1\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9..."),setTimeout((function(){s(r.data)}),1500),e.next=28;break;case 25:e.prev=25,e.t0=e.catch(8),Y(e.t0.response.data);case 28:case"end":return e.stop()}}),e,null,[[8,25]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"form",style:{position:"unset"},onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsx)(P,{text:"\u05de\u05d9\u05d9\u05dc",state:m,setState:v}),Object(o.jsx)(P,{text:"\u05e9\u05dd",state:N,setState:w}),Object(o.jsx)(P,{text:"\u05e2\u05d9\u05e8",state:E,setState:U,cities:be}),Object(o.jsx)("h4",{children:ae}),Object(o.jsx)(P,{text:"\u05e8\u05d7\u05d5\u05d1",state:I,setState:R,streets:xe}),Object(o.jsx)("h4",{children:ue}),Object(o.jsx)(P,{text:"\u05de\u05e1\u05e4\u05e8",state:M,setState:_,isNumber:!0}),Object(o.jsx)(P,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:j,setState:l,isPassword:!0}),Object(o.jsx)("input",{type:"file",value:A,onChange:function(e){Q(e.target.files[0]),z(e.target.value)}}),Object(o.jsx)("button",{disabled:!(!ae&&!ue),className:"ui button",type:"submit",onClick:me,children:"Submit"}),Object(o.jsx)("button",{onClick:function(){t(!n)},children:"\u05db\u05d1\u05e8 \u05e8\u05e9\u05d5\u05dd?"}),X&&Object(o.jsx)("h3",{children:X})]})}function M(e){var t=e.registered,n=e.setRegistered,a=Object(c.useContext)(p),s=(a.user,a.setUser),r=Object(c.useState)(""),u=Object(i.a)(r,2),j=u[0],l=u[1],b=Object(c.useState)(""),d=Object(i.a)(b,2),m=d[0],v=d[1],S=Object(c.useState)(""),k=Object(i.a)(S,2),N=k[0],w=k[1],C=function(){var e=Object(f.a)(O.a.mark((function e(){var t,n,c;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(m&&j||w("all fields are required"),J.a.isEmail(m)){e.next=5;break}w("must put valid email"),e.next=20;break;case 5:return e.prev=5,t=new g.a,e.next=9,x.a.post("".concat(h,"/login"),{email:m,password:j});case 9:n=e.sent,c=n.data,t.set("token",c.tokens[c.tokens.length-1]),w("\u05de\u05e9\u05ea\u05de\u05e9 \u05d4\u05ea\u05d7\u05d1\u05e8 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4,\u05d0\u05e0\u05d0 \u05d4\u05de\u05ea\u05df \u05e2\u05d3 \u05dc\u05d4\u05e2\u05d1\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9..."),setTimeout((function(){s(c)}),1500),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(5),console.log(e.t0),w(e.t0.response.data);case 20:case"end":return e.stop()}}),e,null,[[5,16]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("form",{className:"ui form",style:{position:"unset"},onSubmit:function(e){return e.preventDefault()},children:[Object(o.jsx)(P,{text:"\u05de\u05d9\u05d9\u05dc",state:m,setState:v}),Object(o.jsx)(P,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:j,setState:l,isPassword:!0}),Object(o.jsx)("button",{className:"ui button",type:"submit",onClick:C,children:"Submit"}),Object(o.jsx)("button",{onClick:function(){n(!t)},children:"\u05d7\u05d3\u05e9 \u05e4\u05d4??"}),Object(o.jsx)("h3",{children:N})]})}n(170);function _(){var e=Object(c.useState)(!1),t=Object(i.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(p),r=s.user,u=s.setUser,l=Object(j.f)();return Object(c.useEffect)((function(){r&&l.replace("/home"),(new g.a).get("token")&&N().then((function(e){return u(e)})).catch((function(e){return console.log(e.message)}))}),[r]),Object(o.jsx)("div",{className:"loginPage",children:n?Object(o.jsx)(M,{setRegistered:a,registered:n}):Object(o.jsx)(L,{setRegistered:a,registered:n})})}n(171);var B=n(29);function q(e){var t=e.field,n=e.state,a=e.setState,s=e.type,r=void 0===s?"text":s,u=e.setFile,j=void 0!==u&&u,l=Object(c.useState)(!1),b=Object(i.a)(l,2),O=b[0],f=b[1],d="\u05ea\u05de\u05d5\u05e0\u05d4"===t?{}:{value:n};return Object(o.jsxs)("div",{children:[Object(o.jsx)("label",{children:t}),O?Object(o.jsx)("input",Object(B.a)(Object(B.a)({type:r,name:n,placeholder:t},d),{},{onChange:function(e){"\u05ea\u05de\u05d5\u05e0\u05d4"===t&&j(e.target.files[0]),a(e.target.value)}})):Object(o.jsx)("h5",{children:n}),Object(o.jsx)("button",{onClick:function(){return f(!O)},children:O?Object(o.jsx)("i",{className:"far fa-check-circle"}):Object(o.jsx)("i",{className:"far fa-edit"})})]})}function A(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(c.useState)(""),s=Object(i.a)(a,2),r=s[0],u=s[1],j=Object(c.useState)(t.name),l=Object(i.a)(j,2),b=l[0],d=l[1],m=Object(c.useState)(),v=Object(i.a)(m,2),g=v[0],k=v[1],N=Object(c.useState)(""),w=Object(i.a)(N,2),C=w[0],y=w[1],E=Object(c.useState)(""),U=Object(i.a)(E,2),F=U[0],D=U[1],I=Object(c.useState)(""),R=Object(i.a)(I,2),T=R[0],J=R[1],L=Object(c.useState)(""),M=Object(i.a)(L,2),_=M[0],B=M[1],A=Object(c.useRef)(),z=function(){var e=Object(f.a)(O.a.mark((function e(){var c,a,s,i;return O.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return c=new FormData,a={password:r,name:b,city:g,street:C,number:F,img:T},Object.entries(a).forEach((function(e){e[1]&&c.append(e[0],e[1])})),c.append("email",t.email),e.prev=4,e.next=7,x.a.patch("".concat(h,"/settings"),c,S);case 7:s=e.sent,i=s.data,console.log(i.avatar),n(i),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(4),console.log(e.t0.message);case 16:case"end":return e.stop()}}),e,null,[[4,13]])})));return function(){return e.apply(this,arguments)}}();return Object(o.jsxs)("div",{className:"EditInfoDiv",children:[Object(o.jsx)("button",{className:"saveButton",onClick:z,children:Object(o.jsx)("i",{className:"far fa-save fa-2x"})}),Object(o.jsx)(q,{field:"\u05e9\u05dd",state:b,setState:d}),Object(o.jsx)(q,{field:"\u05ea\u05de\u05d5\u05e0\u05d4",state:_,setState:B,type:"file",setFile:J}),Object(o.jsx)(q,{field:"\u05e1\u05d9\u05e1\u05de\u05d0",state:r,setState:u}),Object(o.jsx)("label",{children:"\u05e2\u05d3\u05db\u05df \u05db\u05ea\u05d5\u05d1\u05ea"}),Object(o.jsx)("div",{className:"",onClick:function(){var e=A.current.classList;e.value.includes("hidden")?e.remove("hidden"):e.add("hidden")},children:Object(o.jsx)("h2",{children:"\u05de\u05d9\u05d3\u05e2 \u05db\u05ea\u05d5\u05d1\u05ea"})}),Object(o.jsxs)("div",{className:"locationInfo hidden",ref:A,children:[Object(o.jsx)(P,{text:"\u05e2\u05d9\u05e8",state:g,setState:k}),Object(o.jsx)(P,{text:"\u05e8\u05d7\u05d5\u05d1",state:C,setState:y}),Object(o.jsx)(P,{text:"\u05de\u05e1\u05e4\u05e8",state:F,setState:D})]})]})}function z(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(j.f)();return Object(c.useEffect)((function(){t||((new g.a).get("token")?N().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(o.jsx)(o.Fragment,{children:t&&Object(o.jsx)("div",{children:Object(o.jsx)(A,{})})})}n(172),n(173);function G(){return Object(o.jsx)("div",{className:"logo",children:Object(o.jsx)("img",{src:"".concat(h,"/logo/big "),alt:"logo pic"})})}n(174);function H(){var e=Object(c.useContext)(p),t=e.user,n=e.setUser,a=Object(c.useState)(!0),s=Object(i.a)(a,2),r=(s[0],s[1],Object(j.f)());return Object(o.jsxs)("div",{className:"userProfile",children:[Object(o.jsxs)("h4",{children:["\u05d1\u05e8\u05df\u05da \u05d4\u05d1\u05d0 ",t.name]}),Object(o.jsx)("img",{src:t.avatar?"".concat(t.avatar,"?t=").concat(Date.now()):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"pic of ".concat(t.name)}),Object(o.jsx)("a",{onClick:function(e){e.preventDefault(),(new g.a).remove("token"),n(null),r.replace("/")},href:"/",className:"red",children:"\u05d4\u05ea\u05e0\u05ea\u05e7"})]})}function K(){return Object(o.jsxs)("div",{className:"head",children:[Object(o.jsx)("div",{}),Object(o.jsx)(G,{}),Object(o.jsx)(H,{})]})}n(175);function Q(){return Object(o.jsx)("div",{className:"footer",children:Object(o.jsx)("img",{src:"".concat(h,"/logo/small"),alt:"small logo"})})}var V=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),n=t[0],a=t[1];return Object(o.jsx)("div",{className:"App",children:Object(o.jsxs)(u.a,{children:[Object(o.jsx)(l,{}),Object(o.jsxs)(p.Provider,{value:{user:n,setUser:a},children:[n&&Object(o.jsx)(K,{}),Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:_}),Object(o.jsx)(j.a,{path:"/home",exact:!0,component:w}),Object(o.jsx)(j.a,{path:"/setting",exact:!0,component:I}),Object(o.jsx)(j.a,{path:"/aboutUs",exact:!0,component:R}),Object(o.jsx)(j.a,{path:"/contactUs",exact:!0,component:z})]}),n&&Object(o.jsx)(Q,{})]})]})})};r.a.render(Object(o.jsx)(a.a.StrictMode,{children:Object(o.jsx)(V,{})}),document.getElementById("root"))},61:function(e,t,n){},62:function(e,t,n){},87:function(e,t,n){},88:function(e,t,n){},89:function(e,t,n){},90:function(e,t,n){},91:function(e,t,n){}},[[176,1,2]]]);
//# sourceMappingURL=main.a47c276b.chunk.js.map