<template>
	<view class="main">
		<view class="content">
			<view class="p">
				<label for="" class="leb">姓名：</label>
				<input type="text" value="" class="inp"/>
			</view>
			<view class="p">
				<label for="" class="leb">手机号：</label>
				<input type="text" value="" class="inp"/>
			</view>
			<view class="p">
				<label for="" class="leb">身份证号：</label>
				<input type="text" value="" class="inp" />
			</view>
			<view class="p p1">
				<label for="" class="leb">邮箱：</label>
				<input type="text" value="" class="inp" />
			</view>
		</view>
		<view class="three">
			<button class="btn">退出登录</button>
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
	.content{
		padding-left: 36upx;
		background-color: #FFFFFF;
		border-top:1px solid rgba(232,232,232,1);
	}
	.p{
		height: 100upx;
		line-height: 100upx;
		display: flex;
		justify-content: space-between;
		align-self: center;
		border-bottom:1px solid rgba(232,232,232,1);
	}
	.p1{
		border-bottom: 0;
	}
	.p .leb{
		display: inline-block;
		width: 20%;
		text-align: right;
	}
	.p .inp{
		height: 100%;
		width: 80%;
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
