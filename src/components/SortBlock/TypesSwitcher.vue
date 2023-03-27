<template>
  <div class="switcher">
    <div
      class="switcher__item"
      :class="{ current: all }"
      @click="store.commit('setSortType', 'all')"
    >
      Все типы
    </div>
    <div
      class="switcher__item"
      :class="{ current: oneTimeSale }"
      @click="store.commit('setSortType', 'one-time-sale')"
    >
      Прямые продажи
    </div>
    <div
      class="switcher__item"
      :class="{ current: auction }"
      @click="store.commit('setSortType', 'auction')"
    >
      Аукцион
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useStore } from "../../store";
const store = useStore();

const choosenType = computed(() => store.state.products.sortType);

const all = computed(() => choosenType.value === "all");
const auction = computed(() => choosenType.value === "auction");
const oneTimeSale = computed(() => choosenType.value === "one-time-sale");
</script>

<style scoped lang="scss">
.switcher {
  border: 1px solid #e0e3ee;
  border-radius: 10px;
  background: #f4f5f9;
  padding: 12px;
  color: #969dc3;
  display: flex;
  align-items: center;
  gap: 12px;
  width: max-content;
  font-size: 15px;
  line-height: 100%;
  &__item {
    cursor: pointer;
  }
}
.current {
  color: #2d3b87;
}

@media (max-width: 350px) {
  .switcher {
    padding: 8px;
    font-size: 13px;
  }
}
</style>