<template>
	<view>
		<view class="uni-padding-wrap">
			<view class="page-section swiper">
				<view class="page-section-spacing">
					<swiper class="swiper" :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration" @change="changs">
						<swiper-item  v-for="(item,key) in itemList" :key="key">
							<image :src="item.url" style="width: 750upx; height: 400upx; background-color: #eeeeee;">{{key}}</image>
						</swiper-item>
					</swiper>
				</view>
				<text class="swiper-page">{{page}}/{{itemList.length}}</text>
			</view>
		</view>
	</view>
</template>
<script>
	export default {
		data() {
			return {
				page:1
			}
		},
		props:{
			itemList:{//图片集合
				type:Array,
			},
			indicatorDots:{//是否显示面板指示点
				type:Boolean,
				default:false
			},
			autoplay:{//是否自动切换
				type:Boolean,
				default:true
			},
			interval:{//自动切换时间间隔
				type:Number,
				default:2000
			},
			duration:{//滑动动画时长
				type:Number,
				default:500
			}
		},
		methods: {
			changs(obj) {//当前页码
				this.page = obj.detail.current + 1;
			}
		},
		onReady() {
		}
	}
</script>

<style>
	.uni-padding-wrap {
		padding: 0 0;
		width: 750upx;
		position: relative;
	}

	.swiper {
		height: 400upx;
	}

	.swiper-item {
		display: block;
		height: 400upx;
		line-height: 400upx;
		text-align: center;
	}
	.swiper-item image{
		width: 100%;
		height: 100%;
	}
	.swiper-page {
		position: absolute;
		bottom: 30upx;
		right: 58upx;
		width: 100upx;
		height: 50upx;
		line-height: 50upx;
		background: rgba(0, 0, 0, 0.54);
		border-radius: 26upx;
		text-align: center;
		font-size: 26upx;
		font-family: PingFang-SC-Bold;
		font-weight: bold;
		color: rgba(254, 254, 254, 1);
	}
</style>
