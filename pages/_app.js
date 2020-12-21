import * as React from 'react'
import Router from 'next/router'
import { AppProps } from 'next/app'
import NProgress from 'nprogress'

import './styles/index.css';
import './styles/seperator.css';
import './styles/styles.css';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeComplete', () => NProgress.done())
Router.events.on('routeChangeError', () => NProgress.done())

const App = ({ Component, pageProps }) => {
  return <Component {...pageProps} />
}

export default App