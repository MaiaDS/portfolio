import Tag from '@/components/tag'
import { TAGS } from '@/data/tags'
import { TagList } from '@/styles/components/Home'

export default function Home() {
    return (
        <>
            <main>
                <h1>Maia Da Silva</h1>
                <h2>Front-end Developer</h2>
                <div>
                    <p>
                        Currently working as a front-end developer in France, I'm planing to
                        relocate to Toronto, Canada.
                    </p>
                    <p>
                        I initially studied graphic design which enables me to understand better the
                        designers I'm working with, and so improving communication within the team
                        one another. Curiosity and rigour are my keywords. I adapt quickly and am
                        self-reliant.
                    </p>
                    <figure>
                        <blockquote>
                            <q>
                                Maia has shown great adaptability in moving environment as well as a
                                proactive mindset to support very qualitative delivery. She's
                                solution driven and able to propose options when facing a problem.
                                Her skills and communication capabilities make her an instrumental
                                asset for the project success.
                            </q>
                        </blockquote>
                        <figcaption>—Sanofi project's manager testimony</figcaption>
                    </figure>
                </div>
                <TagList>
                    {TAGS.map((tag, index) => (
                        <Tag key={index} content={tag} />
                    ))}
                </TagList>
            </main>
        </>
    )
}
