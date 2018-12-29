<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-26
		描述：模板号3  详情说明
	-->
	<view class="body-view container">
		<!-- <view class="title">{{title}}</view> -->
		<rich-text class="title" :nodes="title"></rich-text>
		<rich-text :nodes="bodys"></rich-text>
	</view>
</template>

<script>
	export default {
		data() {
			return {}
		},
		props: ['title', 'bodys'],
		components: {},
		computed: {},
		methods: {

		},
	}
</script>

<style>
	.container {
		width: 670upx;
		margin: 0 50upx 0 30upx;
	}

	.title {
		width: 100%;
		height: 34upx;
		line-height: 34upx;
		font-size: 36upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(51, 51, 51, 1);
		margin: 38upx 0;
		display: block;
	}
	h1{
		font-size: 36upx;
	}

	.box {
		width: 100%;
		font-size: 28upx;
		font-family: PingFang-SC-Medium;
		font-weight: 500;
		color: rgba(51, 51, 51, 1);
		line-height: 48upx;
	}
</style>
