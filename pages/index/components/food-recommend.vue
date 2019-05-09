<template>
  <div>
    <view class="recommend">
      <view class="recommend-head">
        <text class="title">为你优选</text>
        <text class="food-recommend__title__more">
          更多
          <text
            class="greater"
            style="font-size:20upx;"
          >></text>
        </text>
      </view>

      <scroll-view
        scroll-x="true"
        class="food-ul"
        scroll-left='120'
      >

        <view
          class="food-ul-li"
          :key="idx"
          v-for="(item, idx) in foodType"
        >
          <view class="food">
            <image
              class="food-image"
              src="../../../static/logo.png"
            />
            <div class="image--wrap">
              <image
                class="shop"
                src="../../../static/logo.png"
              />
              <!-- <span class="quan" >{{max}}减{{decrease}}</span> -->
              <full-reduction />
            </div>
          </view>
          <view class="food-name">吃肉</view>
          <view class="reason">看过的店推荐</view>
        </view>
        <view class="food-recommend__more">查看更多</view>

      </scroll-view>

    </view>
  </div>
</template>
	
<script>
export default {
  props: ["foodType"],
  data() {
    return {
      max: 12,
      decrease: 12
    };
  }
};
</script>

<style>
.recommend {
  position: relative;
  width: 96%;
  margin: auto;
}
.recommend .recommend-head .title {
  font-size: 42upx;
  font-weight: 600;
}
.recommend .recommend-head .food-recommend__title__more {
  position: absolute;
  top: 5upx;
  right: 0upx;
  font-size: 24upx;
  color: #666;
}
.recommend .recommend-head .more .dayu {
  top: 0upx;
}
.food-ul {
  /* border:1px solid red; */
  padding: 12upx 0upx;
  /* width:400%; */
  white-space: nowrap;
}
.food-ul-li {
  display: inline-block;
  padding-right: 12upx;
}
.food-ul-li .food {
  position: relative;
}
.food-ul-li .food image {
  position: absolute;
}
.food-ul-li .food .food-image {
  position: relative;
  width: 300upx;
  height: 180upx;
  border-radius: 12upx;
}
.food-ul-li .food .image--wrap {
  position: absolute;
  bottom: 0upx;
}
.food-ul-li .food .shop {
  /* position:relative; */
  bottom: 0upx;
  left: 12upx;
  width: 80upx;
  height: 40upx;
}
.food + view {
  padding: 8upx;
}
.reason {
  font-size: 32upx;
  color: #ccc;
}
.food-recommend__more {
  display: inline-block;
  height: 164upx;
  width: 24upx;
  padding: 8upx 12upx;
  color: #ccc;
  border: 1px solid #ccc;
  white-space: normal;
  font-size: 32upx;
  color: #ccc;
  vertical-align: top;
  border-radius: 12upx;
}
</style>
