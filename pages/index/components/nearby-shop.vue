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
      <div class="nearby-shop__list">
        <div class="nearby-shop__list--logo">
          <img class="nearby-shop__list--left-image" src="" alt="">
        </div>
        <div class="nearby-shop__list--info">
          <div class="nearby-shop__list--info-title">

          </div>
          <div class="nearby-shop__list--info-message">

          </div>
          <div class="nearby-shop__list--info-pric">

          </div>
          <div class="nearby-shop__list--info-tag">

          </div>
          <div class="nearby-shop__list--info-discounts">
            
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
</script>

<style lang='scss'>
.nearby-shop {
  width: 96%;
  margin: auto;
}
.nearby-shop__title {
  font-weight: 600;
  margin: 32upx 0upx;
}
// $uni-spacing-row-base: 20upx;
.nearby-shop__tab {
	display: flex;
  justify-content: space-between;
  margin: 32upx 0upx;
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
