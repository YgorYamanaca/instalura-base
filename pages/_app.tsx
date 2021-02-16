import React from 'react';
import { ThemeProvider } from 'styled-components';
import theme from '../src/theme';
import { AppProps } from 'next/app';
import { GlobalStyle } from '../src/components/GlobalStyle';
import Head from 'next/head';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <React.Fragment>
      <Head>
        <title>Projeto base - instalura</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href={`https://fonts.googleapis.com/css2?family=Rubik:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap`} rel="stylesheet" />
      </Head>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Component {...pageProps} />
      </ThemeProvider>
    </React.Fragment>
  )
}

export default App