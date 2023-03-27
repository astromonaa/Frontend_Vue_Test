<template>
  <navbar/>
  <sort-block/>
  <div class="container">
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import { onMounted, watch } from 'vue';
import Navbar from '../components/Navbar.vue'
import SortBlock from '../components/SortBlock/SortBlock.vue'
import { useStore } from '../store/index';

const store = useStore()

onMounted(() => {
  const localProducts = localStorage.getItem('products')
  if (!localProducts) {
    store.dispatch('fetchProducts')
  }else {
    store.commit('setProducts', JSON.parse(localProducts))
  }
})

watch(() => store.state, (currentValue, oldValue) => {
  localStorage.setItem('products', JSON.stringify(currentValue.products.products))
}, {
  deep: true
})

</script>

<style scoped>

</style>