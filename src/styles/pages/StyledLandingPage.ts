import styled from 'styled-components'
import { rem } from '../utils/utils'

export const StyledLandingPage = styled.main`
    padding: ${({ theme }) => theme.spacing.xl};
    height: 100vh;
    position: relative;

    display: flex;

    > div {
        &:first-of-type {
            width: fit-content;
            /* position: inherit; */
            z-index: 10;
            h1 {
                font-size: ${rem(125)};
                letter-spacing: ${rem(-4)};
                line-height: ${rem(90)};
                font-variant-caps: normal;

                span {
                    display: inline-block;
                    width: fit-content;
                    transform: rotate(180deg);
                }
            }

            h2 {
                padding-left: ${rem(5)};
                color: ${({ theme }) => theme.colors.primary};
                font-size: ${({ theme }) => theme.fontSizes.h1};
                letter-spacing: ${rem(13.5)};
                text-align: justify;
                text-justify: inter-character;
            }
        }

        &:last-of-type {
            flex: 1 1 auto;
            width: unset !important;
        }
    }

    svg {
        position: absolute;

        &:first-of-type {
            top: ${rem(-50)};
            right: ${rem(-50)};
        }

        &:last-of-type {
            bottom: ${rem(-50)};
            left: ${rem(-50)};
        }

        path:nth-child(odd) {
            fill: ${({ theme }) => theme.colors.secondary};
        }

        path:nth-child(even) {
            fill: ${({ theme }) => theme.colors.primary};
        }
    }
`
