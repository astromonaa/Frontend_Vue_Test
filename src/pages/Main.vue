<template>
  <loader v-if="isLoading" />
  <products-list :products="sortedAndSearchedProducts" v-else-if="!isLoadding && sortedAndSearchedProducts.length" />
  <h1 v-else >Список товаров пуст</h1>
</template>

<script setup lang="ts">
import ProductsList from '../components/ProductsList.vue'
import Loader from '../components/UI/Loader.vue';
import { useSortedProducts } from '../hooks/useSortedProduccts';
import { useSortedAndSearchedProducts } from '../hooks/useSortedAndSearchedProducts';
import { useLoading } from '../hooks/useLoading';

const {sortedProducts} = useSortedProducts()
const {sortedAndSearchedProducts} = useSortedAndSearchedProducts(sortedProducts)

const {isLoading} = useLoading()


</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 150px;
}
</style>