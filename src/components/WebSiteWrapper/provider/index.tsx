import { ThemeProvider } from 'styled-components'
import { createContext } from 'react'
import useTheme from '../../../hooks/useTheme'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})

export default function WebSiteGlobalProvider ({ children }: any) {
  const [x, setX] = useTheme()

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => {
        setX()
      }
    }}>
      <ThemeProvider theme={x}>
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}
