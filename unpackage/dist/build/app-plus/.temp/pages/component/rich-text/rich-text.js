require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([88],{150:function(t,e,i){"use strict";var n=a(i(1)),s=a(i(151));function a(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},151:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(153),s=i.n(n),a=i(154);var c=function(t){i(152)},r=i(0)(s.a,a.a,c,null,null);e.default=r.exports},152:function(t,e){},153:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"rich-text",nodes:[{name:"div",attrs:{class:"div_class",style:"line-height: 60px; color: red; text-align:center;"},children:[{type:"text",text:"Hello&nbsp;uni-app!"}]}],strings:"<div style='text-align:center;'><img src='https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/uni@2x.png' /></div>"}}}},154:function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"content"},[e("page-head",{attrs:{title:this.title,mpcomid:"HmJ-0"}}),e("view",{staticClass:"uni-padding-wrap"},[this._m(0),e("view",{staticClass:"uni-common-mt",staticStyle:{background:"#FFF",padding:"20upx"}},[e("rich-text",{attrs:{nodes:this.nodes,mpcomid:"8Yw-1"}})],1),this._m(1),e("view",{staticClass:"uni-common-mt",staticStyle:{background:"#FFF",padding:"20upx"}},[e("rich-text",{attrs:{nodes:this.strings,mpcomid:"sPr-2"}})],1)])],1)},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-title uni-common-mt"},[this._v("\n\t\t\t\t数组类型\n\t\t\t\t"),e("text",[this._v("\\nnodes属性为Array")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"uni-title uni-common-mt"},[this._v("\n\t\t\t\t字符串类型\n\t\t\t\t"),e("text",[this._v("\\nnodes属性为String")])])}]};e.a=n}},[150]);