<template>
	<view class="main">
		<image src="../../../static/banner@2x.png" mode="" class="img"></image>
		<view class="box">
			<view class="title">魔幻万圣节</view>
			<view class="time">发布时间：2018-11-12</view>
			<view class="content">又是一年十月来临，潮人玩水家们期盼了一年之久的Halloween再次奇幻来袭！在这个由热转凉的玩水季里，长隆水上乐园进入“终极玩水模式”。据悉，10月11日至11月4日期间，园区将推出“温水热浪万圣电音秀”！广州城内的潮男潮女们，将得到在水上乐园白天玩水、晚上玩鬼的机会，体验“玩水”+“万圣”+“电音”的奇幻REMIX！特别需要提出的是，长隆水上乐园具有先进全面的温水系统，全园滑道设备提供30-33℃温水、热水按摩池提供38-40℃热水。</view>
		</view>
		<button class="btn" :class="{btnActive:isActive}" @click="apply(1)">{{btnTitle}}</button>
		<view class="meng" v-if="step === 1">
			<view class="m-box" >
				<view class="title1">活动报名</view>
				<form>
					<view class="p"><label for="" class="lab">姓名：</label><input type="text" class="inp"></view>
					<view class="p"><label for="" class="lab">联系电话：</label><input type="text" value="" class="inp" /></view>
					<view class="p"><label for="" class="lab">活动人数：</label><input type="text" value="" class="inp" /></view>
				</form>
				<view class="btn-box"><button class="btn2" @click="apply(2)">立即报名</button></view>
			</view>
		</view>
		<view class="meng" v-else-if="step === 2">
			<view class="m-box1">
				<image src="../../../static/baoming.png" mode="" class="tijiao"></image>
				<view class="box1-title">报名审核中</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				btnTitle:"立即报名",
				isActive:false,
				step:0,
			};
		},
		methods:{
			apply(step){
				this.step = step;
			}
		}
	}
</script>

<style>
	page {
		height: auto;
		background-color: #ffffff;
		min-height: 100%;
	}

	* {
		box-sizing: border-box;
	}

	.main:after {
		content: "";
		position: fixed;
		width: 100%;
		height: 100%;
		top: 0;
		left: 0;
		background: #FFFFFF;
		z-index: -1;
	}

	.img {
		width: 100%;
		height: 400upx;
	}

	.box {
		padding: 0 30upx;
		padding-bottom: 150upx;
	}

	.title {
		font-size: 36upx;
		font-weight: 800;
		color: rgba(51, 51, 51, 1);
	}

	.time {
		font-size: 26upx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.content {
		font-size: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-top: 50upx;
		text-indent: 40upx;
	}

	.btn {
		width: 100%;
		height: 100upx;
		line-height: 100upx;
		background: rgba(7, 100, 233, 1);
		font-size: 32upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		border-radius: 0;
		position: fixed;
		bottom: 0;
	}
	.btnActive{
		background:rgba(7,100,233,.6);
	}
	.meng {
		position: fixed;
		top: 0;
		width: 100%;
		left: 0;
		height: 100%;
		background-color: rgba(0, 0, 0, .6);
		z-index: 99;
		display: flex;
		justify-content: center;
		align-items: center;
	}

	.m-box {
		width: 690upx;
		height: 660upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
	}

	.title1 {
		font-size: 32upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		width: 100%;
		text-align: center;
		margin-top: 50upx;
		margin-bottom: 48upx;
	}

	.p {
		font-size: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		display: flex;
		justify-content: flex-start;
		align-items: center;
		margin-left: 54upx;
		margin-right: 38upx;
		margin-top: 20upx;
	}

	.lab {
		width: 30%;
		text-align: right;
	}

	.inp {
		width: 70%;
		text-indent: 20upx;
		height: 68upx;
		border: 1px solid rgba(232, 232, 232, 1);
	}

	.inp div {
		width: 100%;
		height: 100%;
	}

	.inp div input {
		width: 100%;
		height: 100%;
		text-indent: 20upx;
	}

	.btn2 {
		margin-top: 90upx;
		width: 480upx;
		height: 80upx;
		line-height: 80upx;
		background: rgba(7, 100, 233, 1);
		border-radius: 10upx;
		font-size: 32upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}

	.m-box1 {
		width: 520upx;
		height: 376upx;
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		align-items: center;
		padding: 40upx 0;
	}

	.tijiao {
		width: 120upx;
		height: 120upx;
		border-radius: 50%;
	}

	.box1-title {
		font-size: 32upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}
</style>
