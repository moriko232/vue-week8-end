(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0ddd46aa"],{"81b1":function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"products"},[t._m(0),e("div",{staticClass:"main-content"},[e("div",{staticClass:"container"},[e("h2",{staticClass:"mb-3"},[t._v("皂皂商品")]),e("div",{staticClass:"product-list row"},[t._l(t.products,(function(a,s){return[e("div",{key:"item"+s,staticClass:"product-item col-lg-4 col-md-6"},[e("router-link",{attrs:{to:"/product/"+a.id}},[e("img",{attrs:{src:a.imageUrl[0]}})]),e("div",{staticClass:"product-text"},[e("h5",{staticClass:"title"},[e("router-link",{attrs:{to:"/product/"+a.id}},[t._v(t._s(a.title))])],1),e("p",{staticClass:"text"},[t._v(t._s(a.content))]),e("div",{staticClass:"text-right"},[e("p",{staticClass:"price"},[t._v("$ "+t._s(a.price))]),e("p",{staticClass:"origin-price"},[t._v("原價 $ "+t._s(a.origin_price))])])]),e("span",[e("button",{staticClass:"add-cart",on:{click:function(e){return t.addToCart(a,1)}}},[t._v("加入購物車")])])],1)]}))],2)]),e("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"messageModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.messageText)+" ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.closeMessage()}}},[t._v("OK")])])])])])]),e("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"messageModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(2),e("div",{staticClass:"modal-body"},[t._v(" "+t._s(t.messageText)+" ")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.closeMessage()}}},[t._v("OK")])])])])])])},i=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"sub-menu-wrap"},[e("div",{staticClass:"container"},[e("ul",{staticClass:"sub-menu"},[e("li",[e("span",[t._v("皂皂商品")])])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v(" 系統訊息 ")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v(" 系統訊息 ")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],n=(e("99af"),e("c740"),"".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/ec/products")),o="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/ec/shopping"),r={name:"Products",data:function(){return{products:[],messageModelOpen:!1,messageText:""}},mounted:function(){this.getDataApi()},methods:{openMessage:function(t){this.messageText=t,$("#messageModal").modal("show"),this.messageModelOpen=!0},closeMessage:function(){this.messageText="",$("#messageModal").modal("hide"),this.messageModelOpen=!1},isAlreadyInCart:function(t){return this.shopCart.findIndex((function(a){return a.id===t}))},addToCart:function(t){var a=this,e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;this.$parent.isLoading=!0;var s={product:t.id,quantity:e};this.axios.post(o,s).then((function(){a.getDataApi(),a.$parent.isLoading=!1,a.openMessage("已加入購物車")})).catch((function(){a.openMessage("已經在購物車了"),a.$parent.isLoading=!1}))},getDataApi:function(){var t=this;this.$parent.isLoading=!0,this.$http.get(n).then((function(a){t.products=a.data.data,t.$bus.$emit("updateCart"),t.$parent.isLoading=!1}))}}},d=r,l=e("2877"),c=Object(l["a"])(d,s,i,!1,null,null,null);a["default"]=c.exports},ae40:function(t,a,e){var s=e("83ab"),i=e("d039"),n=e("5135"),o=Object.defineProperty,r={},d=function(t){throw t};t.exports=function(t,a){if(n(r,t))return r[t];a||(a={});var e=[][t],l=!!n(a,"ACCESSORS")&&a.ACCESSORS,c=n(a,0)?a[0]:d,u=n(a,1)?a[1]:void 0;return r[t]=!!e&&!i((function(){if(l&&!s)return!0;var t={length:-1};l?o(t,1,{enumerable:!0,get:d}):t[1]=1,e.call(t,c,u)}))}},b727:function(t,a,e){var s=e("0366"),i=e("44ad"),n=e("7b0b"),o=e("50c4"),r=e("65f0"),d=[].push,l=function(t){var a=1==t,e=2==t,l=3==t,c=4==t,u=6==t,m=5==t||u;return function(p,f,v,h){for(var g,C,b=n(p),_=i(b),x=s(f,v,3),y=o(_.length),M=0,$=h||r,w=a?$(p,y):e?$(p,0):void 0;y>M;M++)if((m||M in _)&&(g=_[M],C=x(g,M,b),t))if(a)w[M]=C;else if(C)switch(t){case 3:return!0;case 5:return g;case 6:return M;case 2:d.call(w,g)}else if(c)return!1;return u?-1:l||c?c:w}};t.exports={forEach:l(0),map:l(1),filter:l(2),some:l(3),every:l(4),find:l(5),findIndex:l(6)}},c740:function(t,a,e){"use strict";var s=e("23e7"),i=e("b727").findIndex,n=e("44d2"),o=e("ae40"),r="findIndex",d=!0,l=o(r);r in[]&&Array(1)[r]((function(){d=!1})),s({target:"Array",proto:!0,forced:d||!l},{findIndex:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}}),n(r)}}]);
//# sourceMappingURL=chunk-0ddd46aa.16b13f34.js.map