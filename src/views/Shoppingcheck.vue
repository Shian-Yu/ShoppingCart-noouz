<script>
import { RouterLink, RouterView } from 'vue-router';
import LinkBtn from '@/components/LinkBtn.vue';
import CheckCard from '@/components/CheckCard.vue';
import Label from '@/components/Label.vue';
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';

export default {
  components: {
    LinkBtn, CheckCard, Label,
  },
  data() {
    return {
    }
  },
  computed: {
    ...mapState(goodsInformation, ['userData']),
    ...mapState(goodsInformation, ['goodsData']),
    ...mapState(goodsInformation, ['checkbag']),
    ...mapState(goodsInformation, ['totalQuantity']),
    ...mapState(goodsInformation, ['checkQuantity']),
    ...mapState(goodsInformation, ['checkMoney']),
    ...mapState(goodsInformation, ['deliveryData']),
  },
  methods: {
    checkForm() {
      if (!this.userData.every(item => item.value !== '')) {
        alert('請填寫資料');
        return;
      };
      if (!this.deliveryData.every(item => item.value !== '')) {
        alert('請填寫資料');
        return;
      };
      return this.$router.push({ name: "buysuccess" });
    }
  },

}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold mb-5">購買確認及填寫資訊</h1>
  <main class="main">
    <CheckCard />

    <form class="mt-6" @submit.prevent="checkForm">
      <Label required></Label>

      <label v-for="(item, index) in deliveryData" :key="index" for="payment" class="inp-title">
        <span class="w-full">{{ item.content }}<span class="text-rose-700">*</span></span>
        <label class="choice">
          <input v-model="item.value" :type=item.type :id=item.planA required :name=item.content :value=item.planA>{{
      item.planA }}
        </label>
        <label class="choice">
          <input v-model="item.value" :type=item.type :id=item.planB required :name=item.content :value=item.planB>{{
      item.planB }}
        </label>
      </label>

      <div class="calc">
        <span>商品數量：<span>{{ checkQuantity }}</span></span>
        <span>商品總金額：$<span>{{ checkMoney }}</span></span>
      </div>
      <div class="action">
        <LinkBtn :style="'back'" :link="'/shoppingcar'">回上頁繼續加購</LinkBtn>
        <button class="bg-sky-900 rounded-md px-4 py-2 hover:opacity-90">確認送出</button>
      </div>
    </form>
  </main>
</template>

<style scoped>
/* 共用樣式 */

.choice {
  @apply font-normal text-base min-w-[100px] w-[120px]
}

.inp-title {
  @apply text-lg flex flex-wrap mb-2 mt-3
}

input[type="radio"] {
  @apply w-auto m-2
}

/* 主要樣式 */
.main {
  @apply w-full px-0 md:px-10 mb-8
}

form {
  @apply w-full
}

.bottom {
  @apply w-full flex flex-col
}

.calc {
  @apply flex flex-col w-full mt-8 items-end text-xl md:text-2xl font-medium
}

.action {
  @apply flex w-full justify-between text-white mt-3
}
</style>