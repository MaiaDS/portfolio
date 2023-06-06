import { rem, responsiveMediaQueries } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledNavbar = styled.nav`
    width: 100%;
    position: relative;
    z-index: 20;

    > button {
        position: relative;
        z-index: 35;
        svg path {
            fill: ${({ theme }) => theme.colors.light};
        }
    }

    > ul {
        position: relative;
        z-index: 30;
    }

    .threejs {
        display: initial;
        position: fixed !important;
        inset: 0;
    }

    &.hidden {
        > ul,
        .threejs {
            display: none;
        }

        > button {
            width: ${rem(50)};
            height: ${rem(50)};
            background-color: ${({ theme }) => theme.colors.primary};
            clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
            display: flex;
            justify-content: center;
            align-items: center;
        }
    }

    &.visible {
        ul {
            display: flex;
            gap: ${({ theme }) => theme.spacing.l};
            align-items: center;
            justify-content: end;

            a {
                padding-bottom: ${({ theme }) => theme.spacing.xs};

                &:not(.ico) {
                    color: ${({ theme }) => theme.colors.dark};
                    font-family: ${({ theme }) => theme.fonts.families.primary.bold};
                    letter-spacing: ${rem(4)};
                    border-bottom: 2px solid transparent;
                    transition: border-color 0.3s ease-in-out;

                    &:hover,
                    &.active {
                        color: ${({ theme }) => theme.colors.primary};
                        border-color: ${({ theme }) => theme.colors.secondary};
                    }

                    @media ${responsiveMediaQueries.mobile} {
                        text-transform: uppercase;
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

        @media ${responsiveMediaQueries.mobile} {
            position: fixed;
            inset: 0;
            height: 100vh;
            width: 100vw;
            background-image: url('/assets/menu-background.png');
            background-repeat: no-repeat;
            background-position: center;
            background-size: cover;

            > ul {
                height: 100%;
                flex-direction: column-reverse;
                justify-content: center;

                li:first-of-type ul {
                    flex-direction: column;
                }
            }

            > button {
                width: ${rem(90)};
                height: ${rem(125)};
                position: absolute;
                left: 50%;
                transform: translateX(-50%);
                bottom: 9%;
            }
        }
    }
`
