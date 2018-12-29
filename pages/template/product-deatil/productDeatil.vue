<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-26
		描述：门票详情页面
	-->
	<view class="product-deatil">
		<view class="banner">
			<swiper3 :itemList="img" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
		</view>
		<view class="bgfff">
			<view class="product-title">海洋欢乐世界海豚旅游纪念品海豚旅游 纪念品</view>
			<view class="pice">
				<view>
					<span class="p1">￥142</span>
					<span class="p2">原价￥180</span>
				</view>
				<view><span class="p3">园区自提</span><span class="p3 cl">邮寄</span></view>
			</view>
		</view>
		<view class="h8"></view>
		<view class="product-deatil-box">
			<view class="uni-padding-wrap">
				<uni-segmented-control :current="current" :values="items" v-on:clickItem="onClickItem" :styleType="styleType"></uni-segmented-control>
			</view>
			<view class="content">
				<view v-show="current === 0">
					<view class="info2 uni-common-mb">海豚旅游纪念品</view>
					<view class="info2 uni-common-mb">蓝色尺寸：H230mm x W38mmx <br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
					</view>
					<view class="info2 uni-common-mb">
						人造尼龙毛，饱和聚树脂
					</view>
					<view class="info2 uni-common-mb">
						蓝色尺寸：H230mm x W38mmx<br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
					</view>
				</view>
				<view v-show="current === 1">
					<view class="info2 uni-common-mb">购买须知</view>
					<view class="info2 uni-common-mb">蓝色尺寸：H230mm x W38mmx <br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
					</view>
					<view class="info2 uni-common-mb">
						购买须知
					</view>
					<view class="info2 uni-common-mb">
						蓝色尺寸：H230mm x W38mmx<br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
						蓝色尺寸：H230mm x W38mmx<br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
						蓝色尺寸：H230mm x W38mmx<br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
						蓝色尺寸：H230mm x W38mmx<br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
						蓝色尺寸：H230mm x W38mmx<br>
						D21mm,公称丝径：外侧0.20mm&,内侧<br>
						0.18mm&
					</view>
				</view>
			</view>
		</view>
		<view class="product-footer">
			<button class="but" @click="status = !status">加入购物车</button>
			<button class="but" type="primary" @click="status = !status">立即购买</button>
		</view>

		<!-- 弹出层 -->
		<view class="product-bg" v-if="status" @click="status = !status"></view>
		<view class="product-bg-con" v-if="status">
			<view class="info1">
				<view class="uni-inline-item">
					<text>选择购买数量 : </text>
					<uni-number-box :min="1" :max="1000" :value="numberValue" v-on:change="onNumberChange"></uni-number-box>
				</view>
				<view class="uni-inline-item uni-common-mt">兑换方式</view>
				<view class="uni-inline-item uni-common-mt uni-common-pl">
					<radio-group name="radio">
						<label><radio value="radio1"/>园区自提</label>
						<label><radio value="radio2" checked="true"/>快递邮寄</label>
					</radio-group>
				</view>
			</view>
			<view class="product-footer">
				<button class="but" @click="status = !status">取消</button>
				<button class="but" type="primary" @tap="showBanner">确定</button>
			</view>
		</view>

		<!-- 弹出层 -->
		<view class="uni-banner" style="background:#FFFFFF;" v-if="bannerShow">
			<view style="justify-content:flex-end;" @tap="closeBanner">
				<view style="justify-content:flex-end; text-align:right; padding:20upx;">
					<text class="uni-icon uni-icon-close"></text>
				</view>
			</view>
			<view class="img">
				<image src="https://img-cdn-qiniu.dcloud.net.cn/uniapp/images/shuijiao.jpg" style="width:145upx;height: 145upx;"></image>
				<view class="uni-common-mt">成功添加购物车！</view>
			</view>
			<view class="uni-banner-footer uni-common-mt">
				<view class="but" @tap="closeBanner">继续购买</view>
				<navigator url="../../shoppingCart/shoppingCart">
					<view class="but">去购物车结算</view>
				</navigator>
			</view>
		</view>
		<view class="uni-mask" v-if="bannerShow"></view>
		<!-- 弹出层 -->
	</view>
</template>

<script>
	import uniNumberBox from '../../../components/uni-number-box.vue'
	import swiper3 from '../../../components/swiper3.vue' //轮播图组件
	import uniSegmentedControl from '../../../components/uni-segmented-control.vue';
	export default {
		data() {
			return {
				items: [
					'商品详情',
					'购买须知'
				],
				styleType: 'text',
				current: 0,
				status: false,
				numberValue: 1,
				img: ['130841_banner@2x2e5e16.png', '130841_banner@2x2e5e16.png'],
				title: '插屏弹窗',
				bannerShow: false
			}
		},
		components: {
			uniNumberBox,
			swiper3,
			uniSegmentedControl
		},
		onNavigationBarButtonTap(obj) {
			//购物车按钮事情
			console.log(1)
		},
		onLoad() {
			uni.setNavigationBarTitle({
				title: '详情'
			})
		},
		onBackPress() {
			if (this.bannerShow) {
				this.bannerShow = false;
				return true;
			}
		},
		methods: {
			onClickItem(index) {
				if (this.current !== index) {
					this.current = index;
				}
			},
			onNumberChange(value) {
				this.numberValue = value;
				console.log('购买数量 : ' + value);
			},
			closeBanner: function() {
				this.bannerShow = false;
				this.status = !this.status;
			},
			showBanner: function() {
				this.bannerShow = true;
			},
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
		padding-bottom: 30upx;
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
		margin-top: 28upx;
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

	.pice .cl {
		width: auto;
		background: #80C269;
		padding: 0 20upx;
		margin-left: 24upx;
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
		padding: 0 60upx;
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
		z-index: 100;
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
		height: 432upx;
		background: #fff;
		z-index: 101;
		border-radius: 10upx 10upx 0px 0px;
	}

	.product-bg-con .info1 {
		padding-top: 40upx;
		padding-left: 30upx;
		padding-right: 30upx;
	}

	.product-deatil-box .uni-padding-wrap {
		padding-top: 20upx;
		border: 1upx solid #E8E8E8;
	}

	.product-deatil-box .content {
		margin-top: 38upx;
		padding-bottom: 30upx;
	}

	/* 遮罩层 */
	.uni-mask {
		background: rgba(0, 0, 0, 0.6);
		position: fixed;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
		z-index: 200;
	}

	/* 弹出层形式的广告 */
	.uni-banner {
		width: 690upx;
		position: fixed;
		left: 50%;
		top: 50%;
		background: #FFF;
		border-radius: 10upx;
		z-index: 201;
		transform: translate(-50%, -50%);
	}

	.uni-banner .img {
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 250upx;
		text-align: center;
	}

	.uni-banner-footer {
		width: 570upx;
		height: 120upx;
		padding: 25upx 60upx;
		justify-content: space-between;
		align-items: center;
		display: flex;
		border-top: 1upx solid #E8E8E8;
	}

	.uni-banner-footer .but:nth-of-type(1) {
		width: 256upx;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		border: 1upx solid rgba(160, 160, 160, 0.53);
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		border-radius: 35upx;
	}

	.uni-banner-footer .but:nth-of-type(2) {
		width: 240upx;
		height: 70upx;
		line-height: 70upx;
		text-align: center;
		background: rgba(11, 116, 234, 1);
		border-radius: 35upx;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(255, 255, 255, 1);
	}
</style>
