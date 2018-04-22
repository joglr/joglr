import React from 'react'
import ReactDOM from 'react-dom'
import { MuiThemeProvider } from 'material-ui/styles'
import App from './components/App'
import registerServiceWorker from './registerServiceWorker'
import theme from './theme'
import './index.css'

ReactDOM.render(
  <MuiThemeProvider {...{theme}}><App />
  </MuiThemeProvider>, document.getElementById('root'))
registerServiceWorker()
