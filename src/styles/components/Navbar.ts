import styled from 'styled-components'
import { rem, variables } from '../variables'

export const StyledNavbar = styled.nav`
    padding: 5vh 5vw;
    background-color: ${variables.colors.darkGray};

    ul {
        line-height: 2rem;

        li {
            list-style-position: outside;
            padding-left: ${rem(10)};
        }

        ul {
            padding-left: ${rem(10)};
        }
    }
`

export const StyledLink = styled.li<{ src: string }>`
    list-style-image: url(${(props) => props.src});
`
