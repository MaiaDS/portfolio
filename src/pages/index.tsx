import { BeehiveSVG } from '@/components/BeehiveSVG'
import ThreejsCanvas from '@/components/threejs/ThreejsCanvas'
import CombeeModel from '@/components/threejs/combeeModel/CombeeModel'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'
import { useCustomThemeContext } from '@/utils/CustomTheme'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const LandingPage = () => {
    const router = useRouter()

    const handleWheel = () => {
        router.push('/readme')
    }

    const { theme } = useCustomThemeContext()

    useEffect(() => {
        window.addEventListener('wheel', handleWheel)
        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])
    return (
        <StyledLandingPage>
            <BeehiveSVG />
            {theme === 'desktop' && <BeehiveSVG />}
            <Link href="/readme">{theme === 'desktop' && 'Scroll to'} enter</Link>
            <section>
                <h1>
                    Ma<span>ï</span>a
                    <br /> Da Silva
                </h1>
                <h2>Front-end Developer</h2>
            </section>
            <ThreejsCanvas>
                <CombeeModel />
            </ThreejsCanvas>
        </StyledLandingPage>
    )
}

export default LandingPage
