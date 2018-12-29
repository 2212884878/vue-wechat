<template>
	<view>
		<swiper3 :itemList="itemList" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
		<view class="content">
			<view class="title">
				摩天轮
			</view>
			<text class="detail">注意事项:未成年在家长陪同下游玩
				科普教育为主题的风格，加入了更多的生活元素。生动刻画了盗砍盗伐、破坏生态、狡猾的光头强和持之以恒机智勇敢、保护家园的狗熊兄弟团结互助的小动物们。</text>

			<!-- <view class="showTime">
				表演时间：<text>待定</text>
			</view> -->
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

	.showTime {
		font-size: 28upx;
		color: #333333;
		font-weight: bold;
	}

	.showTime text {
		font-weight: normal;
	}
</style>
