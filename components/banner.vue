<template>
	<navigator url="/pages/template/activity/activity">
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">

			<swiper-item v-for="item in itemList" :key="item">

				<image :src="item" mode=""></image>


			</swiper-item>


		</swiper>
	</navigator>
</template>

<script>
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 3000,
				duration: 1000
			}
		},
		props: ['itemList'],
		computed: {

		},
		methods: {

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
		z-index: 1
	}
</style>
