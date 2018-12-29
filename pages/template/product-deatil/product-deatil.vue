<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-26
		描述：门票详情页面
	-->
	<view class="product-deatil">
		<view class="banner">
			<image class="banner-img" src="../../../static/animal/1.png"></image>
		</view>
		<view class="bgfff">
			<view class="product-title">成人全日票/成人全日票成人全日票成人全日票</view>
			<view class="pice">
				<view>
					<span class="p1">￥142</span>
					<span class="p2">原价￥180</span>
				</view>
				<view><span class="p3">可退订</span></view>
			</view>
			<view class="time">游玩时间：2018.12.11 08:30-16:30</view>
		</view>
		<view class="h8"></view>
		<view class="product-deatil-box">
			<view class="info1">预订须知</view>
			<view class="info2 mt10">【适用人群】</view>
			<view class="info2 mb44">适用于成人或身高≥1.5米的儿童</view>
			<view class="info2">【有效期】</view>
			<view class="info2">1、2018年11月9日-11月11日期间，购买时指定入园日期当天有效。一次性使用，出园再入园需另外购票；<br>
				2、开放时间：09：00-17:30，开闭园时间仅供参考，根据当日天气状况以景区现场公告为准。<br>
				3、开放时间：09：00-17:30，开闭园时间仅供参考，根据当日天气状况以景区现场公告为准。</view>
		</view>
		<view class="product-footer">
			<button class="but" @click="status = !status,height=432">加入购物车</button>
			<button class="but" type="primary" @click="status = !status,height=432">立即购买</button>
		</view>

		<!-- 弹出层 -->
		<view class="product-bg" v-if="status" @click="status = !status"></view>
		<view class="product-bg-con" v-if="status" :style="{ height: height + 'upx' }">
			<view class="info1">
				<view class="uni-inline-item">
					<text>选择购买数量 : </text>
					<uni-number-box :min="1" :max="1000" :value="numberValue" v-on:change="onNumberChange"></uni-number-box>
				</view>
			</view>
			<view class="product-footer">
				<button class="but" @click="status = !status">取消</button>
				<button class="but" type="primary" @click="comfirom">确定</button>
			</view>
		</view>
	</view>
</template>

<script>
	import uniNumberBox from '../../../components/uni-number-box.vue'
	export default {
		data() {
			return {
				status: false,
				numberValue: 1,
				height:0
			}
		},
		components: {
			uniNumberBox
		},
		onNavigationBarButtonTap(obj) {
			//购物车按钮事情
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '详情'
			})
		},
		methods: {
			onNumberChange(value) {
				this.numberValue = value;
				console.log('购买数量 : ' + value);
			},
			comfirom(){
				this.status = !this.status;
				uni.navigateTo({
					url:"/pages/tabBar/templates/fillorder/fillorder"
				})
			}
			
		},
	}
</script>

<style>
	.product-deatil {
		position: relative;
	}

	.product-deatil .banner {
		width: 750upx;
		height: 400upx;
		overflow: hidden;
		position: relative;
		background-color: #ccc;
	}

	.product-deatil .banner-img {
		width: 100%;
		height: 400upx;
	}

	.bgfff {
		background: #fff;
	}

	.product-title {
		padding-top: 24upx;
		margin-left: 30upx;
		width: 558upx;
		height: 90upx;
		font-size: 32upx;
		line-height: 48upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
	}

	.pice {
		margin-top: 22upx;
		height: 40upx;
		width: 690upx;
		padding: 0 30upx;
		font-size: 0;
		line-height: 0;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.pice .p1 {
		font-size: 42upx;
		line-height: 42upx;
		font-family: PingFang-SC-Heavy;
		font-weight: 800;
		color: rgba(238, 28, 28, 1);
		display: inline-block;
	}

	.pice .p2 {
		font-size: 26upx;
		line-height: 26upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		text-decoration: line-through;
		color: rgba(102, 102, 102, 1);
		margin-left: 28upx;
		display: inline-block;
	}

	.pice .p3 {
		display: inline-block;
		width: 140upx;
		height: 40upx;
		background: rgba(241, 107, 17, 1);
		text-align: center;
		line-height: 40upx;
		font-size: 22upx;
		color: rgba(255, 255, 255, 1);

	}

	.time {
		width: 690upx;
		padding: 28upx 0;
		margin: 34upx 30upx 0 30upx;
		border-top: 1upx solid #E8E8E8;
		font-size: 28upx;
		line-height: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(102, 102, 102, 1);
	}

	.h8 {
		width: 100%;
		height: 10upx;
		background: rgba(244, 244, 244, 1);
	}

	.product-deatil-box {
		background: #fff;
		margin-bottom: 130upx;
		min-height: 600upx;
		font-size: 28upx;
		line-height: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
	}

	.product-deatil-box .info1 {
		height: 85upx;
		line-height: 85upx;
		text-align: center;
		border-bottom: 1upx solid #E8E8E8;
	}

	.product-deatil-box .info2 {
		padding: 0 30upx;
	}

	.product-deatil-box .mb44 {
		margin-bottom: 44upx;
	}

	.product-deatil-box .mt10 {
		margin-top: 20upx;
	}

	.product-footer {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 610upx;
		height: 120upx;
		padding: 0 70upx;
		background: rgba(255, 255, 255, 1);
		box-shadow: 0 3upx 7upx 0 rgba(0, 0, 0, 0.6);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.product-footer .but {
		width: 256upx;
		height: 70upx;
		line-height: 70upx;
		border: 1px solid rgba(160, 160, 160, 1);
		border-radius: 35upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
	}

	.product-footer .but:nth-of-type(2) {
		border: none;
		color: #fff;
	}

	.product-bg {
		position: fixed;
		z-index: 1000;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background: rgba(51, 51, 51, 0.2);
	}

	.product-bg-con {
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 0;
		background: #fff;
		z-index: 1001;
		border-radius: 10upx 10upx 0px 0px;
		transition: height 1s;
	}
	.product-bg-con .info1{
		padding-top: 80upx;
		padding-left: 30upx;
		padding-right: 30upx;
	}
</style>
