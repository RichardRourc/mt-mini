<template>
  <header class="shop-head">
    <img src alt class="logo">
    <div class="shop__info">
      <div class="shop__info--top">
        <div class="message">
          <div class="geography">
            <span class="delivery">配送約35分鐘</span>
            <span class="rank">xxxxx第一名</span>
          </div>
          <div class="board">公告：嘻嘻嘻嘻嘻嘻嘻嘻尋尋尋尋啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊啊</div>
        </div>
        <aside class="focus"></aside>
      </div>

      <div class="shop__info--bottom">
        <span class="quan">滿100減10</span>
        <div class="more">></div>
      </div>
    </div>
  </header>
</template>

<script>
  export default {}
</script>

<style lang="scss">
.shop-head {
  display: flex;
  background-color: #000;
  justify-content: space-between;
  align-items: center;
  padding: 24upx;
  color: white;
}
.logo {
  width: 17%;
  height: 111upx;
  background-color: #f66;
}
.shop__info {
  display: inline-block;
  width: 75%;
  height: 72upx;
  padding: 4upx 0upx;
  font-size: $font-size-min;
}
.shop__info--top {
  display: flex;
  justify-content: space-between;
}
.message{
  width: 300upx;
}
.delivery {
  margin-right: $uni-spacing-row-sm;
  position: relative;
}
.delivery:after {
  position: absolute;
  right: -12upx;
  top: 6upx;
  content: "";
  display: block;
  border-left: 1px solid #fff;
  height: 20upx;
}
.focus {
  background-color: #f66;
  margin-top: 8upx;
  width: 66upx;
  height: 43upx;
}
.shop__info--bottom {
  position: relative;
}
.more {
  position: absolute;
  right: 0upx;
  bottom: 0upx;
}
.board {
  margin-bottom: $uni-spacing-col-sm;
  @include overText;
}
.quan {
  @include discount;
}
</style>
