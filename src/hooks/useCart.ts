import { createContext, ReactNode, useState } from 'react'
import { IProduct, Stock } from '../types'
import { api } from '../service/api'

interface CartProviderProps {
  children: ReactNode
}

interface IUpdateProductAmount {
  productId: string,
  amount: number
}

interface ICartContext {
  cart: IProduct[],
  addProduct: (productId: number) => Promise<void>,
  removeProduct: (productId: number) => void,
  updateProductAmount: ({ productId, amount }: IUpdateProductAmount) => void
}

const CartContext = createContext<ICartContext>({} as ICartContext)

export default function CartProvider ({ children }: CartProviderProps) {
  const [cart, useCart] = useState<IProduct[]>(() => {
    const storageCart = localStorage.getItem('@GeekShop:cart')

    if (storageCart) {
      return JSON.parse(storageCart)
    }

    return []
  })

  const addProduct = async (productId: number) => {
    try {
      const productAlreadyInCart = cart.find(product => product.id === productId)

      if (!productAlreadyInCart) {
        const { data: product } = await api.get<IProduct>(`products/${productId}`)
        const { data: stock } = await api.get<Stock>(`stock/${productId}`)
      }
    } catch {
      // Tratamento de erros
    }
  }

  const removeProduct = (productId: number) => {
    try {
      // remoção de itens
    } catch {
      // tramento de erros
    }

    const updateProductAmount = async ({
      productId,
      amount
    }: IUpdateProductAmount) => {
      try {
        // atualizando carrinho de compras
      } catch {
        // tramento de erros
      }
    }
  }
}
