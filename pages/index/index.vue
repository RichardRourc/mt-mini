<template>
  <view class="content">
    <location :location='location'></location>
    <search :searchText='searchText' :topSearch='topSearch'></search>
    <indexSwiper :foodType='foodType'></indexSwiper>
    <foodRecommend :foodType='foodType'></foodRecommend>
    <foodBanner></foodBanner>
    <foodBrand :testData1='testData1'></foodBrand>
    <nearbyShop></nearbyShop>
    

  </view>
</template>

<script>
  import indexSwiper from "./components/indexSwiper.vue";
  import foodRecommend from "./components/food-recommend.vue";
  import foodBanner from "./components/food__banner.vue";
  import foodBrand from "./components/food__brand.vue";
  import nearbyShop from "./components/nearby-shop.vue";

  // Vue.component('indexSwiper',indexSwiper);
  function a() {
    let arr = [];
    for ( var i = 0; i<10; i++ ){
      arr[i] = {} ;
      arr[i].imgsrc = '';
      arr[i].text = '1';
    }
    console.log(arr)
    return arr ; 
  };

  let foodType = a(); 

  export default {
    data() {
      return {
        // title: "Hello",
        searchText: ["妈妈新鲜炖汤", "满20减15"],
        location: '胡岗新村',
        topSearch: '',
        testData1: ['', '', ''],
        foodType: foodType,
      };
    },
    components: {
      'indexSwiper': indexSwiper,
      'foodRecommend': foodRecommend,
      'foodBanner': foodBanner,
      'foodBrand': foodBrand,
      'nearbyShop': nearbyShop,
    },
    onLoad() {
      // console.log(this)
    },
    methods: {
      a(e) {
        console.log(e.target);
      },
    },
    onPageScroll(res){
      //固定搜索框
      //微信
      //#ifdef MP-WEIXIN
      console.log(res)
      if(res.scrollTop>=40){
        this.topSearch="fixtop"
      }
      else{
        this.topSearch=''
      }
      //#endif
      //支付宝
      //#ifdef MP-ALIPAY
      console.log(res)
      if(res[0].scrollTop>=40){
        this.topSearch="fixtop"
      }
      else{
        this.topSearch=''
      }
      //#endif

    },
  };
</script>

<style lang='scss'>
  @import url("../../static/css/index.css");

  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  
//  .nearby-shop__tab{
//     font-size: $uni-font-size-base;
//   } 
</style>
