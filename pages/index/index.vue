<template>
  <view class="content">
    <location :location='location'></location>
    <search :searchText='searchText' :topSearch='topSearch'></search>
    <index-swiper :foodType='foodType'></index-swiper>
    <food-recommend :foodType='foodType'/>
    <food-banner/>
    <food-brand :testData1='testData1'/>
    <nearby-shop/>
    <div @click="a">1221212</div>

    

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
      const obj = {
        imgsrc: '',
        text: i
      }
      arr[i] = obj;
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
      'index-swiper': indexSwiper,
      'food-recommend': foodRecommend,
      'food-banner': foodBanner,
      'food-brand': foodBrand,
      'nearby-shop': nearbyShop,
    },
    onLoad() {
      // console.log(this)
    },
    methods: {
      a(e) {
        uni.navigateTo({
        	url: "../shop-detail/index"
        })
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
  .content{
    // display: flex;
    // justify-content: center;
    padding: 12upx;
  }
  .fl{
    float: left;
  }
  .fr{
    float: right;
  }
  

</style>
