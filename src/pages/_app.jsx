import { MuiThemeProvider } from "@material-ui/core/styles"
import React from "react"
import App from "../components/App"
import theme from "../theme"
import "./../components/layout.css"
import "typeface-roboto"

const IndexPage = () => (
  <MuiThemeProvider {...{ theme }}>
    <App />
  </MuiThemeProvider>
)

// <Layout>
// {/* <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} /> */}
// </Layout>

export default IndexPage
