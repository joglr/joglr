import '../helpers/install-styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
// import { Link } from 'gatsby'
import React from 'react'
import Layout from '../components/Layout'
import SEO from '../components/SEO'
import App from '../components/App'
import theme from '../theme'

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
    <MuiThemeProvider {...{ theme }}>
      <App />
    </MuiThemeProvider>
  </Layout>
)

export default IndexPage
