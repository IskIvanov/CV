import Head from 'next/head'
import { ThemeProvider } from 'next-themes';
import 'nextra-theme-blog/style.css'
import '../styles/global.css'

export default function Nextra({ Component, pageProps }) {
  return (
    <>
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
    </>
  )
}
