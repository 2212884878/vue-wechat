<template>
	<view class="main">
		<view class="nav">
			<view class="nav-left">待支付</view>
			<view class="nav-right">
				<view>￥680.00</view>
				<image src="../../../static/rr.png" class="img1" @click="showPayDetail()" v-show="!mengShow"></image>
				<image src="../../../static/rr.png" class="img1" @click="showPayDetail()" v-show="mengShow"></image>
			</view>
			<view class="pay-detail" v-show="mengShow">
				<view class="m">
					<view class="m-one">价格明细</view>
					<view class="m-two">
						<view class="meng-top">
							<view>成人全日票</view>
							<view>￥200×2</view>
						</view>
						<view class="meng-bottom">
							<view>儿童全日票</view>
							<view>儿童全日票</view>
						</view>
					</view>
					<view class="m-two">
						<view class="meng-top">
							<view>订单总金额</view>
							<view>￥680.00</view>
						</view>
						<view class="meng-bottom">
							<view>优惠总金额</view>
							<view><span class="m-span">-￥680.00</span></view>
						</view>
					</view>
					<view class="m-three">
						<view class="totle">支付总金额：<span class="m-span1">￥680.00</span></view>
						<view class="totle">（退款总金额：<span class="m-span2">￥680.00</span>)</view>
					</view>
				</view>
			</view>
		</view>
		<view class="one">
			<view>订单号码：12535964116242</view>
			<view>创建时间：2018.12.16 16:24</view>
			<view>预订方式：官网预订</view>
		</view>
		<view class="list">
			<view class="two">
				<view class="two-top">
					<view>订单编号：4002856</view>
					<view>{{typePay}}</view>
				</view>
				<view class="two-bottom">
					<view class="bottom-left">
						<view class="t-name">成人全日票</view>
						<view v-if="type == 0 || type == 1 || type == 3">单价：￥160</view>
						<view v-else>￥160x2</view>
						<view>游玩时间：2018.12.11 08:30-16:30</view>
						<view class="hexiao" v-if="type == 2 || type == 3"><span>核销码：</span><span class="t-span">www.hexiaomaasd.215254snhuyiersc///asvliynddh</span></view>
					</view>
					<view class="bottom-right">
						<view>数量：×2</view>
						<view v-show="false">小计金额：<span class="b-span">￥320</span></view>
						<button class="btn3" v-if="type == 1 || type == 2">申请退款</button>
					</view>
				</view>
			</view>
			<view class="three" v-if="type == 3 || type == 1 || type == 2">
				<view class="you-info">
					<view class="title">游玩人信息</view>
					<view class="info-list">
						<view class="info">
							<view class="info-one">游客姓名：</view>
							<view class="info-two">李莉莉</view>
						</view>
						<view class="info">
							<view class="info-one">手机号：</view>
							<view class="info-two">15927465454</view>
						</view>
						<view class="info">
							<view class="info-one">身份证：</view>
							<view class="info-two">4130261141879422486</view>
						</view>
					</view>
				</view>
				<view class="you-info" >
					<view class="title">收件信息</view>
					<view class="info-list">
						<view class="info">
							<view class="info-one">游客姓名：</view>
							<view class="info-two">李莉莉</view>
						</view>
						<view class="info">
							<view class="info-one">手机号：</view>
							<view class="info-two">15927465454</view>
						</view>
						<view class="info">
							<view class="info-one">地址：</view>
							<view class="info-two">湖北省武汉市江岸区后湖大道</view>
						</view>
					</view>
				</view>

			</view>
			<view class="four" v-if="type == 1 || type == 2">
				<view>支付时间：2018.12.10 16:57:48</view>
				<view>支付方式：微信支付</view>
				<view>支付流水：www.hexiaomaasd.215254snhu</view>
			</view>
			<view class="five" v-if="type ==3">
				<view class="f-title">退订信息</view>
				<view class="five-content">
					<view>退订产品：成人全日票</view>
					<view>申请时间：2018.12.10 16:57:48</view>
					<view>审核时间：2018.12.10 16:57:48</view>
					<view>退订时间：2018.12.10 16:57:48</view>
				</view>
			</view>
		</view>
		<view class="bom" v-if="type == 0 || type == 1 || type == 2">
			<button class="btn1" v-if="type == 0">取消订单</button>
			<button class="btn1" v-if="type == 1">获取核销码</button>
			<button class="btn2" v-if="type == 0 || type == 1 || type == 2">全单退款</button>	
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				mengShow: false,
				type:0,
				typePay:""
			};
		},
		methods: {
			showPayDetail() {
				this.mengShow = !this.mengShow;
			}
		},
		onLoad(obj){
			this.type = obj.type;
			console.log(this.type)
			if(this.type == 0){
				this.typePay = "待支付"
			}else if(this.type == 1){
				this.typePay = "处理中"
			}else if(this.type == 2){
				this.typePay = "下单成功"
			}else{
				this.typePay = "退款"
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

	.nav {
		display: flex;
		justify-content: space-between;
		align-items: center;
		height: 100upx;
		padding-left: 30upx;
		padding-right: 30upx;
		position: relative;
	}

	.nav-right {
		height: 100%;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}

	.pay-detail {
		position: fixed;
		z-index: 100;
		background-color: rgba(0, 0, 0, .6);
		bottom: 0;
		top: 200upx;
		left: 0;
		right: 0;
	}

	.m {
		padding: 0 36upx;
		background: #ffffff;
	}

	.m-one {
		height: 100upx;
		line-height: 100upx;
		font-size: 32upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		border-bottom: 1px solid rgba(232, 232, 232, 1);
	}

	.m-two {
		/* display: flex;
		justify-content: space-between;
		align-items:center; */
		padding: 40upx 0 50upx 0;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
	}

	.meng-top {
		display: flex;
		justify-content: space-between;
	}

	.meng-bottom {
		margin-top: 38upx;
		display: flex;
		justify-content: space-between;
	}

	.m-span {
		color: rgba(243, 86, 51, 1);
	}

	.m-three {
		height: 150upx;
		display: flex;
		flex-direction: column;
		align-items: flex-end;
		padding-top: 28upx;
	}

	.m-span1 {
		font-size: 32upx;
		color: rgba(243, 86, 51, 1);
	}

	.m-span2 {
		font-size: 24upx;
		color: rgba(243, 86, 51, 1);
	}

	.img1 {
		width: 34upx;
		height: 34upx;
		margin-left: 22upx;
	}

	.one {
		height: 265upx;
		background: rgba(255, 255, 255, 1);
		font-size: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		padding-top: 30upx;
		padding-left: 30upx;
	}

	.two {
		margin: 0 10upx;
		/* height: 286upx; */
		background: rgba(255, 255, 255, 1);
		border-radius: 10upx;
		margin-top: 20upx;
	}

	.two-top {
		margin: 0 20upx;
		height: 85upx;
		border-bottom: 1px solid rgba(232, 232, 232, 1);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.two-bottom {
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 20upx;
		font-size: 26upx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.bottom-left {
		height: 100%;
		display: flex;
		justify-content: space-around;
		flex-direction: column;
	}

	.b-span {
		color: rgba(243, 86, 51, 1);
		word-break: break-all;
	}

	.t-name {
		font-size: 32upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.t-span {
		color: rgba(11, 116, 234, 1);
		word-break: break-all;
		width: 460upx;
	}

	.hexiao {
		width: 460upx;
	}

	.bom {
		height: 100upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0px 3upx 7upx 0px rgba(0, 0, 0, 0.06);
		display: flex;
		align-items: center;
		justify-content: flex-end;
		position: fixed;
		bottom: 0;
		z-index: 99;
		width: 100%;
		background-color: #ffffff;
	}

	.bottom-right {
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}

	.btn1 {
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		border: 1px solid rgba(191, 191, 191, 1);
		border-radius: 6upx;
		font-size: 28upx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
		margin-right: 18upx;
		margin-left: 0;
	}

	.btn2 {
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		background: rgba(11, 116, 234, 1);
		border-radius: 6upx;
		font-size: 28upx;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
		margin-right: 46upx;
		margin-left: 0;
	}

	.btn3 {
		margin-top: 85upx;
		width: 131upx;
		height: 50upx;
		text-align: center;
		line-height: 50upx;
		border: 1upx solid rgba(243, 86, 51, 1);
		font-size: 26upx;
		font-weight: 500;
		color: rgba(243, 86, 51, 1);
		padding: 0;
	}

	.list {
		padding-bottom: 120upx;
	}

	.three {
		margin-top: 20upx;
		padding-left: 32upx;
		background: #ffffff;
		padding-bottom: 56upx;
	}

	.you-info {
		padding-top: 45upx;
	}

	.three .title {
		font-size: 30upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.info {
		display: flex;
		justify-content: flex-start;
		align-items: center;
		font-size: 28upx;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.info-one {
		width: 20%;
		text-align: right;
	}

	.info-two {
		width: 80%;
		color: rgba(51, 51, 51, 1);
	}

	.four {
		display: flex;
		flex-direction: column;
		justify-content: space-around;
		height: 210upx;
		background: rgba(255, 255, 255, 1);
		font-size: 28upx;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		margin-top: 20upx;
		padding: 0 32upx;
	}

	.five {
		margin-top: 20upx;
		background-color: #ffffff;
	}

	.f-title {
		height: 80upx;
		line-height: 80upx;
		font-size: 30upx;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		padding-left: 32upx;
		border-bottom: 1px solid rgba(243, 243, 243, 1);
		;
	}

	.five-content {
		height: 262upx;
		padding: 0 32upx;
		display: flex;
		flex-direction: column;
		justify-content: space-around;
	}
</style>
