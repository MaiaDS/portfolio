import { BeehiveSVG } from '@/components/BeehiveSVG'
import ThreejsCanvas from '@/components/threejs/ThreejsCanvas'
import CombeeModel from '@/components/threejs/combeeModel/CombeeModel'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'

const LandingPage = () => {
    const router = useRouter()
    const { theme } = useCustomThemeContext()

    const [shouldSwitchPage, setShouldSwitch] = useState<boolean>(false)

    const handleWheel = () => {
        setShouldSwitch(true)
    }

    useEffect(() => {
        if (shouldSwitchPage) router.push('/readme')
    }, [shouldSwitchPage])

    useEffect(() => {
        window.addEventListener('wheel', handleWheel)
        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])

    return (
        <StyledLandingPage>
            <BeehiveSVG />
            {theme === ScreenFormats.LANDSCAPE && <BeehiveSVG />}
            <Link href="/readme">{theme === ScreenFormats.LANDSCAPE && 'Scroll to'} enter</Link>
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
