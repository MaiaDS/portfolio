import '../styles/_reset.scss'
import type { AppProps } from 'next/app'
import { StyledLayout } from '@/styles/components/Layout'
import { Font } from '@/styles/variables'

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <>
            <Font />
            <StyledLayout>
                <Component {...pageProps} />
            </StyledLayout>
        </>
    )
}

export default App
