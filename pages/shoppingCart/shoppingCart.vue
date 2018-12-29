<template>
	<view>
		<view class="container">
			<view class="goodsList">
				<view class="goodsItem" v-for="(item,index) in goods" :key="index">
					<view class="list-left" @click="toogleSelect(index)">
						<image v-if="!item.isSelsct" src="../../static/buyNo.png" mode=""></image>
						<image v-else src="../../static/buyYes.png" mode=""></image>
					</view>
					<view class="list-right">
						<view class="goodsPic">
							<image src="../../static/animal/1.png" mode=""></image>
						</view>
						<view class="goodsInfo">
							<view class="goodsTitle">
								<view class="titleName">
									{{item.goodsName}}
								</view>
								<view class="goodsDelete" @click="deleteGoods(index)">
									<image src="../../static/animal/1.png" mode=""></image>
								</view>
							</view>
							<view class="postAway">
								配送方式：邮寄
							</view>
							<view class="goodsNum">
								<view class="goodsNum-left">
									可退订
								</view>
								<view class="goodsNum-right">
									数量：{{item.goodsNum}}
								</view>
							</view>
						</view>
					</view>
				</view>
			</view>
			<view class="footer">
				<view class="footerItem selectAll" @click="checkedAll">全选</view>
				<view class="footerItem priceInfo">
					<view class="price">合计：<text>￥{{countPrice}}</text></view>
					<view class="infoDetail">不含优惠、折扣、运费</view>
				</view>
				<view class="footerItem settlement" @click="settlement">结算({{countNum}})</view>
			</view>
		</view>
	</view>
</template>
<script>
	import pageHead from '../../components/page-head.vue'
	export default {
		components: {
			pageHead
		},
		data() {
			return {
				title: '购物车',
				countPrice: 0,
				countNum: 0,
				goods: [{
						goodsName: '海洋玩具纪念品海洋玩具纪念品海洋玩具纪念品海洋玩具纪念品',
						goodsPrice: 140,
						isBack: true,
						goodsNum: 1,
						isSelsct: false
					},
					{
						goodsName: '玩具纪念品',
						goodsPrice: 140,
						isBack: true,
						goodsNum: 2,
						isSelsct: false
					},
					{
						goodsName: '海洋玩具',
						goodsPrice: 140,
						isBack: true,
						goodsNum: 3,
						isSelsct: false
					}
				],
				checkAll: false
			};
		},
		methods: {
			//计算总价
			totalPrice: function() {
				let totalPrice = 0;
				let totalNum = 0
				for (let i = 0; i < this.goods.length; i++) {
					if (this.goods[i].isSelsct) {
						let item = this.goods[i];
						totalPrice += item.goodsPrice * item.goodsNum;
						totalNum += 1;
					}
				}
				return {
					totalPrice: totalPrice.toString().replace(/\B(?=(\d{3})+$)/g, ','),
					totalNum: totalNum
				}
			},

			deleteGoods: function(index) {
				let self = this
				uni.showModal({
					title: ' ',
					content: '删除商品',
					success: function(res) {
						if (res.confirm) {
							self.goods.splice(index, 1);
						} else if (res.cancel) {

						}
					}
				});

			},
			//单选
			toogleSelect: function(index) {
				this.goods[index].isSelsct = !this.goods[index].isSelsct;
				!this.goods[index].isSelsct && (this.checkAll = false)
				let total = this.totalPrice()
				this.countPrice = total.totalPrice;
				this.countNum = total.totalNum;
			},
			//全选
			checkedAll: function() {
				this.checkAll = !this.checkAll;
				this.goods.forEach(item => {
					item.isSelsct = this.checkAll ? true : false;
				})
				let total = this.totalPrice()
				this.countPrice = total.totalPrice;
				this.countNum = total.totalNum;
			},
			settlement() {
				if (this.countNum == 0) {
					uni.showModal({
						title: '提示',
						content: '请选择结算商品',
						success: function(res) {
							if (res.confirm) {
								console.log('用户点击确定');
							} else if (res.cancel) {
								console.log('用户点击取消');
							}
						}
					});
				} else {
					uni.navigateTo({
						url: '../tabBar/templates/fillorder/fillorder'
					})
				}
			}
		}

	}
</script>

<style>
	page {
		background: #f4f4f4;
	}

	.goodsList {
		padding: 20upx;
	}

	.goodsItem {
		background: #fff;
		height: 210upx;
		padding: 24upx 26upx 0upx 20upx;
		box-sizing: border-box;
	}

	.goodsItem:not(:first-of-type) {
		margin-top: 10upx;
	}

	.footer {
		display: flex;
		position: fixed;
		left: 0;
		bottom: 0;
		width: 100%;
		height: 100upx;
		background: #FFFFFF;
	}

	.footerItem {
		flex: 1;
		text-align: center;
	}

	.selectAll,
	.settlement {
		line-height: 100upx;
	}

	.selectAll,
	.price {
		font-size: 28upx;
		color: #333;
	}

	.settlement {
		font-size: 32upx;
		background: #0B74EA;
		color: #fff;
	}

	.priceInfo {
		padding-right: 30upx;
	}

	.price text {
		color: #DB1D1D;
	}

	.infoDetail {
		font-size: 22upx;
		color: #999;
	}

	.goodsItem,
	.list-right,
	.goodsTitle,
	.goodsNum {
		display: flex;
	}

	.list-left {
		width: 30upx;
		height: 30upx;
		line-height: 180upx;
	}

	.list-left image {
		width: 100%;
		height: 100%;
		border-radius: 100%;
	}

	.list-right {
		width: 620upx;
	}

	.goodsInfo {
		width: 550upx;
	}

	.goodsPic {
		width: 170upx;
		height: 160upx;
		margin: 0 20upx;
	}

	.goodsPic image {
		width: 170upx;
		height: 160upx;
		border-radius: 12upx;
	}

	.goodsDelete {
		width: 18upx;
		height: 18upx;
	}

	.goodsDelete image {
		width: 100%;
		height: 100%;
	}

	.goodsTitle,
	.goodsNum {
		justify-content: space-between;
	}

	.titleName {
		font-size: 28upx;
		color: #333333;
		line-height: 30upx;
		width: 400upx;
	}

	.postAway {
		font-size: 24upx;
		color: #666666;
	}

	.goodsNum-left {
		border: 1upx solid #F16B11;
		font-size: 22upx;
		padding: 0 11upx;
		color: #F16B11;
	}

	.goodsNum-right {
		font-size: 24upx;
		color: #383838;
	}
</style>
