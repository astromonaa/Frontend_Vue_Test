<template>
  <products-list :products="favourites" v-if="favourites.length" />
  <h1 v-else >Список избранных пуст</h1>
</template>

<script setup lang="ts">
import ProductsList from '../components/ProductsList.vue'
import { useSortedProducts } from '../hooks/useSortedProduccts';
import { useSortedAndSearchedProducts } from '../hooks/useSortedAndSearchedProducts';
import { useFavourites } from '../hooks/useFavourites';

const {sortedProducts} = useSortedProducts()
const {sortedAndSearchedProducts} = useSortedAndSearchedProducts(sortedProducts)

const {favourites} = useFavourites(sortedAndSearchedProducts)


</script>

<style scoped>
h1 {
  text-align: center;
  margin-top: 150px;
}
</style>