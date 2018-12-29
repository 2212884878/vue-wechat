require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([38],{345:function(t,e,s){"use strict";var i=n(s(1)),a=n(s(346));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,i.default)(a.default))},346:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var i=s(348),a=s.n(i),n=s(349);var o=function(t){s(347)},v=s(0)(a.a,n.a,o,null,null);e.default=v.exports},347:function(t,e){},348:function(t,e,s){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{index:0,type:0,orderNo:"12535964116242",time:"2018.12.16 16:24",typeList:[{type:0},{type:1},{type:2},{type:3}]}},methods:{chooseType:function(t){this.index=t},goDetail:function(e){t.navigateTo({url:"/pages/template/order-detail/order-detail?type="+e})}},onload:function(){console.log(this.typeList[3].type)}}}).call(e,s(2).default)},349:function(t,e,s){"use strict";var i={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("view",{staticClass:"main"},[s("view",{staticClass:"one"},[s("view",{staticClass:"li",class:{li1:0===t.index},attrs:{eventid:"hqE-0"},on:{click:function(e){t.chooseType(0)}}},[t._v("全部")]),s("view",{staticClass:"li",class:{li1:1===t.index},attrs:{eventid:"B5K-1"},on:{click:function(e){t.chooseType(1)}}},[t._v("待支付")]),s("view",{staticClass:"li",class:{li1:2===t.index},attrs:{eventid:"kjX-2"},on:{click:function(e){t.chooseType(2)}}},[t._v("处理中")]),s("view",{staticClass:"li",class:{li1:3===t.index},attrs:{eventid:"Ne0-3"},on:{click:function(e){t.chooseType(3)}}},[t._v("下单成功")]),s("view",{staticClass:"li",class:{li1:4===t.index},attrs:{eventid:"pQe-4"},on:{click:function(e){t.chooseType(4)}}},[t._v("退款")])]),s("view",{staticClass:"content"},[s("view",{staticClass:"list",attrs:{eventid:"xZ6-5"},on:{click:function(e){t.goDetail(t.typeList[0].type)}}},[s("view",{staticClass:"top"},[s("view",{staticClass:"top-left"},[s("view",[s("view",{staticClass:"left-one l-o"},[t._v("订单编号："+t._s(t.orderNo))]),s("view",{staticClass:"left-one"},[t._v("创建时间："+t._s(t.time))])]),t._m(0)]),t._m(1)]),s("view",{staticClass:"bottom"},[t._m(2),s("view",{staticClass:"bottom-btn"},[s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[0].type,expression:"typeList[0].type === 0"}],staticClass:"btn1"},[t._v("取消订单")]),s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[0].type,expression:"typeList[0].type === 0"}],staticClass:"btn2"},[t._v("去支付")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[0].type,expression:"typeList[0].type === 1"}],staticClass:"btn1"},[t._v("申请退款")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[0].type,expression:"typeList[0].type === 1"}],staticClass:"btn2"},[t._v("获取核销码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:2===t.typeList[0].type,expression:"typeList[0].type === 2"}],staticClass:"btn2"},[t._v("申请退款")])],1)])]),s("view",{staticClass:"list",attrs:{eventid:"p7n-6"},on:{click:function(e){t.goDetail(t.typeList[1].type)}}},[s("view",{staticClass:"top"},[s("view",{staticClass:"top-left"},[s("view",[s("view",{staticClass:"left-one l-o"},[t._v("订单编号："+t._s(t.orderNo))]),s("view",{staticClass:"left-one"},[t._v("创建时间："+t._s(t.time))])]),t._m(3)]),t._m(4)]),s("view",{staticClass:"bottom"},[t._m(5),s("view",{staticClass:"bottom-btn"},[s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[1].type,expression:"typeList[1].type === 0"}],staticClass:"btn1"},[t._v("取消订单")]),s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[1].type,expression:"typeList[1].type === 0"}],staticClass:"btn2"},[t._v("去支付")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[1].type,expression:"typeList[1].type === 1"}],staticClass:"btn1"},[t._v("申请退款")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[1].type,expression:"typeList[1].type === 1"}],staticClass:"btn2"},[t._v("获取核销码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:2===t.typeList[1].type,expression:"typeList[1].type === 2"}],staticClass:"btn2"},[t._v("申请退款")])],1)])]),s("view",{staticClass:"list",attrs:{eventid:"IDp-7"},on:{click:function(e){t.goDetail(t.typeList[2].type)}}},[s("view",{staticClass:"top"},[s("view",{staticClass:"top-left"},[s("view",[s("view",{staticClass:"left-one l-o"},[t._v("订单编号："+t._s(t.orderNo))]),s("view",{staticClass:"left-one"},[t._v("创建时间："+t._s(t.time))])]),t._m(6)]),t._m(7)]),s("view",{staticClass:"bottom"},[t._m(8),s("view",{staticClass:"bottom-btn"},[s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[2].type,expression:"typeList[2].type === 0"}],staticClass:"btn1"},[t._v("取消订单")]),s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[2].type,expression:"typeList[2].type === 0"}],staticClass:"btn2"},[t._v("去支付")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[2].type,expression:"typeList[2].type === 1"}],staticClass:"btn1"},[t._v("申请退款")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[2].type,expression:"typeList[2].type === 1"}],staticClass:"btn2"},[t._v("获取核销码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:2===t.typeList[2].type,expression:"typeList[2].type === 2"}],staticClass:"btn2"},[t._v("申请退款")])],1)])]),s("view",{staticClass:"list",attrs:{eventid:"4GQ-8"},on:{click:function(e){t.goDetail(t.typeList[3].type)}}},[s("view",{staticClass:"top"},[s("view",{staticClass:"top-left"},[s("view",[s("view",{staticClass:"left-one l-o"},[t._v("订单编号："+t._s(t.orderNo))]),s("view",{staticClass:"left-one"},[t._v("创建时间："+t._s(t.time))])]),t._m(9)]),t._m(10)]),s("view",{staticClass:"bottom"},[t._m(11),s("view",{staticClass:"bottom-btn"},[s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[3].type,expression:"typeList[3].type === 0"}],staticClass:"btn1"},[t._v("取消订单")]),s("button",{directives:[{name:"show",rawName:"v-show",value:0===t.typeList[3].type,expression:"typeList[3].type === 0"}],staticClass:"btn2"},[t._v("去支付")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[3].type,expression:"typeList[3].type === 1"}],staticClass:"btn1"},[t._v("申请退款")]),s("button",{directives:[{name:"show",rawName:"v-show",value:1===t.typeList[3].type,expression:"typeList[3].type === 1"}],staticClass:"btn2"},[t._v("获取核销码")]),s("button",{directives:[{name:"show",rawName:"v-show",value:2===t.typeList[3].type,expression:"typeList[3].type === 2"}],staticClass:"btn2"},[t._v("申请退款")])],1)])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"left-two"},[e("view",[this._v("订单金额：￥336")]),e("view",[this._v("优惠金额：￥0.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top-right"},[e("view",{staticClass:"payType"},[this._v("待支付")]),e("image",{staticClass:"img1",attrs:{src:"../../../static/gd@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[this._v("实付金额："),e("span",{staticClass:"span"},[this._v("￥336.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"left-two"},[e("view",[this._v("订单金额：￥336")]),e("view",[this._v("优惠金额：￥0.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top-right"},[e("view",{staticClass:"payType"},[this._v("处理中")]),e("image",{staticClass:"img1",attrs:{src:"../../../static/gd@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[this._v("实付金额："),e("span",{staticClass:"span"},[this._v("￥336.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"left-two"},[e("view",[this._v("订单金额：￥336")]),e("view",[this._v("优惠金额：￥0.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top-right"},[e("view",{staticClass:"payType"},[this._v("下单成功")]),e("image",{staticClass:"img1",attrs:{src:"../../../static/gd@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[this._v("实付金额："),e("span",{staticClass:"span"},[this._v("￥336.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"left-two"},[e("view",[this._v("订单金额：￥336")]),e("view",[this._v("优惠金额：￥0.00")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"top-right"},[e("view",{staticClass:"payType"},[this._v("退款")]),e("image",{staticClass:"img1",attrs:{src:"../../../static/gd@2x.png"}})])},function(){var t=this.$createElement,e=this._self._c||t;return e("view",[this._v("实付金额："),e("span",{staticClass:"span"},[this._v("￥336.00")])])}]};e.a=i}},[345]);