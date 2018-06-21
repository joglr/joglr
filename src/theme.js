import { createMuiTheme } from '@material-ui/core/styles'
import blue from '@material-ui/core/colors/blue'
import grey from '@material-ui/core/colors/grey'

export default createMuiTheme({
  palette: {
    primary: { main: grey[100] },
    secondary: blue
  }
})
