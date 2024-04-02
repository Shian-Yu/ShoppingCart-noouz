<script>
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';

export default {
  props: {
    goodsNumber: {
      type: Number,
    }
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(goodsInformation, ['goodsData']),
    ...mapState(goodsInformation, ['userBag']),
  },
  methods: {
    ...mapActions(goodsInformation, ['addData']),
    ...mapActions(goodsInformation, ['addShoppingCart']),
    ...mapActions(goodsInformation, ['calcTotalQuantity']),
    quantityDown() {
      if(this.goodsData[this.goodsNumber].quantity > 1) {
        this.goodsData[this.goodsNumber].quantity --;
      }
    },
    quantityUp() {
      this.goodsData[this.goodsNumber].quantity ++;
    },
    checkValue(){
      if(this.goodsData[this.goodsNumber].quantity < 1) {
        this.goodsData[this.goodsNumber].quantity = 1
      }
    },
  },
}
</script>

<template>
  <button type="button" class="minus" @click="quantityDown">&ndash;</button>
  <input type="number" class="goods-input" v-model="goodsData[goodsNumber].quantity" @change="checkValue">
  <button type="button" class="plus" @click="quantityUp">&plus;</button>
</template>

<style scoped>
.goods-input {
  @apply w-full border-y border-gray-300 text-lg pb-1 pl-1 text-center lg:w-3/6
}

.minus {
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}

.plus {
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}

</style>