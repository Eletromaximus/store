import { Box } from '../../components/foundation/layout/Box'
import { Grid } from '../../components/foundation/layout/Grid'
import Menu from '../../components/Menu'
import { ListStyle, Banner, Navbar } from './styles'
import Card from '../../components/Card'
import { IProducts, products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import { useState } from 'react'

export default function Home () {
  const [items, setItems] = useState('id')

  function orderList () {
    switch (items) {
      case 'price':
        return products
          .sort((a, b) => a.price - b.price)
      case 'name':
        return products
          .sort((a, b) => {
            if (a.name < b.name) {
              return -1
            } else {
              return 0
            }
          })
      case 'score':
        return products
          .sort((a, b) => a.score - b.score)
      default:
        return products
          .sort((a, b) => {
            if (a.id < b.id) {
              return -1
            } else {
              return 0
            }
          })
    }
  }

  function showList () {
    const result = orderList()
    return result.map((value: IProducts) => {
      return (
        <li key={value.id}>
          <Card product={value} />
        </li>
      )
    })
  }

  return (
    <Box
      display='flex'
      flex='1'
      flexDirection='column'
      flexWrap='wrap'
      justifyContent='space-between'
    >
      <Menu />
      <Banner>
          Banner
      </Banner>
        <Grid.Col
          value={{
            md: 10
          }}
          offset={{
            md: 2
          }}
          padding='0'
        >
          <Navbar>
            <Button
              onClick={
                () => setItems('price')
              }
            >
              Preço
            </Button>

            <Button
              onClick={
                () => setItems('id')
              }
            >
              id
            </Button>

            <Button
              onClick={
                () => setItems('score')
              }
            >
              Score
            </Button>

            <Button
              onClick={
                () => setItems('name')
              }
            >
              Nome
            </Button>
          </Navbar>

          <ListStyle>
            {showList()}
          </ListStyle>

        </Grid.Col>
    </Box>
  )
}
