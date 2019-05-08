<template>
  <div>
		<shop-head/>
    <shop-nav></shop-nav>
		<!-- <food-type-nav :type="type" /> -->

		<goods :type="type" :foodDatas="foodDatas" />
  </div>
</template>

<script>
import shopHead from './components/shop-head';
import shopNav from './components/nav';
import goodsTypeNav from "./components/food-type-nav";
import goods from './components/goods';



function a () {
	let arr = [];
	for(let i = 0;i<20;i++){
		arr[i] = i + '餐'
	}
	return arr;
};
function b () {
	let arr1 = [];
	for(let i =0;i<20;i++){
		arr1[i] = {};
		arr1[i].name = '豬腸粉';
		arr1[i].desc = '好吃的豬腸粉';
		arr1[i].nice = 90;
		arr1[i].sell = 92;
		arr1[i].price = 23;
	}
	console.log(arr1)
	return arr1;
};
let type = a ();
let foodDatas = b ();

export default {
	components: {
		'shop-head': shopHead,
		'shop-nav': shopNav,
		'goods': goods,
	},
	data () {
		return {
			type,
			foodDatas,
		}
	},
	
};

</script>

<style lang="scss">


</style>
