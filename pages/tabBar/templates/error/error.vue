<template>
	<view>
		<view class="er1">
			<view class="er2 er5">创建失败</view>
			<view class="er3 er5">失败原因：网络繁忙订单提交失败</view>
			<view class="er4 er5">
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
.er1{
	display: flex;
	justify-content: center;
	flex-direction: column;
	padding-top: 152upx;
}
.er1>.er5{
	display: flex;
	justify-content: center;
}
.er1>.er2{
	color:#353535;
	font-size: 72upx;
	font-weight: bold;
	margin-bottom: 62upx;
}
.er1>.er3{
	color:#999999;
	font-size:26upx;
	margin-bottom: 286upx;
}
.er1>.er4 button{
	width: 600upx;
	height: 90upx;
	background-color: #0B74EA;
	color:#fff;
	font-size: 36upx;
}
</style>
