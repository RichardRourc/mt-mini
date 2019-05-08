<template>
  <scroll-view scroll-y class="type">
    <div class="type--item type--item--on" v-for="( item, idx ) in type1" :key="idx">{{ item }}</div>
  </scroll-view>
</template>

<script>
export default {
  props: ["type1"]
};
</script>

<style lang="scss">
// .food__type{
//   width: 23%;
// overflow: hidden;

// }
.type {
  display: inline-block;
  vertical-align: top;
  overflow: hidden;
  width: 23%;
  height: 872upx;
  // position: absolute;
}
.type--item {
  padding: 8upx 16upx;
  font-size: $uni-font-size-base;
  background-color: #ccc;
  color: #666;
  text-align: center;
  vertical-align: middle;
}
.type--item--on {
  background-color: #fff;
  font-weight: bold;
  position: relative;
}
.type--item--on::after {
  position: absolute;
  content: "";
  display: block;
  border-left: 2px solid #adc;
  top: 24upx;
  left: 8upx;
  height: 8upx;
}
</style>
