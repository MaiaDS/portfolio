import { DATA } from '@/data/data'
import { rem } from '@/styles/variables'
import styled from 'styled-components'

export const StyledOverview = styled.div`
    h1,
    h2 {
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-variant-caps: all-small-caps;
    }
    p {
        margin-bottom: ${rem(20)};
    }

    > div:first-of-type {
        margin-bottom: ${rem(40)};
    }
`

const Overview = () => {
    return (
        <StyledOverview>
            <div>
                <h1>Maïa Da Silva</h1>
                <h2>Front-end Developer</h2>
            </div>
            <div>
                <p>
                    Currently working as a front-end developer in France, I’m planing to relocate to
                    Toronto, Canada.
                </p>
                <p>
                    I initially studied graphic design which enables me to understand better the
                    designers I’m working with, and so improving communication within the team one
                    another.
                </p>
                <p>
                    Curiosity and rigour are my keywords. I adapt quickly and am self-reliant. I
                    like to grow alongside others while challenging myself.
                </p>
            </div>
        </StyledOverview>
    )
}

export default Overview
