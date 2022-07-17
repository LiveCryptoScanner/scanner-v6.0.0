import React from 'react'
import App  from 'next/app'
// import Head from 'next/head'
// import wrapper from '../src/store'
import { Provider } from 'react-redux'

// import './index.css';
// import './css/style.css';

import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider } from '@emotion/react';
import store from '@/src/store/store'

import theme from '@/src/utils/theme';
import createEmotionCache from '@/src/utils/createEmotionCache';

const clientSideEmotionCache = createEmotionCache();

class _App extends App {
  static async getInitialProps ({ Component, ctx }) {
    return {
      pageProps: {
        ...(Component.getInitialProps ? await Component.getInitialProps(ctx) : {}),
        pathname: ctx.pathname,
      }
    }
  }

  componentDidMount () {
    const jssStyles = document.querySelector('#jss-server-side')
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles)
    }
  }

  render () {
    const {
      Component,
      emotionCache = clientSideEmotionCache,
      pageProps,
    } = this.props

    return (
      <CacheProvider value={emotionCache}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Provider store={store}>
            <Component {...pageProps} />
          </Provider>
        </ThemeProvider>
      </CacheProvider>
    )
  }
}


export default _App;

// export default wrapper.withRedux(_App)
