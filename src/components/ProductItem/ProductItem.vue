<template>
  <div class="product-item">
    <img :src="product.image" alt="" />
    <product-content :product="product"/>
    <product-card :product="product" />
  </div>
</template>

<script setup lang="ts">
import ProductContent from './ProductContent.vue'
import ProductCard from './ProductCard.vue'
import { PropType } from "vue";
import { IProduct } from "../../types/types";

defineProps({
  product: Object as PropType<IProduct>,
});
</script>

<style scoped lang="scss">
.product-item {
  border: 1px solid #e0e3ee;
  border-radius: 20px;
  display: flex;
  gap: 20px;
  & > img {
    width: 256px;
    height: 256px;
    border-radius: 20px;
    margin: 20px 0 0 20px;
  }
}

@media (max-width: 900px) {
  .product-item {
    flex-direction: column;
    width: min-content;
    align-items: center;
    padding: 10px;
    & > img {
      margin: 0;
    }
  }
}
</style>