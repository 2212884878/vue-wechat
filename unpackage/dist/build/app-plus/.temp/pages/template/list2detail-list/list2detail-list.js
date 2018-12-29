require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([13],{591:function(t,e,i){"use strict";var n=s(i(1)),a=s(i(592));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,n.default)(a.default))},592:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i(594),a=i.n(n),s=i(596);var o=function(t){i(593)},r=i(0)(a.a,s.a,o,null,null);e.default=r.exports},593:function(t,e){},594:function(t,e,i){"use strict";(function(t){Object.defineProperty(e,"__esModule",{value:!0});var n=i(595).dateUtils;e.default={data:function(){return{banner:{},listData:[],last_id:"",reload:!1}},onLoad:function(){this.getBanner(),this.getList()},onPullDownRefresh:function(){this.reload=!0,this.last_id="",this.getBanner(),this.getList()},onReachBottom:function(){this.getList()},methods:{getBanner:function(){var e=this;t.request({url:"https://unidemo.dcloud.net.cn/api/banner/36kr",data:{column:"id,post_id,title,author_name,cover,published_at"},success:function(i){t.stopPullDownRefresh(),200==i.statusCode&&(e.banner=i.data)},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},getList:function(){var e=this,i={column:"id,post_id,title,author_name,cover,published_at"};this.last_id&&(i.minId=this.last_id,i.time=(new Date).getTime()+"",i.pageSize=10),t.request({url:"https://unidemo.dcloud.net.cn/api/news",data:i,success:function(t){if(200==t.statusCode){var i=e.setTime(t.data);e.listData=e.reload?i:e.listData.concat(i),e.last_id=i[i.length-1].id,e.reload=!1}},fail:function(t,e){console.log("fail"+JSON.stringify(t))}})},goDetail:function(e){var i={author_name:e.author_name,cover:e.cover,id:e.id,post_id:e.post_id,published_at:e.published_at,title:e.title};t.navigateTo({url:"../list2detail-detail/list2detail-detail?detailDate="+encodeURIComponent(JSON.stringify(i))})},setTime:function(t){var e=[];return t.forEach(function(t){e.push({author_name:t.author_name,cover:t.cover,id:t.id,post_id:t.post_id,published_at:n.format(t.published_at),title:t.title})}),e}}}}).call(e,i(2).default)},595:function(t,e,i){"use strict";var n={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(t){var e="";for(var i in this.UNITS)if(t>=this.UNITS[i]){e=Math.floor(t/this.UNITS[i])+i+"前";break}return e||"刚刚"},format:function(t){var e=this.parse(t),i=Date.now()-e.getTime();if(i<this.UNITS["天"])return this.humanize(i);var n=function(t){return t<10?"0"+t:t};return e.getFullYear()+"/"+n(e.getMonth()+1)+"/"+n(e.getDay())+"-"+n(e.getHours())+":"+n(e.getMinutes())},parse:function(t){var e=t.split(/[^0-9]/);return new Date(e[0],e[1]-1,e[2],e[3],e[4],e[5])}};t.exports={formatTime:function(t){if("number"!=typeof t||t<0)return t;var e=parseInt(t/3600);return t%=3600,[e,parseInt(t/60),t%=60].map(function(t){return(t=t.toString())[1]?t:"0"+t}).join(":")},formatLocation:function(t,e){return"string"==typeof t&&"string"==typeof e&&(t=parseFloat(t),e=parseFloat(e)),t=t.toFixed(2),e=e.toFixed(2),{longitude:t.toString().split("."),latitude:e.toString().split(".")}},dateUtils:n}},596:function(t,e,i){"use strict";var n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("view",{staticClass:"banner",attrs:{eventid:"87h-0"},on:{click:function(e){t.goDetail(t.banner)}}},[i("image",{staticClass:"banner-img",attrs:{src:t.banner.cover}}),i("view",{staticClass:"banner-title"},[t._v(t._s(t.banner.title))])]),i("view",{staticClass:"uni-list"},t._l(t.listData,function(e,n){return i("view",{key:n,staticClass:"uni-list-cell",attrs:{"hover-class":"uni-list-cell-hover",eventid:"RzT-1-"+n},on:{click:function(i){t.goDetail(e)}}},[i("view",{staticClass:"uni-media-list"},[i("image",{staticClass:"uni-media-list-logo",attrs:{src:e.cover}}),i("view",{staticClass:"uni-media-list-body"},[i("view",{staticClass:"uni-media-list-text-top"},[t._v(t._s(e.title))]),i("view",{staticClass:"uni-media-list-text-bottom"},[i("text",[t._v(t._s(e.author_name))]),i("text",[t._v(t._s(e.published_at))])])])])])}))])},staticRenderFns:[]};e.a=n}},[591]);