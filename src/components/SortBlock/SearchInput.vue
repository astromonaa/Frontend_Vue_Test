<template>
  <div class="search-input">
    <input type="text" @input="updateInput" :value="modelValue" />
    <my-button class="search-btn">
      <img :src="Search" alt="search" />
    </my-button>
  </div>
</template>

<script setup lang="ts">
import myButton from "../UI/myButton.vue";
import Search from "../../assets/search.svg";

defineProps({
  modelValue: String
})
const emit = defineEmits(['update:modelValue'])

const updateInput = (e:Event) => {
  const target = e.target as HTMLInputElement
  emit('update:modelValue', target.value)
}


</script>

<style scoped lang="scss">
.search-input {
  display: flex;
  align-items: center;
  padding: 4px;
  border: 1px solid #e0e3ee;
  border-radius: 10px;
  width: 274px;
  input {
    padding-right: 3px;
    border: none;
    outline: none;
    width: 100%;
  }
}
.search-btn {
  background: #2d3b87;
}

@media (max-width: 600px) {
  .search-input {
    width: 95%;
  }
}
</style>