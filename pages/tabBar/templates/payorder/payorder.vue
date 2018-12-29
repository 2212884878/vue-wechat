<template>
	<view>
		<view class="o1">
			<view class="o2 o3">
				订单创建成功
			</view>
			<view class="o2 o4">
				订单号：<span>15444589547451</span>
			</view>
			<view class="o2 o5">
				￥7.10
			</view>
			<view class="o2 o6">
				<span class="o61">剩余支付时间</span>
				 <!-- <span class="o62">12:36</span> -->
				 <!-- <view class="uni-text-small uni-center title">示例1</view> -->
				 <view>
				 	<uni-countdown :timer="timer1"></uni-countdown>
				 </view>
			</view>
			<view class="o2 o7">请在30分钟内完成支付，如未完成订单自动关闭</view>

			<view class="o2 o8">
				<navigator url="../success/success">
					<button>确认支付</button>
				</navigator>

			</view>
			<navigator url="../error/error">
				<view>
				支付失败页面
			</view>
			</navigator>
			

		</view>

	</view>
</template>

<script>
	import uniCountdown from "../../../../components/uni-countdown.vue";
	export default {
		data() {
			var dateObj = new Date();
			var currentTime = dateObj.getTime();
			var timer1 = this.formatDateTime((currentTime + 1000 * 2000));
			return {
				timer1: timer1,
			};
		},
		components: {
			uniCountdown
		},
		methods: {
			formatDateTime(inputTime) { //时间戳 转 YY-mm-dd HH:ii:ss 
				var date = new Date(inputTime);
				var y = date.getFullYear();
				var m = date.getMonth() + 1;
				m = m < 10 ? ('0' + m) : m;
				var d = date.getDate();
				d = d < 10 ? ('0' + d) : d;
				var h = date.getHours();
				h = h < 10 ? ('0' + h) : h;
				var minute = date.getMinutes();
				var second = date.getSeconds();
				minute = minute < 10 ? ('0' + minute) : minute;
				second = second < 10 ? ('0' + second) : second;
				return y + '-' + m + '-' + d + ' ' + h + ':' + minute + ':' + second;
			}
		},
	}
</script>

<style>
	.o1 {
		display: flex;
		justify-content: center;
		flex-direction: column;
		padding-top: 82upx;
		background-color: #fff;
		height: 100%;
	}

	.o1>.o2 {
		display: flex;
		justify-content: center;
	}

	.o1>.o3 {
		color: #333333;
		font-size: 32upx;
		font-weight: bold;
		padding-bottom: 34upx;
	}

	.o1>.o4 {
		color: #999999;
		font-size: 24upx;
		margin-bottom: 75upx;
	}

	.o1>.o5 {
		color: #353535;
		font-size: 80upx;
		font-weight: bold;
		margin-bottom: 47upx;
	}

	.o1>.o6 {
		color: #999999;
		font-size: 24upx;
		margin-bottom: 171upx;
	}

	.o1>.o6>.o62 {
		font-size: 30upx;
		color: #0B74EA;
	}

	.o1>.o6>.o61 {
		margin-top: 7upx;
		margin-right: 9upx;
	}

	.o1>.o7 {
		color: #999999;
		font-size: 24upx;
		margin-bottom: 25upx;
	}

	.o1>.o8 button {
		width: 600upx;
		height: 90upx;
		background-color: #0B74EA;
		color: #fff;
		margin-bottom: 389upx;
	}
</style>
