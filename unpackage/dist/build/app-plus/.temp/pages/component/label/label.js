require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([98],{183:function(e,t,a){"use strict";var i=l(a(1)),c=l(a(184));function l(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(c.default))},184:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=a(186),c=a.n(i),l=a(187);var s=function(e){a(185)},n=a(0)(c.a,l.a,s,null,null);t.default=n.exports},185:function(e,t){},186:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:function(){return{title:"label",checkboxItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],radioItems:[{name:"USA",value:"美国"},{name:"CHN",value:"中国",checked:"true"}],hidden:!1}},methods:{checkboxChange:function(e){console.log(e);for(var t=e.target.value,a={},i=0;i<this.checkboxItems.length;i++)-1!==t.indexOf(this.checkboxItems[i].name)?a["checkboxItems["+i+"].checked"]=!0:a["checkboxItems["+i+"].checked"]=!1},radioChange:function(e){for(var t=e.target.value,a={},i=0;i<this.radioItems.length;i++)-1!==t.indexOf(this.radioItems[i].name)?a["radioItems["+i+"].checked"]=!0:a["radioItems["+i+"].checked"]=!1},tapEvent:function(e){console.log("按钮被点击")}}}},187:function(e,t,a){"use strict";var i={render:function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("view",[a("page-head",{attrs:{title:e.title,mpcomid:"eeB-0"}}),a("view",{staticClass:"uni-common-mt"},[a("view",{staticClass:"uni-form-item uni-column"},[a("view",{staticClass:"title"},[e._v("表单组件在label内")]),a("checkbox-group",{staticClass:"uni-list",attrs:{eventid:"Ks2-0",mpcomid:"gwc-1"},on:{change:e.checkboxChange}},e._l(e.checkboxItems,function(t,i){return a("label",{key:t.name,staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",[a("checkbox",{attrs:{value:t.name,checked:t.checked}})],1),a("view",[e._v(e._s(t.value))])])}))],1),a("view",{staticClass:"uni-form-item uni-column"},[a("view",{staticClass:"title"},[e._v("label用for标识表单组件")]),a("radio-group",{staticClass:"uni-list",attrs:{eventid:"re7-1",mpcomid:"x0l-2"},on:{change:e.radioChange}},e._l(e.radioItems,function(t,i){return a("label",{key:i,staticClass:"uni-list-cell uni-list-cell-pd"},[a("view",[a("radio",{attrs:{id:t.name,value:t.name,checked:t.checked}})],1),a("view",[a("label",{staticClass:"label-2-text",attrs:{for:t.name}},[a("text",[e._v(e._s(t.value))])])],1)])}))],1),a("view",{staticClass:"uni-form-item uni-column"},[a("view",{staticClass:"title"},[e._v("label内有多个时选中第一个")]),a("checkbox-group",{staticClass:"uni-list",attrs:{eventid:"QVr-2",mpcomid:"Ty7-3"},on:{change:e.checkboxChange}},[a("label",{staticClass:"label-3"},[a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("checkbox",{staticClass:"checkbox-3"},[e._v("选项一")])],1),a("view",{staticClass:"uni-list-cell uni-list-cell-pd"},[a("checkbox",{staticClass:"checkbox-3"},[e._v("选项二")])],1),a("view",{staticClass:"uni-link uni-center",staticStyle:{"margin-top":"20upx"}},[e._v("点击该label下的文字默认选中第一个checkbox")])])],1)],1)])],1)},staticRenderFns:[]};t.a=i}},[183]);