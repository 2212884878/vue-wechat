require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([57],{500:function(t,a,o){"use strict";var e=c(o(1)),i=c(o(501));function c(t){return t&&t.__esModule?t:{default:t}}Page((0,e.default)(i.default))},501:function(t,a,o){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var e=o(503),i=o.n(e),c=o(504);var r=function(t){o(502)},n=o(0)(i.a,c.a,r,null,null);a.default=n.exports},502:function(t,a){},503:function(t,a,o){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var o=t.getSystemInfoSync(),e=o.screenWidth,i=void 0,c=void 0,r=(o.pixelRatio,void 0),n=void 0,s=void 0,p=void 0,u=void 0,d=void 0,g=void 0,h=void 0,v=void 0,l=100,f=o.screenWidth;a.default={data:function(){return{name:"杨大宝",imageSrc:"https://img-cdn-qiniu.dcloud.net.cn/demo_crop.jpg",isShowImg:!1,cropperInitW:e,cropperInitH:e,cropperW:e,cropperH:e,cropperL:0,cropperT:0,transL:0,transT:0,scaleP:0,imageW:0,imageH:0,cutL:0,cutT:0,cutB:e,cutR:"100%",qualityWidth:f,innerAspectRadio:1}},onLoad:function(t){},mounted:function(){this.loadImage()},methods:{setData:function(t){var a=this;Object.keys(t).forEach(function(o){a.$set(a.$data,o,t[o])})},getImage:function(){var a=this;t.chooseImage({success:function(t){a.setData({imageSrc:t.tempFilePaths[0]}),a.loadImage()}})},loadImage:function(){var a=this;t.showLoading({title:"图片加载中..."}),t.getImageInfo({src:a.imageSrc,success:function(o){(g=o.width/o.height)>=1?(h=e,v=e/g):(h=e*g,v=e);var i=h>v?h:v;if(l=i>l?l:i,g>=1){var c=Math.ceil((e/g-(e/g-l))/2),r=c,n=Math.ceil((e-e+l)/2),s=n;a.setData({cropperW:e,cropperH:e/g,cropperL:Math.ceil((e-e)/2),cropperT:Math.ceil((e-e/g)/2),cutL:n,cutT:c,cutR:s,cutB:r,imageW:h,imageH:v,scaleP:h/e,qualityWidth:f,innerAspectRadio:g})}else{var p=Math.ceil((e*g-e*g)/2),u=p,d=Math.ceil((e-l)/2),m=d;a.setData({cropperW:e*g,cropperH:e,cropperL:Math.ceil((e-e*g)/2),cropperT:Math.ceil((e-e)/2),cutL:p,cutT:d,cutR:u,cutB:m,imageW:h,imageH:v,scaleP:h/e,qualityWidth:f,innerAspectRadio:g})}a.setData({isShowImg:!0}),t.hideLoading()}})},contentStartMove:function(t){i=t.touches[0].pageX,c=t.touches[0].pageY},contentMoveing:function(t){var a=1*(i-t.touches[0].pageX),o=1*(c-t.touches[0].pageY);a>0?this.cutL-a<0&&(a=this.cutL):this.cutR+a<0&&(a=-this.cutR),o>0?this.cutT-o<0&&(o=this.cutT):this.cutB+o<0&&(o=-this.cutB),this.setData({cutL:this.cutL-a,cutT:this.cutT-o,cutR:this.cutR+a,cutB:this.cutB+o}),i=t.touches[0].pageX,c=t.touches[0].pageY},contentTouchEnd:function(){},getImageInfo:function(){var a=this;t.showLoading({title:"图片生成中..."});var o=t.createCanvasContext("myCanvas");o.drawImage(a.imageSrc,0,0,h,v),o.draw(!0,function(){var o=(a.cropperW-a.cutL-a.cutR)/a.cropperW*h,e=(a.cropperH-a.cutT-a.cutB)/a.cropperH*v,i=a.cutL/a.cropperW*h,c=a.cutT/a.cropperH*v;t.canvasToTempFilePath({x:i,y:c,width:o,height:e,destWidth:o,destHeight:e,quality:.5,canvasId:"myCanvas",success:function(a){t.hideLoading(),t.previewImage({current:"",urls:[a.tempFilePath]})}})})},dragStart:function(t){r=t.touches[0].pageX,n=t.touches[0].pageY,s=this.cutL,u=this.cutR,d=this.cutB,p=this.cutT},dragMove:function(t){switch(t.target.dataset.drag){case"right":var a=1*(r-t.touches[0].pageX);u+a<0&&(a=-u),this.setData({cutR:u+a});break;case"left":a=1*(r-t.touches[0].pageX);s-a<0&&(a=s),s-a>this.cropperW-this.cutR&&(a=s-(this.cropperW-this.cutR)),this.setData({cutL:s-a});break;case"top":a=1*(n-t.touches[0].pageY);p-a<0&&(a=p),p-a>this.cropperH-this.cutB&&(a=p-(this.cropperH-this.cutB)),this.setData({cutT:p-a});break;case"bottom":a=1*(n-t.touches[0].pageY);d+a<0&&(a=-d),this.setData({cutB:d+a});break;case"rightBottom":var o=1*(r-t.touches[0].pageX),e=1*(n-t.touches[0].pageY);d+e<0&&(e=-d),u+o<0&&(o=-u);var i=d+e,c=u+o;this.setData({cutB:i,cutR:c})}}}}}).call(a,o(2).default)},504:function(t,a,o){"use strict";var e={render:function(){var t=this,a=t.$createElement,o=t._self._c||a;return o("view",{staticClass:"container"},[o("view",{staticClass:"page-body uni-content-info"},[o("view",{staticClass:"cropper-content"},[t.isShowImg?o("view",{staticClass:"uni-corpper",style:"width:"+t.cropperInitW+"px;height:"+t.cropperInitH+"px;background:#000"},[o("view",{staticClass:"uni-corpper-content",style:"width:"+t.cropperW+"px;height:"+t.cropperH+"px;left:"+t.cropperL+"px;top:"+t.cropperT+"px"},[o("image",{style:"width:"+t.cropperW+"px;height:"+t.cropperH+"px",attrs:{src:t.imageSrc}}),o("view",{staticClass:"uni-corpper-crop-box",style:"left:"+t.cutL+"px;top:"+t.cutT+"px;right:"+t.cutR+"px;bottom:"+t.cutB+"px",attrs:{eventid:"9Fq-9"},on:{touchstart:function(a){a.stopPropagation(),t.contentStartMove(a)},touchmove:function(a){a.stopPropagation(),t.contentMoveing(a)},touchend:function(a){a.stopPropagation(),t.contentTouchEnd(a)}}},[o("view",{staticClass:"uni-cropper-view-box"},[o("view",{staticClass:"uni-cropper-dashed-h"}),o("view",{staticClass:"uni-cropper-dashed-v"}),o("view",{staticClass:"uni-cropper-line-t",attrs:{"data-drag":"top",eventid:"RNB-0"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-line-r",attrs:{"data-drag":"right",eventid:"r2Y-1"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-line-b",attrs:{"data-drag":"bottom",eventid:"4fA-2"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-line-l",attrs:{"data-drag":"left",eventid:"B3A-3"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-point point-t",attrs:{"data-drag":"top",eventid:"vjZ-4"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-point point-tr",attrs:{"data-drag":"topTight"}}),o("view",{staticClass:"uni-cropper-point point-r",attrs:{"data-drag":"right",eventid:"hot-5"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-point point-rb",attrs:{"data-drag":"rightBottom",eventid:"XKe-6"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-point point-b",attrs:{"data-drag":"bottom",eventid:"oih-7"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)},touchend:function(a){a.stopPropagation(),t.dragEnd(a)}}}),o("view",{staticClass:"uni-cropper-point point-bl",attrs:{"data-drag":"bottomLeft"}}),o("view",{staticClass:"uni-cropper-point point-l",attrs:{"data-drag":"left",eventid:"cqJ-8"},on:{touchstart:function(a){a.stopPropagation(),t.dragStart(a)},touchmove:function(a){a.stopPropagation(),t.dragMove(a)}}}),o("view",{staticClass:"uni-cropper-point point-lt",attrs:{"data-drag":"leftTop"}})])])])]):t._e()]),o("view",{staticClass:"cropper-config"},[o("button",{staticStyle:{"margin-top":"30upx"},attrs:{type:"primary reverse",eventid:"2i4-10"},on:{click:t.getImage}},[t._v(" 选择图片 ")]),o("button",{staticStyle:{"margin-top":"30upx"},attrs:{type:"warn",eventid:"PjK-11"},on:{click:t.getImageInfo}},[t._v(" 点击生成图片 ")])],1),o("canvas",{style:"position:absolute;border: 1px solid red; width:"+t.imageW+"px;height:"+t.imageH+"px;top:-9999px;left:-9999px;",attrs:{"canvas-id":"myCanvas"}})]),o("page-foot",{attrs:{name:t.name,mpcomid:"LXU-0"}})],1)},staticRenderFns:[]};a.a=e}},[500]);