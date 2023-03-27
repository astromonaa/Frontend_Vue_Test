export interface IState {
  products: IProduct[],
  searchValue: string;
  sortType: string;
  isLoading: boolean;
}

export interface IProduct {
  id: string;
  address: string
  category: string
  count: number
  description: string
  image: string
  name: string
  price: number
  seller: string
  type: string,
  favourite: boolean;
  inDeals: boolean;
  isPayed: boolean
}