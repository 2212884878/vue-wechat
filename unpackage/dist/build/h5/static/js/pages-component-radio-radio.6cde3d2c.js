(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-radio-radio"],{"1a42":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("page-head",{attrs:{title:e.title}}),a("v-uni-view",{staticClass:"uni-padding-wrap"},[a("v-uni-view",{staticClass:"uni-title"},[e._v("默认样式")]),a("v-uni-view",[a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"r1",checked:"true"}}),e._v("选中\n\t\t\t")],1),a("v-uni-label",{staticClass:"radio"},[a("v-uni-radio",{attrs:{value:"r2"}}),e._v("未选中\n\t\t\t")],1)],1)],1),a("v-uni-view",{staticClass:"uni-title uni-common-mt uni-common-pl"},[e._v("推荐展示样式")]),a("v-uni-view",{staticClass:"uni-list"},[a("v-uni-radio-group",{on:{change:function(t){t=e.$handleEvent(t),e.radioChange(t)}}},e._l(e.items,function(t){return a("v-uni-label",{key:t.value,staticClass:"uni-list-cell uni-list-cell-pd"},[a("v-uni-view",[a("v-uni-radio",{attrs:{value:t.value,checked:"true"}})],1),a("v-uni-view",[e._v(e._s(t.name))])],1)}))],1)],1)},n=[],l={data:function(){return{title:"radio",items:[{value:"USA",name:"美国"},{value:"CHN",name:"中国",checked:"true"},{value:"BRA",name:"巴西"},{value:"JPN",name:"日本"},{value:"ENG",name:"英国"},{value:"FRA",name:"法国"}]}},methods:{radioChange:function(e){console.log("radio发生change事件，携带value值为：",e.detail.value);for(var t=this.items,a=0,i=t.length;a<i;++a)t[a].checked=t[a].value==e.detail.value;this.items=t}}},u=l,s=(a("46f5"),a("2877")),o=Object(s["a"])(u,i,n,!1,null,"1f1509a5",null);o.options.__file="radio.vue";t["default"]=o.exports},"46f5":function(e,t,a){"use strict";var i=a("9b73"),n=a.n(i);n.a},"57ae":function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,"\n.uni-list-cell[data-v-1f1509a5]{-webkit-box-pack:start;-webkit-justify-content:flex-start;-ms-flex-pack:start;justify-content:flex-start\n}",""])},"9b73":function(e,t,a){var i=a("57ae");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("5ec7a8fd",i,!0,{sourceMap:!1,shadowMode:!1})}}]);