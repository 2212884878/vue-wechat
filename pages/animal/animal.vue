<template>
	<view>
		<animal :imageList="imageList" @gotoDetail="gotoDetail()"></animal>
	</view>
</template>

<script>
	import animal from '../../components/imageList.vue'
	export default {
		components: {
			animal
		},
		data() {
			return {
				imageList: [{
						url: '../../static/animal/4.png',
						scenicTitle: '海豚表演',
						introInfo: ''
					},
					{
						url: '../../static/animal/2.png',
						scenicTitle: '海狮表演',
						introInfo: ''
					},
// 					{
// 						url: '../../static/animal/1.png',
// 						scenicTitle: '美人鱼表演',
// 						introInfo: ''
// 					},
// 					{
// 						url: '../../static/animal/3.png',
// 						scenicTitle: '企鹅表演',
// 						introInfo: ''
// 					}
				],
			};
		},
		methods:{
			gotoDetail(data){
				uni.navigateTo({
					url:'../animalDetail/animalDetail'
				})
			}
		}
	}
</script>

<style>

</style>
