import Button from '@/components/button'
import Navbar from '@/components/layout/Navbar'
import Overview from '@/components/overview'
import ResumeButtons from '@/components/resume-buttons'
import Tag from '@/components/tag'
import { DATA } from '@/data/data'
import { StyledComponent, StyledQuote, TagList } from '@/styles/components/About'

export default function About() {
    return (
        <>
            <Navbar />
            <StyledComponent>
                <Overview />
                <StyledQuote>
                    <q>
                        Maïa has shown great adaptability in moving environment as well as a
                        proactive mindset to support very qualitative delivery. She's solution
                        driven and able to propose options when facing a problem. Her skills and
                        communication capabilities make her an instrumental asset for the project
                        success.
                    </q>
                    <figcaption>—Sanofi project’s manager testimony</figcaption>
                </StyledQuote>
                <TagList>
                    {DATA.tags.map((tag, index) => (
                        <Tag key={index} content={tag} />
                    ))}
                </TagList>
                <ResumeButtons />
            </StyledComponent>
        </>
    )
}
