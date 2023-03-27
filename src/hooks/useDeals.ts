import { ComputedRef, computed } from 'vue';
import { IProduct } from '../types/types';

export function useDeals(sortedAndSearchedProducts:ComputedRef<IProduct[]>){
  const deals = computed(() => sortedAndSearchedProducts.value.filter(i => i.inDeals))

  return {deals}
} 