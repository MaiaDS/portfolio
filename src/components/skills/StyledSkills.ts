import styled from 'styled-components'
import { hexToRgba, rem } from '../../styles/utils/utils'

export const StyledSkills = styled.svg`
    .hexagons {
        --dropShadowColor: ${({ theme }) => hexToRgba(theme.colors.dark, 0.1)};
        filter: drop-shadow(0px 4px 24px var(--dropShadowColor));

        &.disabled path {
            fill: ${({ theme }) => theme.colors.light};
        }

        &.actives path {
            fill: ${({ theme }) => theme.colors.primary};
        }
    }

    .labels path {
        fill: ${({ theme }) => theme.colors.dark};
    }

    .strokes line {
        stroke: ${({ theme }) => theme.colors.secondary};
    }
`
