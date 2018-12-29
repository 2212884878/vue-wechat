<template>
	<view>
		<swiper3 :itemList="itemList" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
		<view class="content">
			<view class="title">
				凯悦酒店
			</view>
			<text class="detail">奇思妙想的酒店，不仅可以推窗看海，还可以感受来自海洋欢乐世界的奇幻主题</text>
		</view>
	</view>
</template>

<script>
	import swiper3 from '../../components/swiper3.vue' //轮播图组件
	export default {
		components: {
			swiper3
		},
		data() {
			return {
				itemList: [{
					url: '../../static/jddt@3x.png'
				}],
			};
		}
	}
</script>

<style>
	.content {
		background: #FFFFFF;
		padding: 30upx;
	}

	.title {
		font-size: 36upx;
		color: #333333;
		font-weight: bold;
		font-family: PingFang-SC-Medium;
	}

	.detail {
		font-size: 28upx;
		line-height: 42upx;
		color: #333333;
	}
</style>
