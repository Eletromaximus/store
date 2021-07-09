import React, { useState } from 'react'
import Card from '../components/Card'

interface IProducts {
  id: number,
  name: string,
  price: number,
  score: number,
  image: string
}

export default function useOrder (listItens : IProducts[]): [React.ReactNode, (arg: string) => void] {
  const [items, setItems] = useState('id')

  function orderList () {
    if (listItens) {
      switch (items) {
        case 'price':
          return listItens
            .sort((a, b) => a.price - b.price)
        case 'name':
          return listItens
            .sort((a, b) => {
              if (a.name < b.name) {
                return -1
              } else {
                return 0
              }
            })
        case 'score':
          return listItens
            .sort((a, b) => a.score - b.score)
        default:
          return listItens
            .sort((a, b) => {
              if (a.id < b.id) {
                return -1
              } else {
                return 0
              }
            })
      }
    }
  }

  function showList () {
    const result = orderList()
    return result?.map((value: IProducts) => {
      return (
        <li key={value.id}>
          <Card product={value} />
        </li>
      )
    })
  }

  const toogleList = (select: string) => setItems(select)

  return [showList, toogleList]
}
