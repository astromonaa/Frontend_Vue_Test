<template>
  <div class="product-card">
    <strong>{{ sum.toLocaleString() }} &#8381;</strong>
    <div class="card-middle">
      <span>Количество</span>
      <span>{{ product.count }} шт.</span>
      <span>Стоимость за штуку</span>
      <span>{{ product.price.toLocaleString() }} &#8381;</span>
    </div>
    <div class="card-bottom">
      <my-button
        class="card-btn"
        @click="addButtonClick"
        :class="{inDeals: product.inDeals, dealsBtn: isDealsPage}"
      >
        {{addButtonText}}
      </my-button>
      <like
        class="card-like"
        :class="{favourite: product.favourite}"
        @click="store.commit('addToFavourites', product)"
        :likeFill="likeFill"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, PropType } from "vue";
import { IProduct } from "../../types/types";
import myButton from "../UI/myButton.vue";
import Like from "../UI/Like.vue";
import { useStore } from "../../store";
import { useProduct } from '../../hooks/useProduct';

const store = useStore()

const props = defineProps({
  product: Object as PropType<IProduct>,
});

const {addButtonText, isDealsPage, likeFill, sum, addButtonClick} = useProduct(props.product)


</script>

<style scoped lang="scss">
.product-card {
  border-left: 1px solid #e0e3ee;
  border-radius: 20px;
  padding: 20px;
  display: flex;
  flex-direction: column;

  strong {
    font-weight: 500;
    font-size: 20px;
    line-height: 100%;
    color: #2d3b87;
    margin-bottom: 8px;
  }
}

.card-middle {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  font-size: 13px;
  line-height: 100%;
  row-gap: 6px;
  span {
    white-space: nowrap;
    &:nth-child(odd) {
      color: #969DC3;
    }
    &:nth-child(even) {
      color: #2D3B87;
      text-align: right;
    }
  }
}
.card-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: auto;
  gap: 12px;
}
.card-btn {
  width: 222px;
  padding: 17px 0;
  font-size: 15px;
  font-weight: 500;
  line-height: 100%;
  color: #2d3b87;
}

.card-like {
  padding: 17px;
}
.inDeals {
  background-color: #CEBCFE;
}
.favourite {
  background-color:#2D3B87;;
}
.dealsBtn {
  background: #69C57F;
  color: #fff;
}

@media (max-width: 900px) {
  .product-card {
    padding: 0;
    border: none;
  }
  .card-btn{
    margin-top: 10px;
  }
}
</style>