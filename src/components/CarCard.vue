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
    ...mapState(goodsInformation, ['totalQuantity']),
    ...mapState(goodsInformation, ['checkQuantity']),
    ...mapState(goodsInformation, ['checkMoney']),
  },
  methods: {
    ...mapActions(goodsInformation, ['addData']),
    ...mapActions(goodsInformation, ['addShoppingCart']),
    ...mapActions(goodsInformation, ['calcTotalQuantity']),
    ...mapActions(goodsInformation, ['checkOut']),
    quantityMin(index) {
      if (this.userBag[index].quantity > 0) {
        this.userBag[index].quantity--;
        this.calcTotalQuantity();
        this.checkOut();
      }; 
      if (this.userBag[index].quantity == 0) {
        this.userBag.splice(index,1);
      };
    },
    quantityMax(index) {
      this.userBag[index].quantity++;
      this.calcTotalQuantity();
      this.checkOut();
    },
    changeValue(index) {
      if (this.userBag[index].quantity < 0) {
        this.userBag[index].quantity = 1;
      } else if (this.userBag[index].quantity == 0){
        this.userBag.splice(index,1);
      } else {
        this.calcTotalQuantity();
        this.checkOut();
      };
    },
  },
};
</script>

<template>
  <ul v-for="(item, index) in userBag" :key="item.id" class="goods">
    <li class="checkbox">
      <input v-model="item.check" type="checkbox" class="sm:w-5 sm:h-5" @change="checkOut">
    </li>
    <li class="goods-img-area">
      <img :src="item.pic" alt="商品圖片" class="goods-img">
    </li>
    <li class="goods-title">
      <h3>{{ item.name }}</h3>
    </li>
    <li class="goods-price">
      <span>${{ item.price * item.quantity }}</span>
    </li>
    <li class="goods-calc-btns">
      <button type="button" class="minus" @click="quantityMin(index)">&ndash;</button>
      <input type="number" class="goods-input" v-model="item.quantity" @input="changeValue(index)">
      <button type="button" class="plus" @click="quantityMax(index)">&plus;</button>
    </li>
  </ul>
</template>

<style scoped>
.goods-img {
  @apply min-w-[80px] w-3/12 select-none
}

.goods {
  @apply flex w-full border-b-2 py-5 border-gray-300 items-center
}

.checkbox {
  @apply w-1/12 flex justify-center
}

.goods-img-area {
  @apply w-3/12 flex justify-center
}

.goods-title {
  @apply w-3/12 pl-2 md:pl-0 break-words md:break-keep
}

.goods-price {
  @apply w-1/12
}

.goods-calc-btns {
  @apply w-3/12 flex flex-nowrap justify-center ml-6 md:ml-0
}

.minus {
  @apply bg-white cursor-pointer border border-gray-300 rounded-l-lg flex justify-center pb-1 text-xl w-1/6 px-2 sm:px-0 hover:bg-slate-200
}

.plus {
  @apply bg-white cursor-pointer border border-gray-300 rounded-r-lg flex justify-center pb-1 text-xl w-1/6 px-2 sm:px-0 hover:bg-slate-200
}

.goods-input {
  @apply min-w-[50px] w-4/6 sm:w-3/6 border-y border-gray-300 pb-1 pl-1 text-center text-base md:text-lg md:w-2/6
}
</style>