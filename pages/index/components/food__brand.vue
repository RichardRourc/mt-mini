<template>
	<div>
		<section class="brand">
		  <header class='brand__head'>
			<img class='brand__head__image' src="../../../static/logo.png" alt="">
					<img class="brand__head__image__tag" src="" alt="" />

			<section class="brand__head__bottom">
			  <img src="" alt="" class="brand__head__bottom__image">
			  <div class="brand__head__bottom__right">
				<div class="brand__head__bottom__right__description">
				  噗噗噗
				</div>
				<div class="brand__head__bottom__right__price">
				  <fullRedution></fullRedution>
				  <fullRedution></fullRedution>
				  <fullRedution></fullRedution>
				</div>
			  </div>
			</section>
		  </header>

		  <footer class="brand__foot" style="overflow:hidden;">
			<div class="brand__food__type">
				精品小锅米线
			</div>
			<div class="brand__foot__food--wrap">
				<div class="brand__food__list" v-for='(item,index) in testData1' :key='index'>
				  <div class="brand__foot__food__image">
					<img src="" alt="">
					<div class="brand__foot__food__name">
						啊母鸡
					</div> 
				  </div>
				  <div class="brand__foot__food__price">
					<span class="brand__food__price-now">
						￥ 23.5
					</span>
					<span class="brand__food__price-origin">
						￥ 97
					</span>
				  </div>
			  </div>
			</div>
			
		  </footer>
		</section>
	</div>
</template>

<script>
	export default {
		props:['testData1'],
	}
</script>
	
<style lang='scss'>
	.brand{
		width:96%;
		margin:auto;
	}
	.brand__head{
		position:relative;
		
	}
	.brand .brand__head__image{
		width: 100%;
		height: 180upx;
		border-top-left-radius: 24upx;
		border-top-right-radius: 24upx;
	}
	.brand__head__image__tag{
		position: absolute;
		top: 0upx;
		right: 24upx;
		width: 32upx;
		height: 48upx;
		background-color: #acb;
	}
	.brand__head__bottom{
		position: absolute;
		bottom: -14upx;
		left: 24upx;
	}
	.brand__head__bottom__image{
		display: inline-block;
		width: 102upx;
		height: 92upx;
		margin-right: 32upx;
		margin-top: 12upx;
		background-color: red;
		border-radius: 12upx;
	}
	.brand__head__bottom__right{
		display:inline-block;
		vertical-align:top;
	}
	.brand__head__bottom__right__description{
		color: white;
		font-weight: 500;
		font-size: 42upx;
	}
	.brand__head__bottom__right__price{
		/* text-align:center; */
		display: flex;
		padding-top: 0upx;
		margin-left: -88upx;
	}
	.brand__foot{
		padding: 24upx;
		border: 1px solid #ccc;
		border-top: 0px;
		border-bottom-left-radius: 12upx;
		border-bottom-right-radius: 12upx;

	}
	.brand__food__type{
		font-weight: 600;
		padding: 12upx;
	}
	.brand__foot__food--wrap{
		display: flex;
		justify-content: space-between;
	}
	.brand__food__list{
		display:inline-block;
		width: 32%;
	}
	.brand__foot__food__image{
		position: relative;
		height: 120upx;
	}
	.brand__foot__food__image img{
		width: 100%;
		height: 120upx;
		background-color: green;
		border-radius: 12upx;
	}
	.brand__foot__food__name{
		width: 100%;
		position: absolute;
		background-color: #666;
		opacity: .7;
		font-size: $uni-font-size-sm;
		color: white;
		bottom : 0upx;
		text-indent: 24upx;

	}
	.brand__foot__food__price{
		/* vertical-align: top; */
		margin-top: -12upx;
	}
	.brand__food__price-now{
		color: red;
		font-size: $uni-font-size-sm;
		margin-right: 8upx;
	}
	.brand__food__price-origin{
		text-decoration: line-through;
		color: #ccc;
		font-size: 20upx;
	}
</style>
