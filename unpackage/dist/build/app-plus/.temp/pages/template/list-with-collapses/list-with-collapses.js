require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([49],{581:function(t,i,s){"use strict";var e=n(s(1)),l=n(s(582));function n(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(l.default))},582:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=s(584),l=s.n(e),n=s(585);var a=function(t){s(583)},c=s(0)(l.a,n.a,a,null,null);i.default=c.exports},583:function(t,i){},584:function(t,i,s){"use strict";Object.defineProperty(i,"__esModule",{value:!0}),i.default={data:function(){return{title:"list-with-collapses",lists:[{title:"产品",show:!1,item:["iOS","Android","HTML5"]},{title:"方案",show:!1,item:["PC方案","手机方案","TV方案"]},{title:"新闻",show:!1,item:["公司新闻","行业新闻"]}]}},methods:{trigerCollapse:function(t){for(var i=0,s=this.lists.length;i<s;++i)this.lists[i].show=t===i&&!this.lists[i].show}}}},585:function(t,i,s){"use strict";var e={render:function(){var t=this,i=t.$createElement,s=t._self._c||i;return s("view",{staticClass:"page"},[s("page-head",{attrs:{title:t.title,mpcomid:"dYW-0"}}),s("view",{staticClass:"uni-card"},[s("view",{staticClass:"uni-list"},t._l(t.lists,function(i,e){return s("view",{key:e,staticClass:"uni-list-cell uni-collapse",class:e===t.lists.length-1?"uni-list-cell-last":""},[s("view",{staticClass:"uni-list-cell-navigate uni-navigate-bottom",class:i.show?"uni-active":"",attrs:{"hover-class":"uni-list-cell-hover",eventid:"lHt-0-"+e},on:{click:function(i){t.trigerCollapse(e)}}},[t._v("\n                    "+t._s(i.title)+"\n                ")]),s("view",{staticClass:"uni-list uni-collapse",class:i.show?"uni-active":""},t._l(i.item,function(e,l){return s("view",{key:l,staticClass:"uni-list-cell",class:l===i.item.length-1?"uni-list-cell-last":"",attrs:{"hover-class":"uni-list-cell-hover"}},[s("view",{staticClass:"uni-list-cell-navigate uni-navigate-right"},[t._v(" "+t._s(e)+" ")])])}))])}))])],1)},staticRenderFns:[]};i.a=e}},[581]);