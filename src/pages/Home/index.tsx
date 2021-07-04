import { Box } from '../../components/foundation/layout/Box'
import { Grid } from '../../components/foundation/layout/Grid'
import Menu from '../../components/Menu'
import { ListStyle, Banner } from './styles'
import Card from '../../components/Card'
import { products } from '../../components/Products'

export default function Home () {
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
          <ListStyle>
            {products.map((produto) => {
              return (
                <li key={produto.id}>
                  <Card product={produto} />
                </li>
              )
            })}
          </ListStyle>
        </Grid.Col>
    </Box>
  )
}
