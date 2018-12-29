<template>
	<!-- <view class="uni-padding-wrap uni-common-pb" data-id="1"> -->
	<!-- <view class="header">{{title}}</view> -->
	<!-- <banner :itemList="itemList"></banner>
		<introduce :title="title"></introduce> -->
	<!-- </view> -->
	<view class="ban">

		<navigator url="../../ticketsList/ticketsList">
		  	<image src="../../../static/menpiao.png"></image>
		</navigator>
		<image src="../../../static/canyin.png"></image>
		<image src="../../../static/canjuan.png"></image>

		<navigator url="shopping/shopping">
			<image src="../../../static/gouwu.png"></image>
		</navigator>
	</view>
</template>
<script>
	import banner from '../../../components/banner.vue'
	import introduce from '../../../components/introduce.vue'
	export default {
		components: {
			banner,
			introduce
		},
		data() {
			return {
				// 				itemList: [
				// 					'http://img03.tooopen.com/uploadfile/downs/images/20110714/sy_20110714135215645030.jpg',
				// 					'http://pic1.nipic.com/2008-12-30/200812308231244_2.jpg',
				// 					'http://pic2.ooopic.com/12/40/58/18bOOOPIC9c.jpg'
				// 				],
				// 				title: '海洋世界'
			}
		},
		methods: {
			/*godetail(e) {
				//console.log(e.target.dataset.id)
				uni.navigateTo({
					url: '/pages/template/index-list/index-list'
				})
			}*/
		}
	}
</script>

<style>
	page {
		height: auto;
		min-height: 100%;
	}

	.header {
		text-align: center;
		font-size: 36upx;
	}

	.uni-card {
		box-shadow: none;
	}

	.uni-list:after {
		height: 0;
	}

	.uni-list:before {
		height: 0;
	}

	.ban {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		margin: 0 30upx;
		margin-top: 82upx;
	}

	image {
		width: 335upx;
		height: 170upx;
		padding-right: 10upx;
		padding-top: 15upx;
	}
</style>
