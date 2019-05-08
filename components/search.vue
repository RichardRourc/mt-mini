<template>
  <view>
    <section class="search" :class="topSearch">
      <section class="wrap">
        <i class="icon"></i>
        <span v-for="(item,index) in searchText" :key="index" class="search-text">{{ item }}</span>
      </section>
    </section>
  </view>
</template>

<script>
export default {
  props: ["searchText", "topSearch"],
  data() {
    return {
      // top: "",
    };
  }
};
</script>

<style>
.search {
  width: 96%;
  margin: auto;
  padding: 12upx 0upx;
  background-color: white;
}
.wrap {
  padding: 18upx 24upx;
  margin: 0upx;
  background-color: #eee;
  border-radius: 12upx;
}
.search-text {
  color: #666;
  margin-left: 12upx;
}
.fixtop {
  position: fixed;
  top: 0upx;
  left: 2%;
  z-index: 3;
  width: 96%;
}
</style>
