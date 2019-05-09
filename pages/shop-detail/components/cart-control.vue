<template>
  <div class="foods__price">
    ￥ {{ item.price }}

    <div
      v-show="true"
      class="foods__button foods__reduce"
      @click="decreaseCart"
    >-</div>
    <div
      v-show="true"
      class="number"
    >{{ item.count }}</div>
    <div
      class="foods__button foods__plus"
      @click="addCart"
    >+</div>

  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";

export default {
  props: {
    item: {
      type: Object
    }
  },
  data() {
    return {
      foodsNum: 0
    };
  },
  computed: {
    ...mapState(["vxselectFoods"])
  },
  methods: {
    ...mapMutations(["vxaddCart", "vxdecreaseCart"]),
    addCart() {
      const selectedFoods = this.$store.state.vxselectFoods;
      const { id } = this.item;

      if (!selectedFoods.includes(id)) this.vxaddCart(id);
      
      const newItem = {...this.item};
      newItem.count++;
      this.$emit('update-item', newItem);
      console.log('newItem', newItem)
    },
    decreaseCart() {
      // this.vxdecreaseCart(this.food);

      this.item.count--;
    }
  },
};
</script>

<style lang="scss">
.foods__price {
  display: flex;
  justify-content: space-between;
  font-size: $uni-font-size-base;
  color: #f00;
}
.foods__button {
  width: 36upx;
  height: 40upx;
  font-size: $uni-font-size-lg;
  color: #000;
  background-color: #bbb;
  border-radius: 24upx;
  text-align: center;
  line-height: 40upx;
  // padding: 8upx 12upx;
}
.foods__plus {
}
</style>
