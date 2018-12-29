<template>
	<view>
		<view class="header">
			<view class="header-left" @click="goBack">
				<image src="http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg" mode=""></image>
			</view>
			<view class="header-right">
				<view class="shoppingCar" >
					<image src="http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg" mode=""></image>
				</view>
				<view class="feedBackRecord" >
					反馈记录
				</view>
			</view>
			<view class="header-center">{{title}}</view>
		
		</view>

	</view>
</template>

<script>
	export default {
		data() {
			return {
               image:'../static/buyYes.png'
			};
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			isCar: {
				type: Boolean,
				default: true
			}
		},
		methods: {
			//返回
			goBack() {
				uni.navigateBack({
					data: 1
				})
			},
		}
	}
</script>

<style>
	.header {
		width: 100%;
		position: fixed;
		top: 0;
		left: 0;
		height: 88upx;
		background: #fff;
		padding: 0 30upx;
		box-sizing: border-box;
		
	}
	.header view{
		line-height: 88upx;
	}

	.header {
		zoom: 1;
	}

	/*==for IE6/7 Maxthon2==*/
	.header :after {
		clear: both;
		content: '.';
		display: block;
		width: 0;
		height: 0;
		visibility: hidden;
	}

	.header-left,
	.header-right {
		width: 120upx;
		height: 88upx;
	}

	.header-left {
		float: left;
	}

	.header-right {
		float: right;
	}

	.header-center {
		margin: 0 120upx;
		text-align: center;
	}

	.header-left image {
		width: 20upx;
		height: 35upx;
	}
</style>
