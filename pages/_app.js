import * as React from 'react'
import Router from 'next/router'
import * as gtag from '../lib/gtag'
import { AppProps } from 'next/app'
import Meta from './meta'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import ReactGA from 'react-ga';
import TagManager from 'react-gtm-module'


import './styles/index.css';
import './styles/pattern.min.css';

Router.events.on('routeChangeStart', () => NProgress.start())
Router.events.on('routeChangeError', () => NProgress.done())
Router.events.on('routeChangeComplete', () => NProgress.done())




const App = ({ Component, pageProps }) => {
  return <div>
    <Meta />
    <Component {...pageProps} />
  </div>
}

export default App