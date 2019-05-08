<template>
	<view>
		<section class="location">
			<span class="iconfont">&#xe604;</span>{{ location }} <text class="greater" style="font-size:20upx;">></text>
		</section>
	</view>
</template>

<script>
	export default {
		props:["location"],
		data() {
			return {
				
			};
		}
	}
</script>
	
<style>
	.location{
		
		width:96%;
		margin:auto;
		font-weight:500;
		margin-bottom:32upx;
	}
</style>
