import { useStore } from '../store/index';
import { computed } from 'vue';


export function useSortedProducts() {
  const {state} = useStore()

  const sortedProducts = computed(() => {
    if (state.products.sortType === 'all') {
      return state.products.products
    }
    return state.products.products.filter(i => i.type === state.products.sortType)
  })

  return { sortedProducts }
}