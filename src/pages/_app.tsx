import '../styles/_reset.scss'
import type { AppProps } from 'next/app'
import Navbar from '@/components/layout/Navbar'
import { StyledLayout } from '@/styles/components/Layout'
import { Font } from '@/styles/variables'

export default function App({ Component, pageProps }: AppProps) {
    return (
        <>
            <Font />
            <StyledLayout>
                <Navbar />
                <Component {...pageProps} />
            </StyledLayout>
        </>
    )
}
