import * as React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import Meta from './meta'
import NProgress from 'nprogress'

import './styles/index.css';
import './styles/pattern.min.css';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return <div>
    <Meta />
    <Component {...pageProps} />
  </div>
}

export default App