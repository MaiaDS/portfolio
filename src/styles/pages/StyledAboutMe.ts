import styled from 'styled-components'
import { hexToRgba, rem } from '../utils/utils'

export const StyledAboutMe = styled.main`
    > svg {
        position: absolute;

        &:first-of-type {
            top: ${rem(-125)};
            left: 20vw;
        }

        &:last-of-type {
            right: ${rem(-125)};
            bottom: ${rem(-50)};
            transform: scaleY(-1);
        }

        --dropShadowColor: ${({ theme }) => hexToRgba(theme.colors.dark, 0.1)};
        filter: drop-shadow(0px 4px 24px var(--dropShadowColor));
        path {
            fill: ${({ theme }) => theme.colors.light};
        }
    }
`
