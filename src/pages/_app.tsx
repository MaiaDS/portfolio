import '../styles/_reset.scss'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from '@/styles/utils/Themes'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={DefaultTheme}>
            <GlobalStyle>
                <Component {...pageProps} />
            </GlobalStyle>
        </ThemeProvider>
    )
}

export default App
