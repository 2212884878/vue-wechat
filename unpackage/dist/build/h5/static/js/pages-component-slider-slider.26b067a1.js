(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-slider-slider"],{"92b2":function(e,n,i){"use strict";i.r(n);var t=function(){var e=this,n=e.$createElement,i=e._self._c||n;return i("v-uni-view",[i("page-head",{attrs:{title:e.title}}),i("v-uni-view",{staticClass:"uni-padding-wrap uni-common-mt"},[i("v-uni-view",{staticClass:"uni-title"},[e._v("设置step")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"60",step:"5"},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[e._v("显示当前value")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"50","show-value":""},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1),i("v-uni-view",{staticClass:"uni-title"},[e._v("设置最小/最大值")]),i("v-uni-view",[i("v-uni-slider",{attrs:{value:"100",min:"50",max:"200","show-value":""},on:{change:function(n){n=e.$handleEvent(n),e.sliderChange(n)}}})],1)],1)],1)},a=[],l={data:function(){return{title:"slider"}},methods:{sliderChange:function(e){console.log("value 发生变化："+e.detail.value)}}},s=l,u=i("2877"),v=Object(u["a"])(s,t,a,!1,null,null,null);v.options.__file="slider.vue";n["default"]=v.exports}}]);