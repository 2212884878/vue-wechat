(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-animalDetail-animalDetail"],{"5fc9":function(t,e,a){"use strict";var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"page-section swiper"},[a("v-uni-view",{staticClass:"page-section-spacing"},[a("v-uni-swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration},on:{change:function(e){e=t.$handleEvent(e),t.changs(e)}}},t._l(t.itemList,function(e,i){return a("v-uni-swiper-item",{key:i},[a("v-uni-image",{staticStyle:{width:"750upx",height:"400upx","background-color":"#eeeeee"},attrs:{src:"http://192.168.2.61:2600/file/"+e}},[t._v(t._s(i))])],1)}))],1),a("v-uni-text",{staticClass:"swiper-page"},[t._v(t._s(t.page)+"/"+t._s(t.itemList.length))])],1)],1)],1)},n=[],s={data:function(){return{page:1}},props:{itemList:{type:Array,default:function(){return["http://t2.hddhhn.com/uploads/tu/201811/9999/e42daa022d.jpg","http://t2.hddhhn.com/uploads/tu/201811/9999/e42daa022d.jpg","http://t2.hddhhn.com/uploads/tu/201811/9999/e42daa022d.jpg"]}},indicatorDots:{type:Boolean,default:!1},autoplay:{type:Boolean,default:!0},interval:{type:Number,default:2e3},duration:{type:Number,default:500}},methods:{changs:function(t){this.page=t.detail.current+1}},onReady:function(){}},o=s,r=(a("a9d6"),a("2877")),c=Object(r["a"])(o,i,n,!1,null,"200c7f1e",null);c.options.__file="swiper3.vue";e["a"]=c.exports},"63ea":function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",[a("swiper3",{attrs:{itemList:t.img,indicatorDots:!1,autoplay:!0,interval:2e3,duration:500}}),a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"title"},[t._v("\n\t\t\t海豚表演\n\t\t")]),a("v-uni-text",{staticClass:"detail"},[t._v("一场守护海洋宝藏的壮丽表演秀，聪明的海洋精灵与世代生活在海边的渔民共同抗击全副武装的海盗，四千名观众共同见证。")])],1)],1)},n=[],s=a("5fc9"),o={components:{swiper3:s["a"]},data:function(){return{img:["130841_banner@2x2e5e16.png","130841_banner@2x2e5e16.png"]}}},r=o,c=(a("cab2"),a("2877")),u=Object(c["a"])(r,i,n,!1,null,"64f7786c",null);u.options.__file="animalDetail.vue";e["default"]=u.exports},6856:function(t,e,a){var i=a("7342");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("500d2abd",i,!0,{sourceMap:!1,shadowMode:!1})},"6d85":function(t,e,a){var i=a("badd");"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("6d41b486",i,!0,{sourceMap:!1,shadowMode:!1})},7342:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.uni-padding-wrap[data-v-200c7f1e]{padding:0 0;width:%?750?%;position:relative\n}\n.swiper[data-v-200c7f1e]{height:%?400?%\n}\n.swiper-item[data-v-200c7f1e]{display:block;height:%?400?%;line-height:%?400?%;text-align:center\n}\n.swiper-item uni-image[data-v-200c7f1e]{width:100%;height:100%\n}\n.swiper-page[data-v-200c7f1e]{position:absolute;bottom:%?30?%;right:%?58?%;width:%?100?%;height:%?50?%;line-height:%?50?%;background:rgba(0,0,0,.54);border-radius:%?26?%;text-align:center;font-size:%?26?%;font-family:PingFang-SC-Bold;font-weight:700;color:#fefefe\n}",""])},a9d6:function(t,e,a){"use strict";var i=a("6856"),n=a.n(i);n.a},badd:function(t,e,a){e=t.exports=a("2350")(!1),e.push([t.i,"\n.content[data-v-64f7786c]{background:#fff;padding:%?30?%\n}\n.title[data-v-64f7786c]{font-size:%?36?%;color:#333;font-weight:700;font-family:PingFang-SC-Medium\n}\n.detail[data-v-64f7786c]{font-size:%?28?%;line-height:%?42?%;color:#333\n}",""])},cab2:function(t,e,a){"use strict";var i=a("6d85"),n=a.n(i);n.a}}]);