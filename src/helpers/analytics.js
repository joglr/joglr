import ReactGA from 'react-ga'

if (process.env.NODE_ENV === 'production') {
  ReactGA.initialize('UA-34976555-1')
  ReactGA.pageview(window.location.pathname + window.location.search)
}
