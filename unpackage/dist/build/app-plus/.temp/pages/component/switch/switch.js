require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([84],{208:function(t,e,i){"use strict";var s=a(i(1)),n=a(i(209));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},209:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=i(211),n=i.n(s),a=i(212);var c=function(t){i(210)},l=i(0)(n.a,a.a,c,null,null);e.default=l.exports},210:function(t,e){},211:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"switch"}},methods:{switch1Change:function(t){console.log("switch1 发生 change 事件，携带值为",t.target.value)},switch2Change:function(t){console.log("switch2 发生 change 事件，携带值为",t.target.value)}}}},212:function(t,e,i){"use strict";var s={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",[e("page-head",{attrs:{title:this.title,mpcomid:"abW-0"}}),e("view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("view",{staticClass:"uni-title"},[this._v("默认样式")]),e("view",[e("switch",{attrs:{checked:"",eventid:"F8f-0"},on:{change:this.switch1Change}}),e("switch",{attrs:{eventid:"SKQ-1"},on:{change:this.switch2Change}})]),e("view",{staticClass:"uni-title"},[this._v("推荐展示样式")])]),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-list"},[e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[this._v("开启中")]),e("switch",{attrs:{checked:""}})]),e("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[e("view",{staticClass:"uni-list-cell-db"},[this._v("关闭")]),e("switch")])])}]};e.a=s}},[208]);