import logo from './logo.svg'
import GlobalStyle from './theme/GlobalStyle'
import WebSiteGlobalProvider from './components/WebSiteWrapper/provider'
import Home from './pages/Home'

function App () {
  return (
  <WebSiteGlobalProvider>
    <GlobalStyle />
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
        <Home />
      </div>
  </WebSiteGlobalProvider>
  )
}

export default App
