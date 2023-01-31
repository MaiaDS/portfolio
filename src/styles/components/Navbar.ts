import styled, { css } from 'styled-components'
import { rem, variables } from '../variables'

export const StyledNavbar = styled.nav`
    padding: ${rem(50)} 0 ${rem(50)} 0;
    background-color: ${variables.colors.darkGray};

    ul {
        line-height: 2rem;
        width: max-content;

        li {
            padding: 0 ${rem(50)} 0 ${rem(50)};
            list-style-position: inside;

            a {
                margin-left: ${rem(10)};
                color: ${variables.colors.lightGray};
            }
        }

        ul {
            padding-left: ${rem(10)};
        }
    }
`

export const StyledLink = styled.li<{ src: string }>`
    list-style-image: url(${(props) => props.src});
    border: 0.5px solid transparent;

    &.active,
    &:hover {
        background-color: ${variables.colors.darkBlue};
        border-color: ${variables.colors.lightBlue};
    }
`
