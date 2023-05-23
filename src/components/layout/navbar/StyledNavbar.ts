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
            color: ${({ theme }) => theme.colors.dark};
            font-family: 'Marianne-Bold';
            letter-spacing: ${rem(4)};
            padding-bottom: ${({ theme }) => theme.spacing.xs};
            border-bottom: 2px solid transparent;
            transition: border-color 0.3s ease-in-out;

            &:hover,
            &.active {
                color: ${({ theme }) => theme.colors.primary};
                border-color: ${({ theme }) => theme.colors.secondary};
            }
        }
    }
`
