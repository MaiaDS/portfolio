import { BeehiveSVG } from '@/components/BeehiveSVG'
import { StyledLandingPage } from '@/styles/pages/StyledLandingPage'

const LandingPage = () => {
    return (
        <StyledLandingPage>
            <div>
                <h1>
                    Ma<span>ï</span>a
                    <br /> Da Silva
                </h1>
                <h2>Front-end Developer</h2>
            </div>
            <div>
                <BeehiveSVG />
                <BeehiveSVG />
            </div>
        </StyledLandingPage>
    )
}

export default LandingPage
