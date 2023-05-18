import { BeehiveSVG } from '@/components/BeehiveSVG'
import Combee from '@/components/threejs/combee/Combee'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'
import { useRouter } from 'next/router'
import { useEffect } from 'react'

const LandingPage = () => {
    const router = useRouter()
    useEffect(() => {
        window.addEventListener('wheel', () => {
            router.push('/readme')
        })
    }, [])
    return (
        <StyledLandingPage>
            <BeehiveSVG />
            <BeehiveSVG />
            <div>
                <h1>
                    Ma<span>ï</span>a
                    <br /> Da Silva
                </h1>
                <h2>Front-end Developer</h2>
            </div>
            <Combee />
            <span>Scroll to enter</span>
        </StyledLandingPage>
    )
}

export default LandingPage
