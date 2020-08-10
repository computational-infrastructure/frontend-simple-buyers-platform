(function(t){function a(a){for(var n,o,i=a[0],c=a[1],l=a[2],d=0,m=[];d<i.length;d++)o=i[d],Object.prototype.hasOwnProperty.call(r,o)&&r[o]&&m.push(r[o][0]),r[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);u&&u(a);while(m.length)m.shift()();return s.push.apply(s,l||[]),e()}function e(){for(var t,a=0;a<s.length;a++){for(var e=s[a],n=!0,i=1;i<e.length;i++){var c=e[i];0!==r[c]&&(n=!1)}n&&(s.splice(a--,1),t=o(o.s=e[0]))}return t}var n={},r={app:0},s=[];function o(a){if(n[a])return n[a].exports;var e=n[a]={i:a,l:!1,exports:{}};return t[a].call(e.exports,e,e.exports,o),e.l=!0,e.exports}o.m=t,o.c=n,o.d=function(t,a,e){o.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:e})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,a){if(1&a&&(t=o(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var e=Object.create(null);if(o.r(e),Object.defineProperty(e,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var n in t)o.d(e,n,function(a){return t[a]}.bind(null,n));return e},o.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(a,"a",a),a},o.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},o.p="/frontend-simple-buyers-platform/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],c=i.push.bind(i);i.push=a,i=i.slice();for(var l=0;l<i.length;l++)a(i[l]);var u=c;s.push([0,"chunk-vendors"]),e()})({0:function(t,a,e){t.exports=e("56d7")},"56d7":function(t,a,e){"use strict";e.r(a);e("e260"),e("e6cf"),e("cca6"),e("a79d");var n=e("2b0e"),r=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app",[e("v-content",[e("router-view")],1)],1)},s=[];document.title="Buyers Platform";var o={name:"App",data:function(){return{}}},i=o,c=e("2877"),l=e("6544"),u=e.n(l),d=e("7496"),m=e("a75b"),p=Object(c["a"])(i,r,s,!1,null,null,null),v=p.exports;u()(p,{VApp:d["a"],VContent:m["a"]});var f=e("8c4f"),h=function(){var t=this,a=t.$createElement,n=t._self._c||a;return n("div",{staticClass:"home"},[n("v-container",{attrs:{fluid:""}},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"font-weight-bold display-3 white--text mt-16 mb-5 text-center"},[t._v("Simple Buyer Platform")]),n("v-img",{staticClass:"mx-auto",attrs:{alt:"Buyers Logo",contain:"",src:e("cf05"),transition:"scale-transition",width:"400"}}),n("p",{staticClass:"headline text-center mb-11"},[t._v("This is a Vue.js app that represents a simple buyer platform.")]),n("v-row",{staticClass:"mb-16"},[n("v-btn",{staticClass:"mx-auto",attrs:{to:{name:"Buyers"},"x-large":"",color:"#EE2000"}},[n("v-icon",{attrs:{left:"",large:""}},[t._v("mdi-human-handsup")]),n("span",[t._v("Our buyers")])],1)],1)],1)],1),n("CopyrightBar")],1)},b=[],y=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("v-app-bar",{attrs:{absolute:"",bottom:"",color:"#EE2000",dark:"",dense:"",flat:""}},[e("v-btn",{attrs:{href:"https://github.com/zejiran/backend-simple-buyers-platform",target:"_blank",text:""}},[e("v-icon",[t._v("mdi-code-tags")]),e("span",{staticClass:"mr-2 ml-2"},[t._v("made with")]),e("v-icon",[t._v("mdi-heart")]),e("span",{staticClass:"mr-2 ml-2"},[t._v("by Juan Alegría")])],1)],1)},g=[],x={data:function(){return{}}},C=x,_=e("40dc"),V=e("8336"),w=e("132d"),S=Object(c["a"])(C,y,g,!1,null,null,null),k=S.exports;u()(S,{VAppBar:_["a"],VBtn:V["a"],VIcon:w["a"]});var O={name:"Home",components:{CopyrightBar:k},data:function(){return{}}},P=O,B=e("62ad"),j=e("a523"),I=e("adda"),E=e("0fd9"),T=Object(c["a"])(P,h,b,!1,null,null,null),R=T.exports;u()(T,{VBtn:V["a"],VCol:B["a"],VContainer:j["a"],VIcon:w["a"],VImg:I["a"],VRow:E["a"]});var $=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"buyers"},[e("v-app-bar",{attrs:{app:""}},[e("h1",{staticClass:"overline hidden-sm-and-down"},[t._v("Our list of Buyers")]),e("v-spacer"),e("v-toolbar",{attrs:{flat:""}},[e("v-text-field",{staticClass:"mt-8 mr-2",attrs:{color:"#EE2000",hint:"Press enter to search",label:"Search by ID"},on:{change:function(a){return t.search(t.model)}},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}}),e("v-menu",{ref:"menu",attrs:{"close-on-content-click":!1,"return-value":t.date,"min-width":"290px","offset-y":"",transition:"scale-transition"},on:{"update:returnValue":function(a){t.date=a},"update:return-value":function(a){t.date=a}},scopedSlots:t._u([{key:"activator",fn:function(a){var n=a.on,r=a.attrs;return[e("v-text-field",t._g(t._b({staticClass:"mt-8",attrs:{color:"#EE2000",label:"Filter by date",readonly:""},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},"v-text-field",r,!1),n))]}}]),model:{value:t.menu,callback:function(a){t.menu=a},expression:"menu"}},[e("v-date-picker",{attrs:{"no-title":"",scrollable:""},model:{value:t.date,callback:function(a){t.date=a},expression:"date"}},[e("v-spacer"),e("v-btn",{attrs:{color:"#960200",text:""},on:{click:function(a){t.menu=!1}}},[t._v("Cancel")]),e("v-btn",{attrs:{color:"#960200",text:""},on:{click:function(a){return t.$refs.menu.save(t.date)}}},[t._v("OK")])],1)],1)],1)],1),e("v-container",{staticClass:"my-5 text-center"},[e("v-layout",{attrs:{row:"",wrap:""}},t._l(t.buyers,(function(a){return e("v-flex",{key:a.id,attrs:{lg3:"",md4:"",sm6:"",xs12:""}},[e("v-card",{staticClass:"ma-3",attrs:{shaped:""}},[e("v-responsive",{staticClass:"pt-4"},[e("v-avatar",{attrs:{size:"100"}},[e("img",{attrs:{src:"https://api.adorable.io/avatars/"+a.id}})])],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"grey--text"},[t._v(t._s(a.age)+" years old")])]),e("v-card-actions",{staticClass:"pb-4"},[e("v-btn",{staticClass:"mx-auto",attrs:{href:"/buyer?id="+a.id+"&name="+a.name+"&age="+a.age,color:"#960200",small:""}},[e("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-information-outline")]),e("span",[t._v("See information")])],1)],1)],1)],1)})),1)],1)],1)},A=[],N=e("bc3a"),F=e.n(N),L={name:"Buyers",data:function(){return{date:(new Date).toISOString().substr(0,10),menu:!1,model:"",buyers:[{name:"Luffy",age:20,id:1},{name:"Zoro",age:24,id:2},{name:"Nami",age:21,id:3},{name:"Ussop",age:22,id:4},{name:"Tony Tony Chopper",age:16,id:5},{name:"Nico Robin",age:28,id:6},{name:"Franky",age:20,id:7},{name:"Brook",age:24,id:8},{name:"Karoo",age:21,id:9},{name:"Vivi",age:22,id:10},{name:"Doctorine",age:16,id:11},{name:"Cocodrile",age:28,id:12}]}},mounted:function(){var t=this;F.a.get("http://localhost:3717/buyers").then((function(a){t.buyers=a.data}))},methods:{search:function(t){var a=this;F.a.get("http://localhost:3717/search/"+t).then((function(t){a.buyers=t.data}))}}},G=L,U=e("8212"),J=e("b0af"),D=e("99d9"),M=e("2e4b"),q=e("0e8f"),H=e("a722"),z=e("e449"),K=e("6b53"),Z=e("2fa4"),Q=e("8654"),W=e("71d9"),X=Object(c["a"])(G,$,A,!1,null,null,null),Y=X.exports;u()(X,{VAppBar:_["a"],VAvatar:U["a"],VBtn:V["a"],VCard:J["a"],VCardActions:D["a"],VCardText:D["c"],VContainer:j["a"],VDatePicker:M["a"],VFlex:q["a"],VIcon:w["a"],VLayout:H["a"],VMenu:z["a"],VResponsive:K["a"],VSpacer:Z["a"],VTextField:Q["a"],VToolbar:W["a"]});var tt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[0!=t.$route.query.id?e("div",{staticClass:"buyers"},[e("v-app-bar",{attrs:{app:""}},[e("h1",{staticClass:"overline"},[t._v(t._s(t.$route.query.name)+" information")]),e("v-spacer"),e("v-btn",{attrs:{href:"/",text:""}},[e("v-icon",[t._v("mdi-home")])],1)],1),e("v-card",{staticClass:"mx-8 my-7",attrs:{"min-height":"800"}},[e("v-container",[e("v-layout",{staticClass:"mt-16 mr-10 ml-5",attrs:{row:""}},[e("v-flex",{attrs:{md6:"",xs12:""}},[e("ShoppingHistory")],1),e("v-flex",{attrs:{md6:"",xs12:""}},[e("RecommendProducts"),e("UsersSameIP")],1)],1)],1)],1),e("CopyrightBar")],1):t._e(),0==t.$route.query.id?e("div",[e("h1",{staticClass:"overline"},[t._v("Invalid user please go back to home")]),e("v-btn",{attrs:{href:"/",text:""}},[e("v-icon",[t._v("mdi-home")])],1)],1):t._e()])},at=[],et=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-13"},[e("h1",{staticClass:"headline ml-4 mb-8"},[t._v("Shopping history")]),t._l(t.transactions,(function(a){return e("v-col",{key:a.id,attrs:{cols:"12"}},[e("v-card",{staticClass:"mr-10",attrs:{elevation:"8","min-width":"200"}},[e("div",{staticClass:"d-flex justify-space-between"},[e("div",[e("v-card-title",{staticClass:"headline",domProps:{textContent:t._s("Transaction ID: "+a.id)}}),e("v-card-subtitle",{domProps:{textContent:t._s("From a "+a.device+" device.")}}),e("v-card-text",{domProps:{textContent:t._s("List of purchased products: ")}}),e("v-card-text",[t._l(a.products,(function(a){return e("span",{key:a.id,domProps:{textContent:t._s(a[0].name+", ")}})})),e("span",[t._v("End of transaction.")])],2)],1)])])],1)}))],2)},nt=[],rt=(e("4160"),e("d81d"),e("d3b7"),e("ac1f"),e("3ca3"),e("841c"),e("159b"),e("ddb0"),e("2b3d"),e("5530")),st={data:function(){return{transactions:[{id:"952175",device:"linux",products:[[{name:"Going Merry",price:4423334,id:"1342136bf"}],[{name:"Geuse",price:434,id:"114567f"}]]},{id:"234275",device:"mac",products:[[{name:"Veetee",price:4334,id:"15c136bf"}]]}]}},mounted:function(){var t=this,a=window.location.search,e=new URLSearchParams(a),n=e.get("id");F.a.get("http://localhost:3717/transaction/data/"+n).then((function(a){return t.transactions=a.data})).then((function(){return Promise.all(t.transactions.map((function(t){return F.a.get("http://localhost:3717/transaction/products/"+t.id)})))})).then((function(a){t.transactions=t.transactions.map((function(t){var e=[];return a.forEach((function(t){e.push(t.data)})),Object(rt["a"])(Object(rt["a"])({},t),{},{products:e})}))}))}},ot=st,it=Object(c["a"])(ot,et,nt,!1,null,null,null),ct=it.exports;u()(it,{VCard:J["a"],VCardSubtitle:D["b"],VCardText:D["c"],VCardTitle:D["d"],VCol:B["a"]});var lt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-16"},[e("h1",{staticClass:"headline mb-10 ml-2 text-center"},[t._v("Recommended products for "+t._s(t.$route.query.name))]),e("v-sheet",{staticClass:"mx-auto",attrs:{elevation:"8","max-width":"800"}},[e("v-slide-group",{staticClass:"pa-1",attrs:{"center-active":t.centerActive,mandatory:t.mandatory,multiple:t.multiple,"next-icon":t.nextIcon?"mdi-plus":void 0,"prev-icon":t.prevIcon?"mdi-minus":void 0,"show-arrows":t.showArrows},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}},t._l(t.products,(function(a){return e("v-slide-item",{key:a.id},[e("v-card",{staticClass:"ma-3 text-center",attrs:{flat:""}},[e("v-responsive",{staticClass:"pt-4"},[e("v-icon",[t._v("mdi-shopping-outline")])],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"grey--text"},[t._v("$"+t._s(a.price))])])],1)],1)})),1)],1)],1)},ut=[],dt=(e("fb6a"),{data:function(){return{buyers:[],transactions:[],products:[{name:"Gomu Gomu",price:"2000",id:1},{name:"Nomu Nomu",price:"2434",id:2},{name:"Romu Romu",price:"2143",id:3},{name:"Fira Fira",price:"2243",id:4},{name:"Ton Ton",price:"1634",id:5},{name:"Gomu Gomu",price:"2000",id:1},{name:"Nomu Nomu",price:"2434",id:2},{name:"Romu Romu",price:"2143",id:3},{name:"Fira Fira",price:"2243",id:4},{name:"Ton Ton",price:"1634",id:5}]}},mounted:function(){var t=this,a=window.location.search,e=new URLSearchParams(a),n=e.get("id");F.a.get("http://localhost:3717/transaction/data/"+n).then((function(a){return t.transactions=a.data})).then((function(){return Promise.all(t.transactions.map((function(t){return F.a.get("http://localhost:3717/transaction/sameip/"+t.ip)})))})).then((function(a){var e=[];a.forEach((function(t){e.push(JSON.stringify(t.data).slice(1,-1)+",")})),t.buyers=JSON.parse("["+e[0].slice(0,-1)+"]")})).then((function(){return F.a.get("http://localhost:3717/transaction/data/"+t.buyers[0].id)})).then((function(t){return t.data[0].id})).then((function(t){return F.a.get("http://localhost:3717/transaction/products/"+t)})).then((function(a){return t.products=a.data}))}}),mt=dt,pt=e("8dd9"),vt=e("7efd"),ft=e("9dbe"),ht=Object(c["a"])(mt,lt,ut,!1,null,null,null),bt=ht.exports;u()(ht,{VCard:J["a"],VCardText:D["c"],VIcon:w["a"],VResponsive:K["a"],VSheet:pt["a"],VSlideGroup:vt["a"],VSlideItem:ft["a"]});var yt=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("h1",{staticClass:"headline my-10 ml-2 text-center"},[t._v("Users that used same IP on any transaction")]),e("v-sheet",{staticClass:"mx-auto mb-16",attrs:{elevation:"8","max-width":"800"}},[e("v-slide-group",{staticClass:"pa-1",attrs:{"center-active":t.centerActive,mandatory:t.mandatory,multiple:t.multiple,"next-icon":t.nextIcon?"mdi-plus":void 0,"prev-icon":t.prevIcon?"mdi-minus":void 0,"show-arrows":t.showArrows},model:{value:t.model,callback:function(a){t.model=a},expression:"model"}},t._l(t.buyers,(function(a){return e("v-slide-item",{key:a.id},[e("v-card",{staticClass:"ma-3 text-center",attrs:{flat:""}},[e("v-responsive",{staticClass:"pt-4"},[e("v-avatar",{attrs:{size:"100"}},[e("img",{attrs:{src:"https://api.adorable.io/avatars/"+a.id}})])],1),e("v-card-text",[e("div",{staticClass:"subheading"},[t._v(t._s(a.name))]),e("div",{staticClass:"grey--text"},[t._v(t._s(a.age)+" years old")])]),e("v-card-actions",{staticClass:"pb-4"},[e("v-btn",{staticClass:"mx-auto",attrs:{href:"/buyer?id="+a.id+"&name="+a.name+"&age="+a.age,color:"#960200",small:""}},[e("v-icon",{attrs:{left:"",small:""}},[t._v("mdi-information-outline")]),e("span",{staticClass:"mr-2"},[t._v("Information")])],1)],1)],1)],1)})),1)],1)],1)},gt=[],xt={data:function(){return{buyers:[{name:"Luffy",age:20,id:1213},{name:"Zoro",age:24,id:2213},{name:"Nami",age:21,id:3231},{name:"Ussop",age:22,id:4421},{name:"Tony Tony Chopper",age:16,id:5421},{name:"Nico Robin",age:28,id:6412},{name:"Franky",age:20,id:4127},{name:"Brook",age:24,id:8412},{name:"Karoo",age:21,id:9142},{name:"Vivi",age:22,id:10412},{name:"Doctorine",age:16,id:11142},{name:"Cocodrile",age:28,id:12412}],transactions:[]}},mounted:function(){var t=this,a=window.location.search,e=new URLSearchParams(a),n=e.get("id");F.a.get("http://localhost:3717/transaction/data/"+n).then((function(a){return t.transactions=a.data})).then((function(){return Promise.all(t.transactions.map((function(t){return F.a.get("http://localhost:3717/transaction/sameip/"+t.ip)})))})).then((function(a){var e=[];a.forEach((function(t){e.push(JSON.stringify(t.data).slice(1,-1)+",")})),t.buyers=JSON.parse("["+e[0].slice(0,-1)+"]")}))}},Ct=xt,_t=Object(c["a"])(Ct,yt,gt,!1,null,null,null),Vt=_t.exports;u()(_t,{VAvatar:U["a"],VBtn:V["a"],VCard:J["a"],VCardActions:D["a"],VCardText:D["c"],VIcon:w["a"],VResponsive:K["a"],VSheet:pt["a"],VSlideGroup:vt["a"],VSlideItem:ft["a"]});var wt={name:"Buyer",components:{ShoppingHistory:ct,RecommendProducts:bt,UsersSameIP:Vt,CopyrightBar:k},data:function(){return{}}},St=wt,kt=Object(c["a"])(St,tt,at,!1,null,null,null),Ot=kt.exports;u()(kt,{VAppBar:_["a"],VBtn:V["a"],VCard:J["a"],VContainer:j["a"],VFlex:q["a"],VIcon:w["a"],VLayout:H["a"],VSpacer:Z["a"]}),n["a"].use(f["a"]);var Pt=[{path:"/",name:"Home",component:R},{path:"/buyers",name:"Buyers",component:Y},{path:"/buyer",name:"Buyer",component:Ot}],Bt=new f["a"]({mode:"history",base:"/frontend-simple-buyers-platform/",routes:Pt}),jt=Bt,It=e("f309");n["a"].use(It["a"]);var Et=new It["a"]({theme:{dark:!0}});n["a"].config.productionTip=!1,new n["a"]({router:jt,vuetify:Et,render:function(t){return t(v)}}).$mount("#app")},cf05:function(t,a,e){t.exports=e.p+"img/logo.75463934.png"}});
//# sourceMappingURL=app.a0dfc348.js.map