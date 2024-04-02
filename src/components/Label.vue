<script>
import { mapState, mapActions } from 'pinia';
import { goodsInformation } from '@/stores/goodsInformation';

export default{
  props:{
    required:Boolean,
  },
  computed: {
    ...mapState(goodsInformation, ['userData']),
  },
};
</script>

<template>
  <label v-for="(item, index) in userData" :key="item.content" :for="item.type">
    <span>{{item.content}}</span>
    <span v-show="required" class="text-rose-700">*</span>
    <input v-model="item.value" :type=item.type :name=item.type :id=item.type required >
  </label>
</template>

<style scoped>
label{
  @apply font-medium text-lg w-full
}
input{
  @apply w-full border border-gray-300 pl-2 text-lg py-1 rounded-md my-3 focus:outline-gray-500 active:outline-gray-500
}
</style>