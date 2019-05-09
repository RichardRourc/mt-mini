<template>
  <section class="foods">
    <food-type-nav :type1="type1" />

    <div class="foods--list">
      <div class="type--fix">{{ type[0] }}</div>

      <scroll-view
        class="foods--show"
        @scroll="scroll"
        scroll-y="true"
      >
        <div
          class="foods--show__item"
          v-for="( item1, idx1 )  in type"
          :key="idx1"
        >
          {{ item1 }}
          <div
            class="foods--show__item__list"
            v-for="( item, idx ) in foodDatas"
            :key="idx"
          >
            <div class="foods--detail__image"></div>

            <div class="foods__info">
              <div class="foods--name">{{ item.name }}</div>
              <div class="foods__desc">{{ item.desc }}</div>
              <div
                class="foods__sell"
                @click="abc"
              >月售{{ item.sell }} 贊{{ item.nice }}</div>
              <cart-control :item="item" @update-item="updateItem(idx, $event)" />
              <!-- {{ item }} -->
            </div>
          </div>
        </div>
      </scroll-view>
    </div>

    <shopcar :food-list="foodDatas" />
  </section>
</template>

<script>
const NUM = 20;

function createTypes() {
  const arr = [];
  for (let i = 0; i < NUM; i++) {
    arr[i] = i + "餐";
  }
  return arr;
}
const type1 = createTypes();

function b() {
  const arr1 = [];
  for (let i = 0; i < NUM; i++) {
    arr1[i] = {};
    arr1[i].id = `id-${i}`;
    arr1[i].name = "豬腸粉";
    arr1[i].desc = "好吃的豬腸粉";
    arr1[i].nice = 90;
    arr1[i].sell = 92;
    arr1[i].price = 23;
    arr1[i].count = 0;
  }
  return arr1;
}
const foodDatas = b();

import goodsTypeNav from "./food-type-nav";
import shopcar from "./shopcar";
import cartControl from "./cart-control.vue";
import { mapState, mapMutations } from "vuex";

export default {
  props: ["type"],
  data() {
    return {
      type1: type1,
      foodDatas,
    };
  },
  components: {
    "food-type-nav": goodsTypeNav,
    shopcar: shopcar,
    "cart-control": cartControl
  },
  methods: {
    ...mapMutations(["vxaddCart", "vxdecreaseCart"]),
    addCart() {},
    decreaseCart() {},
    abc() {
      console.log(this.item);
    },
    updateItem(idx, item) {
      console.log(11111111111, idx, item)
      foodDatas.splice(idx, 1, item);
    }
  },
  onShow() {
    // console.log(this.item)
  }
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
</style>
