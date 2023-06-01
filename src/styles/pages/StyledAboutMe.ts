import styled from 'styled-components'
import { hexToRgba, rem } from '../utils/utils'

export const StyledAboutMe = styled.main`
    > svg {
        position: absolute;

        top: ${rem(-150)};
        left: 20vw;

        --dropShadowColor: ${({ theme }) => hexToRgba(theme.colors.dark, 0.1)};
        filter: drop-shadow(0px 4px 24px var(--dropShadowColor));
        path {
            fill: ${({ theme }) => theme.colors.light};
        }
    }

    > div {
        position: relative;
        z-index: 10;

        h1 {
            margin-bottom: ${({ theme }) => theme.spacing.l};
        }

        nav {
            margin-bottom: ${rem(40)};
            position: relative;
            z-index: 20;

            ul {
                display: flex;
                list-style: none;
                gap: ${({ theme }) => theme.spacing.xl};

                a {
                    font-size: ${({ theme }) => theme.fontSizes.h3};
                    padding-bottom: ${({ theme }) => theme.spacing.xs};
                    border-bottom: 2px solid transparent;
                    transition: border-color 0.3s ease-in-out;

                    &.selected {
                        border-color: ${({ theme }) => theme.colors.secondary};
                    }
                }
            }
        }

        section {
            svg {
                overflow: visible;
            }
        }
    }
`
