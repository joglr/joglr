import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './components/App.jsx'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'

ReactDOM.render(
  <MuiThemeProvider {...{ theme }}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
