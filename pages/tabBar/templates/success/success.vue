<template>
	<view>
		<view class="s1">
			<view class="s2 s3">
				订单支付成功
			</view>

			<view class="s2 s4">
				<navigator url="../shopping/shopping">
					<button>继续购买</button>
				</navigator>
			</view>


			<view class="s2 s5">
				<navigator url="../../../template/order-list/order-list">
					<button>查看订单</button>
				</navigator>
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {

			};
		}
	}
</script>

<style>
	.s1 {
		display: flex;
		justify-content: center;
		flex-direction: column;
		height: 100%;
		background-color: #fff;
	}

	.s1>.s2 {
		display: flex;
		justify-content: center;
	}

	.s1>.s3 {
		padding-top: 165upx;
		color: #353535;
		font-size: 56upx;
		font-weight: bold;
		padding-bottom: 234upx;
	}

	.s1>.s4 button {
		border-radius: 1px solid #B5B5B5;
		width: 600upx;
		height: 90upx;
		background-color: #fff;
		font-size: 36upx;
		color: #333333;
		margin-bottom: 50upx;
	}

	.s1>.s5 button {
		background-color: #0B74EA;
		width: 600upx;
		height: 90upx;
		color: #fff;
		font-size: 36upx;
		margin-bottom: 520upx;
	}
</style>
