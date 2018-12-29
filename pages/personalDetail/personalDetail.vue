<template>
	<view>
		<swiper3 :itemList="itemList" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
		<view class="content">
			<view class="title">
				VIP通道
			</view>
			<text class="detail">快速直达心中所想，畅玩海洋公园</text>
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
				itemList: [
					{
					  url: '../../static/501040204@3x.png'
				    },
					{
					  url: '../../static/5005549134_banner@3x.png'
					},
				],
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
