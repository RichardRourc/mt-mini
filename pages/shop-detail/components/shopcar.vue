<template>
  <footer class="shopcar">
    <div class="delivery--left">
      <i class="icon-image"></i>
      <div class="other-money">另需配送費x元</div>
    </div>
    <div class="delivery--right">
      <div class="money--start">x元起送</div>
    </div>
  </footer>
</template>

<script>
export default {};
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
