<template>
	<view>
		<view class="title">{{title}}</view>
		<!-- <view class="info">
			<view class="star">星级：五星级</view>
			<view class="star">房间数：1000间</view>
			<view class="star">房间数：是的撒安徽到底</view>
		</view> -->
		<view class="leyuan">
			<image src="../../../static/banner4.png" class="leyuan1" @click="themePark">

			</image>
			<image src="../../../static/banner5.png" class="leyuan1" @click="oceanPark">

			</image>
		</view>
		<view>
			<view class="quanbu">
				<view class="quanbu1">动物秀场</view>
				<view class="quanbu2">查看全部 ></view>
			</view>
			<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
				<swiper-item v-for="(item,index) in itemList" :key="item" @click="animal(index)">
					<image :src="item" mode=""></image>
				</swiper-item>
			</swiper>
		</view>
		<view class="dongwu">
			<image src="../../../static/banner6.png" class="dongwu1">

			</image>
			<image src="../../../static/banner7.png" class="dongwu1"  @click="traffic">

			</image>
			
			<image src="../../../static/banner8.png" class="dongwu1" @click="personal">

			</image>
			<image src="../../../static/banner9.png" class="dongwu1" @click="holtel">

			</image>
		</view>
	</view>
</template>

<script>
	export default {
		name: "introduce",
		props: {
			title: {
				type: String,
				default: ""
			},

		},

		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000,
				itemList: [
					'../../../static/banner.png',
					'../../../static/banner2.png',
					'../../../static/banner3.png'
				],
			};
		},
		methods:{
			themePark(){
				this.$emit("gothemePark")		
			},
			personal(){
				this.$emit("personal")
			},
			animal(index){
				this.$emit("animal",index)
			},
			holtel(){
				this.$emit("holtel")

			},
			traffic(){
				this.$emit("traffic")
			},
			oceanPark(){
				this.$emit("oceanPark")

			},
			goad(){
				this.$emit("ad")




			}
			
		}
	}
</script>

<style>
	swiper {
		height: 400upx;
	}

	image {
		width: 100%;
		height: 100%;
	}

	.title {
		font-size: 36upx;
		font-family: 'PingFang-SC-Bold';
		color: #333333;
		font-weight: bold;
		text-align: left;
		padding-left: 32upx;
		margin-top:42upx;
		margin-bottom: 38upx;
	}

	.leyuan {
		display: flex;
		justify-content: space-between;
		padding: 0 15upx;
	}

	.leyuan>.leyuan1 {
		width: 350upx;
		height: 165upx;
	}

	.dongwu {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0 15upx;
		margin-bottom: 72upx;
		margin-top: 27upx;
	}

	.dongwu>.dongwu1 {
		width: 350upx;
		height: 160upx;
		margin-top: 9upx;
	}
	.quanbu{
		display: flex;
		justify-content: space-between;
		/* margin-bottom: 72upx; */
		margin-top: 27upx;
		padding:0 22upx;
	}
	.quanbu>.quanbu1{
		font-size: 36upx;
		font-family: 'PingFang-SC-Bold';
		color: #333333;
		font-weight: bold;
		margin-bottom: 36upx;
	}
	.quanbu>.quanbu2{
		font-size: 24upx;
		margin-top:18upx;
	}
</style>
