<template>
	<view>
		<swiper3 :itemList="itemList" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
		<view class="content">
			<view class="title">
				海豚表演
			</view>
			<text class="detail">一场守护海洋宝藏的壮丽表演秀，聪明的海洋精灵与世代生活在海边的渔民共同抗击全副武装的海盗，四千名观众共同见证。</text>
			
			<view class="showTime">
				表演时间：<text>待定</text>
			</view>
		</view>
	</view>
</template>

<script>
	import swiper3 from '../../components/swiper3.vue' //轮播图组件
	export default {
		components:{
			swiper3
		},
		data() {
			return {
				itemList: [
					{
					   url: '../../static/animal/130841_banner@3x.png'
				    },
					{
					   url: '../../static/animal/500879056_banner@3x.png'
					},
					{
					   url: '../../static/animal/501044343_banner@3x.png'
					},
					{
					   url: '../../static/animal/5010625336_banner@3x.png'
					},
				],
			};
		}
	}
</script>

<style>
.content{
	background: #FFFFFF;
	padding: 30upx;
}
.title{
	font-size: 36upx;
	color: #333333;
	font-weight: bold;
	font-family: PingFang-SC-Medium;
}
.detail{
	font-size: 28upx;
	line-height: 42upx;
	color: #333333;
}
.showTime{
	font-size: 28upx;
	color: #333333;
	font-weight: bold;
}
.showTime text{
		font-weight: normal;
}
</style>
