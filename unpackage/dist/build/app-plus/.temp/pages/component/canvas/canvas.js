require("../../../common/manifest.js");
require("../../../common/vendor.js");
global.webpackJsonp([104],{253:function(t,a,i){"use strict";var s=e(i(1)),n=e(i(254));function e(t){return t&&t.__esModule?t:{default:t}}Page((0,s.default)(n.default))},254:function(t,a,i){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var s=i(256),n=i.n(s),e=i(257);var c=function(t){i(255)},h=i(0)(n.a,e.a,c,null,null);a.default=h.exports},255:function(t,a){},256:function(t,a,i){"use strict";(function(t){Object.defineProperty(a,"__esModule",{value:!0});var i=null,s=null;a.default={data:function(){return{title:"canvas",screenWidth:t.getSystemInfoSync().windowWidth,canvasWidth:0,position:{x:150,y:150,vx:2,vy:2}}},onReady:function(){i=t.createCanvasContext("canvas"),this.canvasWidth=this.screenWidth/750*610,this.position={x:this.canvasWidth/2,y:this.canvasWidth/2,vx:2,vy:2},this.drawBall(),s=setInterval(this.drawBall,17)},onUnload:function(){clearInterval(s),this.position={x:0,y:0,vx:0,vy:0}},methods:{drawBall:function(){var t=this.position;function a(t,a){i.beginPath(0),i.arc(t,a,5,0,2*Math.PI),i.setFillStyle("#1aad19"),i.setStrokeStyle("rgba(1,1,1,0)"),i.fill(),i.stroke()}t.x+=t.vx,t.y+=t.vy,t.x>=this.canvasWidth&&(t.vx=-2),t.x<=7&&(t.vx=2),t.y>=this.canvasWidth&&(t.vy=-2),t.y<=7&&(t.vy=2),a(t.x,this.canvasWidth/2),a(this.canvasWidth/2,t.y),a(this.canvasWidth-t.x,this.canvasWidth/2),a(this.canvasWidth/2,this.canvasWidth-t.y),a(t.x,t.y),a(this.canvasWidth-t.x,this.canvasWidth-t.y),a(t.x,this.canvasWidth-t.y),a(this.canvasWidth-t.x,t.y),i.draw()}}}}).call(a,i(2).default)},257:function(t,a,i){"use strict";var s={render:function(){var t=this.$createElement,a=this._self._c||t;return a("view",[a("page-head",{attrs:{title:this.title,mpcomid:"2e2-0"}}),this._m(0)],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("view",{staticClass:"page-body"},[a("view",{staticClass:"page-body-wrapper"},[a("canvas",{staticClass:"canvas",attrs:{"canvas-id":"canvas"}})])])}]};a.a=s}},[253]);