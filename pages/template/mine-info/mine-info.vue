<template>
	<view class="info">
		<view class="one">
			<view class="one-left">头像</view>
			<view class="one-right">
				<image src="../../../static/mine-tuoxiang.png" class="portrait"></image>
				<image src="../../../static/gd@2x.png" class="one-img1"></image>
			</view>
		</view>
		<view class="content">
			<view class="two" @click="goDetail()">
				<view class="t-content">完善信息</view>
				<image src="../../../static/gd@2x.png" class="t-img1"></image>
			</view>
			<view class="two">
				<view class="t-content">邮寄地址</view>
				<image src="../../../static/gd@2x.png" class="t-img1"></image>
			</view>
			<view class="two">
				<view class="t-content">设置密码</view>
				<view class="two-box">
					<view class="box-content">设置</view>
					<image src="../../../static/gd@2x.png" class="t-img1"></image>
				</view>
			</view>
			<view class="two">
				<view class="t-content">手机号码</view>
				<view class="two-box">
					<view class="box-content">手机号码</view>
					<image src="../../../static/gd@2x.png" class="t-img1"></image>
				</view>
			</view>
			<view class="two two1">
				<view class="t-content">账号绑定</view>
				<view class="two-box">
					<view class="box-content">微信/QQ</view>
					<image src="../../../static/gd@2x.png" class="t-img1"></image>
				</view>
			</view>

		</view>
		<view class="three">
			<button class="btn">提交</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		},
		methods:{
			goDetail(){
				uni.navigateTo({
					url: '/pages/template/complete-info/complete-info'
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

	.info:after {
		content: "";
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #FFFFFF;
		z-index: -1;
	}

	.one {
		height: 150upx;
		background: rgba(215, 227, 238, .3);
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 38upx;
		padding-right: 68upx;
	}

	.one-left {
		font-size: 34upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.one-right {
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.portrait {
		width: 110upx;
		height: 110upx;
		border-radius: 50%;
		margin-right: 40upx;
	}

	.one-img1 {
		width: 14upx;
		height: 24upx;
	}

	.content {
		padding-left: 36upx;
		background-color: #ffffff;
	}

	.two {

		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		background-color: #ffffff;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
		padding-right: 34upx;
	}

	.t-content {
		font-size: 32upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.two1 {
		border-bottom: 0;
	}

	.t-img1 {
		width: 14upx;
		height: 24upx;
	}

	.two-box {
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.box-content {
		font-size: 32upx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		margin-right: 35upx;
	}

	.three {
		width: 100%;
		text-align: center;
	}

	.btn {
		margin-top: 135upx;
		width: 500upx;
		height: 88upx;
		line-height: 88upx;
		text-align: center;
		background: rgba(7, 100, 233, 1);
		border-radius: 6upx;
		font-size: 36upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		/* margin-bottom: 237upx; */
	}
</style>
