<template>
  <view>
    <span class="quan">{{ max }}减{{ decrease }}</span>
  </view>
</template>

<script>
export default {
  props: [""],
  data() {
    return {
      max: 12,
      decrease: 12
    };
  }
};
</script>

<style>
.quan {
  position: relative;
  bottom: 0upx;
  left: 92upx;
  /* width:40upx; */
  height: 20upx;
  padding: 4upx 4upx;
  margin-left: 8upx;
  background-color: #f66;
  color: white;
  font-size: 18upx;
  line-height: 20upx;
  text-align: center;
  border: 1px solid #f66;
}
</style>
