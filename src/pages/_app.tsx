import '../styles/utils/_reset.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CustomTheme } from '@/styles/utils/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { Fonts } from '@/styles/utils/utils'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={CustomTheme}>
            <Fonts />
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
