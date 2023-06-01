import { BeehiveSVG } from '@/components/BeehiveSVG'
import ThreejsCanvas from '@/components/threejs/ThreejsCanvas'
import CombeeModel from '@/components/threejs/combeeModel/CombeeModel'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'
import { Vector3 } from 'three'

const LandingPage = () => {
    const router = useRouter()

    const handleWheel = () => {
        router.push('/readme')
    }
    useEffect(() => {
        window.addEventListener('wheel', handleWheel)
        return () => {
            window.removeEventListener('wheel', handleWheel)
        }
    }, [])
    return (
        <StyledLandingPage>
            <BeehiveSVG />
            <BeehiveSVG />
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
            <span>Scroll to enter</span>
        </StyledLandingPage>
    )
}

export default LandingPage
