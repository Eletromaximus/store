import { useContext } from 'react'
import Button from '../../components/foundation/Button'
import { Box } from '../../components/foundation/layout/Box'
import { ModeContext } from '../../components/WebSiteWrapper/provider'
import Text from '../../components/foundation/Text'

export default function Home () {
  const modeChange = useContext(ModeContext)
  return (
    <Box>
      <Button
        onClick={
          () => modeChange.toggleModeContext()
        }>
          Troca
      </Button>
        <Text>
          Batata
        </Text>
    </Box>
  )
}
