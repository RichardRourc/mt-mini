<template>
  <footer class="shopcar">
    <div class="delivery--left">
      <i class="icon-image"></i>
      <div class="other-money">共￥ {{ totalPrice }}</div>
    </div>
    <div class="delivery--right">
      <div class="money--start">数量{{ counts }}</div>
    </div>
  </footer>
</template>

<script>
import { mapMutations } from 'vuex';

export default {
  props: {
    foodList: {
      type: Array
    }
  },
  computed: {
    totalPrice () {
      return this.foodList.reduce((prev, current) => {
        return prev + current.count * current.price;
      }, 0)
    },
   
    counts () {
      const totalCount = this.foodList.reduce((prev, current) => {
        return prev + current.count;
      }, 0)

      console.log('totalCount', totalCount)

      return totalCount;
    },
  },
};
</script>

<style lang="scss">
.shopcar {
  position: fixed;
  bottom: 0upx;
  z-index: 2;
  display: flex;
  justify-content: space-between;
  align-content: center;
  height: 100upx;
  width: 100%;
  background-color: #000;
  color: #666;
}
.delivery--left {
  text-align: center;
  padding: 24upx 0upx;
}
.icon-image {
  display: inline-block;
  width: 24upx;
  height: 46upx;
  background-color: #666;
  margin-left: $uni-spacing-row-base;
  margin-right: $uni-spacing-row-lg;
  vertical-align: middle;
}
.other-money {
  display: inline-block;
}
.money--start {
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  font-weight: bold;
  padding: 24upx 24upx;
}
</style>
