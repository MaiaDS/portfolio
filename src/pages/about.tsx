import Button from '@/components/button'
import Navbar from '@/components/layout/Navbar'
import Tag from '@/components/tag'
import { DATA } from '@/data/data'
import { StyledComponent, StyledQuote, TagList } from '@/styles/components/About'
import { variables } from '@/styles/variables'

export default function About() {
    return (
        <>
            <Navbar />
            <StyledComponent>
                <div>
                    <h1>Maïa Da Silva</h1>
                    <h2>Front-end Developer</h2>
                </div>
                <div>
                    <p>
                        Currently working as a front-end developer in France, I’m planing to
                        relocate to Toronto, Canada.
                    </p>
                    <p>
                        I initially studied graphic design which enables me to understand better the
                        designers I’m working with, and so improving communication within the team
                        one another.
                    </p>
                    <p>
                        Curiosity and rigour are my keywords. I adapt quickly and am self-reliant. I
                        like to grow alongside others while challenging myself.
                    </p>
                </div>
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
                <div>
                    <Button
                        label="CV"
                        icon="assets/icons/desktop-download.svg"
                        color={variables.colors.arrayBlue}
                        hoverBgColor={variables.colors.orange}
                        onClick={() => {}}
                    />
                    <Button
                        label="See more on LinkedIn"
                        icon="assets/icons/in.svg"
                        color={variables.colors.arrayBlue}
                        hoverBgColor={variables.colors.orange}
                        onClick={() => {
                            window.open(DATA.linkedin, '_blank')
                        }}
                    />
                </div>
            </StyledComponent>
        </>
    )
}
