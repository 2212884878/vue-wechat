(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-template-nav-transparent-nav-transparent"],{"39ba":function(i,e,t){e=i.exports=t("2350")(!1),e.push([i.i,"\n.img-view[data-v-434ade08],uni-image[data-v-434ade08],uni-swiper[data-v-434ade08]{width:%?750?%;height:%?500?%\n}\n.page-section-title[data-v-434ade08]{margin-top:%?50?%\n}",""])},ae03:function(i,e,t){"use strict";var n=t("ee00"),a=t.n(n);a.a},cd46:function(i,e,t){"use strict";t.r(e);var n=function(){var i=this,e=i.$createElement,t=i._self._c||e;return t("v-uni-view",{staticClass:"page"},[i.showSwiper?i._e():t("v-uni-view",{staticClass:"img-view"},[t("v-uni-image",{attrs:{src:i.imgUrls[0]}})],1),i.showSwiper?t("v-uni-swiper",{attrs:{"indicator-dots":"true"}},i._l(i.imgUrls,function(i,e){return t("v-uni-swiper-item",{key:e},[t("v-uni-image",{attrs:{src:i}})],1)})):i._e(),t("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[t("v-uni-view",{staticClass:"uni-title"},[t("v-uni-view",[i._v("在App端默认为标题栏透明，当用户向下滚动时，标题栏逐渐由透明转变为不透明；当用户再次向上滚动时，标题栏又从不透明变为透明状态。")]),t("v-uni-view",[i._v("在微信小程序端，导航栏始终为不透明样式。")])],1),t("v-uni-view",{staticClass:"uni-title uni-common-mt"},[i._v("图片类型")])],1),t("v-uni-view",{staticClass:"uni-list"},[t("v-uni-radio-group",{on:{change:function(e){e=i.$handleEvent(e),i.radioChange(e)}}},i._l(i.items,function(e,n){return t("v-uni-label",{key:n,staticClass:"uni-list-cell uni-list-cell-pd"},[t("v-uni-view",[i._v(i._s(e.name))]),t("v-uni-view",[t("v-uni-radio",{attrs:{value:e.value,checked:e.checked}})],1)],1)}))],1),t("v-uni-view",{staticStyle:{height:"1000upx"}})],1)},a=[],s={data:function(){return{showSwiper:!1,imgUrls:["../../../static/shuijiao.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/muwu.jpg","https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/cbd.jpg"],items:[{value:"img",name:"静态图",checked:!0},{value:"swiper",name:"轮播图",checked:!1}]}},methods:{radioChange:function(i){this.showSwiper="swiper"===i.detail.value}}},u=s,r=(t("ae03"),t("2877")),c=Object(r["a"])(u,n,a,!1,null,"434ade08",null);c.options.__file="nav-transparent.vue";e["default"]=c.exports},ee00:function(i,e,t){var n=t("39ba");"string"===typeof n&&(n=[[i.i,n,""]]),n.locals&&(i.exports=n.locals);var a=t("4f06").default;a("edb09a34",n,!0,{sourceMap:!1,shadowMode:!1})}}]);