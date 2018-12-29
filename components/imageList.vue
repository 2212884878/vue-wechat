<template>
	<view>
		<view class="image-list" v-for="(item,index) in imageList" @click="gotoDetail(index)" >
			<view class="imageWrapper">
				<image :src="item.url" mode=""></image>
				<view class="imageMask">
					<view class="scenicTitle">
						{{item.scenicTitle}}
					</view>
					<view class="introInfo" v-if="item.introInfo">
						{{item.introInfo}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		name: 'imageList',
		//props: ['imageList'],
		props: {
			imageList: {
				type: Array
			},
		},
		data() {
			return {
				/*imageList: [{
						url: '../../../static/500361163_banner@3x.png',
						scenicTitle: '深海之城',
						introInfo: '带您步入奇幻的海洋世界'
					},
					{
						url: '../../../static/500025870_banner@2x.png',
						scenicTitle: '探索海港',
						introInfo: '带您步入奇幻的海洋世界'
					},
					{
						url: '../../../static/130841_banner@2x.png',
						scenicTitle: '海洋冒险',
						introInfo: '带您步入奇幻的海洋世界'
					},
					{
						url: '../../../static/500862071_banner@2x.png',
						scenicTitle: '生态海岸',
						introInfo: '带您步入奇幻的海洋世界'
					}
				],*/
			};
		},
		methods:{
			gotoDetail(index){
				this.$emit("gotoDetail",index)
			}
		}
	}
</script>

<style>
	.image-list {
		padding: 0 30upx;
		text-align: center;
		height: 320upx;
	}

	.image-list:not(:first-of-type) {
		margin-top: 20upx;
	}

	.image-list image {
		width: 100%;
		height: 100%;
		border-radius: 10upx;
	}

	.imageWrapper {
		width: 100%;
		height: 100%;
		position: relative;
	}

	.imageMask {
		position: absolute;
		bottom: 0upx;
		left: 0upx;
		width: 100%;
		padding:22upx 0 25upx 0upx;
		text-align: center;
		background: rgba(0, 0, 0, 1);
		opacity: 0.6;
		color: #FFFFFF;
		border-bottom-left-radius: 10upx;
		border-bottom-right-radius: 10upx;
	}

	.scenicTitle {
		font-size: 28upx;
		 height: 28upx;
		line-height:28upx ;
		/* margin-top: 10upx; */
	}

	.introInfo {
		font-size: 22upx;
		height: 28upx;
		line-height:22upx ;
		margin-top:15upx ;
	}
</style>
