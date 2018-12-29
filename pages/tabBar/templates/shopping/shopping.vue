<template>
	<view class="page">
		<!-- <page-head :title="title"></page-head> -->

		<view class="uni-product-list">
			<view class="uni-product" v-for="(product,index) in productList" :key="index">
				<navigator url="/pages/template/product-deatil/productDeatil">
					<view class="image-view">
						<image v-if="renderImage" class="uni-product-image" :src="product.image"></image>
					</view>
					<view class="uni-product-title">{{product.title}}</view>
					<view class="uni-product-price">
						<!-- <text class="uni-product-price-favour">￥{{product.originalPrice}}</text> -->
						<text class="uni-product-price-original">￥{{product.favourPrice}}</text>
						<text class="uni-product-tip">{{product.tip}}</text>
					</view>
				</navigator>
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
				renderImage: false
			};
		},
		methods: {
			loadData(action = 'add') {
				const data = [{
						image: '../../../../static/shop1.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 9999,
						favourPrice: 8888,
						tip: '可退订'
					},
					{
						image: '../../../../static/shop2.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 3499,
						favourPrice: 3399,
						tip: '可退订'
					},
					{
						image: '../../../../static/shop3.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 12999,
						favourPrice: 10688,
						tip: '可退订'
					},
					{
						image: '../../../../static/shop4.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 999,
						favourPrice: 958,
						tip: '可退订'
					},
					{
						image: '../../../../static/shop1.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品',
						// originalPrice: 8888,
						favourPrice: 8288,
						tip: '可退订'
					},
					{
						image: '../../../../static/shop2.png',
						title: '纪念版2018周年海豚抱枕/玩具/赠品）',
						// originalPrice: 2899,
						favourPrice: 2799,
						tip: '可退订'
					}
				];

				if (action === 'refresh') {
					this.productList = [];
				}

				data.forEach(item => {
					this.productList.push(item);
				});
			}
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
	.uni-product-tip {
		background-color: #fff;
		color: #F16B11;
		border: 1upx solid #F16B11;
	}

	.uni-product-tip>span {
		color: #F16B11
	}
</style>
