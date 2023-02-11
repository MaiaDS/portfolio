import styled from 'styled-components'
import { rem } from '../variables'

export const StyledLandingPage = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;

    > div:last-of-type {
        width: ${rem(600)};
        margin-left: ${rem(80)};
        > div:last-of-type {
            margin-top: ${rem(50)};
        }
    }
`
