import '../styles/utils/_reset.scss'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { Fonts } from '@/styles/utils/utils'
import { CustomThemeProvider } from '@/utils/CustomTheme'
import Head from 'next/head'
import { CustomTheme } from '@/styles/utils/theme'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <CustomThemeProvider>
            <Fonts />
            <GlobalStyle />
            <Head>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
                <link
                    rel="mask-icon"
                    href="/safari-pinned-tab.svg"
                    color={CustomTheme.colors.primary}
                />
                <meta name="msapplication-TileColor" content={CustomTheme.colors.secondary} />
                <meta name="theme-color" content={CustomTheme.colors.light} />
            </Head>
            <Component {...pageProps} />
        </CustomThemeProvider>
    )
}

export default App
