(function(e){function t(t){for(var a,r,c=t[0],d=t[1],u=t[2],l=0,s=[];l<c.length;l++)r=c[l],Object.prototype.hasOwnProperty.call(o,r)&&o[r]&&s.push(o[r][0]),o[r]=0;for(a in d)Object.prototype.hasOwnProperty.call(d,a)&&(e[a]=d[a]);f&&f(t);while(s.length)s.shift()();return i.push.apply(i,u||[]),n()}function n(){for(var e,t=0;t<i.length;t++){for(var n=i[t],a=!0,r=1;r<n.length;r++){var c=n[r];0!==o[c]&&(a=!1)}a&&(i.splice(t--,1),e=d(d.s=n[0]))}return e}var a={},r={app:0},o={app:0},i=[];function c(e){return d.p+"js/"+({}[e]||e)+"."+{"chunk-0ddd46aa":"16b13f34","chunk-29b20f0a":"bb956539","chunk-2d0afdf8":"aefeeba4","chunk-2d0be179":"65f52187","chunk-2d0dd024":"de413c7f","chunk-2d0e95df":"7ec40316","chunk-2d2302fe":"644aa99c","chunk-37851bb0":"8ea9a1d3","chunk-60b349c6":"b697e800","chunk-6fedeada":"31a775f4","chunk-72c9a2da":"8af9f6d1","chunk-819a9c4c":"d92f63a0","chunk-d695eb02":"fdc375f5"}[e]+".js"}function d(t){if(a[t])return a[t].exports;var n=a[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,d),n.l=!0,n.exports}d.e=function(e){var t=[],n={"chunk-6fedeada":1};r[e]?t.push(r[e]):0!==r[e]&&n[e]&&t.push(r[e]=new Promise((function(t,n){for(var a="css/"+({}[e]||e)+"."+{"chunk-0ddd46aa":"31d6cfe0","chunk-29b20f0a":"31d6cfe0","chunk-2d0afdf8":"31d6cfe0","chunk-2d0be179":"31d6cfe0","chunk-2d0dd024":"31d6cfe0","chunk-2d0e95df":"31d6cfe0","chunk-2d2302fe":"31d6cfe0","chunk-37851bb0":"31d6cfe0","chunk-60b349c6":"31d6cfe0","chunk-6fedeada":"d5bb912c","chunk-72c9a2da":"31d6cfe0","chunk-819a9c4c":"31d6cfe0","chunk-d695eb02":"31d6cfe0"}[e]+".css",o=d.p+a,i=document.getElementsByTagName("link"),c=0;c<i.length;c++){var u=i[c],l=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(l===a||l===o))return t()}var s=document.getElementsByTagName("style");for(c=0;c<s.length;c++){u=s[c],l=u.getAttribute("data-href");if(l===a||l===o)return t()}var f=document.createElement("link");f.rel="stylesheet",f.type="text/css",f.onload=t,f.onerror=function(t){var a=t&&t.target&&t.target.src||o,i=new Error("Loading CSS chunk "+e+" failed.\n("+a+")");i.code="CSS_CHUNK_LOAD_FAILED",i.request=a,delete r[e],f.parentNode.removeChild(f),n(i)},f.href=o;var h=document.getElementsByTagName("head")[0];h.appendChild(f)})).then((function(){r[e]=0})));var a=o[e];if(0!==a)if(a)t.push(a[2]);else{var i=new Promise((function(t,n){a=o[e]=[t,n]}));t.push(a[2]=i);var u,l=document.createElement("script");l.charset="utf-8",l.timeout=120,d.nc&&l.setAttribute("nonce",d.nc),l.src=c(e);var s=new Error;u=function(t){l.onerror=l.onload=null,clearTimeout(f);var n=o[e];if(0!==n){if(n){var a=t&&("load"===t.type?"missing":t.type),r=t&&t.target&&t.target.src;s.message="Loading chunk "+e+" failed.\n("+a+": "+r+")",s.name="ChunkLoadError",s.type=a,s.request=r,n[1](s)}o[e]=void 0}};var f=setTimeout((function(){u({type:"timeout",target:l})}),12e4);l.onerror=l.onload=u,document.head.appendChild(l)}return Promise.all(t)},d.m=e,d.c=a,d.d=function(e,t,n){d.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},d.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},d.t=function(e,t){if(1&t&&(e=d(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(d.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)d.d(n,a,function(t){return e[t]}.bind(null,a));return n},d.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return d.d(t,"a",t),t},d.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},d.p="",d.oe=function(e){throw console.error(e),e};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],l=u.push.bind(u);u.push=t,u=u.slice();for(var s=0;s<u.length;s++)t(u[s]);var f=l;i.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),r=n("9062"),o=n.n(r),i=n("1157"),c=n.n(i),d=(n("e40d"),n("b725"),n("fce9"),n("4989"),n("7bb1")),u={code:"zh_TW",messages:{alpha:"{_field_} 須以英文組成",alpha_dash:"{_field_} 須以英數、斜線及底線組成",alpha_num:"{_field_} 須以英數組成",alpha_spaces:"{_field_} 須以英文及空格組成",between:"{_field_} 須介於 {min} 至 {max}之間",confirmed:" {_field_} 不一致",digits:"{_field_} 須為 {length} 位數字",dimensions:"{_field_} 圖片尺寸不正確。須為 {width} x {height} 像素",email:"{_field_} 須為有效的電子信箱",excluded:"{_field_} 的選項無效",ext:"{_field_} 須為有效的檔案",image:"{_field_} 須為圖片",oneOf:"{_field_} 的選項無效",integer:"{_field_} 須為整數",length:"{_field_} 的長度須為 {length}",max:"{_field_} 不能大於 {length} 個字元",max_value:"{_field_} 不得大於 {max}",mimes:"{_field_} 須為有效的檔案類型",min:"{_field_} 不能小於 {length} 個字元",min_value:"{_field_} 不得小於 {min}",numeric:"{_field_} 須為數字",regex:"{_field_} 的格式錯誤",required:"{_field_} 為必填",required_if:"{_field_} 為必填",size:"{_field_} 的檔案須小於 {size}KB"}},l=n("4c93"),s=n("bc3a"),f=n.n(s),h=n("a7fe"),p=n.n(h),m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},b=[],_={data:function(){return{isLoading:!1}}},v=_,g=n("2877"),k=Object(g["a"])(v,m,b,!1,null,null,null),y=k.exports,C=(n("d3b7"),n("8c4f")),w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}}),n("Header"),n("router-view"),n("Footer")],1)},x=[],O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("header",{staticClass:"is-sticky"},[n("div",{staticClass:"container"},[n("div",{staticClass:"d-block d-sm-flex align-items-center justify-content-between"},[n("h1",{staticClass:"logo"},[n("router-link",{attrs:{to:"/"}},[n("span",{staticClass:"text-h1"},[e._v("皂皂市集")]),n("br"),n("span",{staticClass:"logo-en"},[e._v("soap soap market")])])],1),n("div",[n("nav",{staticClass:"top-menu text-right d-none d-sm-block"},[n("li",[n("router-link",{attrs:{to:"/admin/"}},[e._v("後台管理")])],1)]),n("nav",{staticClass:"main-menu"},[n("li",[n("router-link",{attrs:{to:"/about"}},[e._v("關於皂皂")])],1),n("li",[n("router-link",{attrs:{to:"/products"}},[e._v("皂皂商品")])],1),n("li",[n("div",{staticClass:"btn-group"},[e._m(0),n("div",{staticClass:"dropdown-menu p-3  dropdown-menu-right text-muted",staticStyle:{width:"300px"}},[e.miniCart.length?[n("h3",{staticClass:"text-h4"},[e._v("購物清單：")]),n("table",{staticClass:"table"},e._l(e.miniCart,(function(t,a){return n("tr",{key:"cart"+a},[n("th",[n("router-link",{attrs:{to:"/product/"+t.product.id}},[e._v(" "+e._s(t.product.title))])],1),n("th",[e._v("x "+e._s(t.quantity))])])})),0),n("div",[n("router-link",{staticClass:"w-100 text-center more-btn",attrs:{to:"/cart"}},[e._v("結帳去")])],1)]:[n("div",[e._v(" 購物車沒有東西... "),n("router-link",{staticClass:"w-100 text-center more-btn more-btn--s",attrs:{to:"/products"}},[e._v("來去購物")])],1)]],2)])])])])])]),n("loading",{attrs:{active:e.isLoading},on:{"update:active":function(t){e.isLoading=t}}})],1)},j=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("button",{staticClass:"btn",attrs:{type:"button","data-toggle":"dropdown","aria-haspopup":"true","aria-expanded":"false"}},[n("i",{staticClass:"color1 fa fa-shopping-cart",attrs:{"aria-hidden":"true"}})])}],E=(n("99af"),"".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/ec/shopping")),L={name:"Header",data:function(){return{miniCart:[]}},props:{isLoading:{type:Boolean,default:!1}},created:function(){var e=this;this.$bus.$on("updateMiniCart",(function(t){e.miniCart=t}))},mounted:function(){this.getShopCartApi(),$('[data-toggle="popover"]').popover()},methods:{openCart:function(){this.$refs.popper.popover("show")},getShopCartApi:function(){var e=this;this.$http.get(E).then((function(t){e.miniCart=t.data.data}))}}},P=L,S=Object(g["a"])(P,O,j,!1,null,null,null),A=S.exports,T=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},q=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("footer",{staticClass:"text-center"},[n("div",[e._v("2020 皂皂市集 All Rights Reserved.")])])}],B={name:"Footer"},F=B,H=Object(g["a"])(F,T,q,!1,null,null,null),M=H.exports,N={name:"FrontLayout",components:{Header:A,Footer:M},data:function(){return{isLoading:!1}}},z=N,D=Object(g["a"])(z,w,x,!1,null,null,null),J=D.exports;a["a"].use(C["a"]);var K=[{path:"/",component:J,children:[{path:"",name:"Home",component:function(){return n.e("chunk-2d2302fe").then(n.bind(null,"eae1"))}},{path:"/about",name:"About",component:function(){return n.e("chunk-2d0be179").then(n.bind(null,"2f7f"))}},{path:"/cart",name:"Cart",component:function(){return n.e("chunk-29b20f0a").then(n.bind(null,"2355"))}},{path:"/cart-success",name:"CartSuccess",component:function(){return n.e("chunk-2d0dd024").then(n.bind(null,"800f"))}},{path:"/products",name:"Products",component:function(){return n.e("chunk-0ddd46aa").then(n.bind(null,"81b1"))}},{path:"/product/:id",name:"Product",component:function(){return n.e("chunk-2d0afdf8").then(n.bind(null,"0fd0"))}}]},{path:"/login",name:"Login",component:function(){return n.e("chunk-6fedeada").then(n.bind(null,"a55b"))}},{path:"/admin",component:function(){return n.e("chunk-72c9a2da").then(n.bind(null,"7e11"))},children:[{path:"products",name:"adminProducts",component:function(){return n.e("chunk-819a9c4c").then(n.bind(null,"d416"))}},{path:"orders",name:"adminOrders",component:function(){return n.e("chunk-d695eb02").then(n.bind(null,"5651"))}},{path:"coupon",name:"adminCoupon",component:function(){return n.e("chunk-37851bb0").then(n.bind(null,"b4bf"))}},{path:"storages",name:"adminSstorages",component:function(){return n.e("chunk-60b349c6").then(n.bind(null,"d711"))}}]},{path:"/404",name:"404",component:function(){return n.e("chunk-2d0e95df").then(n.bind(null,"8cdb"))}},{path:"*",redirect:"/404"}],R=new C["a"]({routes:K}),V=R;window.$=c.a,d["d"]("email",l["a"]),d["d"]("required",l["c"]),d["d"]("min",l["b"]),d["e"]("tw",u),d["c"]({classes:{valid:"is-valid",invalid:"is-invalid"}}),a["a"].component("ValidationProvider",d["b"]),a["a"].component("ValidationObserver",d["a"]),a["a"].component("Loading",o.a),a["a"].use(p.a,f.a),a["a"].config.productionTip=!1,a["a"].prototype.$bus=new a["a"],new a["a"]({router:V,render:function(e){return e(y)}}).$mount("#app")},fce9:function(e,t,n){}});
//# sourceMappingURL=app.064ca4af.js.map