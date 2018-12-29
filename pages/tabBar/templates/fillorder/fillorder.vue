<template>
	<view>
		
		<view class="a1">
			<view class="a2">
				<view class="a23">成人全日票</view>
				<view class="a24">￥160×2</view>
				<view class="a22">游玩时间：2018.12.11 08:30-16:30</view>
			</view>
			<view class="a3">
				<span>小计金额：</span>
				<span class="a33">￥320</span>
			</view>
		</view>
		<view class="a4">
			<view class="a44">优惠券</view>
			<view class="a45">暂无优惠</view>
		</view>
		<view class="a5">
			<view class="a55">
				<span class="a551">游客信息：</span>
				<span class="a552">您需要填写<span>1</span>位游客信息</span>
			</view>

			<view class="a56">
				<view class="a57">
					<label class="p">游客姓名</label>
					<input placeholder="" focus class="p1" />
				</view>



				<view class="a57">
					<label class="p">手机号：</label>
					<input maxlength="10" placeholder="" class="p1" />
				</view>

				<view class="a58">
					<span>*此手机号用于接收入园短信</span>
				</view>


				<view class="a57">
					<label class="p">身份证：</label>
					<input placeholder="" class="p1" />
				</view>


				<view class="a59">
					<checkbox-group>
						<label>
							<checkbox value="cb" checked="true" />
							<span class="a60">同意：购买协议</span>
						</label>

					</checkbox-group>
				</view>

			</view>

		</view>
		<view class="a6">
			<view class="a61">
				<span class="a62">共计:</span>
				<span class="a63">￥142</span>
				<span class="a64">￥188</span>
			</view>
			<navigator url="../payorder/payorder">
				<view class="a65">

					<button>提交订单</button>


				</view>
			</navigator>
		</view>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				
			};
		}
	}
</script>

<style>
	.a1 {
		display: flex;
		justify-content: space-between;
		/* flex-direction: column; */
		padding: 0 33upx;
		/* margin-top: 40upx; */
		background-color: #F4F4F4;
	}

	.a2>.a22 {
		margin-top: 49upx;
		margin-bottom: 48upx;
		color: #666666;
		font-size: 26upx;
		font-weight: 500;
	}

	.a2>.a23 {
		font-size: 32upx;
		color: #333;
		font-weight: bold;
		padding-top: 40upx;
	}

	.a2>.a24 {
		color: #666666;
		font-size: 26upx;
		margin-top: 23upx;
		font-weight: 500
	}

	.a3 {
		margin-top: 108upx;
	}

	.a3>.a33 {
		color: #F35633;
	}

	.a4 {
		display: flex;
		justify-content: space-between;
		padding: 32upx 31upx;
		background-color: #FFFFFF;
		border-bottom: 1upx solid #E8E8E8;
	}

	.a4>.a44 {
		font-size: 30upx;
		color: #333333;
	}

	.a4>.a45 {
		font-size: 30upx;
		color: #666666;
	}

	.a5 {
		background-color: #fff;
		padding-bottom: 237upx;
		padding-left: 31upx;
		padding-right: 31upx;

	}

	.a5>.a56 {
		margin-left: 39upx;

	}

	.a5>.a56>.a57 {
		display: flex;
		justify-content: space-between;
	}

	.a5>.a56>.a57>.p {
		display: inline-block;
		width: 20%;
		color: #666666;
		font-size: 28upx;
		margin-top: 30upx;
	}

	.a5>.a56>.a57>.p1 {
		width: 80%;
		border: 1upx solid #E8E8E8;
		margin-top: 22upx;
		height: 68upx;
	}

	.a55>.a551 {
		color: #333333;
		font-size: 30upx;
		font-weight: 500;
	}

	.a55>.a552 {
		color: #666666;
		font-size: 26upx;
	}

	.a55>.a552>span {
		color: #0B74EA
	}

	.a58>span {
		margin-left: 150upx;
		color: #999999;
	}

	.a59 {
		margin-left: 380upx;
		margin-top: 57upx;
	}

	.a59 .a60 {
		color: #0B74EA;
	}

	.a6 {
		display: flex;
		justify-content: space-between;

	}

	.a6>.a61 {
		background-color: #313131;
		width: 546upx;
		height: 100upx;
	}

	.a6>.a61>.a62 {
		display: inline-block;
		color: #FFFFFF;
		font-size: 26upx;
		margin-top: 20upx;
		margin-left: 77upx;
	}

	.a6>.a61>.a63 {
		display: inline-block;
		color: #FFFFFF;
		font-size: 32upx;
		margin-top: 20upx;
		margin-right: 26upx;
		
	}

	.a6>.a61>.a64 {
		display: inline-block;
		color: #666666;
		font-size: 22upx;
		margin-top: 20upx;
		text-decoration: line-through;
	}

	.a6 .a65>button {
		width: 204upx;
		height: 100upx;
		background-color: #0B74EA;
		color: #FFFFFF;
		border-radius: 0;
	}
</style>
