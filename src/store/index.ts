import { InjectionKey } from 'vue'
import { createStore, useStore as baseUseStore, Store } from 'vuex'
import { IState } from '../types/types'
import products from './products'

export interface State {
  products: IState
}



export const key: InjectionKey<Store<State>> = Symbol()

export const store = createStore<State>({
  modules: {products}
})

// define your own `useStore` composition function
export function useStore () {
  return baseUseStore(key)
}