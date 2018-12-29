<template>
	<view class="mine">
		<view class="mine-top" @click="goDetail()">
			<view class="top-left">
				<image src="../../../static/mine-tuoxiang.png" class="one-img1"></image>
				<view class="one-content">
					<view class="t1">会飞的鱼</view>
					<view class="t2">蓝卡会员</view>
				</view>
			</view>
			<image src="../../../static/gd@2x.png" class="one-img2"></image>
		</view>
		<view class="mine-two">
			<view class="two-content">
				<view class="c-text1">100.0</view>
				<view class="c-text3">余额</view>
			</view>
			<view class="two-content">
				<view class="c-text2">2</view>
				<view class="c-text3">卡券</view>
			</view>
			<view class="two-content">
				<view class="c-text2">146</view>
				<view class="c-text3">积分</view>
			</view>
		</view>
		<view class="mine-three">
			<view class="three-list" @click="goOrderList()">
				<view class="list-left">
					<image src="../../../static/wddd@2x.png" class="left-img1"></image>
					<view class="left-c">我的订单</view>
				</view>
				<image src="../../../static/gd@2x.png" class="list-right"></image>
			</view>
			<view class="three-list" @click="goShopCar">
				<view class="list-left">
					<image src="../../../static/gwc@2x.png" class="left-img1"></image>
					<view class="left-c">购物车</view>
				</view>
				<image src="../../../static/gd@2x.png" class="list-right"></image>
			</view>
			<view class="three-list">
				<view class="list-left">
					<image src="../../../static/dzfp@2x.png" class="left-img1"></image>
					<view class="left-c">电子发票</view>
				</view>
				<image src="../../../static/gd@2x.png" class="list-right"></image>
			</view>
		</view>
		<view class="mine-three">
			<view class="three-list">
				<view class="list-left">
					<image src="../../../static/dygn@2x.png" class="left-img1"></image>
					<view class="left-c">导游功能</view>
				</view>
				<image src="../../../static/gd@2x.png" class="list-right"></image>
			</view>
			<view class="three-list">
				<view class="list-left">
					<image src="../../../static/qmyx@2x.png" class="left-img1"></image>
					<view class="left-c">全民营销</view>
				</view>
				<image src="../../../static/gd@2x.png" class="list-right"></image>
			</view>
			<view class="three-list" @click="feedBack">
				<view class="list-left">
					<image src="../../../static/fk@2x.png" class="left-img1"></image>
					<view class="left-c">反馈</view>
				</view>
				<image src="../../../static/gd@2x.png" class="list-right"></image>
			</view>
			
		</view>
		<!-- <view class="mine-four">
			<view class="four-c c1">联系我们</view>
			<view class="four-c c2">027-131469342</view>
		</view> -->
	</view>
</template>
<script>
	export default {
		data() {
			return {

			}
		},
		methods: {
			goDetail(){
				uni.navigateTo({
					url:'/pages/template/mine-info/mine-info'
				});
			},
			goShopCar(){
				uni.navigateTo({
				   url:'../../shoppingCart/shoppingCart'
				});
			},
			feedBack(){
				uni.navigateTo({
					url: '../../feedback/feedback'
				});
			},
			feedBackRecord(){
				uni.navigateTo({
					url: '../../feedbackrecord/feedbackrecord'
				});
			},
			goOrderList(){
				uni.navigateTo({
					url: '/pages/template/order-list/order-list'
				});
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	* {
		box-sizing: border-box;
	}

	.mine:after {
		content: "";
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #FFFFFF;
		z-index: -1;
	}

	.mine-top {
		height: 230upx;
		background: rgba(215, 227, 238, .3);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.top-left {
		display: flex;
		justify-content: flex-start;
	}

	.one-img1 {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-left: 31upx;
		margin-right: 37upx;
	}

	.one-content {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.one-content .t1 {
		height: 32upx;
		line-height: 32upx;
		font-size: 34upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.one-content .t2 {
		width: 120upx;
		height: 34upx;
		line-height: 34upx;
		text-align: center;
		background: rgba(15, 129, 234, 1);
		box-shadow: 2upx 2upx 8upx 1upx rgba(1, 39, 67, 0.14);
		border-radius: 4upx;
		font-size: 22upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.one-img2 {
		width: 14upx;
		height: 24upx;
		margin-right: 68upx;
	}

	.mine-two {
		display: flex;
		height: 172upx;
		background: #ffffff;
	}
	.mine-two .two-content:nth-of-type(3){
		border-right:0;
	}
	.two-content {
		flex: 1;
		text-align: center;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		margin: 40upx 0;
		border-right: 1px solid rgba(237,237,237,1);
	}
	.c-text1 {
		font-size: 46upx;
		height: 35upx;
		line-height: 35upx;
		font-weight: bold;
		color: rgba(234, 20, 20, 1);
	}

	.c-text2 {
		font-size: 46upx;
		height: 35upx;
		line-height: 35upx;
		font-weight: bold;
		color: rgba(15, 129, 234, 1);
	}

	.c-text3 {
		font-size: 30upx;
		height: 28upx;
		line-height: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.mine-three {
		background-color: #ffffff;
		padding-left: 30upx;
		margin-top: 20upx;
	}
	.mine-three .three-list:nth-of-type(3){
		border-bottom: 0;
	}
	.three-list {
		height: 98upx;
		line-height: 98px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-bottom: 1px solid rgba(240, 240, 240, 1);
	}

	.list-left {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.left-img1 {
		width: 36upx;
		height: 36upx;
		line-height: 36px;
		margin-right: 26upx;
	}

	.list-left .left-c {
		font-size: 32upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.list-right {
		width: 14upx;
		height: 24upx;
		margin-right: 35upx;
	}

	.mine-four {
		height: 120upx;
		text-align: center;
	}
	.four-c{
		height:18upx;
		line-height: 18upx;
		font-size: 18upx;
		font-weight: 500;
		color: rgba(102, 102, 102, .6);
	}
	.c1{
		margin-top: 28upx;
	}
	.c2{
		margin-top: 10upx;
	}
</style>
