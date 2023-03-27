<template>
  <div class="products-list">
    <transition-group name="list">
      <product-item
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </transition-group>
  </div>
</template>

<script setup lang="ts">
import { PropType } from "vue";
import ProductItem from "./ProductItem/ProductItem.vue";
import { IProduct } from "../types/types";

defineProps({
  products: Array as PropType<IProduct[]>,
});
</script>

<style scoped>
.products-list {
  margin-top: 40px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}

@media (max-width: 900px) {
  .products-list {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>