<template>
	<view>
		<swiper :indicator-dots="indicatorDots" :autoplay="autoplay" :interval="interval" :duration="duration">
			<swiper-item v-for="item in itemList" :key="item">
				<text>{{item}}</text>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		name: "banner",
		data() {
			return {

			};
		},
		props: {
			itemList: {
				type: Array,
			}
		}
	}
</script>

<style>

</style>
