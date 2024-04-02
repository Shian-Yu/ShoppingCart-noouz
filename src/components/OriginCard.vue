<script>
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';
import QuantityBtn from '@/components/QuantityBtn.vue';

export default {
  components: {
    QuantityBtn,
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
  },
}
</script>

<template>
  <ul v-for="(item, index) in goodsData" :key="item.id" class="goods">
    <li class="goods-item">
      <img :src="item.pic" alt="商品圖片" class="goods-img">
      <div class="goods-scribe">
        <h3 class="text-xl">{{ item.name }}</h3>
        <p>{{ item.description }}</p>
        <div class="price">
          <span>價格：NT$</span>
          <span>{{ item.price }}</span>
        </div>
      </div>
      <div class="flex-grow"></div>
      <div class="goods-calc">
        <span class="break-keep text-lg lg:text-base">數量：</span>
        <div class="goods-calc-btns">
          <QuantityBtn :goods-number="index"></QuantityBtn>
        </div>
      </div>
      <div class="goods-addcar" @click="addShoppingCart(item)">
        <img src="@\assets\icon\shopping_cart.svg" alt="加入購物車">
        <span>加入購物車</span>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.goods {
  @apply flex min-w-[150px] w-1/6 justify-around xl:justify-center
}

.goods-item {
  @apply flex flex-col bg-gray-100 justify-between rounded-md
}

.goods-img {
  @apply rounded-t-md select-none
}

.goods-scribe {
  @apply w-full flex flex-col gap-y-3 py-5 px-3 mb-10
}

.goods-calc {
  @apply w-full flex gap-x-1 justify-center py-2 items-center
}

.goods-calc-btns {
  @apply w-full flex flex-nowrap px-1 justify-center
}

.goods-input {
  @apply w-7/12 border-y border-gray-300 text-lg pb-1 pl-1 text-center lg:w-3/6
}

.minus {
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}

.plus {
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}

.goods-addcar {
  @apply w-full rounded-b-md bg-slate-600 flex justify-center py-2 text-white gap-x-1 cursor-pointer hover:opacity-95 mt-2
}
</style>