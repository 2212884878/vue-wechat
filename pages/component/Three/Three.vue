<template>
	<!--
		作者：lixiaoyi
		时间：2018-12-26
		描述：模板号3  详情页面
	-->
	<view>
		<template v-if="status">
			<swiper3 :itemList="img" :indicatorDots="false" :autoplay="true" :interval="2000" :duration="500"></swiper3>
			<description :title="title" :bodys="bodys"></description>
		</template>
		<template v-else>
			<!-- 居中 -->
			<uni-popup :show="showPopupMiddle" :type="popType" v-on:hidePopup="hidePopup">
				<view class="uni-center" style="font-size:0;">
					<image class="image" style="width:150upx;height:150upx;" mode="widthFix" src="../../../static/uni@2x.png" />
				</view>
				<view class="uni-common-mt uni-helllo-text uni-center">
					没有该条数据详情<br>
					<uni-tag text="返回" @click="go"></uni-tag>
				</view>
			</uni-popup>
		</template>
	</view>
</template>

<script>
	import swiper3 from '../../../components/swiper3.vue' //轮播图组件
	import description from './description.vue'
	import uniPopup from '../../../components/uni-popup.vue';
	import uniTag from '@/components/uni-tag.vue'
	export default {
		data() {
			return {
				popType: 'middle',
				showPopupMiddle: false,
				img: [],
				title: "",
				bodys: "",
				id: '',
				status:true
			}
		},
		components: {
			swiper3,
			description,
			uniPopup,
			uniTag
		},
		computed: {

		},
		onLoad(obj) {
			this.id = obj.id
		},
		onReady() {
			this.getList();
		},
		methods: {
			//统一的关闭popup方法
			hidePopup: function() {
				this.showPopupMiddle = false;
			},
			//展示居中 popup
			showMiddlePopup: function() {
				this.hidePopup();
				this.popType = 'middle';
				this.showPopupMiddle = true;
			},
			getList() { //根据ID请求数据
				var that = this;
				$.ajax({
					url: "http://192.168.2.61:2670/mongodb-mucon/content/primary/get",
					data: {
						id: that.id
					},
					async: true,
					type: 'POST',
					cache: false,
					crossDomain: true,
					xhrFields: {
						withCredentials: true
					},
					success: function(res) {
						if (res.code == 200 && res.data != null) {
							uni.setNavigationBarTitle({
								title: res.data.sname
							})
							that.title = res.data.content0;
							that.bodys = res.data.content1;
							let img = res.data.pictures;
							let imgList = [];
							img.forEach(v => {
								imgList.push(v.picid)
							})
							that.img = that.getImg(imgList.join(","));
						}else{
							that.status = false;
							uni.setNavigationBarTitle({
								title: ''
							})
							that.showMiddlePopup();
						}
					},
					error: (jqXHR, textStatus, errorThrown) => {
						console.log(jqXHR)
					}
				});
			},
			getImg(obj) { //根据图片ID批量获取图片
				let list = [];
				$.ajax({
					url: "http://192.168.2.61:2600/staticResource-mucon/selectFiles",
					data: {
						ids: obj
					},
					async: true,
					type: 'GET',
					cache: false,
					crossDomain: true,
					xhrFields: {
						withCredentials: true
					},
					success: function(res) {
						res.data.forEach((v) => {
							list.push(v.fileName);
						})
					}
				});
				return list;
			},
			go(){//返回的页面数，如果 delta 大于现有页面数，则返回到首页
				uni.navigateBack({
					delta: 1
				});
			}
		},
	}
</script>

<style>

</style>
