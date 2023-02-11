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
                <h1>{DATA.name}</h1>
                <h2>{DATA.position}</h2>
            </div>
            <div>
                <p>{DATA.abstract.p1}</p>
                <p>{DATA.abstract.p2}</p>
                <p>{DATA.abstract.p3}</p>
            </div>
        </StyledOverview>
    )
}

export default Overview
