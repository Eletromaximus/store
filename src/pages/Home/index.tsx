import { Box } from '../../components/foundation/layout/Box'
import { Grid } from '../../components/foundation/layout/Grid'
import Menu from '../../components/Menu'
import { products } from '../../components/Products'
import { ListStyle } from './styles'

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
      <Grid.Container>

        <ListStyle>
          {products.map((produto) => {
            return (
              <li key={produto.id}>
                <img
                width='100px'
                height='100px'
                src={require(`../../images/${produto.image}`).default}
                alt={produto.name}
              />
              </li>
            )
          })}
        </ListStyle>

      </Grid.Container>

    </Box>
  )
}
