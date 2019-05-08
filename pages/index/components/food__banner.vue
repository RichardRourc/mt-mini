<template>
	<div>
		<section class="banner">
		  <img src="../../../static/logo.png" alt="">
		  <span class="banner__title">广告</span>
		</section>
	</div>
</template>

<script>
	export default {
		props: [''],
	}
</script>

<style>
	.banner{
		width:96%;
		margin:auto;
		position:relative;
		padding:24upx 0upx;
	}
	.banner > img{
		height:180upx;
		width:100%;
		border-radius:24upx;
	}
	.banner .banner__title{
		position:absolute;
		padding:6upx 8upx;
		bottom:30upx;
		right:-8upx;
		font-size:12upx;
		color:white;
		background-color: #666;
		opacity:.5;
		border-radius:4upx;
	}
</style>
