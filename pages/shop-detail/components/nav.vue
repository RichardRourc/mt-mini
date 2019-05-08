<template>
  <nav class="tab">
    <div class="tab--left">
      <div class="nav__item nav__item--on">菜單</div>
      <div class="nav__item">評價</div>
      <div class="nav__item">商家</div>
    </div>
    <div class="tab--right">
      <div class="search">
        <img class="search__image" src alt> 搜索
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style lang="scss">
.tab {
  display: flex;
  justify-content: space-between;
  padding: 12upx;
  padding-left: 24upx;
  font-size: $uni-font-size-base;
  border-bottom: 3upx solid #666;
}
.nav__item {
  display: inline-block;
  padding: $uni-spacing-col-sm 0upx;
  margin-right: 48upx;
}
.nav__item--on{
	font-weight: bold;
	border-bottom: 1px solid #aca;
}
.search {
  position: relative;
  background-color: #ccc;
  // width: 48upx;
  border-radius: 24upx;
  padding: 8upx;
  text-indent: 48upx;
}
.search__image {
  position: absolute;
  width: 24upx;
  height: 24upx;
  background-color: #f66;
  left: 12upx;
  top: 15upx;
}
</style>
