import styled from 'styled-components'
import { rem } from '../utils/utils'

export const StyledLandingPage = styled.main`
    height: 100vh;
    display: flex;
    padding: ${({ theme }) => theme.spacing.xl};
    position: relative;

    svg {
        position: absolute;

        &:first-of-type {
            top: ${rem(-50)};
            right: ${rem(-50)};
        }

        &:last-of-type {
            bottom: ${rem(-50)};
            left: ${rem(-50)};
            transform: scaleY(-1);
        }

        path:nth-child(even) {
            fill: ${({ theme }) => theme.colors.secondary};
        }

        path:nth-child(odd) {
            fill: ${({ theme }) => theme.colors.primary};
        }
    }

    section {
        width: fit-content;
        position: inherit;
        z-index: 10;
        h1 {
            font-size: ${rem(125)};
            letter-spacing: ${rem(-4)};
            line-height: ${rem(90)};
            font-variant-caps: normal;
            color: ${({ theme }) => theme.colors.dark};

            span {
                display: inline-block;
                width: fit-content;
                transform: rotate(180deg);
                margin-left: ${rem(4)};
                padding-top: ${rem(1)};
            }
        }

        h2 {
            padding-left: ${rem(5)};
            font-size: ${({ theme }) => theme.fontSizes.h1};
            letter-spacing: ${rem(13.5)};
            text-align: justify;
            text-justify: inter-character;
        }
    }

    > div {
        flex: 1 1 auto;
        width: unset !important;
    }

    > span {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: ${({ theme }) => theme.spacing.l};
        text-transform: uppercase;
        font-variant: small-caps;
        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
        padding-bottom: ${({ theme }) => theme.spacing.xs};
        font-size: ${({ theme }) => theme.fontSizes.small};
        font-family: 'Marianne-Medium';
    }
`
