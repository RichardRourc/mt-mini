<template>
  <div class="nearby-shop__list" @click="switchShop">
    <div class="nearby-shop__list--logo">
      <img class="nearby-shop__list--logo-image" src alt>
    </div>
    <div class="nearby-shop__list--info">
      <div class="nearby-shop__list--info-title">{{ name }}</div>
      <div class="nearby-shop__list--info-message">
        <div class="nearby-shop__list--info-message-left">
          <span class="star">☆☆☆☆☆</span>
          <span class="score">{{ score }}</span>
          <span class="sell">月售{{ sell }}</span>
        </div>

        <div class="nearby-shop__list--info-message-right">
          <span class="distance">734m</span>
          <span class="min">35分钟</span>
        </div>
      </div>
      <div class="nearby-shop__list--info-pric">
        <span class="price--start">起送 ￥{{ priceStart }}</span>
        <span class="price--delivery">配送 ￥{{ priceDelivery }}</span>
        <span class="price--avg">人均 ￥{{ priceAvg }}</span>
      </div>
      <div class="nearby-shop__list--info-tag">
        <span class="tag">点评高分店铺</span>
      </div>
      <div class="nearby-shop__list--info-discounts">
        <span class="discounts">5折优惠</span>
        <span class="discounts">5折优惠</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["names", "score", "sell", "priceStart", "priceDelivery", "priceAvg"],
  methods: {
    switchShop() {
      uni.navigateTo({
        url: "../shop-detail/index",
        
        
      });
    }
  }
};
</script>

<style lang="scss">
.nearby-shop__list {
  display: flex;
  justify-content: space-between;
  margin-bottom: $uni-spacing-col-base;
}
.nearby-shop__list--logo {
  width: 20%;
}
.nearby-shop__list--info > div {
  margin-bottom: $uni-spacing-col-base;
}
.nearby-shop__list--info {
  width: 79%;
  font-size: 20upx;
}
.nearby-shop__list--logo-image {
  width: 120upx;
  height: 80upx;
  background-color: #666;
}
.nearby-shop__list--info-title {
  font-weight: bold;
  font-size: $uni-font-size-base;
}

.nearby-shop__list--info-message {
  display: flex;
  justify-content: space-between;
  // align-items: center;
}
.star {
  padding: -8upx;
}
.score {
  margin-right: $uni-spacing-row-sm;
}
.sell {
  margin-right: $uni-spacing-row-lg;
}
.distance {
  position: relative;
  margin-right: $uni-spacing-row-base;
}
.distance::after {
  position: absolute;
  right: -8upx;
  top: 6upx;
  content: "";
  display: block;
  border-left: 1px solid #666;
  height: 20upx;
}
.nearby-shop__list--info-pric span {
  margin-right: $uni-spacing-row-base;
}
.nearby-shop__list--info-pric span::after {
  position: absolute;
  right: -8upx;
  top: 6upx;
  content: "";
  display: block;
  border-left: 1px solid #666;
  height: 20upx;
}
.tag {
  display: inline-block;
  padding: 4upx;
  background-color: #fdd;
  color: #faa;
}
.nearby-shop__list--info-discounts {
  // white-space: normal;
  display: flex;
  flex-wrap: wrap;
}
.discounts {
  padding: 4upx;
  color: #f66;
  border: 1px solid #f66;
  margin-bottom: 4upx;
  margin-right: 4upx;
}
</style>
