import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './components/App.jsx'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'
import ReactGA from 'react-ga'

ReactGA.initialize('UA-34976555-1')
ReactGA.pageview(window.location.pathname + window.location.search)

ReactDOM.render(
  <MuiThemeProvider {...{ theme }}>
    <App ReactGA={ReactGA} />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
