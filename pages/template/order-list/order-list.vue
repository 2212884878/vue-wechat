<template>
	<view class="main">
		<view class="one">
			<view class="li" :class="{li1:index === 0}" @click="chooseType(0)">全部</view>
			<view class="li" :class="{li1:index === 1}" @click="chooseType(1)">待支付</view>
			<view class="li" :class="{li1:index === 2}" @click="chooseType(2)">处理中</view>
			<view class="li" :class="{li1:index === 3}" @click="chooseType(3)">下单成功</view>
			<view class="li" :class="{li1:index === 4}" @click="chooseType(4)">退款</view>
		</view>
		<view class="content">
			<view class="list" @click="goDetail(typeList[0].type)">
				<view class="top">
					<view class="top-left">
						<view>
							<view class="left-one l-o">订单编号：{{orderNo}}</view>
							<view class="left-one">创建时间：{{time}}</view>
						</view>
						<view class="left-two">
							<view>订单金额：￥336</view>
							<view>优惠金额：￥0.00</view>
						</view>
					</view>
					<view class="top-right">
						<view class="payType">待支付</view>
						<image src="../../../static/gd@2x.png" class="img1"></image>
					</view>
				</view>
				<view class="bottom">
					<view>实付金额：<span class="span">￥336.00</span></view>
					<view class="bottom-btn">
						<button class="btn1" v-show="typeList[0].type === 0">取消订单</button>
						<button class="btn2" v-show="typeList[0].type === 0">去支付</button>
						<button class="btn1" v-show="typeList[0].type === 1">申请退款</button>
						<button class="btn2" v-show="typeList[0].type === 1">获取核销码</button>
						<button class="btn2" v-show="typeList[0].type === 2">申请退款</button>
					</view>
				</view>
			</view>
			<view class="list" @click="goDetail(typeList[1].type)">
				<view class="top">
					<view class="top-left">
						<view>
							<view class="left-one l-o">订单编号：{{orderNo}}</view>
							<view class="left-one">创建时间：{{time}}</view>
						</view>
						<view class="left-two">
							<view>订单金额：￥336</view>
							<view>优惠金额：￥0.00</view>
						</view>
					</view>
					<view class="top-right">
						<view class="payType">处理中</view>
						<image src="../../../static/gd@2x.png" class="img1"></image>
					</view>
				</view>
				<view class="bottom">
					<view>实付金额：<span class="span">￥336.00</span></view>
					<view class="bottom-btn">
						<button class="btn1" v-show="typeList[1].type === 0">取消订单</button>
						<button class="btn2" v-show="typeList[1].type === 0">去支付</button>
						<button class="btn1" v-show="typeList[1].type === 1">申请退款</button>
						<button class="btn2" v-show="typeList[1].type === 1">获取核销码</button>
						<button class="btn2" v-show="typeList[1].type === 2">申请退款</button>
					</view>
				</view>
			</view>
			<view class="list" @click="goDetail(typeList[2].type)">
				<view class="top">
					<view class="top-left">
						<view>
							<view class="left-one l-o">订单编号：{{orderNo}}</view>
							<view class="left-one">创建时间：{{time}}</view>
						</view>
						<view class="left-two">
							<view>订单金额：￥336</view>
							<view>优惠金额：￥0.00</view>
						</view>
					</view>
					<view class="top-right">
						<view class="payType">下单成功</view>
						<image src="../../../static/gd@2x.png" class="img1"></image>
					</view>
				</view>
				<view class="bottom">
					<view>实付金额：<span class="span">￥336.00</span></view>
					<view class="bottom-btn">
						<button class="btn1" v-show="typeList[2].type === 0">取消订单</button>
						<button class="btn2" v-show="typeList[2].type === 0">去支付</button>
						<button class="btn1" v-show="typeList[2].type === 1">申请退款</button>
						<button class="btn2" v-show="typeList[2].type === 1">获取核销码</button>
						<button class="btn2" v-show="typeList[2].type === 2">申请退款</button>
					</view>
				</view>
			</view>
			<view class="list" @click="goDetail(typeList[3].type)">
				<view class="top">
					<view class="top-left">
						<view>
							<view class="left-one l-o">订单编号：{{orderNo}}</view>
							<view class="left-one">创建时间：{{time}}</view>
						</view>
						<view class="left-two">
							<view>订单金额：￥336</view>
							<view>优惠金额：￥0.00</view>
						</view>
					</view>
					<view class="top-right">
						<view class="payType">退款</view>
						<image src="../../../static/gd@2x.png" class="img1"></image>
					</view>
				</view>
				<view class="bottom">
					<view>实付金额：<span class="span">￥336.00</span></view>
					<view class="bottom-btn">
						<button class="btn1" v-show="typeList[3].type === 0">取消订单</button>
						<button class="btn2" v-show="typeList[3].type === 0">去支付</button>
						<button class="btn1" v-show="typeList[3].type === 1">申请退款</button>
						<button class="btn2" v-show="typeList[3].type === 1">获取核销码</button>
						<button class="btn2" v-show="typeList[3].type === 2">申请退款</button>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				index: 0,
				type: 0,
				orderNo: "12535964116242",
				time: "2018.12.16 16:24",
				typeList:[{type:0},{type:1},{type:2},{type:3}]
			};
		},
		methods: {
			chooseType(index) {
				this.index = index;
			},
			goDetail(type){
				uni.navigateTo({
					url: '/pages/template/order-detail/order-detail?type='+type
				});
			},
		},
		onload(){
			console.log(this.typeList[3].type)
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

	.main {}

	.one {
		display: flex;
		justify-content: space-around;
		align-items: center;
		height: 88upx;
		background-color: #ffffff;
		border-top: 1px solid rgba(244, 244, 244, 1);
	}

	.li {
		font-size: 30upx;
		font-weight: bold;
		color: rgba(102, 102, 102, 1);
	}

	.li1 {
		color: rgba(11, 116, 234, 1);
		border-bottom: 2px solid rgba(7, 104, 233, 1);
	}
	.content{
		padding-bottom: 20upx;
	}
	.list {
		height: 320upx;
		background: rgba(255, 255, 255, 1);
		margin-top: 20upx;
	}

	.top {
		display: flex;
		justify-content: space-between;
		padding-left: 36upx;
		height: 214upx;
		padding-top: 25upx;
		padding-bottom: 35upx;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
	}

	.top .top-left {
		font-size: 28px;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.top .left-one {
		height: 26upx;
		line-height: 26upx;
	}

	.top .l-o {
		margin-bottom: 20upx;
	}

	.top .left-two {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		align-self: flex-end;
	}

	.top-right .payType {
		font-size: 26upx;
		font-weight: 500;
		color: rgba(11, 116, 234, 1);
		padding-right: 31upx;
	}

	.top-right .img1 {
		width: 20upx;
		height: 35upx;
		margin-right: 73upx;
		margin-top: 52upx;
	}

	.btn2 {
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		border-radius: 3px;
		background-color: rgba(11, 116, 234, 1);
		font-size: 28upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		margin-right: 31upx;
	}

	.btn1 {
		height: 60upx;
		line-height: 60upx;
		text-align: center;
		/* padding: 17upx; */
		border-radius: 3px;
		border: 1upx solid rgba(149, 149, 149, 1);
		font-size: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-right: 20upx;
	}

	.bottom {
		height: 105upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-left: 36upx;
	}

	.bottom-btn {
		display: flex;
	}

	.span {
		color: rgba(243, 86, 51, 1);
	}
</style>
