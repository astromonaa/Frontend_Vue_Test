<template>
  <button class="my-button">
    <slot/>
  </button>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
.my-button {
  border-radius: 10px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s;
}
</style>