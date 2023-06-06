import styled from 'styled-components'
import { hexToRgba, rem, responsiveMediaQueries } from '../utils/utils'

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
        h1 {
            margin-bottom: ${({ theme }) => theme.spacing.l};
        }

        nav {
            margin-bottom: ${rem(25)};
            position: relative;
            z-index: 25;

            @media ${responsiveMediaQueries.mobile} {
                z-index: 0;
            }

            ul {
                display: flex;
                list-style: none;
                gap: ${({ theme }) => theme.spacing.xl};

                @media ${responsiveMediaQueries.mobile} {
                    justify-content: space-between;
                    gap: unset;
                }

                a {
                    padding-bottom: ${({ theme }) => theme.spacing.xs};
                    border-bottom: 2px solid transparent;
                    transition: border-color 0.3s ease-in-out;

                    h2 {
                        font-size: ${({ theme }) => theme.fonts.sizes.h3};

                        @media ${responsiveMediaQueries.mobile} {
                            font-size: ${({ theme }) => theme.fonts.sizes.default};
                            font-family: ${({ theme }) => theme.fonts.families.secondary.regular};
                            color: ${({ theme }) => theme.colors.primary};
                        }
                    }

                    &.selected {
                        border-color: ${({ theme }) => theme.colors.secondary};
                    }

                    @media ${responsiveMediaQueries.mobile} {
                        display: flex;
                        flex-direction: column;
                        justify-content: center;
                        align-items: center;
                        gap: ${({ theme }) => theme.spacing.xs};
                        border: none;
                        padding-bottom: 0;
                        width: ${rem(80)};

                        span {
                            background-color: ${({ theme }) => theme.colors.primary};
                            width: ${rem(50)};
                            height: ${rem(55)};
                            clip-path: polygon(
                                0% 25%,
                                0% 75%,
                                50% 100%,
                                100% 75%,
                                100% 25%,
                                50% 0%
                            );
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            svg path {
                                fill: ${({ theme }) => theme.colors.light};
                            }
                        }

                        &.selected {
                            h2 {
                                color: ${({ theme }) => theme.colors.dark};
                            }
                            span {
                                background-color: ${({ theme }) => theme.colors.secondary};
                                svg path {
                                    fill: ${({ theme }) => theme.colors.dark};
                                }
                            }
                        }
                    }
                }
            }
        }

        section {
            svg {
                overflow: visible;

                @media ${responsiveMediaQueries.desktop} {
                    margin-left: ${rem(-20)};
                }
            }
        }
    }
`
