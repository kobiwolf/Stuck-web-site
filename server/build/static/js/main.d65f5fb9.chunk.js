(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{101:function(e,t,n){},102:function(e,t,n){},103:function(e,t,n){},104:function(e,t,n){},105:function(e,t,n){},106:function(e,t,n){},107:function(e,t,n){},108:function(e,t,n){},109:function(e,t,n){},110:function(e,t,n){},189:function(e,t,n){},190:function(e,t,n){},191:function(e,t,n){},192:function(e,t,n){},193:function(e,t,n){},194:function(e,t,n){},195:function(e,t,n){},196:function(e,t,n){},197:function(e,t,n){},198:function(e,t,n){"use strict";n.r(t);var c=n(0),a=n(13),s=n.n(a),r=n(3),i=(n(68),n(18)),o=n(4),u=(n(69),n(1));function l(){var e=Object(c.useRef)(),t=Object(c.useRef)(),n=Object(c.useRef)();function a(){e.current.classList.remove("active"),t.current.classList.remove("active"),n.current.classList.remove("active")}return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"background",ref:n,onClick:a}),Object(u.jsx)("header",{className:"header",children:Object(u.jsxs)("nav",{className:"navbar",children:[Object(u.jsxs)("ul",{className:"nav-menu",ref:t,children:[Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{to:"/",className:"nav-link",onClick:a,children:"\u05d1\u05d9\u05ea"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{to:"/items",className:"nav-link",onClick:a,children:"\u05de\u05d5\u05e6\u05e8\u05d9\u05dd"})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsxs)(i.b,{to:"/aboutUs",className:"nav-link",onClick:a,children:["\u05e2\u05dc\u05d9\u05e0\u05d5"," "]})}),Object(u.jsx)("li",{className:"nav-item",children:Object(u.jsx)(i.b,{to:"/settings",className:"nav-link",onClick:a,children:"\u05d4\u05d2\u05d3\u05e8\u05d5\u05ea"})})]}),Object(u.jsxs)("div",{className:"hamburger",ref:e,onClick:function(){e.current.classList.toggle("active"),t.current.classList.toggle("active"),n.current.classList.toggle("active")},children:[Object(u.jsx)("span",{className:"bar"}),Object(u.jsx)("span",{className:"bar"}),Object(u.jsx)("span",{className:"bar"})]})]})})]})}var j=n(6),b=n.n(j),O=n(10),d=n(5),f=n.n(d),m="",x=Object(c.createContext)(null);n(94);function h(e){var t=e.state,n=e.setState,c=e.placeHolder,a=void 0===c?null:c;return Object(u.jsx)("textarea",{value:t,onChange:function(e){return n(e.target.value)},placeholder:a,rows:"40",cols:"40"})}n(95);var p=n(7),v=function(){return{headers:{Authorization:(new p.a).get("token")}}};function g(e){var t=e.to,n=e.from,a=e.item,s=e.fromName,i=e.toName,o=e.setState,l=Object(c.useState)(""),j=Object(r.a)(l,2),b=j[0],O=j[1],d=Object(c.useState)("\u05d4\u05d9 ".concat(s," \u05d0\u05e0\u05d9 ").concat(i," \u05de\u05d7\u05e4\u05e9 \u05e7\u05e6\u05ea    ").concat(a,",\u05d9\u05e9 \u05de\u05e6\u05d1 \u05dc\u05e2\u05d6\u05e8\u05d4?")),x=Object(r.a)(d,2),p=x[0],g=x[1];return Object(u.jsxs)("div",{className:"SendEmailBox",children:[Object(u.jsx)(h,{state:p,setState:g}),Object(u.jsx)("button",{onClick:function(){f.a.post("".concat(m,"/productMail"),{to:t,from:n,text:p},v()).then((function(){O("\u05d4\u05de\u05d9\u05d9\u05dc \u05e0\u05e9\u05dc\u05d7"),setTimeout((function(){o(!1)}),1e3)})).catch((function(){O("\u05d4\u05de\u05d9\u05d9\u05dc \u05dc\u05d0 \u05e0\u05e9\u05dc\u05d7"),setTimeout((function(){o(!1)}),1e3)}))},children:"\u05e9\u05dc\u05d7 \u05de\u05d9\u05d9\u05dc"}),b]})}n(96);function S(e){var t=e.match,n=e.item,a=Object(c.useContext)(x).user,s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(!1),b=Object(r.a)(j,2),O=b[0],d=b[1];Object(c.useEffect)((function(){var e=t.items.find((function(e){return e.name===n}));l(e.info)}),[]);return Object(u.jsxs)("div",{className:"userCard",children:[Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("img",{src:t.avatar?"".concat(t.avatar,"?t=").concat(Date.now()):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"pic of ".concat(t.name)}),Object(u.jsx)("h3",{children:t.name})]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("span",{className:"material-icons",onClick:function(){return d(!O)},children:"email"}),o&&Object(u.jsxs)("h3",{children:["\u05d4\u05e2\u05e8\u05d5\u05ea:",Object(u.jsx)("br",{}),o]})]}),O&&Object(u.jsx)(g,{to:t.email,from:a.email,item:n,fromName:a.name,toName:t.name,setState:d})]})}n(97);function k(e){var t=e.values,n=e.setState,c=e.header;return Object(u.jsxs)("div",{className:"radioButtonsDiv",children:[Object(u.jsx)("h4",{children:c}),Object(u.jsx)("div",{className:"",children:t.map((function(e){return Object(u.jsxs)("div",{children:[Object(u.jsx)("input",{className:"option-input radio",type:"radio",value:e[0],name:c,onChange:function(e){return n(e.target.value)}}),Object(u.jsxs)("label",{htmlFor:e[1],children:[" ",e[1]]})]},e[0])}))})]})}var N=n(63);n(100),n(101);function w(){var e=Object(c.useContext)(x),t=e.user,n=e.setIsLoading,a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(null),j=Object(r.a)(l,2),d=j[0],h=j[1],p=Object(c.useState)(""),g=Object(r.a)(p,2),w=g[0],C=g[1],y=Object(c.useState)([]),E=Object(r.a)(y,2),I=E[0],F=E[1],D=Object(c.useState)([]),L=Object(r.a)(D,2),R=L[0],U=L[1],P=Object(c.useState)(0),_=Object(r.a)(P,2),A=_[0],H=_[1],J=Object(c.useState)(null),T=Object(r.a)(J,2),M=T[0],B=T[1],q=Object(c.useRef)();Object(c.useEffect)((function(){M&&(f.a.get("".concat(m,"/itemsNames/").concat(M),v()).then((function(e){var t=e.data.map((function(e){return e.name}));F(t)})).catch((function(e){return console.log(e)})),o(""))}),[M]),Object(c.useEffect)((function(){if(!i)return U(null),void C(null);if(M){C(null),U(null);var e=new RegExp("^".concat(i),"m"),t=I.filter((function(t){return e.test(t)}));if(0===t.length)return C("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05e9\u05dd \u05d6\u05d4 \u05d1\u05de\u05d0\u05d2\u05e8,\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea"),void U(null);if(i===t[0])return U(null),void C(null);U(t.map((function(e){return Object(u.jsx)("option",{children:e},e)}))),I.find((function(e){return e===i}))||C("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05e9\u05dd \u05d6\u05d4 \u05d1\u05de\u05d0\u05d2\u05e8,\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea")}else C("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05d1\u05d7\u05d5\u05e8 \u05e1\u05d5\u05d2 \u05e7\u05d5\u05d3\u05dd!")}),[i]);var z=function(){var e=Object(O.a)(b.a.mark((function e(){var c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(M&&A&&i){e.next=2;break}return e.abrupt("return",h("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05de\u05dc\u05d0 \u05d0\u05ea \u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea"));case 2:return e.prev=2,n(!0),h(""),e.next=7,f.a.post("".concat(m,"/search"),{item:i,city:t.address.city,range:A,gps:t.address.gps},v());case 7:(c=e.sent)&&c.data||h("\u05d0\u05d9\u05df \u05d0\u05e3 \u05de\u05e9\u05ea\u05de\u05e9 \u05e9\u05de\u05ea\u05d0\u05d9\u05dd \u05dc\u05e7\u05e8\u05d9\u05d8\u05e8\u05d5\u05e0\u05d9\u05dd \u05e9\u05dc\u05da"),h(c.data.map((function(e){return Object(u.jsx)(S,{match:e,item:i},e._id)}))),n(!1),e.next=17;break;case 13:e.prev=13,e.t0=e.catch(2),n(!1),h(e.t0.response.data);case 17:case"end":return e.stop()}}),e,null,[[2,13]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"SearchMainDiv",children:[Object(u.jsx)("input",{type:"search",list:"list",value:i,placeholder:"\u05de\u05d4 \u05d7\u05e1\u05e8?",onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)("datalist",{id:"list",children:R}),w,Object(u.jsx)("div",{className:"SearchOptions",children:Object(u.jsx)(k,{values:[["Medicine","\u05ea\u05e8\u05d5\u05e4\u05d4"],["Tool","\u05db\u05dc\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4"],["Food","\u05d0\u05d5\u05db\u05dc/\u05e9\u05ea\u05d9\u05d4"]],setState:B,header:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05de\u05d5\u05e6\u05e8"})}),Object(u.jsx)("h3",{children:"\u05d4\u05de\u05e8\u05d7\u05e7 \u05e9\u05d1\u05d0 \u05dc\u05da \u05dc\u05d4\u05e9\u05e7\u05d9\u05e2(\u05de\u05d8\u05e8\u05d9\u05dd)"}),Object(u.jsx)(N.a,{className:"slider",marks:{1e3:"1000",2e3:"2000",3e3:"3000",4e3:"4000",5e3:"5000",6e3:"6000"},min:0,max:6e3,value:A,ref:q,onChange:function(e){return H(e)}}),Object(u.jsx)("button",{onClick:z,disabled:!!w,children:"\u05d9\u05d0\u05dc\u05dc\u05d4 \u05ea\u05d1\u05d9\u05d0 \u05de\u05d5\u05e6\u05e8!"}),d&&"string"===typeof d?Object(u.jsx)("h2",{children:d}):Object(u.jsx)("div",{children:d})]})}var C=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.post("".concat(m,"/profile"),{},v());case 3:return t=e.sent,n=t.data,e.abrupt("return",n);case 8:throw e.prev=8,e.t0=e.catch(0),new Error(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}();function y(){var e=Object(c.useContext)(x),t=e.user,n=e.setUser,a=Object(o.f)();return Object(c.useEffect)((function(){t||((new p.a).get("token")?C().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"tabHeader",children:"\u05d7\u05d9\u05e4\u05d5\u05e9 \u05de\u05d5\u05e6\u05e8 \u05d1\u05d0\u05d6\u05d5\u05e8\u05da:"}),Object(u.jsx)(w,{})]})})}n(102),n(103);function E(e){var t=e.state,n=e.setState,c=e.placeHolder,a=void 0===c?null:c;return Object(u.jsx)(u.Fragment,{children:Object(u.jsx)("input",{type:"text",value:t,onChange:function(e){return n(e.target.value)},placeholder:a})})}n(104);function I(e){var t=e.item,n=e.setItem,a=e.deleteClick,s=Object(c.useState)(!1),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(t.info||"\u05d0\u05d9\u05df \u05de\u05d9\u05d3\u05e2"),b=Object(r.a)(j,2),O=b[0],d=b[1];return Object(c.useEffect)((function(){t.info=O,n(t)}),[O]),Object(u.jsxs)("div",{className:"EditInfoItem",children:[Object(u.jsx)("h5",{children:"\u05de\u05d9\u05d3\u05e2 \u05e2\u05dc \u05d4\u05de\u05d5\u05e6\u05e8:"}),o?Object(u.jsx)(E,{setState:d,state:O}):Object(u.jsx)("h5",{children:O}),Object(u.jsxs)("div",{children:[Object(u.jsx)("span",{className:"material-icons ".concat(o?"green-bg":"orange-bg"),onClick:function(){l(!o)},children:o?"check ":"edit"}),Object(u.jsx)("span",{className:"material-icons red-bg",onClick:a,children:"delete"})]})]})}function F(e){var t=e.item,n=Object(c.useContext)(x),a=n.user,s=n.setUser,i=Object(c.useState)(t),o=Object(r.a)(i,2),l=o[0],j=o[1],b=function(){return!!a.items.find((function(e){return t.name===e.name}))},O=function(){var e=JSON.parse(JSON.stringify(a));b()?e.items=e.items.filter((function(e){return e.name!==t.name})):e.items.push(t),s(e)};return Object(u.jsxs)("div",{className:"CardItem",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{src:t.img,alt:t.name,onClick:function(){b()||O()}}),Object(u.jsx)("h2",{children:t.name})]}),b()&&Object(u.jsx)(I,{item:l,setItem:j,deleteClick:O})]})}n(105);function D(){var e=Object(c.useContext)(x),t=e.user,n=e.setIsLoading,a=Object(c.useState)(""),s=Object(r.a)(a,2),i=s[0],o=s[1],l=Object(c.useState)(""),j=Object(r.a)(l,2),d=j[0],h=j[1],p=Object(c.useState)(null),g=Object(r.a)(p,2),S=g[0],N=g[1],w=Object(c.useState)(""),C=Object(r.a)(w,2),y=C[0],E=C[1],I=Object(c.useState)([]),D=Object(r.a)(I,2),L=D[0],R=D[1],U=Object(c.useState)([]),P=Object(r.a)(U,2),_=P[0],A=P[1];Object(c.useEffect)((function(){if(Array.isArray(d)&&d.length){var e=d.filter((function(e){if(!t.items.find((function(t){return t.name===e.props.item.name})))return e}));h(e)}}),[t]),Object(c.useEffect)((function(){S&&(f.a.get("".concat(m,"/itemsNames/").concat(S),v()).then((function(e){var t=e.data.map((function(e){return e.name}));A(t)})).catch((function(e){return console.log(e)})),o(""))}),[S]),Object(c.useEffect)((function(){if(!i)return R(null),void E(null);if(S){E(null),R(null);var e=new RegExp("^".concat(i),"m"),t=_.filter((function(t){return e.test(t)}));if(0===t.length)return E("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05e9\u05dd \u05d6\u05d4 \u05d1\u05de\u05d0\u05d2\u05e8,\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea"),void R(null);if(i===t[0])return R(null),void E(null);R(t.map((function(e){return Object(u.jsx)("option",{children:e},e)}))),_.find((function(e){return e===i}))||E("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05e9\u05dd \u05d6\u05d4 \u05d1\u05de\u05d0\u05d2\u05e8,\u05d0\u05e0\u05d0 \u05e0\u05e1\u05d4 \u05e9\u05e0\u05d9\u05ea")}else E("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05d1\u05d7\u05d5\u05e8 \u05e1\u05d5\u05d2 \u05e7\u05d5\u05d3\u05dd!")}),[i]);var H=function(e){var t=JSON.parse(JSON.stringify(d));t.push(Object(u.jsx)(F,{item:e},e._id)),h(t)},J=function(){var e=Object(O.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(S){e.next=2;break}return e.abrupt("return",h("\u05db\u05dc \u05d4\u05e9\u05d3\u05d5\u05ea \u05d7\u05d5\u05d1\u05d4!"));case 2:return e.prev=2,n(!0),e.next=6,f.a.get("".concat(m,"/manager/items/").concat(S,"?name=").concat(i),v());case 6:if((t=e.sent).data.length){e.next=11;break}return h("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0 \u05de\u05d5\u05e6\u05e8"),n(!1),e.abrupt("return");case 11:h(t.data.map((function(e){return Object(u.jsx)(F,{item:e,addItem:H},e._id)}))),n(!1),e.next=19;break;case 15:e.prev=15,e.t0=e.catch(2),n(!1),console.log(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[2,15]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("div",{className:"addItemDivMain",children:[Object(u.jsx)("div",{className:"addItemDivOptions",children:Object(u.jsx)(k,{setState:N,name:"type",header:"\u05d1\u05d7\u05e8 \u05e1\u05d5\u05d2 \u05de\u05d5\u05e6\u05e8",values:[["Medicine","\u05ea\u05e8\u05d5\u05e4\u05d4"],["Tool","\u05db\u05dc\u05d9 \u05e2\u05d1\u05d5\u05d3\u05d4"],["Food","\u05d0\u05d5\u05db\u05dc/\u05e9\u05ea\u05d9\u05d4"]]})}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:"search",list:"list",value:i,placeholder:"\u05de\u05d4 \u05d7\u05e1\u05e8?",onChange:function(e){return o(e.target.value)},required:!0}),Object(u.jsx)("datalist",{id:"list",children:L}),y,Object(u.jsx)("span",{className:"material-icons",onClick:J,children:"search"})]}),Object(u.jsx)("div",{className:"items",children:d})]})}n(106);function L(){var e=Object(c.useContext)(x),t=e.user,n=e.setIsLoading,a=Object(c.useState)([]),s=Object(r.a)(a,2),i=s[0],o=s[1];Object(c.useEffect)((function(){console.log(t),o(t.items.map((function(e){return Object(u.jsx)(F,{item:e},e._id)})))}),[t]);var l=function(){var e=Object(O.a)(b.a.mark((function e(){var c,a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n(!0),c=i.map((function(e){return e.props.item})),e.prev=2,e.next=5,f.a.patch("".concat(m,"/list"),{mail:t.email,items:c,names:c.map((function(e){return e.name}))},v());case 5:a=e.sent,console.log(a.data),n(!1),e.next=14;break;case 10:e.prev=10,e.t0=e.catch(2),n(!1),console.log(e.t0);case 14:case"end":return e.stop()}}),e,null,[[2,10]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"tabHeader",children:"\u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e9\u05dc\u05da:"}),Object(u.jsxs)("div",{className:"ItemsDiv",children:[Object(u.jsx)("button",{className:"saveButton",onClick:l,children:Object(u.jsx)("i",{className:"far fa-save fa-2x"})}),(null===i||void 0===i?void 0:i.length)?i:Object(u.jsx)("h5",{children:"\u05d0\u05d9\u05df \u05dc\u05da \u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05e2\u05d3\u05d9\u05d9\u05df...\u05d7\u05d1\u05dc"})]})]})}function R(){var e=Object(c.useContext)(x),t=e.user,n=e.setUser,a=Object(o.f)();return Object(c.useEffect)((function(){t||((new p.a).get("token")?C().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)("div",{children:[Object(u.jsx)(L,{}),Object(u.jsx)("div",{className:"tabHeader",children:"\u05d4\u05de\u05d5\u05e6\u05e8\u05d9\u05dd \u05dc\u05d4\u05d5\u05e1\u05e4\u05d4:"}),Object(u.jsx)(D,{})]})})}n(107);function U(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(x).user;return Object(u.jsxs)("div",{className:"AboutUsDiv",children:[Object(u.jsx)("h2",{children:"\u05e7\u05e6\u05ea \u05e2\u05dc\u05d9\u05d9"}),Object(u.jsxs)("p",{children:["SHAREIT \u05e0\u05d5\u05e6\u05e8 \u05e2\u05e7\u05d1 \u05e6\u05d5\u05e8\u05da \u05e2\u05de\u05d5\u05e7 ",Object(u.jsx)("br",{})," \u05d1\u05e8\u05de\u05d4 \u05d0\u05d9\u05e9\u05d9\u05ea \u05d0\u05e0\u05d9 \u05d9\u05db\u05d5\u05dc \u05dc\u05e1\u05e4\u05e8 \u05e9\u05e0\u05ea\u05e2\u05e7\u05d1\u05ea\u05d9 \u05dc\u05dc\u05d0 \u05de\u05d8\u05e8\u05e0\u05d4 \u05dc\u05d1\u05ea \u05e9\u05dc\u05d9 \u05d1\u05d0\u05de\u05e6\u05e2 \u05d4\u05dc\u05d9\u05dc\u05d4 \u05d5\u05d4\u05d3\u05d1\u05e8 \u05d4\u05d9\u05d4 \u05e7\u05e9\u05d4 \u05dc\u05e6\u05d0\u05ea \u05de\u05d4\u05e2\u05d9\u05e8 \u05d5\u05dc\u05e7\u05e0\u05d5\u05ea \u05de\u05d8\u05e8\u05e0\u05d4",Object(u.jsx)("br",{})," \u05dc\u05db\u05df \u05e0\u05d5\u05e6\u05e8 shareit \u05e8\u05e9\u05ea \u05e9\u05dc \u05d7\u05d1\u05e8\u05d9\u05dd \u05d4\u05d3\u05d5\u05d0\u05d2\u05d9\u05dd \u05d6\u05d4 \u05dc\u05d6\u05d4 \u05d1\u05de\u05e7\u05e8\u05d4 \u05d4\u05e6\u05d5\u05e8\u05da ",Object(u.jsx)("br",{})," ","\u05d0\u05e9\u05de\u05d7 \u05dc\u05e9\u05de\u05d5\u05e2 \u05e2\u05e6\u05d5\u05ea \u05dc\u05d9\u05d9\u05e2\u05d5\u05dc \u05ea\u05d2\u05d5\u05d1\u05d5\u05ea \u05de\u05d7\u05e9\u05d1\u05d5\u05ea \u05d4\u05e2\u05e8\u05d5\u05ea"]}),Object(u.jsxs)("div",{className:"sendMail",children:[Object(u.jsx)("h3",{children:"\u05e9\u05dc\u05d7 \u05dc\u05e0\u05d5 \u05de\u05d9\u05d9\u05dc!"}),Object(u.jsx)("br",{}),Object(u.jsx)("textarea",{rows:"6",cols:"20",value:n,onChange:function(e){return a(e.target.value)}}),Object(u.jsx)("br",{}),Object(u.jsx)("br",{}),Object(u.jsx)("span",{className:"material-icons",onClick:function(){f.a.post("".concat(m,"/sendEmail"),{emailText:n,email:s.email},v()).then((function(e){return console.log("we did it")})).catch((function(e){return console.log(e)}))},children:"send"})]})]})}n(108);function P(){return Object(u.jsxs)("div",{className:"linksOfMe",children:[Object(u.jsx)("a",{href:"https://github.com/kobiwolf",target:"_blanc",children:Object(u.jsx)("i",{className:"fab fa-github"})}),Object(u.jsx)("a",{href:"https://www.linkedin.com/in/kobi-wolf-01387a1a9/",target:"_blanc",children:Object(u.jsx)("i",{className:"fab fa-linkedin"})})]})}function _(){var e=Object(c.useContext)(x),t=e.user,n=e.setUser;Object(c.useEffect)((function(){t||((new p.a).get("token")?C().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]);var a=Object(o.f)();return Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsxs)("div",{children:[Object(u.jsx)("div",{className:"tabHeader",children:"\u05e2\u05dc\u05d9\u05e0\u05d5:"}),Object(u.jsx)(U,{}),Object(u.jsx)(P,{})]})})}n(42),n(109);function A(e){var t=e.text,n=e.state,a=e.setState,s=e.cities,i=void 0===s?"":s,o=e.streets,l=void 0===o?"":o,j=e.isPassword,b=void 0!==j&&j,O=e.isNumber,d=void 0!==O&&O,f=e.required,m=void 0===f||f,x=Object(c.useState)(""),h=Object(r.a)(x,2),p=h[0],v=h[1],g=Object(c.useState)(!1),S=Object(r.a)(g,2),k=S[0],N=S[1],w=b&&k?"password":"text";return Object(c.useEffect)((function(){i&&v(i.map((function(e){return Object(u.jsx)("option",{children:e},e)})))}),[i]),Object(c.useEffect)((function(){"\u05e8\u05d7\u05d5\u05d1"===t&&console.log(p),l&&v(l.map((function(e){return Object(u.jsx)("option",{children:e},e)})))}),[l]),Object(u.jsxs)("div",{className:"field",children:[Object(u.jsxs)("label",{children:[t,":"]}),Object(u.jsxs)("div",{className:"",children:[Object(u.jsx)("input",{type:d?"number":w,name:t,placeholder:t,value:n,onChange:function(e){return a(e.target.value)},required:m,list:i?"cities":l?"streets":void 0}),p&&Object(u.jsx)("datalist",{id:i?"cities":l?"streets":void 0,children:p}),b&&Object(u.jsx)("span",{className:"material-icons",onClick:function(){return N(!k)},children:k?"visibility":"visibility_off"})]})]})}var H=n(17),J=n.n(H),T=n(31);n(110);function M(e){var t=e.field,n=e.state,c=e.setState,a=e.type,s=void 0===a?"text":a,r=e.setFile,i=void 0!==r&&r,o="\u05ea\u05de\u05d5\u05e0\u05d4"===t?{}:{value:n};return Object(u.jsxs)("div",{className:"InputLabelEdit",children:[Object(u.jsx)("div",{children:Object(u.jsx)("label",{children:t})}),Object(u.jsx)("div",{children:"\u05ea\u05de\u05d5\u05e0\u05d4"===t?Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("label",{htmlFor:"upload-button",children:n?Object(u.jsx)("img",{src:n.preview,alt:"img"}):Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("span",{className:"material-icons",children:"add_a_photo"}),Object(u.jsx)("span",{className:"fa-stack fa-2x mt-3 mb-2"})]})}),Object(u.jsx)("input",{type:"file",id:"upload-button",onChange:function(e){e.target.files[0]&&(c({preview:URL.createObjectURL(e.target.files[0])}),i(e.target.files[0]))},style:{display:"none"}}),Object(u.jsx)("br",{})]}):Object(u.jsx)("input",Object(T.a)(Object(T.a)({type:s,name:n,placeholder:t},o),{},{onChange:function(e){c(e.target.value)}}))})]})}function B(e){var t=e.setRegistered,n=e.registered,a=Object(c.useContext)(x),s=a.setUser,i=a.setIsLoading,o=Object(c.useState)(""),l=Object(r.a)(o,2),j=l[0],d=l[1],h=Object(c.useState)(""),v=Object(r.a)(h,2),g=v[0],S=v[1],k=Object(c.useState)(""),N=Object(r.a)(k,2),w=N[0],C=N[1],y=Object(c.useState)(""),E=Object(r.a)(y,2),I=E[0],F=E[1],D=Object(c.useState)(""),L=Object(r.a)(D,2),R=L[0],U=L[1],P=Object(c.useState)(""),_=Object(r.a)(P,2),H=_[0],T=_[1],B=Object(c.useState)(""),q=Object(r.a)(B,2),z=q[0],G=q[1],K=Object(c.useState)(""),Q=Object(r.a)(K,2),V=Q[0],W=Q[1],X=Object(c.useState)(""),Y=Object(r.a)(X,2),Z=Y[0],$=Y[1],ee=Object(c.useState)(null),te=Object(r.a)(ee,2),ne=te[0],ce=te[1],ae=Object(c.useState)(""),se=Object(r.a)(ae,2),re=se[0],ie=se[1],oe=Object(c.useState)(""),ue=Object(r.a)(oe,2),le=ue[0],je=ue[1],be=Object(c.useState)(null),Oe=Object(r.a)(be,2),de=Oe[0],fe=Oe[1],me=Object(c.useState)(null),xe=Object(r.a)(me,2),he=xe[0],pe=xe[1];Object(c.useEffect)((function(){return function(){var e=Object(O.a)(b.a.mark((function e(){var t,n;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,f.a.get("".concat(m,"/address-list"));case 3:t=e.sent,n=JSON.parse(t.data.data),ce(n),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.message);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})));return function(){return e.apply(this,arguments)}}()(),function(){}}),[]),Object(c.useEffect)((function(){if(I){var e=new RegExp("^".concat(I),"m"),t=Object.keys(ne).filter((function(t){return e.test(t)}));if(I===t[0])return void fe(null);t.splice(10),0===t.length?ie("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e2\u05d9\u05e8 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc"):ie(null),fe(t)}else fe([]),ie(null);return function(){}}),[I]),Object(c.useEffect)((function(){if(R){if(!I)return je("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05e9\u05d9\u05dd \u05e2\u05d9\u05e8!");var e=new RegExp("^".concat(R),"m"),t=ne[I];if(!t)return U("\u05d0\u05d9\u05df \u05e8\u05d7\u05d5\u05d1\u05d5\u05ea \u05d1\u05e2\u05d9\u05e8 \u05d6\u05d5");var n=t.filter((function(t){return e.test(t)}));if(R===n[0])return void pe(null);if(0===n.length)return void je("\u05d0\u05d9\u05df \u05e8\u05d7\u05d5\u05d1 \u05e9\u05de\u05ea\u05d7\u05d9\u05dc \u05d1\u05d0\u05d5\u05ea\u05d9\u05d5\u05ea \u05d0\u05dc\u05d5");n.splice(10),je(null),pe(n)}else pe([]),je(null);return function(){}}),[R]);var ve=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n,c,a,r;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(J.a.isEmail(g)){e.next=2;break}return e.abrupt("return",$("must put valid email"));case 2:if(J.a.isStrongPassword(j,{minSymbols:0})){e.next=6;break}return e.abrupt("return",$("must put valid password"));case 6:return e.prev=6,i(!0),t=new FormData,n={name:w,city:I,street:R,number:H,email:g,password:j},Object.entries(n).forEach((function(e){t.append(e[0],e[1])})),t.append("img",V),e.next=14,f.a.post("".concat(m,"/signup"),t);case 14:return c=e.sent,a=c.data,(new p.a).set("token",a.tokens[a.tokens.length-1]),e.next=19,f.a.post("".concat(m,"/login"),{email:g,password:j});case 19:r=e.sent,i(!1),$("\u05de\u05e9\u05ea\u05de\u05e9 \u05e0\u05e8\u05e9\u05dd \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4,\u05d0\u05e0\u05d0 \u05d4\u05de\u05ea\u05df \u05e2\u05d3 \u05dc\u05d4\u05e2\u05d1\u05e8\u05d4 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9..."),setTimeout((function(){s(r.data)}),1500),e.next=29;break;case 25:e.prev=25,e.t0=e.catch(6),i(!1),$(e.t0.response.data);case 29:case"end":return e.stop()}}),e,null,[[6,25]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)(A,{text:"\u05de\u05d9\u05d9\u05dc",state:g,setState:S}),Object(u.jsx)(A,{text:"\u05e9\u05dd",state:w,setState:C}),Object(u.jsx)(A,{text:"\u05e2\u05d9\u05e8",state:I,setState:F,cities:de,type:"search"}),re&&Object(u.jsx)("h5",{children:re}),Object(u.jsx)(A,{text:"\u05e8\u05d7\u05d5\u05d1",state:R,setState:U,streets:he,type:"search"}),le&&Object(u.jsx)("h5",{children:le}),Object(u.jsx)(A,{text:"\u05de\u05e1\u05e4\u05e8",state:H,setState:T,isNumber:!0}),Object(u.jsx)(A,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:j,setState:d,isPassword:!0}),Object(u.jsx)(M,{field:"\u05ea\u05de\u05d5\u05e0\u05d4",state:z,setState:G,type:"file",setFile:W}),Object(u.jsx)("button",{disabled:!(!re&&!le),className:"buttonSignUp",type:"submit",onClick:ve,children:"\u05d4\u05e8\u05e9\u05dd"}),Object(u.jsx)("span",{onClick:function(e){e.preventDefault(),t(!n)},children:"\u05db\u05d1\u05e8 \u05e8\u05e9\u05d5\u05dd?"}),Z&&Object(u.jsx)("h3",{children:Z})]})}n(189);function q(e){var t=e.registered,n=e.setRegistered,a=Object(c.useContext)(x),s=a.setUser,i=a.setIsLoading,o=Object(c.useState)(""),l=Object(r.a)(o,2),j=l[0],d=l[1],h=Object(c.useState)(""),v=Object(r.a)(h,2),g=v[0],S=v[1],k=Object(c.useState)(""),N=Object(r.a)(k,2),w=N[0],C=N[1],y=function(){var e=Object(O.a)(b.a.mark((function e(){var t,n,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(g&&j||C("all fields are required"),J.a.isEmail(g)){e.next=5;break}C("must put valid email"),e.next=22;break;case 5:return i(!0),e.prev=6,t=new p.a,e.next=10,f.a.post("".concat(m,"/login"),{email:g,password:j});case 10:n=e.sent,c=n.data,t.set("token",c.tokens[c.tokens.length-1]),i(!1),s(c),e.next=22;break;case 17:e.prev=17,e.t0=e.catch(6),i(!1),console.log(e.t0),C(e.t0.response.data);case 22:case"end":return e.stop()}}),e,null,[[6,17]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)("form",{className:"form",onSubmit:function(e){return e.preventDefault()},children:[Object(u.jsx)(A,{text:"\u05de\u05d9\u05d9\u05dc",state:g,setState:S}),Object(u.jsx)(A,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:j,setState:d,isPassword:!0}),Object(u.jsxs)("div",{className:"linksInForm",children:[Object(u.jsx)("button",{className:"forgetPassword",onClick:function(e){if(e.preventDefault(),!J.a.isEmail(g))return console.log("must put valid email");f.a.get("".concat(m,"/resetPassword/").concat(g)).then((function(e){return console.log("mail has been sent")})).catch((function(e){return console.dir(e)}))},children:"\u05e9\u05db\u05d7\u05ea \u05e1\u05d9\u05e1\u05de\u05d0??"}),Object(u.jsx)("span",{onClick:function(e){e.preventDefault(),n(!t)},children:"\u05d7\u05d3\u05e9 \u05e4\u05d4??"})]}),Object(u.jsx)("button",{type:"submit",className:"loggedInBut",onClick:y,children:"\u05d4\u05ea\u05d7\u05d1\u05e8"}),Object(u.jsx)("h3",{children:w})]})}n(190),n(191);function z(){return Object(u.jsx)("div",{className:"footer",children:Object(u.jsx)("img",{src:"".concat(m,"/logo/small"),alt:"small logo"})})}var G=n(62),K=n.n(G);function Q(){var e=Object(c.useState)(!1),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useContext)(x),i=s.user,l=s.setUser,j=Object(o.f)();return Object(c.useEffect)((function(){if(i)return j.replace("/home");(new p.a).get("token")&&(console.log("wow"),C().then((function(e){return l(e)})).catch((function(e){return console.log(e.message)})))}),[i]),Object(u.jsxs)("div",{className:"loginPage",children:[Object(u.jsx)(z,{}),Object(u.jsxs)(K.a,{isFlipped:n,flipDirection:"vertical",children:[Object(u.jsx)(q,{setRegistered:a,registered:n}),Object(u.jsx)(B,{setRegistered:a,registered:n})]})]})}n(192);function V(){var e=Object(c.useContext)(x),t=e.user,n=e.setUser,a=e.setIsLoading,s=Object(c.useState)(""),i=Object(r.a)(s,2),o=i[0],l=i[1],j=Object(c.useState)(t.name),d=Object(r.a)(j,2),h=d[0],p=d[1],g=Object(c.useState)(),S=Object(r.a)(g,2),k=S[0],N=S[1],w=Object(c.useState)(""),C=Object(r.a)(w,2),y=C[0],E=C[1],I=Object(c.useState)(""),F=Object(r.a)(I,2),D=F[0],L=F[1],R=Object(c.useState)(""),U=Object(r.a)(R,2),P=U[0],_=U[1],H=Object(c.useState)(""),T=Object(r.a)(H,2),B=T[0],q=T[1],z=Object(c.useState)(null),G=Object(r.a)(z,2),K=G[0],Q=G[1],V=Object(c.useState)(""),W=Object(r.a)(V,2),X=W[0],Y=W[1],Z=Object(c.useState)(""),$=Object(r.a)(Z,2),ee=$[0],te=$[1],ne=Object(c.useState)(""),ce=Object(r.a)(ne,2),ae=ce[0],se=ce[1],re=Object(c.useState)(null),ie=Object(r.a)(re,2),oe=ie[0],ue=ie[1],le=Object(c.useState)(null),je=Object(r.a)(le,2),be=je[0],Oe=je[1];Object(c.useEffect)((function(){console.log(),f.a.post("".concat(m,"/myAddress"),{id:t.address.id},v()).then((function(e){var t=e.data,n=t.city,c=t.street,a=t.number;N(n),E(c),L(a)})).catch((function(e){return console.log(e.message)})),f.a.get("".concat(m,"/address-list")).then((function(e){var t=e.data;Q(JSON.parse(t.data))})).catch((function(e){return console.log(e.message)}))}),[]),Object(c.useEffect)((function(){if(k&&K){var e=new RegExp("^".concat(k),"m"),t=Object.keys(K).filter((function(t){return e.test(t)}));t.splice(10),0===t.length?Y("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e2\u05d9\u05e8 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc,\u05e9\u05de\u05d9\u05e8\u05d4 \u05de\u05d5\u05e9\u05d1\u05ea\u05ea"):Y(null),ue(t)}else ue([]),Y(null);return function(){}}),[k]),Object(c.useEffect)((function(){if(y&&K){if(!k)return E("\u05d7\u05d5\u05d1\u05d4 \u05dc\u05e9\u05d9\u05dd \u05e2\u05d9\u05e8!");var e=new RegExp("^".concat(y),"m"),t=K[k];if(!t)return E("\u05d0\u05d9\u05df \u05e8\u05d7\u05d5\u05d1\u05d5\u05ea \u05d1\u05e2\u05d9\u05e8 \u05d6\u05d5");var n=t.filter((function(t){return e.test(t)}));n.splice(10),0===n.length?te("\u05dc\u05d0 \u05e0\u05de\u05e6\u05d0\u05d4 \u05e8\u05d7\u05d5\u05d1 \u05d1\u05d9\u05e9\u05e8\u05d0\u05dc,\u05e9\u05de\u05d9\u05e8\u05d4 \u05de\u05d5\u05e9\u05d1\u05ea\u05ea"):te(null),Oe(n)}else Oe([]),te(null);return function(){}}),[y]),Object(c.useEffect)((function(){o&&(J.a.isStrongPassword(o,{minSymbols:0})?se(""):se("\u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d9\u05d9\u05d1\u05ea \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d0\u05d5\u05e8\u05da \u05e9\u05de\u05d5\u05e0\u05d4 \u05ea\u05d5\u05d5\u05d9\u05dd \u05d5\u05dc\u05db\u05dc\u05d5\u05dc \u05de\u05e1\u05e4\u05e8 \u05d5 \u05d0\u05d5\u05ea \u05d2\u05d3\u05d5\u05dc\u05d4 \u05d1\u05d0\u05e0\u05d2\u05dc\u05d9\u05ea"))}),[o]);var de=function(){var e=Object(O.a)(b.a.mark((function e(n){var c,a,s,r,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.post("".concat(m,"/myAddress"),{id:t.address.id},v());case 2:c=e.sent,a=c.data,s=a.city,r=a.street,i=a.number,n.city===s&&n.street===r&&n.number===i&&(delete n.city,delete n.street,delete n.number);case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),fe=function(){var e=Object(O.a)(b.a.mark((function e(){var c,s,r,i,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a(!0),c=t.email,s=new FormData,r={password:o,name:h,city:k,street:y,number:D,img:P,email:c},e.next=6,de(r);case 6:return Object.entries(r).forEach((function(e){e[1]&&s.append(e[0],e[1])})),e.prev=7,e.next=10,f.a.patch("".concat(m,"/settings"),s,v());case 10:i=e.sent,u=i.data,n(u),a(!1),e.next=20;break;case 16:e.prev=16,e.t0=e.catch(7),a(!1),console.log(e.t0.message);case 20:case"end":return e.stop()}}),e,null,[[7,16]])})));return function(){return e.apply(this,arguments)}}();return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("div",{className:"tabHeader",children:"\u05e2\u05d3\u05db\u05d5\u05df \u05e4\u05e8\u05d8\u05d9\u05dd:"}),Object(u.jsxs)("div",{className:"EditInfoDiv",children:[Object(u.jsx)("button",{className:"saveButton",onClick:fe,disabled:!!(ee||X||ae),children:Object(u.jsx)("i",{className:"far fa-save fa-2x",children:" "})}),Object(u.jsx)(A,{text:"\u05e9\u05dd",state:h,setState:p}),Object(u.jsx)(A,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:o,setState:l,isPassword:!0}),ae,Object(u.jsx)(M,{field:"\u05ea\u05de\u05d5\u05e0\u05d4",state:B,setState:q,type:"file",setFile:_}),Object(u.jsxs)("details",{children:[Object(u.jsx)("summary",{children:"\u05e2\u05d3\u05db\u05df \u05db\u05ea\u05d5\u05d1\u05ea"}),Object(u.jsx)(A,{text:"\u05e2\u05d9\u05e8",state:k,setState:N,cities:oe}),X,Object(u.jsx)(A,{text:"\u05e8\u05d7\u05d5\u05d1",state:y,setState:E,streets:be}),ee,Object(u.jsx)(A,{text:"\u05de\u05e1\u05e4\u05e8",state:D,setState:L})]})]})]})}function W(){var e=Object(c.useContext)(x),t=e.user,n=e.setUser,a=Object(o.f)();return Object(c.useEffect)((function(){t||((new p.a).get("token")?C().then((function(e){return n(e)})).catch((function(e){return console.log(e.message)})):a.replace("/"))}),[]),Object(u.jsx)(u.Fragment,{children:t&&Object(u.jsx)("div",{children:Object(u.jsx)(V,{})})})}n(193),n(194);function X(){return Object(u.jsx)("div",{className:"logo",children:Object(u.jsx)("img",{src:"".concat(m,"/logo/big "),alt:"logo pic"})})}n(195);function Y(){var e=Object(c.useContext)(x),t=e.user,n=e.setUser;return Object(u.jsxs)("div",{className:"userProfile",children:[Object(u.jsx)("img",{src:t.avatar?"".concat(t.avatar,"?t=").concat(Date.now()):"https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png",alt:"pic of ".concat(t.name)}),Object(u.jsx)("h4",{children:t.name}),Object(u.jsx)("a",{onClick:function(e){e.preventDefault(),n(null),(new p.a).remove("token"),window.location.reload()},href:"/",className:"red",children:"\u05d4\u05ea\u05e0\u05ea\u05e7"})]})}function Z(){return Object(u.jsxs)("div",{className:"head",children:[Object(u.jsx)(X,{}),Object(u.jsx)(Y,{})]})}n(196);function $(){return Object(u.jsx)("div",{className:"spinner",children:Object(u.jsx)("img",{src:"".concat(m,"/logo/small"),alt:"logo spin"})})}n(197);function ee(){var e=Object(c.useContext)(x).setIsLoading,t=Object(c.useState)(""),n=Object(r.a)(t,2),a=n[0],s=n[1],i=Object(c.useState)(""),l=Object(r.a)(i,2),j=l[0],d=l[1],h=Object(c.useState)(""),g=Object(r.a)(h,2),S=g[0],k=g[1],N=Object(o.f)();Object(c.useEffect)((function(){var e=N.location.pathname.split("/");(new p.a).set("token",e[3])}),[]);var w=function(){var t=Object(O.a)(b.a.mark((function t(){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e(!0),t.prev=1,t.next=4,f.a.post("".concat(m,"/confirmPassword"),{password:a,email:N.location.pathname.split("/")[2]},v());case 4:e(!1),k("\u05e1\u05d9\u05e1\u05de\u05d0 \u05e2\u05d5\u05d3\u05db\u05e0\u05d4 \u05d1\u05d4\u05e6\u05dc\u05d7\u05d4...\u05d4\u05d9\u05e0\u05da \u05de\u05d5\u05e2\u05d1\u05e8 \u05dc\u05e2\u05de\u05d5\u05d3 \u05d4\u05e8\u05d0\u05e9\u05d9"),setTimeout((function(){(new p.a).remove("token"),window.location.replace("/")}),1e3),t.next=13;break;case 9:t.prev=9,t.t0=t.catch(1),console.log(t.t0),e(!1);case 13:e(!1);case 14:case"end":return t.stop()}}),t,null,[[1,9]])})));return function(){return t.apply(this,arguments)}}();return Object(c.useEffect)((function(){a&&j&&k(j!==a?"\u05d4\u05e9\u05d3\u05d5\u05ea \u05d0\u05d9\u05e0\u05dd \u05ea\u05d5\u05d0\u05de\u05d9\u05dd":"")}),[j,a]),Object(c.useEffect)((function(){a&&!J.a.isStrongPassword(a,{minSymbols:0})?k("\u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d9\u05d9\u05d1\u05ea \u05dc\u05d4\u05d9\u05d5\u05ea \u05d1\u05d0\u05d5\u05e8\u05da 8 \u05d5\u05dc\u05db\u05dc\u05d5\u05dc \u05d0\u05d5\u05ea \u05d2\u05d3\u05d5\u05dc\u05d4 \u05d5\u05d0\u05d5\u05ea \u05e7\u05d8\u05e0\u05d4"):a&&k("")}),[a]),Object(u.jsxs)("div",{children:[Object(u.jsx)("h1",{children:"wow"}),Object(u.jsx)(A,{text:"\u05e1\u05d9\u05e1\u05de\u05d0",state:a,setState:s}),Object(u.jsx)(A,{text:"\u05db\u05ea\u05d5\u05d1 \u05e1\u05d9\u05e1\u05de\u05d0 \u05e4\u05e2\u05dd \u05e9\u05e0\u05d9\u05d4",state:j,setState:d,isPassword:!0}),S&&Object(u.jsx)("h3",{children:S}),Object(u.jsx)("button",{onClick:w,disabled:!(a&&j&&!S),children:"\u05e9\u05de\u05d5\u05e8 \u05e1\u05d9\u05e1\u05de\u05d0 \u05d7\u05d3\u05e9\u05d4"})]})}function te(){return Object(u.jsxs)("div",{children:[Object(u.jsx)(z,{}),Object(u.jsx)(ee,{})]})}var ne=function(){var e=Object(c.useState)(""),t=Object(r.a)(e,2),n=t[0],a=t[1],s=Object(c.useState)(!1),j=Object(r.a)(s,2),b=j[0],O=j[1];return Object(u.jsx)("div",{className:"App",children:Object(u.jsxs)(i.a,{children:[b&&Object(u.jsx)($,{}),n&&Object(u.jsx)(l,{}),Object(u.jsxs)(x.Provider,{value:{user:n,setUser:a,setIsLoading:O},children:[n&&Object(u.jsx)(Z,{}),Object(u.jsxs)(o.c,{children:[Object(u.jsx)(o.a,{exact:!0,path:"/",children:(new p.a).get("token")?Object(u.jsx)(y,{}):Object(u.jsx)(Q,{})}),Object(u.jsx)(o.a,{path:"/home",exact:!0,component:y}),Object(u.jsx)(o.a,{path:"/items",exact:!0,component:R}),Object(u.jsx)(o.a,{path:"/aboutUs",exact:!0,component:_}),Object(u.jsx)(o.a,{path:"/settings",exact:!0,component:W}),Object(u.jsx)(o.a,{path:"/confirmPassword/:mail/:token",exact:!0,component:te})]})]})]})})};s.a.render(Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(ne,{})}),document.getElementById("root"))},42:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},94:function(e,t,n){},95:function(e,t,n){},96:function(e,t,n){},97:function(e,t,n){}},[[198,1,2]]]);
//# sourceMappingURL=main.d65f5fb9.chunk.js.map