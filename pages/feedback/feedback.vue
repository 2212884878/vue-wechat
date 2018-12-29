<template>
	
	<view>
		<!-- <uniHeader :title="bartitle"></uniHeader> -->
		<view class="container">
			<view class="header">
				<view class="tips">
					您的意见使我们前进的动力
				</view>
				<view class="feedBackType">
					请选择反馈的类型
				</view>
			</view>
			
			<view class="uni-common-mt">
				<view class="question">
					<textarea value="" placeholder=" 请描述您问他发生的场景，并添加截图，这有助于我们快速解决您的问他" v-model="aggesion" maxlength="200" />	
					<text>{{aggesion.length||0}}/200</text>
				</view>
				<form>
					<view class="uni-list list-pd">
						<view class="uni-list-cell cell-pd">
							<view class="uni-uploader">
								<view class="uni-uploader-head">
									<view class="uni-uploader-info">添加截图最多{{picMax}}张</view>
								</view>
								<view class="uni-uploader-body">
									<view class="uni-uploader__files">
										<block v-for="(image,index) in imageList" :key="index">
											<view class="uni-uploader__file">
												<image class="uni-uploader__img" :src="image" :data-src="image" @tap="previewImage"></image>
											</view>
										</block>
										<view class="uni-uploader__input-box" >
											<view class="uni-uploader__input" @tap="chooseImage"></view>
										</view>
									</view>
								</view>
							</view>
						</view>
					</view>
				</form>
		      
			</view>
			<view class="contact">
				 <view class="contactText">
				 	 <text>*</text>电话联系方式
				 </view>
				 <view class="contactNum">
				    <input type="number" v-model="phone" placeholder="必填信息项" placeholder-style="text-align:right"/>
				 </view>
			</view>
			<view class="footer">
				 提交反馈
			</view>
		</view>
		
	</view>
</template>
<script>
	//拍照 或相册选取
	var sourceType = [
		['camera'],
		['album'],
		['camera', 'album']
	]
	//缩略图/原图
	var sizeType = [
		['compressed'],
		['original'],
		['compressed', 'original']
	]
	import uniHeader from "../../components/uni-header.vue";
	export default {
		components:{
			uniHeader
		},
		data() {
			return {
				title: 'choose/previewImage',
				imageList: [],
				sourceTypeIndex: 2,
				sourceType: ['拍照', '相册', '拍照或相册'],
				sizeTypeIndex: 2,
				sizeType: ['压缩', '原图', '压缩或原图'],
				countIndex: 8,
				count: [1, 2, 3, 4, 5, 6, 7, 8, 9],
				aggesion:'', //反馈内容
				picMax:3   ,//最多可选取几张图片,
				bartitle:'反馈',
				isCar:false,
				phone:''
			}
		},
		onUnload() {
			this.imageList = [],
				this.sourceTypeIndex = 2,
				this.sourceType = ['拍照', '相册', '拍照或相册'],
				this.sizeTypeIndex = 2,
				this.sizeType = ['压缩', '原图', '压缩或原图'],
				this.countIndex = 8;
		},
		onNavigationBarButtonTap(obj) {
			//console.log(obj)
			uni.navigateTo({
				url:'../feedbackrecord/feedbackrecord'
			})
		   //console.log(1)
		},
		methods: {
			sourceTypeChange: function(e) {
				this.sourceTypeIndex = e.target.value
			},
			sizeTypeChange: function(e) {
				this.sizeTypeIndex = e.target.value
			},
			countChange: function(e) {
				this.countIndex = e.target.value;
			},
			chooseImage: async function() {
					if (this.imageList.length === this.picMax) {
						let isContinue = await this.isFullImg();
						console.log("是否继续?", isContinue);
						if (!isContinue) {
							return;
						}
					}
					uni.chooseImage({
						sourceType: sourceType[this.sourceTypeIndex],
						sizeType: sizeType[this.sizeTypeIndex],
						count: this.imageList.length + this.count[this.countIndex] > this.picMax ? this.picMax - this.imageList.length : this.count[this.countIndex],
						success: (res) => {
							this.imageList = this.imageList.concat(res.tempFilePaths);
						}
					})
				},
				isFullImg: function() {
					return new Promise((res) => {
						uni.showModal({
							content: `已经有${this.picMax}张图片了,是否清空现有图片？`,
							success: (e) => {
								if (e.confirm) {
									this.imageList = [];
									res(true);
								} else {
									res(false)
								}
							},
							fail: () => {
								res(false)
							}
						})
					})
				},
				previewImage: function(e) {
					var current = e.target.dataset.src
					uni.previewImage({
						current: current,
						urls: this.imageList
					})
				}
		}
	}
</script>

<style>
	.cell-pd {
		padding: 22upx 30upx;
	}

	.list-pd {
		margin-top: 50upx;
	}
	.header{
		padding: 21upx;
		font-size:24upx;
		color: #999;
	}
	.feedBackType{
		font-size: 28upx;
		color: #333;
	}
	.question{
		text-align: left;
		padding: 34upx 0 0 31upx;
		background: #fff;
		position: relative;
	}
	.question text{
		 position: absolute;
		 bottom: 0;
		 right: 30upx;
		font-size: 26upx;
		color: #999;
	}
	.uni-uploader__input-box,.uni-uploader__img{
		width: 120upx;
		height: 120upx;
	}
	.uni-uploader__file{
		width: 124upx;
		height: 124upx;
	}
	.footer{
	   position: fixed;
		   bottom: 0;
		   left: 0;
		   width: 100%;
		   line-height: 100upx;
		   background: #0764E9;
		   font-size: 36upx;
		   color: #fff;
		   text-align: center;
	}
	.contact{
		width: 100%;
		padding: 0 30upx;
		box-sizing: border-box;
		height: 90upx;
		font-size: 28upx;
		color: #333333;
		margin-top: 24upx;
		background: #FFFFFF;
		display: flex;
		justify-content: space-between;
	}
	.contactText text{
		color: #F01919;
	}
	.contactText,.contactNum{
		line-height: 90upx;
	}
	.contactNum input{
		height: 90upx;
	}
	 
	
</style>
