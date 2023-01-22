import styled from 'styled-components'
import { variables } from '../variables'

export const StyledNavbar = styled.nav`
    padding: 5vh 5vw;
    background-color: ${variables.colors.darkGray};

    ul {
        line-height: 2rem;

        li {
            list-style-position: outside;
            padding-left: 1vw;
        }

        ul {
            padding-left: 2vw;
        }
    }
`

export const StyledLink = styled.li<{ src: string }>`
    list-style-image: url(${(props) => props.src});
`
