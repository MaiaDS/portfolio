import styled from 'styled-components'
import { rem, variables } from '../variables'

export const StyledLayout = styled.div`
    font-family: 'CascadiaCode-Regular';
    background-color: ${variables.colors.darkGray};
    color: ${variables.colors.lightGray};
    display: flex;
    min-height: 100vh;

    main {
        flex: 1 1 auto;
        padding: ${rem(50)};
    }

    * {
        box-sizing: border-box;
    }

    h1,
    h2,
    h3,
    strong {
        font-family: 'CascadiaCode-Bold';
    }

    h1 {
        font-size: ${rem(40)};
    }

    h2 {
        font-size: ${rem(30)};
    }
`
