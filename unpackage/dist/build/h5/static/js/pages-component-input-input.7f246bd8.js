(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-component-input-input"],{"78a9":function(i,t,n){"use strict";var a=n("bfb1"),u=n.n(a);u.a},9129:function(i,t,n){t=i.exports=n("2350")(!1),t.push([i.i,"\n.title[data-v-2466720e]{padding:%?10?% %?25?%\n}",""])},b35b:function(i,t,n){"use strict";n.r(t);var a=function(){var i=this,t=i.$createElement,n=i._self._c||t;return n("v-uni-view",[n("page-head",{attrs:{title:i.title}}),n("v-uni-view",{staticClass:"uni-common-mt"},[n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("可自动聚焦的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{focus:"",placeholder:"自动获得焦点"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("键盘右下角按钮显示为搜索")]),n("v-uni-input",{staticClass:"uni-input",attrs:{"confirm-type":"search",placeholder:"键盘右下角按钮显示为搜索"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("控制最大输入长度的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{maxlength:"10",placeholder:"最大输入长度为10"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("实时获取输入值："+i._s(i.inputValue))]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"输入同步到view中"},on:{input:function(t){t=i.$handleEvent(t),i.bindKeyInput(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("控制输入的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"连续的两个1会变成2"},on:{input:function(t){t=i.$handleEvent(t),i.bindReplaceInput(t)}},model:{value:i.changeValue,callback:function(t){i.changeValue=t},expression:"changeValue"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("控制键盘的input")]),n("v-uni-input",{ref:"input1",staticClass:"uni-input",attrs:{placeholder:"输入123自动收起键盘"},on:{input:function(t){t=i.$handleEvent(t),i.bindHideKeyboard(t)}}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("数字输入的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"number",placeholder:"这是一个数字输入框"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("密码输入的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{password:"",type:"text",placeholder:"这是一个密码输入框"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("带小数点的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"digit",placeholder:"带小数点的数字键盘"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("身份证输入的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{type:"idcard",placeholder:"身份证输入键盘"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("控制占位符颜色的input")]),n("v-uni-input",{staticClass:"uni-input",attrs:{"placeholder-style":"color:#F76260",placeholder:"占位符字体是红色的"}})],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("带清除按钮的输入框")]),n("v-uni-view",{staticClass:"with-fun"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"带清除按钮的输入框",value:i.inputClearValue},on:{input:function(t){t=i.$handleEvent(t),i.bindClearInput(t)}}}),i.showClearIcon?n("v-uni-view",{staticClass:"uni-icon uni-icon-clear",on:{click:function(t){t=i.$handleEvent(t),i.clearIcon(t)}}}):i._e()],1)],1),n("v-uni-view",{staticClass:"uni-form-item uni-column"},[n("v-uni-view",{staticClass:"title"},[i._v("可查看密码的输入框")]),n("v-uni-view",{staticClass:"with-fun"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:"请输入密码",password:i.showPassword}}),n("v-uni-view",{staticClass:"uni-icon uni-icon-eye",class:[i.showPassword?"":"uni-active"],on:{click:function(t){t=i.$handleEvent(t),i.changePassword(t)}}})],1)],1)],1)],1)},u=[],s={data:function(){return{title:"input",focus:!1,inputValue:"",showClearIcon:!1,inputClearValue:"",changeValue:"",showPassword:!0,src:"../../../static/eye-1.png"}},methods:{bindKeyInput:function(i){this.inputValue=i.target.value},bindReplaceInput:function(i){var t=i.target.value;"11"===t&&(this.changeValue="2")},bindHideKeyboard:function(i){"123"===i.target.value&&uni.hideKeyboard()},bindClearInput:function(i){this.inputClearValue=i.target.value,i.target.value.length>0?this.showClearIcon=!0:this.showClearIcon=!1},clearIcon:function(){this.inputClearValue="",this.showClearIcon=!1},changePassword:function(){this.showPassword=!this.showPassword}}},e=s,l=(n("78a9"),n("2877")),c=Object(l["a"])(e,a,u,!1,null,"2466720e",null);c.options.__file="input.vue";t["default"]=c.exports},bfb1:function(i,t,n){var a=n("9129");"string"===typeof a&&(a=[[i.i,a,""]]),a.locals&&(i.exports=a.locals);var u=n("4f06").default;u("2625ac4e",a,!0,{sourceMap:!1,shadowMode:!1})}}]);