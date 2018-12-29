<template>
	<view>
		<!-- <view class="header">{{title}}</view> -->
		<view class="top">
			<image src="../../../static/zhong.png" class="top1"></image>
			<view class="inp">
				<image class="search" src="../../../static/search.png" mode=""></image>
				<input type="text" placeholder="搜索游玩项目" class="inp1" placeholder-style="color:#fff">
			</view>
			<image src="../../../static/xinxi.png" class="top2"></image>
		</view>
		<banner :itemList="itemList"></banner>
		<introduce :title="title" @gothemePark="gothemePark" @personal="personal" @animal="animal" @holtel="holtel" @traffic="traffic"
		 @oceanPark="oceanPark"></introduce>
	</view>
</template>
<script>
	import banner from '../../../components/banner.vue'
	import introduce from '../../../components/introduce.vue'

	export default {
		components: {
			banner,
			introduce
		},
		data() {
			return {
				itemList: [
					'../../../static/banner.png',
					'../../../static/banner2.png',
					'../../../static/banner3.png'
				],
				title: '主题乐园',

			}
		},
		props: {
			/*itemList:{
				type: Array,
				default: []
			},*/
			/*title:{
				type: String,
				default: ""
			}*/
		},
		methods: {
			changeIndicatorDots: function(e) {
				this.indicatorDots = !this.indicatorDots
			},
			changeAutoplay: function(e) {
				this.autoplay = !this.autoplay
			},
			intervalChange: function(e) {
				this.interval = e.detail.value
			},
			durationChange: function(e) {
				this.duration = e.detail.value
			},
			gothemePark() {
				uni.navigateTo({
					url: '../../themePark/themePark'
				})
			},
			personal() {
				uni.navigateTo({
					url: '../../personal/personal'
				})
			},
			animal(data) {
				uni.navigateTo({
					url: '../../animal/animal'
				})
			},
			holtel() {
				uni.navigateTo({
					url: '../../holtel/holtel'
				})
			},
			traffic() {
				uni.navigateTo({
					url: '../../trafficGuide/trafficGuide'
				})
			},
			oceanPark() {
				uni.navigateTo({
					url: '../../oceanParkDetail/oceanParkDetail'
				})
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}


	.header {
		text-align: center;
		font-size: 36upx;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}

	.top {
		display: flex;
		justify-content: center;
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;

		margin-top: 22upx;
	}

	.top>.top1 {
		width: 56upx;
		height: 56upx;
		z-index: 99;
	}

	.top>.top2 {
		width: 56upx;
		height: 56upx;
		z-index: 99;
	}

	.top>.inp {
		z-index: 99;
		margin: 0 20upx;
		position: relative;
	}

	.top>.inp>input {
		width: 548upx;
		height: 60upx;
		box-sizing: border-box;
		padding-left: 74upx;
		border: 1upx solid #DADADA;
		border-radius: 30upx;
		z-index: 99;
		background: rgba(218, 218, 218, 1);
		opacity: 0.29;

	}

	.search {
		width: 36upx;
		height: 36upx;
		position: absolute;
		top: 13upx;
		left: 21upx;
	}
</style>
