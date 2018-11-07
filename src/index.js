import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from '@material-ui/core/styles'
import App from './components/App.jsx'
import * as serviceWorker from './serviceWorker'
import theme from './theme'

ReactDOM.render(
  <MuiThemeProvider {...{ theme }}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root')
)
serviceWorker.register()
