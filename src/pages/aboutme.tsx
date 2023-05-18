import { BeehiveSVG } from '@/components/BeehiveSVG'
import MainLayout from '@/components/layout/MainLayout'
import { StyledAboutMe } from '@/styles/pages/StyledAboutMe'

const AboutMe = () => {
    return (
        <MainLayout>
            <StyledAboutMe>
                <h1>About.Me</h1>

                <BeehiveSVG />
                <BeehiveSVG />
            </StyledAboutMe>
        </MainLayout>
    )
}

export default AboutMe
