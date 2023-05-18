import '../styles/_reset.scss'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components'
import { CustomTheme } from '@/styles/utils/theme'
import { GlobalStyle } from '@/styles/GlobalStyle'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={CustomTheme}>
            <GlobalStyle />
            <Component {...pageProps} />
        </ThemeProvider>
    )
}

export default App
