<template>
	<view>
		<animal :imageList="imageList" @gotoDetail="gotoDetail"></animal>
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
						url: '../../static/jddt@2x.png',
						scenicTitle: '凯悦酒店',
						introInfo: ''
					},
				],
			};
		},
		methods:{
			gotoDetail(data){
				uni.navigateTo({
					url:'../holtelDatail/holtelDatail'
				})
			}
		}
	}
</script>

<style>

</style>
