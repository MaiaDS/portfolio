import styled from 'styled-components'
import { rem, responsiveMediaQueries } from '../utils/utils'

export const StyledLandingPage = styled.main`
    width: 100%;
    height: 100vh;
    overflow: hidden;
    display: flex;
    padding: ${({ theme }) => theme.spacing.xl};
    position: relative;

    @media ${responsiveMediaQueries.portrait} {
        flex-direction: column-reverse;
        padding: ${({ theme }) => theme.spacing.m};
    }

    svg {
        position: absolute;

        &:first-of-type {
            top: ${rem(-50)};
            right: ${rem(-50)};

            @media ${responsiveMediaQueries.portrait} {
                top: ${rem(-200)};
                right: ${rem(-100)};
                scale: 0.9;
                transform: rotate(180deg);
            }
        }

        @media ${responsiveMediaQueries.landscape} {
            &:last-of-type {
                bottom: ${rem(-50)};
                left: ${rem(-50)};
                transform: scaleY(-1);
            }
        }

        path:nth-child(even) {
            fill: ${({ theme }) => theme.colors.secondary};
        }

        path:nth-child(odd) {
            fill: ${({ theme }) => theme.colors.primary};
        }
    }

    > a {
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        bottom: ${({ theme }) => theme.spacing.l};
        text-transform: uppercase;
        font-variant: small-caps;
        color: ${({ theme }) => theme.colors.primary};
        border-bottom: 2px solid ${({ theme }) => theme.colors.secondary};
        padding-bottom: ${({ theme }) => theme.spacing.xs};
        font-size: ${({ theme }) => theme.fonts.sizes.small};
        font-family: ${({ theme }) => theme.fonts.families.primary.medium};
        z-index: 10;

        @media ${responsiveMediaQueries.portrait} {
            position: inherit;
            bottom: unset;
            left: unset;
            transform: none;
            width: fit-content;
            margin: ${({ theme }) => theme.spacing.xl} auto 0;
        }
    }

    section {
        width: fit-content;
        position: inherit;
        z-index: 10;

        @media ${responsiveMediaQueries.portrait} {
            width: min-content;
            margin: 0 auto;
        }

        h1 {
            font-size: ${rem(125)};
            letter-spacing: ${rem(-4)};
            line-height: ${rem(90)};
            font-variant-caps: normal;
            color: ${({ theme }) => theme.colors.dark};

            @media ${responsiveMediaQueries.portrait} {
                font-size: ${rem(65)};
                line-height: ${rem(50)};
            }

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
            font-size: ${({ theme }) => theme.fonts.sizes.h1};
            letter-spacing: ${rem(17)};
            text-align: justify;
            text-justify: inter-character;

            @media ${responsiveMediaQueries.portrait} {
                line-height: ${rem(25)};
                letter-spacing: ${rem(19)};
            }
        }
    }

    .threejs {
        position: absolute !important;
        inset: auto 0 0 auto;
        z-index: 5;

        @media ${responsiveMediaQueries.portrait} {
            position: initial !important;
            height: ${rem(420)} !important;
        }
    }
`
