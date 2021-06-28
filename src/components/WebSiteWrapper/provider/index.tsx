import { ThemeProvider } from 'styled-components'
import { createContext, useEffect, useState, useRef } from 'react'
// import light from '../../../../src/theme/themes/light'
// import dark from '../../../../src/theme/themes/dark'
import { dark, light } from '../../../theme'

export const ModeContext = createContext({
  toggleModeContext: () => {}
})

export default function WebSiteGlobalProvider ({ children }: any) {
  const [theme, setTheme] = useState(light)
  const flag = useRef(false)

  function checkTheme () {
    const mode = localStorage.getItem('theme')
    setTheme(mode === dark.title ? dark : light)
  }
  useEffect(() => {
    if (flag.current) {
      localStorage.setItem('theme', theme.title)
    } else {
      checkTheme()
      flag.current = true
    }
  }, [theme])

  return (
    <ModeContext.Provider value={{
      toggleModeContext: () => {
        setTheme(theme.title === 'light' ? dark : light)
      }
    }}>
      <ThemeProvider theme={theme}>
        {children}
      </ThemeProvider>
    </ModeContext.Provider>
  )
}
