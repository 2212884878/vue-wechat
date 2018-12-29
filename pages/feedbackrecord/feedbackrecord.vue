<template>
	<view>
		<view class="feedRecordList">
			<view class="feedbackItem" v-for="(item,index) in feedbackList" :key="index">
				<view class="uploadTime time">{{item.uploadTime}}</view>
				<view class="uploadContent content">{{item.uploadContent}}</view>
				<view class="uploadImg">
					<view class="uni-uploader">
						<view class="uni-uploader-body">
							<view class="uni-uploader__files">
								<block v-for="(imageItem,imageIndex) in item.imageList" :key="imageIndex">
									<view class="uni-uploader__file">
										<image class="uni-uploader__img" :src="imageItem" :data-src="imageItem"></image>
									</view>
								</block>

							</view>
						</view>
					</view>
				</view>
				<view class="reply">
					<view class="offciReply">
						园区回复
					</view>
					<view class="replyTime time">
						{{item.replyTime}}
					</view>
				</view>
				<view class="replyContent content">{{item.replyContent}}</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				feedbackList: [{
						uploadTime: '2018.12.10 10:25:24', //反馈时间
						uploadContent: '新象棋进不了房间，一年多了，怎么没人去修理', //反馈内容
						imageList: [
							'../../static/mine-tuoxiang.png',
							'../../static/mine-tuoxiang.png',
							'../../static/mine-tuoxiang.png'
						], //反馈图片
						replyTime: ' 2018.12.11 10:00:00', //回复时间
						replyContent: '感谢您的反馈，我们会测试评估您反馈的内容，尽快修改' //回复内容
					},
					{
						uploadTime: '2018.12.10 10:25:24', //反馈时间
						uploadContent: '新象棋进不了房间，一年多了，怎么没人去修理', //反馈内容
						imageList: [
							'../../static/mine-tuoxiang.png',
							'../../static/mine-tuoxiang.png',
							'../../static/mine-tuoxiang.png'
						], //反馈图片
						replyTime: ' 2018.12.11 10:00:00', //回复时间
						replyContent: '感谢您的反馈，我们会测试评估您反馈的内容，尽快修改' //回复内容
					},
					{
						uploadTime: '2018.12.10 10:25:24', //反馈时间
						uploadContent: '新象棋进不了房间，一年多了，怎么没人去修理', //反馈内容
						imageList: [
							'../../static/mine-tuoxiang.png',
							'../../static/mine-tuoxiang.png',
							'../../static/mine-tuoxiang.png'
						], //反馈图片
						replyTime: ' 2018.12.11 10:00:00', //回复时间
						replyContent: '感谢您的反馈，我们会测试评估您反馈的内容，尽快修改' //回复内容
					},

				]

			};
		}
	}
</script>

<style>
	.feedRecordList {
		margin-top: 19upx;
	}

	.feedbackItem {
		background: #FFFFFF;
		padding: 29upx 31upx;
	}

	.feedbackItem:not(:first-of-type) {
		margin-top: 30upx;
	}

	.uploadTime,
	.reply {
		width: 100%;
		display: flex;
		justify-content: space-between;
	}

	.replyContent {
		position: relative;
		width: 100%;
		min-height: 170upx;
		background: #e8e8e8;
		border-radius: 10upx;
		margin-top: 20upx;
		padding: 29upx 16upx;
		box-sizing: border-box;
	}

	.replyContent:before {
		position: absolute;
		content: "";
		top: -20upx;
		left: 30upx;
		border-left: 28upx solid transparent;
		border-right: 28upx solid transparent;
		border-bottom: 28upx solid #e8e8e8;
	}

	.time {
		font-size: 24upx;
		color: #666;
	}

	.content {
		text-indent: 60upx;
		font-size: 28upx;
		color: #333;
	}

	.uni-uploader__img {
		width: 140upx;
		height: 140upx;
	}

	.uni-uploader__file {
		width: 144upx;
		height: 144upx;
	}
</style>
