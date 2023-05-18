import { BeehiveSVG } from '@/components/BeehiveSVG'
import Combee from '@/components/threejs/combee/Combee'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'

const LandingPage = () => {
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
        </StyledLandingPage>
    )
}

export default LandingPage
