require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([56],{628:function(t,i,s){"use strict";var e=r(s(1)),a=r(s(629));function r(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(a.default))},629:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(631),a=s.n(e),r=s(632);var c=function(t){s(630)},n=s(0)(a.a,r.a,c,null,null);i.default=n.exports},630:function(t,i){},631:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{title:"grid",grids:["../../../static/c1.png","../../../static/c2.png","../../../static/c3.png","../../../static/c4.png","../../../static/c5.png","../../../static/c6.png","../../../static/c7.png","../../../static/c8.png","../../../static/c9.png"],isCircular:!1}},methods:{switchChange:function(t){this.isCircular=t.detail.value}}}},632:function(t,i,s){"use strict";var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("view",[s("page-head",{attrs:{title:t.title,mpcomid:"YrC-0"}}),s("view",{staticClass:"uni-list",staticStyle:{"margin-top":"30px"}},[s("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[s("view",{staticClass:"uni-list-cell-db"},[t._v("循环")]),s("switch",{attrs:{eventid:"htz-0"},on:{change:t.switchChange}})])]),s("swiper",{attrs:{"indicator-dots":!0,autoplay:!0,circular:t.isCircular}},[s("swiper-item",{attrs:{mpcomid:"k6Z-1"}},[s("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,e){return s("view",{key:e,staticClass:"uni-grid-9-item",class:e%3==2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[s("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),s("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))]),s("swiper-item",{attrs:{mpcomid:"rv8-2"}},[s("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,e){return s("view",{key:e,staticClass:"uni-grid-9-item",class:e%3==2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[s("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),s("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))]),s("swiper-item",{attrs:{mpcomid:"j2L-3"}},[s("view",{staticClass:"uni-grid-9"},t._l(t.grids,function(i,e){return s("view",{key:e,staticClass:"uni-grid-9-item",class:e%3==2?"no-border-right":"",attrs:{"hover-class":"uni-grid-9-item-hover"}},[s("image",{staticClass:"uni-grid-9-image",attrs:{src:i}}),s("text",{staticClass:"uni-grid-9-text"},[t._v("grid")])])}))])],1)],1)},staticRenderFns:[]};i.a=e}},[628]);