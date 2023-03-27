import { computed } from 'vue';
import { useStore } from '../store/index';


export function useLoading() {
  const { state } = useStore()

  const isLoading = computed(() => state.products.isLoading)

  return {isLoading}
}