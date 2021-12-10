import '../styles/globals.css'
import type { AppProps } from 'next/app'

import { builder } from '@builder.io/react'

const BUILDER_API_KEY = 'bc7237c5a10c4007b34450d1db757d25'
builder.init(BUILDER_API_KEY)

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
export default MyApp
