import { IState, IProduct } from '../types/types';
import {Commit} from 'vuex'
import axios from 'axios';
import { API } from '../utils/consts';

const state = () => ({
  products: [],
  searchValue: '',
  sortType: 'all',
  isLoading: false
})

const getters = {

}
const mutations = {
  setProducts(state:IState, products:IProduct[]) {
    state.products = products
  },
  setSearchValue(state:IState, value:string) {
    state.searchValue = value
  },
  setSortType(state:IState, sortType:string) {
    state.sortType = sortType
  },
  addToFavourites(state:IState, product:IProduct) {
    product.favourite = !product.favourite
  },
  addToDeals(state:IState, product:IProduct) {
    product.inDeals = true
  },
  payProduct(state:IState, product:IProduct) {
    product.isPayed = true
  }
}

const actions = {
  async fetchProducts({state, commit}:{state:IState, commit:Commit}) {
    state.isLoading = true
    const products = await axios.get(`${API}/products.json`)
    const formatProducts = getFormatProducts(products.data)
    commit('setProducts', formatProducts)
    state.isLoading = false
    localStorage.setItem('products', JSON.stringify(formatProducts))
  }
}

function getFormatProducts(products:IProduct[]) {
  return Object.entries(products).map(([id, obj]) => Object.assign({id, favourite: false, inDeals: false, isPayed: false}, obj))
}

export default {
  state, getters, mutations, actions
}