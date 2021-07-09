import { Box } from '../../components/foundation/layout/Box'
import { Grid } from '../../components/foundation/layout/Grid'
import Menu from '../../components/Menu'
import { Banner, ListStyle, Navbar } from './styles'
import { products } from '../../components/Products'
import Button from '../../components/foundation/Button'
import useOrder from '../../hooks/useOrder'
// import WebSitePageWrapper from '../../components/WebSiteWrapper'

export default function Home () {
  const [items, setItems] = useOrder(products)

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
            {items}
          </ListStyle>

        </Grid.Col>
    </Box>
  )
}
