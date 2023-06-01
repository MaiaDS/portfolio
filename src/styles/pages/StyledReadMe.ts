import styled from 'styled-components'
import { hexToRgba, rem } from '../utils/utils'

export const StyledReadMe = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.xl};

    section {
        display: flex;
        flex-direction: column;
        gap: ${({ theme }) => theme.spacing.l};

        p {
            max-width: 75%;
            &:not(:last-of-type) {
                margin-bottom: ${({ theme }) => theme.spacing.s};
            }
        }

        &:last-of-type {
            div {
                display: flex;
                align-items: center;
                gap: ${({ theme }) => theme.spacing.xs};
                svg path {
                    fill: ${({ theme }) => theme.colors.primary};
                }
            }
        }
    }

    .beehives svg {
        position: absolute;

        &:first-of-type {
            right: ${rem(-125)};
            bottom: ${rem(50)};
            transform: rotate(90deg);
        }

        &:last-of-type {
            left: 0;
            bottom: ${rem(-150)};
            transform: scaleY(-1);
        }

        --dropShadowColor: ${({ theme }) => hexToRgba(theme.colors.dark, 0.1)};
        filter: drop-shadow(0px 4px 24px var(--dropShadowColor));
        path {
            fill: ${({ theme }) => theme.colors.light};
        }
    }

    .threejs {
        position: absolute !important;
        bottom: 0;
        right: 0;
    }
`
