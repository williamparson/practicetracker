(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,n){},107:function(e,t,n){},111:function(e,t,n){"use strict";n.r(t);var a=n(2),c=n.n(a),r=n(35),l=n.n(r),o=(n(50),n(52),n(39)),i=n(12);var u=function(e){return c.a.createElement("div",{className:"backdrop",onClick:e.onCancel})},m=n(26),s=n.n(m),d=n(36),f=n.n(d);n(55);var E=function(e){var t=Object(a.useRef)(),n=Object(a.useRef)(),r=Object(a.useRef)(),l=Object(a.useState)(new Date),o=Object(i.a)(l,2),u=o[0],m=o[1];return c.a.createElement("form",{className:s.a.form,onSubmit:function(t){t.preventDefault();var a=u.getMonth(),c={day:u.getDate(),month:a,duration:r.current.value,description:n.current.value};console.log(c),e.onAddPractice(c)}},c.a.createElement("div",{className:s.a.control},c.a.createElement("label",{htmlFor:"date"},"Date"),c.a.createElement(f.a,{selected:u,onChange:function(e){return m(e)},ref:t}),c.a.createElement("label",{htmlFor:"duration"},"How many minutes you practiced for: "),c.a.createElement("input",{type:"number",ref:r}),c.a.createElement("label",{htmlFor:"description"},"Describe what you practiced:"),c.a.createElement("textarea",{id:"description",required:!0,rows:"5",ref:n})),c.a.createElement("div",{className:s.a.actions},c.a.createElement("button",null,"Submit")))};var p=function(){return c.a.createElement(E,{onAddPractice:function(e){fetch("https://computer-science-ia-53874-default-rtdb.firebaseio.com/practices.json",{method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}})}})};var b=function(e){return c.a.createElement("div",{className:"modal"},c.a.createElement("p",null,"Practice Information (for now, click submit once and then close)"),c.a.createElement(p,null),c.a.createElement("button",{className:"btn btn--alt",onClick:function(){e.onCancel()}},"Close"))};var v=function(){var e=Object(a.useState)(!1),t=Object(i.a)(e,2),n=t[0],r=t[1];function l(){r(!1)}return c.a.createElement("div",null,c.a.createElement("button",{className:"btn",onClick:function(){console.log("clicked the add button"),r(!0)}},"Add practice"),n&&c.a.createElement(b,{onCancel:l,onConfirm:l,submitHandler:E.submitHandler}),n&&c.a.createElement(u,{onCancel:l}))};n(105);var h=function(e){return c.a.createElement("div",{className:"container"},c.a.createElement("div",null,(parseInt(e.month)+1).toString(),"/",(parseInt(e.date)+1).toString()),c.a.createElement("div",null,e.duration),c.a.createElement("div",{className:"description"},e.description))};n(107);var j=function(){var e=Object(a.useState)(!0),t=Object(i.a)(e,2),n=t[0],r=t[1],l=Object(a.useState)([]),u=Object(i.a)(l,2),m=u[0],s=u[1];return Object(a.useEffect)(function(){fetch("https://computer-science-ia-53874-default-rtdb.firebaseio.com/practices.json").then(function(e){return e.json()}).then(function(e){var t=[];for(var n in e){var a=Object(o.a)({id:n},e[n]);t.push(a)}r(!1),s(t)})},[]),n?c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement("p",null,"Loading...")):c.a.createElement("div",null,c.a.createElement(v,null),c.a.createElement("div",null,c.a.createElement("div",{className:"header"},c.a.createElement("h1",null,"Date"),c.a.createElement("h1",null,"Minutes"),c.a.createElement("h1",null,"Description")),m.map(function(e){return c.a.createElement("div",null,c.a.createElement(h,{date:e.day,month:e.month,description:e.description,duration:e.duration}))})))};var g=function(){return c.a.createElement("div",null,c.a.createElement("h1",null," Practice Tracker "),c.a.createElement(j,null))},O=function(e){e&&e instanceof Function&&n.e(1).then(n.bind(null,117)).then(function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,l=t.getTTFB;n(e),a(e),c(e),r(e),l(e)})};l.a.createRoot(document.getElementById("root")).render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(g,null))),O()},26:function(e,t,n){e.exports={form:"NewMeetupForm_form__vDFXx",control:"NewMeetupForm_control__30BE_",actions:"NewMeetupForm_actions__2Vnu0"}},42:function(e,t,n){e.exports=n(111)},50:function(e,t,n){},52:function(e,t,n){}},[[42,3,2]]]);
//# sourceMappingURL=main.cd00e533.chunk.js.map