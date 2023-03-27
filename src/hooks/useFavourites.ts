import { ComputedRef, computed } from 'vue';
import { IProduct } from '../types/types';

export function useFavourites(sortedAndSearchedProducts:ComputedRef<IProduct[]>) {
  const favourites = computed(() => sortedAndSearchedProducts.value.filter(i => i.favourite))
  return{favourites}
}