<template>
	<view>
		<swiper3 :itemList="itemList" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
		<view class="content">
			<view class="title">
				欢乐海洋世界
			</view>
			<text class="detail">犹如从远古的希腊神话穿越到现代的爱琴海风情的四季全时水上乐园。配置造浪池、漂流河、大喇叭、巨蟒、巨碗、合家欢、双环、欢乐水寨近30套大型戏水设备2间主题</text>
		</view>
		<view class="playContainer">
			<view class="playList">
				<view class="playItem" :class="{active: playItem.isActive}" v-for="(playItem,playIndex) in playList" :key="playIndex"
				 @click="selectPlayType(playIndex)">{{playItem.name}}</view>
			</view>
			<view class="childList">
				<view class="childItem" v-for="(item,index) in childList" :key="index" @click="playItemDetail(index)">
					<view class="childPic">
						<image :src="item.url" mode=""></image>
					</view>
					<view class="childContent">
						{{item.content}}
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import swiper3 from '../../components/swiper3.vue' //轮播图组件
	export default {
		components: {
			swiper3
		},
		data() {
			return {
				itemList: [{
						url: '../../static/500434003_banner@3x.png'
					},
					{
						url: '../../static/pexels-photo-731141@3x.png'
					},
				],
				//项目类型
				playList: [{
						name: '游玩',
						id: 1,
						isActive: true
					},
					{
						name: '演出',
						id: 2,
						isActive: false
					},
					{
						name: '美食',
						id: 3,
						isActive: false
					},
					{
						name: '商店',
						id: 4,
						isActive: false
					},
					{
						name: '场馆',
						id: 5,
						isActive: false
					},

				],

				//游玩项目
				childList: [{
						url: '../../static/500434003_banner@2x.png',
						content: '摩天轮'
					},
					{
						url: '../../static/500361163_banner@2x.png',
						content: '自旋滑车'
					},
					{
						url: '../../static/130841_banner@2x.png',
						content: '水战船'
					},

				]

			};
		},
		methods: {
			selectPlayType(index) {
				let playList = this.playList;
				playList.forEach((item, itemIndex) => {
					if (index == itemIndex) {
						playList[itemIndex].isActive = true
					} else {
						playList[itemIndex].isActive = false
					}
				});
				this.playList = playList;
			},
			//游玩项目详情
			playItemDetail(index) {
				uni.navigateTo({
					url: '../playDetail/playDetail'
				})
			}
		},
	}
</script>

<style>
	.content {
		background: #FFFFFF;
		padding: 30upx;
	}

	.title {
		font-size: 36upx;
		color: #333333;
		font-weight: bold;
		font-family: PingFang-SC-Medium;
	}

	.detail {
		font-size: 28upx;
		line-height: 42upx;
		color: #333333;
	}

	.playContainer {
		margin-top: 10upx;
		background: #fff;
	}

	.playList {
		display: flex;
		box-sizing: border-box;
		height: 80upx;
		border-bottom: 1upx solid #E8E8E8;
	}

	,
	.playItem {
		flex: 1;
		text-align: center;
		font-size: 28upx;
		line-height: 80upx;
		color: #666;
	}

	.active {
		font-size: 34upx;
		color: #0B74EA;
		border-bottom: 2upx solid #0B74EA;
	}

	.childList {
		padding: 0 30upx;
	}

	.childItem {
		display: flex;
		padding: 9upx 0upx;
		line-height: 100upx;
		box-sizing: border-box;
		border-bottom: 1upx solid #E8E8E8;
	}

	.childPic {
		width: 82upx;
		height: 82upx;

	}

	.childPic image {
		width: 100%;
		height: 100%;
		border-radius: 50%;
	}

	.childContent {
		line-height: 82upx;
		box-sizing: border-box;
		margin-left: 36upx;
		font-size: 30upx;
		color: #333;
	}
</style>
