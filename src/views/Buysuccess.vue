<script>
import { RouterLink, RouterView } from 'vue-router';
import CheckCard from '@/components/CheckCard.vue';
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';

export default{
  components:{
    CheckCard,
  },
  data(){
    return{
    }
  },
  computed: {
    ...mapState(goodsInformation, ['userData']),
    ...mapState(goodsInformation, ['deliveryData']),
  },
  methods: {
    ...mapActions(goodsInformation, ['clearData']),
  },
}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold mb-5">完成購買</h1>
  <main class="main">
    <CheckCard />

    <div class="customer-nav">
      <span class="w-1/12">姓名</span>
      <span class="w-2/12 ">電話</span>
      <span class="w-3/12 ">地址</span>
      <span class="w-2/12">付款方式</span>
      <span class="w-2/12">電子信箱</span>
      <span class="w-1/12 break-keep">運送方式</span>
    </div>
    <ul class="customer">
      <li class="w-1/12 break-words">{{ userData[0].value }}</li>
      <li class="w-2/12 break-words">{{ userData[1].value }}</li>
      <li class="w-3/12 break-words">{{ userData[2].value }}</li>
      <li class="w-2/12 break-words">{{ deliveryData[0].value }}</li>
      <li class="w-2/12 break-words">{{ userData[3].value }}</li>
      <li class="w-1/12 break-words">{{ deliveryData[1].value }}</li>
    </ul>
  </main>
  <RouterLink to="/">
    <button type="button" class="back" @click="clearData">回首頁</button>
  </RouterLink>
</template>

<style scoped>
/* 共用樣式 */
.customer>li{
  @apply py-5 
}
/* 主要樣式 */
.main{
  @apply w-full px-0 md:px-10 mb-20
}

.customer-nav{
  @apply w-full flex border-b-2 py-3 border-gray-300 font-medium
}
.customer{
  @apply w-full flex border-b-2 border-gray-300
}
.back{
  @apply bg-sky-800 rounded-md px-4 py-2 hover:opacity-90 w-full mb-2 text-white
}
</style>