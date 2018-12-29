<template>
	<view>
		<themePark :imageList="imageList"  @gotoDetail="gotoDetail"></themePark>
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
						url: '../../static/500554913_banner@3x.png',
						scenicTitle: 'VIP通道',
						introInfo: '快速直达心中所想，畅玩海洋公园'
					},
					{
						url: '../../static/501040204@2x.png',
						scenicTitle: '私人导览',
						introInfo: '专业的海洋知识导览伴您了解海洋的秘密'
					},
				],
			};
		},
		methods:{
			gotoDetail(){
				uni.navigateTo({
					url: '../personalDetail/personalDetail'
				})
			}
		}
	}
</script>

<style>

</style>
