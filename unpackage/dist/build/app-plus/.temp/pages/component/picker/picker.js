require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([91],{188:function(t,e,i){"use strict";var a=s(i(1)),n=s(i(189));function s(t){return t&&t.__esModule?t:{default:t}}Page((0,a.default)(n.default))},189:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i(191),n=i.n(a),s=i(192);var l=function(t){i(190)},u=i(0)(n.a,s.a,l,null,null);e.default=u.exports},190:function(t,e){},191:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{title:"picker",array:["中国","美国","巴西","日本"],index:0,date:this.getDate({format:!0}),time:"12:01"}},computed:{startDate:function(){return this.getDate("start")},endDate:function(){return this.getDate("end")}},methods:{bindPickerChange:function(t){console.log("picker发送选择改变，携带值为",t.target.value),this.index=t.target.value},bindDateChange:function(t){this.date=t.target.value},bindTimeChange:function(t){this.time=t.target.value},getDate:function(t){var e=new Date,i=e.getFullYear(),a=e.getMonth()+1,n=e.getDate();return"start"===t?i-=60:"end"===t&&(i+=2),i+"-"+(a=a>9?a:"0"+a)+"-"+(n=n>9?n:"0"+n)}}}},192:function(t,e,i){"use strict";var a={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("view",[i("page-head",{attrs:{title:t.title,mpcomid:"5q7-0"}}),i("view",{staticClass:"uni-title uni-common-pl"},[t._v("地区选择器")]),i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("\n\t\t\t\t当前选择\n\t\t\t")]),i("view",{staticClass:"uni-list-cell-db"},[i("picker",{attrs:{value:t.index,range:t.array,eventid:"ljj-0"},on:{change:t.bindPickerChange}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.array[t.index]))])])],1)])]),i("view",{staticClass:"uni-title uni-common-pl"},[t._v("时间选择器")]),i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("\n\t\t\t\t当前选择\n\t\t\t")]),i("view",{staticClass:"uni-list-cell-db"},[i("picker",{attrs:{mode:"time",value:t.time,start:"09:01",end:"21:01",eventid:"YjJ-1"},on:{change:t.bindTimeChange}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.time))])])],1)])]),i("view",{staticClass:"uni-title uni-common-pl"},[t._v("日期选择器")]),i("view",{staticClass:"uni-list"},[i("view",{staticClass:"uni-list-cell"},[i("view",{staticClass:"uni-list-cell-left"},[t._v("\n\t\t\t\t当前选择\n\t\t\t")]),i("view",{staticClass:"uni-list-cell-db"},[i("picker",{attrs:{mode:"date",value:t.date,start:t.startDate,end:t.endDate,eventid:"UYi-2"},on:{change:t.bindDateChange}},[i("view",{staticClass:"uni-input"},[t._v(t._s(t.date))])])],1)])])],1)},staticRenderFns:[]};e.a=a}},[188]);