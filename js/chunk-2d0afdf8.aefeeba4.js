(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0afdf8"],{"0fd0":function(t,i,s){"use strict";s.r(i);var a=function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("div",{staticClass:"product"},[s("nav",{staticClass:"sub-menu-wrap"},[s("div",{staticClass:"container"},[s("ul",{staticClass:"sub-menu"},[s("li",[s("router-link",{attrs:{to:"/products"}},[t._v("皂皂商品")])],1),s("li",[s("span",[t._v(t._s(t.item.title))])])])])]),t.isLoading?t._e():s("div",{staticClass:"main-content"},[s("div",{staticClass:"container"},[s("div",{staticClass:"row align-items-start justify-content-center"},[s("div",{staticClass:"product-item col-md-6"},[s("h1",{staticClass:"text-h1"},[t._v(t._s(t.item.title))]),s("img",{attrs:{src:t.item.imageUrl[0]}}),s("div",{staticClass:"product-text"},[s("p",{staticClass:"text"},[t._v(t._s(t.item.content))]),s("div",{staticClass:"text-right"},[s("p",{staticClass:"price"},[t._v("$ "+t._s(t.item.price))]),s("p",{staticClass:"origin-price"},[t._v("原價 $ "+t._s(t.item.origin_price))])])]),s("span",[s("button",{staticClass:"add-cart",on:{click:function(i){return t.addToCart(t.item,1)}}},[t._v("加入購物車")])])])])])])])},e=[],c=(s("99af"),"".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/ec/product")),n={name:"Product",data:function(){return{isLoading:!1,item:{id:"",title:"",content:"",price:"",origin_price:"",imageUrl:[]}}},components:{},created:function(){this.getProductDetailApi()},methods:{getProductDetailApi:function(){var t=this;this.$parent.isLoading=!0,this.$http.get("".concat(c,"/").concat(this.$route.params.id)).then((function(i){t.item=i.data.data,t.$parent.isLoading=!1}))}}},o=n,r=s("2877"),d=Object(r["a"])(o,a,e,!1,null,null,null);i["default"]=d.exports}}]);
//# sourceMappingURL=chunk-2d0afdf8.aefeeba4.js.map