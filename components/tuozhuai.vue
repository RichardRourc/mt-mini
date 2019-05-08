<template>
	<view>
		<view  class="food-type" @click="a" v-on:touchstart="drag" @touchmove="touchmove" style="left:0px;">
			<view class="food-type-list" v-for="item in foodType">
				<view class="food-type-list-image"></view>
				<br/>
				<text>{{item.text}}</text>
			</view>
			<view class="tab">
				
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props:{
			foodType:Object,
		},
		data() {
			return {
				
			};
		},
		methods:{
			drag(e){
				// console.log(e)
				this.originX = e.touches[0].pageY;
				
				// e.target.ontouchmove=function(e){
				// 	finalX = e.touches[0].pageX;
				// 	X = originX - finalX;
				// 	e.target.style.left = X +"px";
				// 	console.log(233)
				// }
				// var originX = e.touches[0].pageX;
				// e.target.ontouchmove = function(event){
				// 	console.log(2)
				// }
			},
			a(e){
				console.log(e.target);
			},
			touchmove(e){
				this.finalX = e.touches[0].pageX;
				this.X = this.finalX - this.originX;
				// console.log(this.X)
				// e.target.style.left = this.X+"px";
				// this.data.left = this.X;
				console.log(this)
			}
		},
		
	}
</script>

<style>

</style>
