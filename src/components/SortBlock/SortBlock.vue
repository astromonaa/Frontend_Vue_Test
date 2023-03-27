<template>
  <div class="sort-block">
    <types-switcher/>
    <search-input/>
  </div>
</template>

<script setup lang="ts">
import TypesSwitcher from './TypesSwitcher.vue';
import SearchInput from './SearchInput.vue'

</script>

<style scoped>
.sort-block {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 77px;
}

@media (max-width: 600px) {
  .sort-block {
    flex-direction: column;
    margin-top: 30px;
    gap: 20px;
  }
}

</style>