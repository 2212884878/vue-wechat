require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([37],{602:function(t,o,p){"use strict";var e=s(p(1)),i=s(p(603));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},603:function(t,o,p){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e=p(605),i=p.n(e),s=p(606);var u=function(t){p(604)},n=p(0)(i.a,s.a,u,null,null);o.default=n.exports},604:function(t,o){},605:function(t,o,p){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var e,i=p(17),s=(e=i)&&e.__esModule?e:{default:e};o.default={data:function(){return{popType:"middle",title:"popup",showPopupMiddle:!1,showPopupTop:!1,showPopupBottom:!1,msg:""}},methods:{hidePopup:function(){this.showPopupMiddle=!1,this.showPopupTop=!1,this.showPopupBottom=!1},showMiddlePopup:function(){this.hidePopup(),this.popType="middle",this.showPopupMiddle=!0},showTopPopup:function(){this.hidePopup(),this.popType="top",this.msg="顶部 popup 信息内容",this.showPopupTop=!0},showBottomPopup:function(){this.hidePopup(),this.popType="bottom",this.msg="底部 popup 信息内容",this.showPopupBottom=!0}},components:{uniPopup:s.default}}},606:function(t,o,p){"use strict";var e={render:function(){var t=this,o=t.$createElement,p=t._self._c||o;return p("view",{staticClass:"page"},[p("page-head",{attrs:{title:t.title,mpcomid:"bGz-0"}}),p("view",{staticClass:"uni-padding-wrap"},[p("view",{staticClass:"uni-helllo-text uni-common-mt uni-center"},[t._v("\n\t\t\t请点击下面的按钮进行体验\n\t\t")]),p("uni-popup",{attrs:{show:t.showPopupMiddle,type:t.popType,eventid:"0CW-0",mpcomid:"m2M-1"},on:{hidePopup:t.hidePopup}},[p("view",{staticClass:"uni-center",staticStyle:{"font-size":"0"}},[p("image",{staticClass:"image",staticStyle:{width:"150upx",height:"150upx"},attrs:{mode:"widthFix",src:"../../../static/uni@2x.png"}})]),p("view",{staticClass:"uni-common-mt uni-helllo-text uni-center"},[t._v("\n\t\t\t\t消息内容使用 slot 形式定义\n\t\t\t")])]),p("uni-popup",{attrs:{show:t.showPopupTop,type:t.popType,msg:t.msg,eventid:"tID-1",mpcomid:"CJm-2"},on:{hidePopup:t.hidePopup}}),p("uni-popup",{attrs:{show:t.showPopupBottom,type:t.popType,msg:t.msg,eventid:"a6p-2",mpcomid:"xIh-3"},on:{hidePopup:t.hidePopup}}),p("view",{staticClass:"uni-btn-v uni-common-mt"},[p("button",{attrs:{type:"button",eventid:"nXn-3"},on:{click:t.showMiddlePopup}},[t._v("居中弹出 popup")]),p("button",{attrs:{type:"button","data-position":"top",eventid:"X4K-4"},on:{click:t.showTopPopup}},[t._v("顶部弹出 popup")]),p("button",{attrs:{type:"button","data-position":"bottom",eventid:"oYd-5"},on:{click:t.showBottomPopup}},[t._v("底部弹出 popup")])],1)],1)],1)},staticRenderFns:[]};o.a=e}},[602]);