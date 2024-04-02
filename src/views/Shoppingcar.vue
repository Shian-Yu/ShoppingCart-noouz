<script>
import { RouterLink, RouterView } from 'vue-router';
import CarCard from '@/components/CarCard.vue'
import LinkBtn from '@/components/LinkBtn.vue'
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';

export default{
  components:{
    CarCard,LinkBtn,
  },

  data(){
    return{
      checked:false,
    }
  },
  computed: {
    ...mapState(goodsInformation, ['goodsData']),
    ...mapState(goodsInformation, ['userBag']),
    ...mapState(goodsInformation, ['totalQuantity']),
    ...mapState(goodsInformation, ['checkQuantity']),
    ...mapState(goodsInformation, ['checkMoney']),
  },
  methods: {
    ...mapActions(goodsInformation, ['addData']),
    ...mapActions(goodsInformation, ['addShoppingCart']),
    ...mapActions(goodsInformation, ['checkOut']),
  },
}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold mb-5">購物車確認</h1>
  <main class="main">
    <div class="goods-nav">
      <span class="w-1/12"></span>
      <span class="min-w-[80px] w-3/12 text-center break-keep">商品圖片</span>
      <span class="w-3/12 pl-2 md:pl-0 break-keep">商品名稱</span>
      <span class="w-1/12 break-keep pl-2">價錢</span>
      <span class="w-4/12"></span>
    </div>
    <CarCard></CarCard>
    <div class="calc">
      <span>商品數量：<span>{{ checkQuantity }}</span></span>
      <span>商品總金額：$<span>{{ checkMoney }}</span></span>
    </div>
    <div class="action">
      <LinkBtn :style="'back'">回上頁繼續購買</LinkBtn>
      <LinkBtn :style="'confirm'" :link="'/shoppingcheck'" >確認購買</LinkBtn>
    </div>
  </main>
</template>

<style scoped>

/* 主要樣式 */
.main{
  @apply w-full px-0 md:px-5
}
.goods-nav{
  @apply flex w-full border-y-2 py-3 border-gray-300 font-medium
}
/* .goods{
  @apply flex w-full border-b-2 py-5 border-gray-300 items-center
}
.checkbox{
  @apply w-1/12 flex justify-center
}
.goods-img-area{
  @apply w-3/12 flex justify-center
}
.goods-title{
  @apply w-3/12 pl-2 md:pl-0 break-words md:break-keep
}
.goods-price{
  @apply w-1/12
}
.goods-calc-btns{
  @apply w-3/12 flex flex-nowrap justify-center ml-6 md:ml-0
}
.minus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 px-2 sm:px-0 hover:bg-slate-200
}
.plus{
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 px-2 sm:px-0 hover:bg-slate-200
}
.goods-input{
  @apply min-w-[50px] w-4/6 sm:w-3/6 border-y border-gray-300  pb-1 pl-1 text-center text-base md:text-lg md:w-2/6
} */
.calc{
  @apply flex flex-col w-full mt-8 items-end text-xl md:text-2xl font-medium
}
.action{
  @apply flex w-full justify-between text-white mt-3
}
</style>
