(this["webpackJsonpgoit-react-hw-06-phonebook"]=this["webpackJsonpgoit-react-hw-06-phonebook"]||[]).push([[0],{44:function(e,t,n){},45:function(e,t,n){},46:function(e,t,n){},47:function(e,t,n){},48:function(e,t,n){},49:function(e,t,n){},50:function(e,t,n){},72:function(e,t,n){},74:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var c=n(1),a=n(0),r=n(10),o=n.n(r),i=n(30),s=n(7),l=n(24),u=n(11),b=n(25),j=n(26),m=n(32),d=n(31),h=n(79),f=n(8),O={addContact:Object(f.b)("contacts/add",(function(e,t){return{payload:{id:Object(h.a)(),name:e,number:t}}})),removeContact:Object(f.b)("contacts/remove"),changeFilter:Object(f.b)("contacts/changeFilter")},p=n(78),v=(n(44),function(e){var t=e.message;return Object(c.jsx)(p.a,{in:t,timeout:250,classNames:"Notification-fade",unmountOnExit:!0,children:Object(c.jsx)("div",{className:"Overlay",children:Object(c.jsx)("p",{className:"Notification",children:t})})})}),x=(n(45),function(e){Object(m.a)(n,e);var t=Object(d.a)(n);function n(){var e;Object(b.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={name:"",number:"",message:null},e.setMassge=function(t){e.setState({message:t}),setTimeout((function(){e.setState({message:null})}),2500)},e.handleChange=function(t){var n=t.target,c=n.name,a=n.value;e.setState(Object(u.a)({},c,a))},e.handleSubmit=function(t){var n=e.state,c=n.name,a=n.number;t.preventDefault(),""!==c?""!==a?e.props.contacts.find((function(e){return e.name.toLowerCase()===c.toLowerCase()}))?e.setMassge("Contact already exists!"):(e.props.onSubmit(c,a),e.setState({name:"",number:""})):e.setMassge("Enter concact phone, please!"):e.setMassge("Enter contact name, please!")},e}return Object(j.a)(n,[{key:"render",value:function(){var e=this.state,t=e.name,n=e.number,a=e.message;return Object(c.jsxs)("div",{children:[Object(c.jsx)(v,{message:a}),Object(c.jsxs)("form",{className:"Form",onSubmit:this.handleSubmit,children:[Object(c.jsx)("label",{htmlFor:"name",className:"Label",children:"Name"}),Object(c.jsx)("input",{type:"text",value:t,id:"name",className:"Input",onChange:this.handleChange,name:"name",placeholder:"John Smith"}),Object(c.jsx)("label",{htmlFor:"number",className:"Label",children:"Number"}),Object(c.jsx)("input",{type:"tel",value:n,id:"number",className:"Input",onChange:this.handleChange,name:"number",placeholder:"+38(067)777-77-77"}),Object(c.jsx)("button",{type:"submit",className:"ContactFormButton",children:"Add contact"})]})]})}}]),n}(a.Component)),g=Object(s.b)((function(e){return{contacts:e.phoneBook.contacts}}),(function(e){return{onSubmit:function(t,n){return e(O.addContact(t,n))}}}))(x),y=(n(46),function(e){var t=e.children;return Object(c.jsx)("div",{className:"Layout",children:t})}),C=(n(47),Object(s.b)((function(e){return{value:e.phoneBook.filter,contacts:e.phoneBook.contacts}}),(function(e){return{onChangeFilter:function(t){return e(O.changeFilter(t.target.value))}}}))((function(e){var t=e.value,n=e.onChangeFilter,a=e.contacts;return Object(c.jsx)(p.a,{in:a.length>1,timeout:250,classNames:"Filter-fade",unmountOnExit:!0,children:Object(c.jsxs)("div",{className:"FindForm",children:[Object(c.jsx)("label",{htmlFor:"find",className:"FindLabel",children:"Find contact by name"}),Object(c.jsx)("input",{type:"text",value:t,id:"find",className:"FindInput",onChange:n})]})})}))),w=(n(48),n(33)),k=(n(49),function(e){var t=e.children,n=e.onClick;Object(w.a)(e,["children","onClick"]);return Object(c.jsx)("button",{type:"button",onClick:n,className:"IconButton",children:t})});k.defaultProps={onClick:function(){return null},children:null};var N=k;function F(){return(F=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var c in n)Object.prototype.hasOwnProperty.call(n,c)&&(e[c]=n[c])}return e}).apply(this,arguments)}function S(e,t){if(null==e)return{};var n,c,a=function(e,t){if(null==e)return{};var n,c,a={},r=Object.keys(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(c=0;c<r.length;c++)n=r[c],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var L=a.createElement("path",{d:"M59.595,52.861L37.094,30.359L59.473,7.98c1.825-1.826,1.825-4.786,0-6.611 c-1.826-1.825-4.785-1.825-6.611,0L30.483,23.748L8.105,1.369c-1.826-1.825-4.785-1.825-6.611,0c-1.826,1.826-1.826,4.786,0,6.611 l22.378,22.379L1.369,52.861c-1.826,1.826-1.826,4.785,0,6.611c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 l22.502-22.502l22.501,22.502c0.913,0.913,2.109,1.369,3.306,1.369s2.393-0.456,3.306-1.369 C61.42,57.647,61.42,54.687,59.595,52.861z"});function B(e,t){var n=e.title,c=e.titleId,r=S(e,["title","titleId"]);return a.createElement("svg",F({fill:"currentColor",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink",x:"0px",y:"0px",viewBox:"0 0 60.963 60.842",style:{enableBackground:"new 0 0 60.963 60.842"},xmlSpace:"preserve",ref:t,"aria-labelledby":c},r),n?a.createElement("title",{id:c},n):null,L)}var E,I=a.forwardRef(B),M=(n.p,n(80)),P=function(e,t){var n=t.toLowerCase();return e.filter((function(e){return e.name.toLowerCase().includes(n)}))},T=Object(s.b)((function(e){var t=e.phoneBook,n=t.contacts,c=t.filter;return{contacts:P(n,c)}}),(function(e){return{onRemoveContact:function(t){return e(O.removeContact(t))}}}))((function(e){var t=e.contacts,n=e.onRemoveContact;return Object(c.jsx)(M.a,{component:"ul",children:t.map((function(e,t){var a=e.id,r=e.name,o=e.number;return Object(c.jsx)(p.a,{timeout:250,classNames:"ContactItem-fade",children:Object(c.jsxs)("li",{className:"ContactItem",children:[t+1,". ",r,": ",o,Object(c.jsx)(N,{onClick:function(){return n(a)},"aria-label":"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u043a\u043e\u043d\u0442\u0430\u043a\u0442",children:Object(c.jsx)(I,{width:"17",height:"17",fill:"#fff"})})]})},a)}))})})),A=(n(50),function(){return Object(c.jsx)(p.a,{in:!0,appear:!0,timeout:500,classNames:"Title-SlideIn",unmountOnExit:!0,children:Object(c.jsx)("h1",{className:"Title",children:"Phonebook"})})}),J=Object(s.b)((function(e){return{contacts:e.phoneBook.contacts}}),null)((function(e){var t=e.contacts;return Object(c.jsxs)(y,{children:[Object(c.jsx)(A,{}),Object(c.jsx)(g,{}),Object(c.jsx)(C,{}),Object(c.jsx)(p.a,{in:t.length>0,timeout:0,ommountOnExit:!0,children:Object(c.jsx)(T,{})})]})})),R=n(16),z=n(27),q=n.n(z),D=n(9),X=n(28),_=n.n(X),G=n(6),H=Object(f.c)([],(E={},Object(u.a)(E,O.addContact,(function(e,t){var n=t.payload;return[].concat(Object(R.a)(e),[n])})),Object(u.a)(E,O.removeContact,(function(e,t){var n=t.payload;return e.filter((function(e){return e.id!==n}))})),E)),K=Object(f.c)("",Object(u.a)({},O.changeFilter,(function(e,t){return t.payload}))),Q=Object(G.c)({contacts:H,filter:K}),U=[].concat(Object(R.a)(Object(f.d)({serializableCheck:{ignoredActions:[D.a,D.f,D.b,D.c,D.d,D.e]}})),[q.a]),V={key:"phoneBook",storage:_.a,blacklist:["filter"]},W=Object(f.a)({reducer:{phoneBook:Object(D.g)(V,Q)},middleware:U,devTools:!1}),Y={store:W,persistor:Object(D.h)(W)},Z=n(29),$=n.n(Z),ee=(n(71),n(72),function(){return Object(c.jsx)("div",{className:"Loader",children:Object(c.jsx)($.a,{type:"TailSpin",color:"#3f51b5",height:100,width:100,timeout:3e3})})});n(73),n(74);console.log(Y),o.a.render(Object(c.jsx)(s.a,{store:Y.store,children:Object(c.jsx)(l.a,{loading:Object(c.jsx)(ee,{}),persistor:Y.persistor,children:Object(c.jsx)(i.a,{children:Object(c.jsx)(J,{})})})}),document.querySelector("#root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.eef46566.chunk.js.map