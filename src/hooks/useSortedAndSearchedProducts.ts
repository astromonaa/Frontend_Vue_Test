import { useStore } from '../store/index';
import { computed, ComputedRef } from 'vue';
import { IProduct } from '../types/types';


export function useSortedAndSearchedProducts(sortedProducts:ComputedRef<IProduct[]>) {

  const {state} = useStore()

  const sortedAndSearchedProducts = computed(() => sortedProducts.value.filter(i => i.name.toLowerCase().includes(state.products.searchValue.toLowerCase())))

  return {sortedAndSearchedProducts}
}