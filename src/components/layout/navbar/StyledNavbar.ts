import { rem } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    width: 100%;

    ul {
        display: flex;
        gap: ${({ theme }) => theme.spacing.l};
        align-items: center;
        justify-content: end;

        a {
            padding-bottom: ${({ theme }) => theme.spacing.xs};

            &:not(.ico) {
                color: ${({ theme }) => theme.colors.dark};
                font-family: 'Marianne-Bold';
                letter-spacing: ${rem(4)};
                border-bottom: 2px solid transparent;
                transition: border-color 0.3s ease-in-out;

                &:hover,
                &.active {
                    color: ${({ theme }) => theme.colors.primary};
                    border-color: ${({ theme }) => theme.colors.secondary};
                }
            }

            svg path {
                fill: ${({ theme }) => theme.colors.dark};

                &:hover {
                    fill: ${({ theme }) => theme.colors.primary};
                }
            }
        }
    }
`
