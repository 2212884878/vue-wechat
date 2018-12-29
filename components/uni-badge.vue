<template>
	<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
		<swiper-item v-for="item in itemList" :key="item">
			<image :src="item" mode=""></image>
		</swiper-item>
	</swiper>
</template>

<script>
	export default {
		data(){
			return {
				indicatorDots:true,
				autoplay:true,
				interval:3000,
				duration:1000
			}
		},
		props:['itemList'],
		computed: {
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
