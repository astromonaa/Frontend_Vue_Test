import { IProduct } from '../types/types';
import { computed } from 'vue';
import { useRoute } from 'vue-router';
import { useStore } from '../store/index';


export function useProduct(product: IProduct | undefined) {
  const route = useRoute()
  const store = useStore()

  const sum = computed(() => (product?.count || 0) * (product?.price || 0));
  const likeFill = computed(() => product?.favourite ? '#fff' : '#2D3B87')

  const isDealsPage = computed(() => route.path === '/deals')

  const addButtonText = computed(() => {
    if (isDealsPage.value) {
      return product?.isPayed ? 'Оплачено' : 'Оплатить'
    }else {
      return 'Добавить в сделки'
    }
  })

  const addButtonClick = () => {
    isDealsPage.value ? store.commit('payProduct', product) : store.commit('addToDeals', product)
  }

  return {
    sum, likeFill, addButtonText, isDealsPage, addButtonClick
  }
}