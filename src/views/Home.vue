<script>
import OriginCard from '@/components/OriginCard.vue';
import ListCard from '@/components/ListCard.vue';
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';

export default {
  components: {
    OriginCard,
    ListCard,
  },
  data() {
    return {
      origin: true,
    }
  },
  computed: {
    ...mapState(goodsInformation, ['goodsData']),
  },
  methods: {
    ...mapActions(goodsInformation, ['addData']),
  },
  async mounted() {
    try {
      const response = await fetch('/MOCK_DATA.json');
      const data = await response.json();
      this.addData(data);
    } catch (error) {
      console.error('取得失敗', error);
    };
  },

}
</script>

<template>
  <h1 class=" text-black text-3xl font-bold">商品列表</h1>
  <div class="flex w-full justify-end gap-x-1">
    <img src="@/assets/icon/list-one.png" alt="圖示排列" class="list-img" @click="origin = !origin" v-if="!origin">
    <img src="@/assets/icon/list-one-active.png" alt="圖示排列" class="list-img" v-else>
    <img src="@/assets/icon/list-two-active.png" alt="清單排列" class="list-img" v-if="!origin">
    <img src="@/assets/icon/list-two.png" alt="清單排列" class="list-img" @click="origin = !origin" v-else>
  </div>
  <main class="main">
    <OriginCard v-if="origin === true"></OriginCard>
    <!-- 清單顯示 -->
    <ListCard v-else></ListCard>

  </main>
</template>

<style scoped>
/* 全局樣式 */
*::before,
*::after {
  @apply box-border
}

ul, li {
  @apply list-none
}

/* 共用樣式 */
.title-set {
  @apply text-center break-keep
}

/* 主要樣式 */
.list-img {
  @apply cursor-pointer
}

.main {
  @apply flex gap-4 flex-wrap w-full h-max py-5 justify-center
}
</style>
