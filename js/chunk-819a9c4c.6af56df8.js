(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-819a9c4c"],{"0450":function(t,a,e){"use strict";var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{attrs:{"aria-label":"nav"}},[e("ul",{staticClass:"pagination"},[e("li",{staticClass:"page-item",class:{disabled:1===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Previous"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page-1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("«")])])]),t._l(t.pages.total_pages,(function(a,i){return e("li",{key:i,staticClass:"page-item",class:{active:a===t.pages.current_page}},[e("a",{staticClass:"page-link",attrs:{href:"#"},on:{click:function(e){return e.preventDefault(),t.emitPages(a)}}},[t._v(t._s(a))])])})),e("li",{staticClass:"page-item",class:{disabled:t.pages.current_page===t.pages.total_pages}},[e("a",{staticClass:"page-link",attrs:{href:"#","aria-label":"Next"},on:{click:function(a){return a.preventDefault(),t.emitPages(t.pages.current_page+1)}}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("»")])])])],2)])},s=[],n={name:"Pagination",data:function(){return{}},props:{pages:{type:Object,default:function(){return{}}}},methods:{emitPages:function(t){this.$emit("emit-pages",t)}}},r=n,o=e("2877"),l=Object(o["a"])(r,i,s,!1,null,null,null);a["a"]=l.exports},"159b":function(t,a,e){var i=e("da84"),s=e("fdbc"),n=e("17c2"),r=e("9112");for(var o in s){var l=i[o],c=l&&l.prototype;if(c&&c.forEach!==n)try{r(c,"forEach",n)}catch(d){c.forEach=n}}},"17c2":function(t,a,e){"use strict";var i=e("b727").forEach,s=e("a640"),n=e("ae40"),r=s("forEach"),o=n("forEach");t.exports=r&&o?[].forEach:function(t){return i(this,t,arguments.length>1?arguments[1]:void 0)}},4160:function(t,a,e){"use strict";var i=e("23e7"),s=e("17c2");i({target:"Array",proto:!0,forced:[].forEach!=s},{forEach:s})},a434:function(t,a,e){"use strict";var i=e("23e7"),s=e("23cb"),n=e("a691"),r=e("50c4"),o=e("7b0b"),l=e("65f0"),c=e("8418"),d=e("1dde"),p=e("ae40"),u=d("splice"),m=p("splice",{ACCESSORS:!0,0:0,1:2}),h=Math.max,f=Math.min,v=9007199254740991,g="Maximum allowed length exceeded";i({target:"Array",proto:!0,forced:!u||!m},{splice:function(t,a){var e,i,d,p,u,m,b=o(this),D=r(b.length),_=s(t,D),C=arguments.length;if(0===C?e=i=0:1===C?(e=0,i=D-_):(e=C-2,i=f(h(n(a),0),D-_)),D+e-i>v)throw TypeError(g);for(d=l(b,i),p=0;p<i;p++)u=_+p,u in b&&c(d,p,b[u]);if(d.length=i,e<i){for(p=_;p<D-i;p++)u=p+i,m=p+e,u in b?b[m]=b[u]:delete b[m];for(p=D;p>D-i+e;p--)delete b[p-1]}else if(e>i)for(p=D-i;p>_;p--)u=p+i-1,m=p+e-1,u in b?b[m]=b[u]:delete b[m];for(p=0;p<e;p++)b[p+_]=arguments[p+2];return b.length=D-i+e,d}})},a640:function(t,a,e){"use strict";var i=e("d039");t.exports=function(t,a){var e=[][t];return!!e&&i((function(){e.call(null,a||function(){throw 1},1)}))}},ae40:function(t,a,e){var i=e("83ab"),s=e("d039"),n=e("5135"),r=Object.defineProperty,o={},l=function(t){throw t};t.exports=function(t,a){if(n(o,t))return o[t];a||(a={});var e=[][t],c=!!n(a,"ACCESSORS")&&a.ACCESSORS,d=n(a,0)?a[0]:l,p=n(a,1)?a[1]:void 0;return o[t]=!!e&&!s((function(){if(c&&!i)return!0;var t={length:-1};c?r(t,1,{enumerable:!0,get:l}):t[1]=1,e.call(t,d,p)}))}},b727:function(t,a,e){var i=e("0366"),s=e("44ad"),n=e("7b0b"),r=e("50c4"),o=e("65f0"),l=[].push,c=function(t){var a=1==t,e=2==t,c=3==t,d=4==t,p=6==t,u=5==t||p;return function(m,h,f,v){for(var g,b,D=n(m),_=s(D),C=i(h,f,3),y=r(_.length),x=0,w=v||o,L=a?w(m,y):e?w(m,0):void 0;y>x;x++)if((u||x in _)&&(g=_[x],b=C(g,x,D),t))if(a)L[x]=b;else if(b)switch(t){case 3:return!0;case 5:return g;case 6:return x;case 2:l.call(L,g)}else if(d)return!1;return p?-1:c||d?d:L}};t.exports={forEach:c(0),map:c(1),filter:c(2),some:c(3),every:c(4),find:c(5),findIndex:c(6)}},d416:function(t,a,e){"use strict";e.r(a);var i=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[e("div",{staticClass:"container"},[e("div",{staticClass:"d-flex justify-content-between mb-2"},[e("h2",[t._v("產品列表")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.editData()}}},[t._v("新增產品")])]),e("table",{staticClass:"table"},[t._m(0),t._l(t.shopDatas,(function(a,i){return e("tr",{key:a.id},[e("td",[t._v(t._s((t.pagination.current_page-1)*t.productListSettings.paged+i+1))]),e("td",[t._v(t._s(a.title))]),e("td",[a.enabled?[e("span",{staticClass:"text-success"},[t._v("是")])]:[e("span",[t._v("否")])]],2),e("td",[t._v(t._s(a.category))]),e("td",[t._v(t._s(a.origin_price))]),e("td",[t._v(t._s(a.price))]),e("td",[e("button",{staticClass:"btn btn-primary mr-2",attrs:{type:"button"},on:{click:function(e){return t.editData(a)}}},[t._v(" 修改 ")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(e){return t.deleteQA(a.id,a.title)}}},[t._v(" 刪除 ")])])])}))],2),e("Pagination",{attrs:{pages:t.pagination,name:"pagination"},on:{"emit-pages":t.getData}}),e("div",{staticClass:"modal fade bd-example-modal-sm",attrs:{id:"deleteModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-sm modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[t._m(1),e("div",{staticClass:"modal-body"},[t._v("確定要刪除 "+t._s(t.tempDelete.title)+"?")]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("取消")]),e("button",{staticClass:"btn btn-danger",attrs:{type:"button"},on:{click:function(a){return t.deleteData()}}},[t._v("確認刪除")])])])])]),e("div",{staticClass:"modal fade bd-example-modal-lg",attrs:{id:"editModal",tabindex:"-1",role:"dialog","aria-labelledby":"exampleModalCenterTitle","aria-hidden":"true"}},[e("div",{staticClass:"modal-dialog modal-lg modal-dialog-centered",attrs:{role:"document"}},[e("div",{staticClass:"modal-content"},[e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t.tempData.id?[t._v(" 編輯產品 ")]:[t._v(" 新增產品 ")]],2),t._m(2)]),e("div",{staticClass:"modal-body"},[e("form",{staticClass:"form-group w-100"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-sm-6"},[e("table",{staticClass:"w-100"},[e("tr",[e("th",{attrs:{width:"30%"}},[t._v(" 產品標題 ")]),e("td",{attrs:{width:"70%"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.title,expression:"tempData.title"}],staticClass:"form-control",attrs:{type:"text",placeholder:"產品標題",required:""},domProps:{value:t.tempData.title},on:{input:function(a){a.target.composing||t.$set(t.tempData,"title",a.target.value)}}})])]),e("tr",[e("th",[t._v("分類")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.category,expression:"tempData.category"}],staticClass:"form-control",attrs:{type:"text",placeholder:"分類"},domProps:{value:t.tempData.category},on:{input:function(a){a.target.composing||t.$set(t.tempData,"category",a.target.value)}}})])]),e("tr",[e("th",[t._v("內容")]),e("td",[e("textarea",{directives:[{name:"model",rawName:"v-model",value:t.tempData.content,expression:"tempData.content"}],staticClass:"form-control",attrs:{type:"text",placeholder:"內容"},domProps:{value:t.tempData.content},on:{input:function(a){a.target.composing||t.$set(t.tempData,"content",a.target.value)}}})])]),e("tr",[e("th",[t._v("原價")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tempData.origin_price,expression:"tempData.origin_price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"原價"},domProps:{value:t.tempData.origin_price},on:{input:function(a){a.target.composing||t.$set(t.tempData,"origin_price",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})])]),e("tr",[e("th",[t._v("售價")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model.number",value:t.tempData.price,expression:"tempData.price",modifiers:{number:!0}}],staticClass:"form-control",attrs:{type:"text",placeholder:"售價"},domProps:{value:t.tempData.price},on:{input:function(a){a.target.composing||t.$set(t.tempData,"price",t._n(a.target.value))},blur:function(a){return t.$forceUpdate()}}})])])])]),e("div",{staticClass:"col-sm-6"},[e("table",{staticClass:"w-100"},[e("tr",[e("th",{attrs:{width:"30%"}},[t._v("單位")]),e("td",{attrs:{width:"70%"}},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.unit,expression:"tempData.unit"}],staticClass:"form-control",attrs:{type:"text",placeholder:"單位"},domProps:{value:t.tempData.unit},on:{input:function(a){a.target.composing||t.$set(t.tempData,"unit",a.target.value)}}})])]),e("tr",[e("th",[t._v("是否啟用")]),e("td",[e("div",{staticClass:"custom-control custom-switch"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.enabled,expression:"tempData.enabled"}],staticClass:"custom-control-input",attrs:{type:"checkbox",id:"customSwitches"},domProps:{checked:Array.isArray(t.tempData.enabled)?t._i(t.tempData.enabled,null)>-1:t.tempData.enabled},on:{change:function(a){var e=t.tempData.enabled,i=a.target,s=!!i.checked;if(Array.isArray(e)){var n=null,r=t._i(e,n);i.checked?r<0&&t.$set(t.tempData,"enabled",e.concat([n])):r>-1&&t.$set(t.tempData,"enabled",e.slice(0,r).concat(e.slice(r+1)))}else t.$set(t.tempData,"enabled",s)}}}),e("label",{staticClass:"custom-control-label",attrs:{for:"customSwitches"}})])])]),e("tr",[e("th",[t._v("敘述")]),e("td",[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.description,expression:"tempData.description"}],staticClass:"form-control",attrs:{type:"text",placeholder:"敘述"},domProps:{value:t.tempData.description},on:{input:function(a){a.target.composing||t.$set(t.tempData,"description",a.target.value)}}})])])]),e("hr"),t._m(3),t._l(3,(function(a){return e("div",{key:a,staticClass:"mt-3"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.tempData.imageUrl[a-1],expression:"tempData.imageUrl[imgIdx - 1]"}],staticClass:"form-control",attrs:{type:"text",placeholder:"圖片網址"},domProps:{value:t.tempData.imageUrl[a-1]},on:{input:function(e){e.target.composing||t.$set(t.tempData.imageUrl,a-1,e.target.value)}}}),t.tempData.imageUrl[a-1]?e("img",{attrs:{src:t.tempData.imageUrl[a-1],alt:""}}):t._e()])})),e("div",{staticClass:"mt-3"},[e("table",{staticClass:"w-100"},[e("tr",[t._m(4),e("td",{attrs:{width:"70%"}},[e("input",{ref:"file",staticClass:"form-control",attrs:{id:"customFile",type:"file"},on:{change:t.uploadFile}})])])])])],2)])])]),e("div",{staticClass:"modal-footer"},[e("button",{staticClass:"btn btn-secondary",attrs:{type:"button","data-dismiss":"modal"}},[t._v("Close")]),e("button",{staticClass:"btn btn-primary",attrs:{type:"button"},on:{click:function(a){return t.updateData()}}},[t._v("送出")])])])])])],1),e("div",{staticClass:"mt-5"})])},s=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("tr",[e("th",[t._v("序號")]),e("th",[t._v("產品名稱")]),e("th",[t._v("商品上架")]),e("th",[t._v("商品分類")]),e("th",[t._v("原價")]),e("th",[t._v("售價")]),e("th",[t._v("功能")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"modal-header"},[e("h5",{staticClass:"modal-title",attrs:{id:"exampleModalLongTitle"}},[t._v("確認操作")]),e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("button",{staticClass:"close",attrs:{type:"button","data-dismiss":"modal","aria-label":"Close"}},[e("span",{attrs:{"aria-hidden":"true"}},[t._v("×")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"mb-3"},[e("b",[t._v("圖片網址")])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("th",{attrs:{width:"30%"}},[e("label",{attrs:{for:"customFile"}},[t._v(" 上傳圖片 ")])])}],n=(e("99af"),e("4160"),e("a434"),e("159b"),e("0450")),r="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d"),o="".concat("https://course-ec-api.hexschool.io/api/").concat("31e50ae2-761f-42e4-b9da-0c081fdb851d","/admin/ec/products"),l={components:{Pagination:n["a"]},data:function(){return{productListSettings:{page:1,paged:10},pagination:{current_page:1},tempDelete:{id:"",title:""},shopDatas:[],baseData:{imageUrl:[]},tempData:{imageUrl:[]}}},created:function(){this.getData()},methods:{getData:function(){var t=this,a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;this.$parent.isLoading=!0;var e="".concat(o);this.productListSettings.page=a,this.$http.get(e,{params:this.productListSettings}).then((function(a){t.shopDatas=a.data.data,t.pagination=a.data.meta.pagination,t.$parent.isLoading=!1}))},updateData:function(){var t=this;if(this.tempData.id)this.apiEditData(this.tempData.id),this.shopDatas.forEach((function(a,e){t.tempData.id===a.id&&(t.shopDatas[e]=t.tempData)}));else{var a=(new Date).getTime();this.tempData.id=a,this.shopDatas.push(this.tempData),this.apiAddNewData(this.tempData)}this.tempData=JSON.parse(JSON.stringify(this.baseData)),$("#editModal").modal("hide")},editData:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.baseData;this.tempData=JSON.parse(JSON.stringify(t)),$("#editModal").modal("show")},apiEditData:function(t){var a=this;this.$parent.isLoading=!0;var e="".concat(r,"/admin/ec/product/").concat(t);this.$http.patch(e,this.tempData).then((function(){a.getData()}))},apiAddNewData:function(t){var a=this;this.$parent.isLoading=!0;var e="".concat(r,"/admin/ec/product");this.$http.post(e,t).then((function(){a.getData()}))},deleteQA:function(t,a){this.tempDelete.id=t,this.tempDelete.title=a,$("#deleteModal").modal("show")},deleteData:function(){var t=this,a=this.tempDelete.id;this.apiDeleteData(a),this.shopDatas.forEach((function(e,i){e.id===a&&t.shopDatas.splice(i,1)})),this.tempDelete.id="",this.tempDelete.title="",$("#deleteModal").modal("hide")},apiDeleteData:function(t){var a=this;this.$parent.isLoading=!0;var e="".concat(r,"/admin/ec/product/").concat(t);this.$http.delete(e).then((function(){a.getData()}))},uploadFile:function(){var t=this;this.$parent.isLoading=!0;var a=this.$refs.file.files[0],e=new FormData;e.append("file",a);var i="".concat(r,"/admin/storage");this.$http.post(i,e,{headers:{"Content-Type":"multipart/form-data"}}).then((function(a){t.$parent.isLoading=!1,200===a.status&&t.tempData.imageUrl.push(a.data.data.path)})).catch((function(){t.$parent.isLoading=!0}))}}},c=l,d=e("2877"),p=Object(d["a"])(c,i,s,!1,null,null,null);a["default"]=p.exports},fdbc:function(t,a){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-819a9c4c.6af56df8.js.map