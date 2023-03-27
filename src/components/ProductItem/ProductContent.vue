<template>
  <div class="product-content">
    <span class="product-type">{{ productType }}</span>
    <div class="product-name">{{ product.name }}</div>
    <div class="product-location">
      <img :src="Location" alt="location" />
      <span>{{ product.address }}</span>
    </div>
    <div class="product-seller">
      <span>Продавец</span>
      <span>{{ product.seller }}</span>
    </div>
    <div class="product-category">
      <span>Вид товара</span>
      <span>{{ product.category }}</span>
    </div>
    <div class="product-description">{{ product.description }}</div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { IProduct } from "../../types/types";
import Location from "../../assets/location.svg";

const props = defineProps({
  product: Object as PropType<IProduct>,
});

const productType = computed(() => props.product?.type === 'auction' ? 'Аукцион' : 'Разовая продажа')
</script>

<style scoped lang="scss">
.product-content {
  color: #969dc3;
  margin-top: 20px;
  margin-bottom: 80px;
}
.product-type {
  font-size: 13px;
  line-height: 100%;
}
.product-name {
  font-weight: 500;
  font-size: 15px;
  line-height: 125%;
  color: #2d3b87;
  margin-top: 12px;
  margin-bottom: 30px;
}
.product-location {
  background: #f4f5f9;
  border-radius: 5px;
  padding: 4px;
  display: flex;
  align-items: center;
  gap: 4px;
  width: max-content;
  font-size: 13px;
  line-height: 100%;
  color: #616ca5;
}
.product-seller {
  display: flex;
  align-items: center;
  gap: 4px;
  font-size: 13px;
  line-height: 100%;
  margin-top: 12px;
  margin-bottom: 12px;
  span:last-child {
    color: #2d3b87;
  }
}
.product-category {
  background: #f4f5f9;
  border-radius: 10px;
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
  width: max-content;
  font-size: 13px;
  line-height: 100%;
  span:last-child {
    color: #616ca5;
  }
}
.product-description {
  -webkit-line-clamp: 3; /* Число отображаемых строк */
  display: -webkit-box; /* Включаем флексбоксы */
  -webkit-box-orient: vertical; /* Вертикальная ориентация */
  overflow: hidden;
  margin-top: 12px;
  font-size: 13px;
  line-height: 150%;
  color: #2d3b87;
}

@media (max-width: 900px) {
  .product-content {
    margin: 0;
  }
}
</style>