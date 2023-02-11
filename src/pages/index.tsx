import AnimatedCard from '@/components/animated-card'
import Overview from '@/components/overview'
import ResumeButtons from '@/components/resume-buttons'
import { StyledLandingPage } from '@/styles/components/LandingPage'

export default function Home() {
    return (
        <StyledLandingPage>
            <AnimatedCard />
            <div>
                <Overview />
                <ResumeButtons />
            </div>
        </StyledLandingPage>
    )
}
