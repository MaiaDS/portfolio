import styled from 'styled-components'
import { rem, variables } from '../variables'

export const TagList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: ${rem(15)};
`

export const StyledQuote = styled.div`
    ${variables.glassEffect};
    border-radius: ${variables.borderRadius};
    padding: ${rem(20)};
    q {
        mix-blend-mode: overlay;
        &::before {
            content: '<';
            margin-right: ${rem(5)};
        }
        &::after {
            content: '/>';
            margin-left: ${rem(5)};
        }
    }
    figcaption {
        mix-blend-mode: overlay;
        margin-top: ${rem(20)};
        text-align: end;
    }
`

export const StyledComponent = styled.main`
    > div {
        margin-bottom: ${rem(40)};

        &:last-of-type {
            display: flex;
            gap: ${rem(20)};
        }
    }

    h1,
    h2 {
        text-transform: uppercase;
        letter-spacing: 0.25rem;
        font-variant-caps: all-small-caps;
    }

    p {
        margin-bottom: ${rem(20)};
    }
`
