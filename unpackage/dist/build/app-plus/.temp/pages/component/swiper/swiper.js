require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([85],{135:function(t,i,e){"use strict";var a=n(e(1)),s=n(e(136));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(s.default))},136:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var a=e(138),s=e.n(a),n=e(139);var l=function(t){e(137)},c=e(0)(s.a,n.a,l,null,null);i.default=c.exports},137:function(t,i){},138:function(t,i,e){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{title:"swiper",background:["color1","color2","color3"],indicatorDots:!0,autoplay:!0,interval:2e3,duration:500}},methods:{changeIndicatorDots:function(t){this.indicatorDots=!this.indicatorDots},changeAutoplay:function(t){this.autoplay=!this.autoplay},intervalChange:function(t){this.interval=t.target.value},durationChange:function(t){this.duration=t.target.value}}}},139:function(t,i,e){"use strict";var a={render:function(){var t=this,i=t.$createElement,e=t._self._c||i;return e("view",[e("page-head",{attrs:{title:t.title,mpcomid:"YVL-0"}}),e("view",{staticClass:"uni-padding-wrap"},[e("view",{staticClass:"page-section swiper"},[e("view",{staticClass:"page-section-spacing"},[e("swiper",{staticClass:"swiper",attrs:{"indicator-dots":t.indicatorDots,autoplay:t.autoplay,interval:t.interval,duration:t.duration}},[e("swiper-item",{attrs:{mpcomid:"QU6-1"}},[e("view",{staticClass:"swiper-item uni-bg-red"},[t._v("A")])]),e("swiper-item",{attrs:{mpcomid:"tzd-2"}},[e("view",{staticClass:"swiper-item uni-bg-green"},[t._v("B")])]),e("swiper-item",{attrs:{mpcomid:"fkZ-3"}},[e("view",{staticClass:"swiper-item uni-bg-blue"},[t._v("C")])])],1)],1)])]),e("view",{staticClass:"swiper-list"},[e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[t._v("指示点")]),e("switch",{attrs:{checked:t.indicatorDots,eventid:"mKH-0"},on:{change:t.changeIndicatorDots}})]),e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[t._v("自动播放")]),e("switch",{attrs:{checked:t.autoplay,eventid:"I5u-1"},on:{change:t.changeAutoplay}})])]),e("view",{staticClass:"uni-padding-wrap"},[e("view",{staticClass:"uni-common-mt"},[e("text",[t._v("幻灯片切换时长(ms)")]),e("text",{staticClass:"info"},[t._v(t._s(t.duration))])]),e("slider",{attrs:{value:t.duration,min:"500",max:"2000",eventid:"T9U-2"},on:{change:t.durationChange}}),e("view",{staticClass:"uni-common-mt"},[e("text",[t._v("自动播放间隔时长(ms)")]),e("text",{staticClass:"info"},[t._v(t._s(t.interval))])]),e("slider",{attrs:{value:t.interval,min:"2000",max:"10000",eventid:"iT9-3"},on:{change:t.intervalChange}})])],1)},staticRenderFns:[]};i.a=a}},[135]);