<template>
  <section class="foods">
    <food-type-nav :type1="type1"/>

    <div class="foods--list">
      <div class="type--fix">{{ type[0] }}</div>

      <scroll-view class="foods--show" @scroll="scroll" scroll-y="true">
        <div class="foods--show__item" v-for="(item,idx) in type" :key="idx">
          {{ item }}
          <div class="foods--show__item__list" v-for="(item,idx) in foodDatas" :key="idx">
            <img class="foods--detail__image" src alt>

            <div class="foods__info">
              <div class="foods--name">{{ item.name }}</div>
              <div class="foods__desc">{{ item.desc }}</div>
              <div class="foods__sell">月售{{ item.sell }} 贊{{ item.nice }}</div>
              <div class="foods__price">
                ￥ {{ item.price }}
                <div class="foods__plus">+</div>
              </div>
            </div>
          </div>
        </div>
      </scroll-view>
    </div>

    <shopcar />
  </section>
</template>

<script>
function a() {
  let arr = [];
  for (let i = 0; i < 20; i++) {
    arr[i] = i + "餐";
  }
  return arr;
}
let type1 = a();

import goodsTypeNav from "./food-type-nav";
import shopcar from "./shopcar";

export default {
  props: ["type", "foodDatas"],
  data() {
    return {
      type1: type1
    };
  },
  components: {
    "food-type-nav": goodsTypeNav,
    shopcar: shopcar
  },
  methods: {
    scroll(e) {
      console.log(e.target)
    },
  },
  // onLoad	() {
  // 	this.type = type;
  // }
};
</script>

<style lang="scss">
.foods {
  // display: flex;
  // align-items: center;
  position: relative;
}

.foods--list {
  position: relative;
  display: inline-block;
  width: 69%;
}
.type--fix {
  // position: fixed;
  // top: 0upx;
  padding: 8upx 16upx;
  color: #666;
  font-size: $uni-font-size-base;
}
.foods--show {
  display: inline-block;
  height: 913upx;
  overflow: hidden;
  width: 115%;
}
.foods--show__item__list {
  justify-content: space-between;
  align-items: center;
  display: flex;
  margin-bottom: $uni-spacing-col-lg;
  width: 95%;
  // padding: 0upx 8upx;
}
.foods--detail__image {
  background-color: #f66;
  width: 30%;
  height: 80upx;
}
.foods__info {
  width: 68%;
  font-size: $uni-font-size-sm;
}
.foods--name {
  font-size: $uni-font-size-base;
  font-weight: bold;
}
.foods__price {
  display: flex;
  justify-content: space-between;
  font-size: $uni-font-size-base;
  color: #f00;
  // position: relative;
}
.foods__plus {
  font-size: $uni-font-size-lg;
  color: #000;
  background-color: #bbb;
	border-radius: 24upx;
	padding: 8upx 12upx;
}
</style>
