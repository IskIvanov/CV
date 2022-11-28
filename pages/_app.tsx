import Head from 'next/head'
import { ThemeProvider as MuiThemeProvider, createTheme } from '@mui/material/styles';
import { ThemeProvider } from 'next-themes';
import 'nextra-theme-blog/style.css'
import '../styles/global.css'

const MuIdarkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#fff',
    },

  },
});

export default function Nextra({ Component, pageProps }) {
  return (
    <>
    <MuiThemeProvider theme={MuIdarkTheme}>
    <ThemeProvider attribute="class">
      <Head>
        <link
          rel="alternate"
          type="application/rss+xml"
          title="RSS"
          href="/feed.xml"
        />
        <link
          rel="preload"
          href="/fonts/Inter-roman.latin.var.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
      </Head>
      <Component {...pageProps} />
      </ThemeProvider>
      </MuiThemeProvider>
    </>
  )
}
