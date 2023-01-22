import styled from 'styled-components'
import { rem, variables } from '../variables'

export const TagList = styled.div`
    display: inline-flex;
    flex-wrap: wrap;
    gap: ${rem(15)};
`

export const StyledQuote = styled.figure`
    background-color: ${variables.colors.darkGray};
    border-radius: ${variables.borderRadius};
    padding: ${rem(20)};
    q {
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
        margin-top: ${rem(20)};
        text-align: end;
    }
`

export const StyledHome = styled.main`
    > div {
        margin-bottom: ${rem(40)};
        h1,
        h2 {
            text-transform: uppercase;
            letter-spacing: 0.25rem;
            font-variant-caps: all-small-caps;
        }
        p {
            margin-bottom: ${rem(25)};
        }
    }
`
