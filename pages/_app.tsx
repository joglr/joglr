import '../styles/reset.css'
import '../styles/globals.css'
import '@fontsource/comic-mono/400.css'
import '@fontsource/comic-mono/700.css'
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
