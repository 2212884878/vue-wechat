<template>
	<view>
		<themePark :imageList="imageList" @gotoDetail="gotoDetail"></themePark>
	</view>
</template>

<script>
	import themePark from '../../components/imageList.vue'
	export default {
		components: {
			themePark
		},
		data() {
			return {
				imageList: [{
						url: '../../static/130841_banner@2x.png',
						scenicTitle: '深海之城',
						introInfo: '带您步入奇幻的海洋世界'
					},
					{
						url: '../../static/500025870_banner@2x.png',
						scenicTitle: '探索海港',
						introInfo: '带您步入奇幻的海洋世界'
					},
					{
						url: '../../static/500361163_banner@2x.png',
						scenicTitle: '海洋冒险',
						introInfo: '带您步入奇幻的海洋世界'
					},
					{
						url: '../../static/500862071_banner@2x.png',
						scenicTitle: '生态海岸',
						introInfo: '带您步入奇幻的海洋世界'
					}
				],
			};
		},
		methods: {
			gotoDetail(data) {
				uni.navigateTo({
					url: '../oceanParkDetail/oceanParkDetail'
				})
			}
		}
	}
</script>

<style>

</style>
