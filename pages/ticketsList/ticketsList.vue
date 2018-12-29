<template>
	<view class="page">
		<!-- <page-head :title="title"></page-head> -->
		<view class="header">
			<view class="playDate">游玩日期</view>
			<view class="dateList">
				<view class="dateItem" :class="{active: dateItem.isSelect}" v-for="(dateItem,index) in dateList" :key="index"
				 @click="selecteTime(index)">
					<view class="selectDate" v-if="index==3">
						<picker class="picker-item" mode="date" fields="day" start="2018-01-01" end="2019-01-01" @change="dateChange">
							<view class="imgageWrapper">{{dateItem.text}}{{date}}
								<image src="../../static/buyYes.png" mode=""></image>
							</view>
						</picker>
					</view>
					<view class="" v-else>
						{{dateItem.text}}
					</view>
				</view>
			</view>
		</view>

		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<view class="itemWrapper">
					<navigator url="/pages/template/product-deatil/product-deatil">
						<view class="image-view">
							<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
						</view>
						<view class="itemContainer">
							<view class="uni-product-title">{{product.title}}</view>
							<view class="uni-product-price">
								<!-- <text class="uni-product-price-favour">￥{{product.originalPrice}}</text> -->
								<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
								<text class="uni-product-tip">{{product.tip}}</text>
							</view>
						</view>

					</navigator>
				</view>

			</view>
		</view>


	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'product-list',
				productList: [],
				renderImage: false,
				dateList: [{
						text: "今天",
						isSelect: true //默认选今天
					},
					{
						text: "明天",
						isSelect: false
					},
					{
						text: "后天",
						isSelect: false
					},
					{
						text: "",
						isSelect: false
					}
				],
				date: '2018-12-27'
			};
		},
		methods: {
			loadData(action = 'add') {
				const data = [{
						image: '../../static/shop1.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 9999,
						favourPrice: 8888,
						tip: '可退订'
					},
					{
						image: '../../static/shop2.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 3499,
						favourPrice: 3399,
						tip: '可退订'
					},
					{
						image: '../../static/shop3.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 12999,
						favourPrice: 10688,
						tip: '可退订'
					},
					{
						image: '../../static/shop4.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 999,
						favourPrice: 958,
						tip: '可退订'
					},
				];

				if (action === 'refresh') {
					this.productList = [];
				}

				data.forEach(item => {
					this.productList.push(item);
				});
			},
			selecteTime(index) {
				let dateList = this.dateList;
				dateList.forEach((item, itemIndex) => {
					if (index == itemIndex) {
						dateList[itemIndex].isSelect = true
					} else {
						dateList[itemIndex].isSelect = false
					}
				});
				this.dateList = dateList;

			},
			dateChange(evt) {
				this.date = evt.detail.value;
				let dateList = this.dateList;
				dateList.forEach((item, itemIndex) => {
					if (itemIndex == 3) {
						dateList[itemIndex].isSelect = true
					} else {
						dateList[itemIndex].isSelect = false
					}
				});
				this.dateList = dateList;
				//console.log(evt)
			},
		},
		onLoad() {
			this.loadData();
			setTimeout(() => {
				this.renderImage = true;
			}, 300);
		},
		onPullDownRefresh() {
			this.loadData('refresh');
			// 实际开发中通常是网络请求，加载完数据后就停止。这里仅做演示，加延迟为了体现出效果。
			setTimeout(() => {
				uni.stopPullDownRefresh();
			}, 2000);
		},
		onReachBottom() {
			this.loadData();
		}
	};
</script>

<style>
	.itemWrapper {
		background-color: #fff;
		box-sizing: border-box;
		border: 1upx solid #E5E5E5;
	}

	.itemContainer {
		padding-left: 15upx;
		padding-bottom: 15upx;
	}

	.uni-product {
		padding: 5upx;
		width: 50%;
		box-sizing: border-box;
	}

	.uni-product-tip {
		background-color: #fff;
		color: #F16B11;
		border: 1upx solid #F16B11;
	}

	.uni-product-tip>span {
		color: #F16B11
	}

	.header {
		background: #fff;
		padding-bottom: 30upx;
	}

	.dateList {
		display: flex;
		padding: 0 30upx;
		font-size: 26upx;
		color: #999;
		background: #FFFFFF;
		height: 80upx;

	}

	.dateItem {
		text-align: center;
		padding: 19upx 34upx;
		background: #EEEEEE;
		border-radius: 4upx;
	}

	.active {
		background: -moz-linear-gradient(top, #096AE9 0%, #1593EB 100%);
		background: -webkit-linear-gradient(top, #096AE9 0%, #1593EB 100%);
		color: #fff;
	}

	.dateItem:not(:first-of-type) {
		margin-left: 15upx;
	}

	.selectDate image {
		width: 30upx;
		height: 29upx;
		vertical-align: middle;
	}

	.imgageWrapper {
		display: inline-block;
	}

	.playDate {
		line-height: 80upx;
		padding: 0 30upx;
		font-size: 34upx;
		color: #3F454A;
	}
</style>
