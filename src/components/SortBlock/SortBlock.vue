<template>
  <div class="sort-block">
    <types-switcher/>
    <search-input v-model="inputValue" />
  </div>
</template>

<script setup lang="ts">
import TypesSwitcher from './TypesSwitcher.vue';
import SearchInput from './SearchInput.vue'

import { ref, watch } from "vue";
import { useDebounce } from '../../hooks/useDebounce';
import { useStore } from "../../store";

const inputValue = ref('')
const store = useStore()

const debounce = useDebounce(inputValue)

watch(debounce, (currentValue, oldValue) => {
  store.commit('setSearchValue', currentValue)
})

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