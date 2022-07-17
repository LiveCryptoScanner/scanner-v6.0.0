import React, { Fragment } from 'react'
import Document, { Html, Head, Main, NextScript } from 'next/document'
// import { ServerStyleSheets } from '@material-ui/styles'

import createEmotionServer from '@emotion/server/create-instance';
import createEmotionCache from '@/src/utils/createEmotionCache';
import theme from '@/src/utils/theme';


class _Document extends Document {
  render () {
    return (
      <Html lang='pt-BR' dir='ltr'>
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="shortcut icon" href="/images/favicon.png" />
          {/* <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" /> */}
          <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100,200,300,400,500,700&display=swap" rel="stylesheet"></link>
          <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

_Document.getInitialProps = async ctx => {
  // const sheets = new ServerStyleSheets()
  const originalRenderPage = ctx.renderPage

  const cache = createEmotionCache();
  const { extractCriticalToChunks } = createEmotionServer(cache);

  // ctx.renderPage = () => originalRenderPage({
  //   enhanceApp: WrappedComponent => props => sheets.collect(<WrappedComponent {...props} />)
  // })

  ctx.renderPage = () =>
    originalRenderPage({
      enhanceApp: (WrappedComponent) =>
        function EnhanceApp(props) {
          return <WrappedComponent emotionCache={cache} {...props} />;
        },
    });

  const initialProps = await Document.getInitialProps(ctx)

  const emotionStyles = extractCriticalToChunks(initialProps.html);
  const emotionStyleTags = emotionStyles.styles.map((style) => (
    <style
      data-emotion={`${style.key} ${style.ids.join(' ')}`}
      key={style.key}
      // eslint-disable-next-line react/no-danger
      dangerouslySetInnerHTML={{ __html: style.css }}
    />
  ));

  return {
    ...initialProps,
    emotionStyleTags,
  }
}

export default _Document
