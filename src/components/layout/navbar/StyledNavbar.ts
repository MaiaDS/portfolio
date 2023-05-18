import { rem } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    ul {
        display: flex;
        gap: ${({ theme }) => theme.spacing.m};
        align-items: center;
        justify-content: end;

        a {
            color: ${({ theme }) => theme.colors.dark};
            font-family: 'Marianne-Bold';
            letter-spacing: ${rem(4)};

            &:hover,
            &.active {
                color: ${({ theme }) => theme.colors.primary};
                padding-bottom: ${({ theme }) => theme.spacing.xs};
                border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
            }
        }
    }
`
