<template>
  <div>
    <section class="nearby-shop">
      <div class="nearby-shop__title">附近商家</div>
      <div class="nearby-shop__tab">
        <div class="nearby-shop__tab__list comprehensive">综合排序</div>
        <div class="nearby-shop__tab__list">销量高</div>
        <div class="nearby-shop__tab__list">速度快</div>
        <div class="nearby-shop__tab__list">减配送费</div>
        <div class="filter fr">筛选</div>
      </div>
      <nearby-shop-item
        :name="name"
        :score="score"
        :sell="sell"
        :priceStart="priceStart"
        :priceDelivery="priceDelivery"
        :priceAvg="priceAvg"
      />
      <nearby-shop-item
        :name="name"
        :score="score"
        :sell="sell"
        :priceStart="priceStart"
        :priceDelivery="priceDelivery"
        :priceAvg="priceAvg"
      />
    </section>
  </div>
</template>

<script>
  import nearbyShopItem from "./nearby-shop-item.vue";

  export default {
    data () {
      return {
        name: '麦当劳',
        score: 4.6,
        sell: 800,
        priceStart: 10,
        priceDelivery: 20,
        priceAvg: 30,
      }
    },
    components: {
      'nearby-shop-item':nearbyShopItem,
      },
  }
</script>

<style lang='scss'>
.nearby-shop {
  width: 96%;
  margin: auto;
}
.nearby-shop__title {
  font-weight: 600;
  margin-top: 32upx;
}
// $uni-spacing-row-base: 20upx;
.nearby-shop__tab {
  display: flex;
  justify-content: space-between;
  padding: 32upx 0upx;
  background-color: #fff;
}

.nearby-shop__tab__list {
  font-size: $uni-font-size-base;
  margin-right: 48upx;
}
.filter {
  font-size: $uni-font-size-base;
}
.comprehensive {
  position: relative;
  margin-right: 56upx;
}
.comprehensive::after {
  content: "";
  display: block;
  width: 0;
  height: 0;
  border: 8upx solid transparent;
  border-top-color: black;
  position: absolute;
  right: -16upx;
  top: 16upx;
}


</style>

