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
  <ul class="goods-second">
    <ul class="goods-second-nav">
      <li class="goods-second-img title-set">商品圖片</li>
      <li class="w-3/12 md:w-2/12 title-set">商品名稱</li>
      <li class="w-4/12 title-set hidden sm:block">商品描述</li>
      <li class="w-1/12 title-set">價錢</li>
      <li class="w-5/12 sm:w-3/12 md:w-4/12 title-set"></li>
    </ul>
    <li v-for="(item, index) in goodsData" :key="item.id" class="goods-second-item">
      <img :src="item.pic" alt="商品圖片" class="goods-second-img">
      <h3 class="goods-second-title">{{ item.name }}</h3>
      <p class="goods-second-scribe ">{{ item.description }}</p>
      <span class="goods-second-price ">${{ item.price }}</span>
      <div class="goods-second-button">
        <div class="flex flex-col justify-center items-center">
          <div class="goods-second-calc">
            <QuantityBtn :goods-number="index"></QuantityBtn>
          </div>
          <div class="goods-second-addcar" @click="addShoppingCart(item)">
            <img src="@\assets\icon\shopping_cart.svg" alt="加入購物車">
            <span class="hidden md:block">加入購物車</span>
            <span class="md:hidden">加入</span>
          </div>
        </div>
      </div>
    </li>
  </ul>
</template>

<style scoped>
.minus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}
.plus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 hover:bg-slate-200
}
.goods-second{
  width: 97%;
  @apply flex flex-col 
}
.goods-second-nav{
  @apply grid grid-cols-5 text-nowrap w-full border-y-2 py-3 border-gray-300 
}
.goods-second-item{
  @apply flex justify-between border-b border-gray-300 py-5 items-center
}
.goods-second-img{
  @apply min-w-[100px] w-3/12 sm:w-1/12 md:w-2/12
}
.goods-second-title{
  @apply md:text-xl w-3/12 md:w-2/12 text-center break-words md:break-keep
}
.goods-second-scribe{
  @apply w-4/12 md:w-3/12 hidden sm:block
}
.goods-second-price{
  @apply w-1/12 text-center  text-lg
}
.goods-second-button{
  @apply w-5/12 sm:w-3/12 md:w-4/12 flex flex-col justify-center items-center
}
.goods-second-calc{
  @apply w-full flex flex-nowrap justify-center
}
.goods-second-input{
  @apply border-y border-gray-300  pb-1 pl-1 text-center text-base md:text-lg md:w-4/6 
}
.goods-second-addcar{
  @apply w-full rounded-2xl p-2 bg-slate-600 flex justify-center py-2 text-white gap-x-1 cursor-pointer hover:opacity-95 mt-3 
}
.second{
  @apply px-3
}
</style>