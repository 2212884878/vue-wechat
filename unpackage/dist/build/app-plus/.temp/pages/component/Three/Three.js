require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([8],{77:function(t,e,i){"use strict";var n=o(i(1)),s=o(i(78));function o(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(s.default))},78:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(80),s=i.n(n),o=i(94);var a=function(t){i(79)},u=i(0)(s.a,o.a,a,"data-v-84e5fce6",null);e.default=u.exports},79:function(t,e){},80:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=u(i(9)),s=u(i(84)),o=u(i(17)),a=u(i(18));function u(t){return t&&t.__esModule?t:{default:t}}e.default={data:function(){return{popType:"middle",showPopupMiddle:!1,img:[],title:"",bodys:"",id:"",status:!0}},components:{swiper3:n.default,description:s.default,uniPopup:o.default,uniTag:a.default},computed:{},onLoad:function(t){this.id=t.id},onReady:function(){this.getList()},methods:{hidePopup:function(){this.showPopupMiddle=!1},showMiddlePopup:function(){this.hidePopup(),this.popType="middle",this.showPopupMiddle=!0},getList:function(){var e=this;$.ajax({url:"http://192.168.2.61:2670/mongodb-mucon/content/primary/get",data:{id:e.id},async:!0,type:"POST",cache:!1,crossDomain:!0,xhrFields:{withCredentials:!0},success:function(i){if(200==i.code&&null!=i.data){t.setNavigationBarTitle({title:i.data.sname}),e.title=i.data.content0,e.bodys=i.data.content1;var n=[];i.data.pictures.forEach(function(t){n.push(t.picid)}),e.img=e.getImg(n.join(","))}else e.status=!1,t.setNavigationBarTitle({title:""}),e.showMiddlePopup()},error:function(t,e,i){console.log(t)}})},getImg:function(t){var e=[];return $.ajax({url:"http://192.168.2.61:2600/staticResource-mucon/selectFiles",data:{ids:t},async:!0,type:"GET",cache:!1,crossDomain:!0,xhrFields:{withCredentials:!0},success:function(t){t.data.forEach(function(t){e.push(t.fileName)})}}),e},go:function(){t.navigateBack({delta:1})}}}}).call(e,i(2).default)},84:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(86),s=i.n(n),o=i(87);var a=function(t){i(85)},u=i(0)(s.a,o.a,a,null,null);e.default=u.exports},85:function(t,e){},86:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{}},props:["title","bodys"],components:{},computed:{},methods:{}}},87:function(t,e,i){"use strict";var n={render:function(){var t=this.$createElement,e=this._self._c||t;return e("view",{staticClass:"body-view container"},[e("rich-text",{staticClass:"title",attrs:{nodes:this.title,mpcomid:"9sY-0"}}),e("rich-text",{attrs:{nodes:this.bodys,mpcomid:"GSl-1"}})],1)},staticRenderFns:[]};e.a=n},94:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[t.status?[i("swiper3",{attrs:{itemList:t.img,indicatorDots:!1,autoplay:!0,interval:2e3,duration:500,mpcomid:"Q9b-0"}}),i("description",{attrs:{title:t.title,bodys:t.bodys,mpcomid:"r1V-1"}})]:[i("uni-popup",{attrs:{show:t.showPopupMiddle,type:t.popType,eventid:"XiJ-1",mpcomid:"YEG-3"},on:{hidePopup:t.hidePopup}},[i("view",{staticClass:"uni-center",staticStyle:{"font-size":"0"}},[i("image",{staticClass:"image",staticStyle:{width:"150upx",height:"150upx"},attrs:{mode:"widthFix",src:"../../../static/uni@2x.png"}})]),i("view",{staticClass:"uni-common-mt uni-helllo-text uni-center"},[t._v("\n\t\t\t\t没有该条数据详情"),i("br"),i("uni-tag",{attrs:{text:"返回",eventid:"FJ1-0",mpcomid:"xsT-2"},on:{click:t.go}})],1)])]],2)},staticRenderFns:[]};e.a=n}},[77]);