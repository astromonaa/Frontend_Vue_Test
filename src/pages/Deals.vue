<template>
  <products-list :products="deals" v-if="deals.length" />
  <h1 v-else >Список сделок пуст</h1>
</template>

<script setup lang="ts">
import ProductsList from '../components/ProductsList.vue'
import { useSortedProducts } from '../hooks/useSortedProduccts';
import { useSortedAndSearchedProducts } from '../hooks/useSortedAndSearchedProducts';
import { useFavourites } from '../hooks/useFavourites';
import { useDeals } from '../hooks/useDeals';

const {sortedProducts} = useSortedProducts()
const {sortedAndSearchedProducts} = useSortedAndSearchedProducts(sortedProducts)

const {deals} = useDeals(sortedAndSearchedProducts)


</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 150px;
}
</style>