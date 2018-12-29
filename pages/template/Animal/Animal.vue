<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-26
		描述：动物秀场
	-->
	<view>
		<view class="uni-list">
			<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(item,index) in list" :key="index" @click="navgo(`0${index+1}`)">
				<view class="uni-media-list">
					<image class="image" lazy-load :src="item.src" />
					<view class="title">{{item.name}}</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				list: [{
					src: `../../../static/animal/1.png`,
					name:'海豚表演'
				},{
					src: `../../../static/animal/2.png`,
					name:'海狮表演'
				},{
					src: `../../../static/animal/3.png`,
					name:'美人鱼表演'
				},{
					src: `../../../static/animal/4.png`,
					name:'企鹅表演'
				}]
			}
		},
		components: {

		},
		computed: {

		},
		onReady() {

		},
		methods: {
			navgo(id){
				uni.navigateTo({
					url:`/pages/component/Three/Three?id=${id}`
				})
			}
		},
	}
</script>

<style scoped="scoped">
	.uni-list{
		padding: 10upx 0;
	}
	.uni-list-cell:after {
		content: none;
	}

	.uni-media-list {
		position: relative;
		padding: 10upx 30upx;
		/* margin: 20upx 0; */
		overflow: hidden;
	}

	.image {
		width: 690upx;
		height: 320upx;
		border-radius: 10upx;
		display: block;
	}

	.uni-media-list .title {
		width: 690upx;
		height: 80upx;
		line-height: 80upx;
		background: rgba(0, 0, 0, 0.6);
		border-radius: 10upx;
		position: absolute;
		left: 30upx;
		bottom: 10upx;
		font-size: 28upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(254, 254, 254, 1);
		text-align: center;
	}
</style>
