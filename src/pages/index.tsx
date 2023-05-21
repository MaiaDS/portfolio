import { BeehiveSVG } from '@/components/BeehiveSVG'
import Combee from '@/components/threejs/combee/Combee'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'
import { useRouter } from 'next/router'
import { useEffect, useRef } from 'react'

const LandingPage = () => {
    const router = useRouter()
    const containerRef = useRef<HTMLElement>(null!)
    useEffect(() => {
        containerRef.current.addEventListener('wheel', () => {
            router.push('/readme')
        })
    }, [])
    return (
        <StyledLandingPage ref={containerRef}>
            <BeehiveSVG />
            <BeehiveSVG />
            <section>
                <h1>
                    Ma<span>ï</span>a
                    <br /> Da Silva
                </h1>
                <h2>Front-end Developer</h2>
            </section>
            <Combee />
            <span>Scroll to enter</span>
        </StyledLandingPage>
    )
}

export default LandingPage
