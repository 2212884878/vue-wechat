require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([31],{576:function(t,e,n){"use strict";var i=a(n(1)),s=a(n(577));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(s.default))},577:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=n(579),s=n.n(i),a=n(580);var r=function(t){n(578)},l=n(0)(s.a,a.a,r,null,null);e.default=l.exports},578:function(t,e){},579:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i,s=n(19),a=(i=s)&&i.__esModule?i:{default:i};e.default={data:function(){return{items:["选项卡1","选项卡2","选项卡3"],styles:[{value:"button",text:"按钮",checked:!0},{value:"text",text:"文字"}],colors:["#007aff","#4cd964","#dd524d"],current:0,activeColor:"#007aff",styleType:"button"}},components:{uniSegmentedControl:a.default},methods:{onClickItem:function(t){this.current!==t&&(this.current=t)},styleChange:function(t){this.styleType!==t.target.value&&(this.styleType=t.target.value)},colorChange:function(t){this.styleType!==t.target.value&&(this.activeColor=t.target.value)}}}},580:function(t,e,n){"use strict";var i={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("view",[n("view",{staticClass:"uni-padding-wrap uni-common-mt"},[n("uni-segmented-control",{attrs:{current:t.current,values:t.items,styleType:t.styleType,activeColor:t.activeColor,eventid:"Eri-0",mpcomid:"zNn-0"},on:{clickItem:t.onClickItem}})],1),n("view",{staticClass:"content"},[n("view",{directives:[{name:"show",rawName:"v-show",value:0===t.current,expression:"current === 0"}]},[t._v("\n\t\t\t选项卡1的内容\n\t\t")]),n("view",{directives:[{name:"show",rawName:"v-show",value:1===t.current,expression:"current === 1"}]},[t._v("\n\t\t\t选项卡2的内容\n\t\t")]),n("view",{directives:[{name:"show",rawName:"v-show",value:2===t.current,expression:"current === 2"}]},[t._v("\n\t\t\t选项卡3的内容\n\t\t")])]),t._m(0),n("view",{staticClass:"uni-list"},[n("radio-group",{attrs:{eventid:"Mx4-1",mpcomid:"nEm-1"},on:{change:t.styleChange}},t._l(t.styles,function(e,i){return n("label",{key:e.value,staticClass:"uni-list-cell uni-list-cell-pd"},[t._v("\n\t\t\t\t"+t._s(e.text)+"\n\t\t\t\t"),n("radio",{attrs:{value:e.value,checked:e.checked}})],1)}))],1),t._m(1),n("view",{staticClass:"uni-list"},[n("radio-group",{attrs:{eventid:"k45-2",mpcomid:"SRr-2"},on:{change:t.colorChange}},t._l(t.colors,function(t,e){return n("label",{key:e,staticClass:"uni-list-cell uni-list-cell-pd"},[n("view",{staticClass:"color-tag",style:{backgroundColor:t}}),n("radio",{attrs:{value:t,checked:0===e}})],1)}))],1)])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("view",{staticClass:"uni-title"},[this._v("Style")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-padding-wrap uni-common-mt"},[e("view",{staticClass:"uni-title"},[this._v("Color")])])}]};e.a=i}},[576]);