import '../styles/utils/_reset.scss'
import type { AppProps } from 'next/app'
import { GlobalStyle } from '@/styles/GlobalStyle'
import { Fonts } from '@/styles/utils/utils'
import { CustomThemeProvider } from '@/utils/CustomTheme'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <CustomThemeProvider>
            <Fonts />
            <GlobalStyle />
            <Component {...pageProps} />
        </CustomThemeProvider>
    )
}

export default App
