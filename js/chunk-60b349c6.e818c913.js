(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-60b349c6"],{"0450":function(t,a,e){"use strict";var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"nav"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,s){return e("li",{key:s,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},n=[],i={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},l=i,r=e("2877"),o=Object(r["a"])(l,s,n,!1,null,null,null);a["a"]=o.exports},d711:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container",attrs:{id:"storages"}},[e("table",{staticClass:"table mt-4"},[t._m(0),e("tbody",t._l(t.storages,(function(a,s){return e("tr",{key:a.id},[e("td",{staticClass:"text-center"},[t._v(t._s(s+1))]),e("td",{staticClass:"text-center"},[e("img",{attrs:{src:a.path,width:"100px"}})]),e("td",{staticClass:"text-center"},[e("div",{staticClass:"btn-group"},[e("button",{staticClass:"btn btn-outline-danger btn-sm",on:{click:function(e){return t.deleteQA(a)}}},[t._v(" 刪除 ")])])])])})),0)]),e("Pagination",{attrs:{pages:t.pagination,name:"pagination"},on:{"emit-pages":t.getStorages}}),e("div",{staticClass:"modal fade bd-example-modal-sm",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[t._v("確定要刪除 "+t._s(t.tempDelete.title)+"?")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteData()}}},[t._v("確認刪除")])])])])])],1)},n=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("thead",[e("tr",[e("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("編號")]),e("th",{staticClass:"text-center"},[t._v("圖片預覽")]),e("th",{staticClass:"text-center",attrs:{width:"120"}},[t._v("操作")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("確認操作")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])}],i=(e("99af"),e("0450")),l="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/admin/storage"),r={components:{Pagination:i["a"]},data:function(){return{pageSettings:{page:1,paged:10},pagination:{current_page:1},storages:[],isLoading:!1,tempDelete:{}}},mounted:function(){this.getStorages()},methods:{getStorages:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$parent.isLoading=!0,this.pageSettings.page=a,this.$http.get("".concat(l),{params:this.pageSettings}).then((function(a){t.storages=a.data.data,t.pagination=a.data.meta.pagination,t.$parent.isLoading=!1})).catch((function(){t.$parent.isLoading=!1}))},deleteQA:function(t){this.tempDelete=t,$("#deleteModal").modal("show")},deleteData:function(){var t=this;this.$parent.isLoading=!0;var a="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/admin/storage/").concat(this.tempDelete.id);this.$http.delete(a).then((function(){$("#deleteModal").modal("hide"),t.$parent.isLoading=!1,t.getStorages()}))}}},o=r,c=e("2877"),d=Object(c["a"])(o,s,n,!1,null,null,null);a["default"]=d.exports}}]);
//# sourceMappingURL=chunk-60b349c6.e818c913.js.map