/* eslint-disable prettier/prettier */
import { createContext } from 'react'
import { Product } from '../components/Products/Products'

interface IAppContext {
  products: Product[]
  setProducts: (products: Product[]) => void
  loading: boolean
  setLoading: (loading: boolean) => void
  cartItems: Product[]
  setCartItems: (cartItems: Product[]) => void
  isCartVisible: boolean
  setIsCartVisible: (isCartVisible: boolean) => void
}
const defaultAppContext: IAppContext = {
  products: [],
  setProducts: () => { },
  loading: false,
  setLoading: () => { },
  cartItems: [],
  setCartItems: () => { },
  isCartVisible: false,
  setIsCartVisible: () => { },
}

export const AppContext = createContext<IAppContext>(defaultAppContext)
