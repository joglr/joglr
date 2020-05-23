import { ThemeProvider } from "@material-ui/core/styles"
import React from "react"
import theme from "../theme"
import Head from "next/head"
import CssBaseline from "@material-ui/core/CssBaseline"
import "./../components/layout.css"
import "typeface-roboto"

export default function App(props) {
  const { Component, pageProps } = props

  React.useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector("#jss-server-side")
    if (jssStyles) {
      jssStyles.parentElement.removeChild(jssStyles)
    }
  }, [])

  return (
    <React.Fragment>
      <Head>
        <meta name="description" content=""></meta>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
        <title>Home | Jonas Røssum – Web Developer</title>
        <meta
          name="description"
          content="Jonas Røssum is a self-taught web application developer and user experience creator based in Copenhagen, Denmark. "
        />
        <meta property="og:title" content="Home" />
        <meta
          property="og:description"
          content="Jonas Røssum is a self-taught web application developer and user experience creator based in Copenhagen, Denmark. "
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:creator" content="@jonasroessum" />
        <meta name="twitter:title" content="Jonas Røssum – Web Developer" />
        <meta
          name="twitter:description"
          content="Jonas Røssum is a self-taught web application developer and user experience creator based in Copenhagen, Denmark. "
        />
        <meta name="keywords" content="react. javascript" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}
