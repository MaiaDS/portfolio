import Button from '@/components/button'
import Navbar from '@/components/layout/Navbar'
import Overview from '@/components/overview'
import ResumeButtons from '@/components/resume-buttons'
import Tag from '@/components/tag'
import { DATA } from '@/data/data'
import { StyledComponent, StyledQuote, TagList } from '@/styles/components/About'
import { variables } from '@/styles/variables'

export default function About() {
    return (
        <>
            <Navbar />
            <StyledComponent>
                <Overview />
                <StyledQuote>
                    <q>{DATA.testimony.quote}</q>
                    <figcaption>—{DATA.testimony.who}</figcaption>
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
