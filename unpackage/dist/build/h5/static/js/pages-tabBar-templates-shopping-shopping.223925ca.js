(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-tabBar-templates-shopping-shopping"],{"2a8b":function(t,i,a){"use strict";a.r(i);var e=function(){var t=this,i=t.$createElement,a=t._self._c||i;return a("v-uni-view",{staticClass:"page"},[a("v-uni-view",{staticClass:"uni-product-list"},t._l(t.productList,function(i,e){return a("v-uni-view",{key:e,staticClass:"uni-product"},[a("v-uni-navigator",{attrs:{url:"/pages/template/product-deatil/productDeatil"}},[a("v-uni-view",{staticClass:"image-view"},[t.renderImage?a("v-uni-image",{staticClass:"uni-product-image",attrs:{src:i.image}}):t._e()],1),a("v-uni-view",{staticClass:"uni-product-title"},[t._v(t._s(i.title))]),a("v-uni-view",{staticClass:"uni-product-price"},[a("v-uni-text",{staticClass:"uni-product-price-original"},[t._v("￥"+t._s(i.favourPrice))]),a("v-uni-text",{staticClass:"uni-product-tip"},[t._v(t._s(i.tip))])],1)],1)],1)}))],1)},s=[],o={data:function(){return{title:"product-list",productList:[],renderImage:!1}},methods:{loadData:function(){var t=this,i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"add",a=[{image:"../../../../static/shop1.png",title:"纪念版2018周年海豚抱枕/玩具/赠品",favourPrice:8888,tip:"可退订"},{image:"../../../../static/shop2.png",title:"纪念版2018周年海豚抱枕/玩具/赠品",favourPrice:3399,tip:"可退订"},{image:"../../../../static/shop3.png",title:"纪念版2018周年海豚抱枕/玩具/赠品",favourPrice:10688,tip:"可退订"},{image:"../../../../static/shop4.png",title:"纪念版2018周年海豚抱枕/玩具/赠品",favourPrice:958,tip:"可退订"},{image:"../../../../static/shop1.png",title:"纪念版2018周年海豚抱枕/玩具/赠品",favourPrice:8288,tip:"可退订"},{image:"../../../../static/shop2.png",title:"纪念版2018周年海豚抱枕/玩具/赠品）",favourPrice:2799,tip:"可退订"}];"refresh"===i&&(this.productList=[]),a.forEach(function(i){t.productList.push(i)})}},onLoad:function(){var t=this;this.loadData(),setTimeout(function(){t.renderImage=!0},300)},onPullDownRefresh:function(){this.loadData("refresh"),setTimeout(function(){uni.stopPullDownRefresh()},2e3)},onReachBottom:function(){this.loadData()}},n=o,r=(a("d240"),a("2877")),u=Object(r["a"])(n,e,s,!1,null,"019660c5",null);u.options.__file="shopping.vue";i["default"]=u.exports},6911:function(t,i,a){var e=a("ef45");"string"===typeof e&&(e=[[t.i,e,""]]),e.locals&&(t.exports=e.locals);var s=a("4f06").default;s("0b89ca9a",e,!0,{sourceMap:!1,shadowMode:!1})},d240:function(t,i,a){"use strict";var e=a("6911"),s=a.n(e);s.a},ef45:function(t,i,a){i=t.exports=a("2350")(!1),i.push([t.i,"\n.uni-product-tip[data-v-019660c5]{background-color:#fff;color:#f16b11;border:%?1?% solid #f16b11\n}\n.uni-product-tip>span[data-v-019660c5]{color:#f16b11\n}",""])}}]);