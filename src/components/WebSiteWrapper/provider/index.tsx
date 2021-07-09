import { ThemeProvider } from 'styled-components'
import { createContext } from 'react'
import useTheme from '../../../hooks/useTheme'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})

export default function WebSiteGlobalProvider ({ children }: any) {
  const [thema, setThema] = useTheme()

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => {
        setThema()
      }
    }}>
      <ThemeProvider theme={thema}>
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}
