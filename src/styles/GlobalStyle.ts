import { createGlobalStyle } from 'styled-components'
import { ICustomTheme } from './utils/theme'
import { hexToRgba } from './utils/utils'

export const GlobalStyle = createGlobalStyle<{ theme: ICustomTheme }>`

body {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fonts.sizes.default};
    font-family: ${({ theme }) => theme.fonts.families.primary.regular};

    h1, h2, h3, h4,
    .title {
        color: ${({ theme }) => theme.colors.primary};
    }

    h1, h2, h3,
    .title {
        font-family: ${({ theme }) => theme.fonts.families.secondary.bold};
        letter-spacing: 0.25rem;
        font-variant-caps: all-small-caps;
        text-transform: uppercase;
    }

    h1 {
        font-size: ${(props) => props.theme.fonts.sizes.h1};
    }

    h2 {
        font-size: ${(props) => props.theme.fonts.sizes.h2};
    }

    h3 {
        font-size: ${(props) => props.theme.fonts.sizes.h3};
    }

    h4 {
        font-family: ${({ theme }) => theme.fonts.families.primary.regular};
    }

    strong {
        font-family: ${({ theme }) => theme.fonts.families.primary.bold};
    }

    .beehive {
        z-index: 0;
        position: absolute;
        --dropShadowColor: ${({ theme }) => hexToRgba(theme.colors.dark, 0.1)};
        filter: drop-shadow(0px 4px 24px var(--dropShadowColor));
        path {
            fill: ${({ theme }) => theme.colors.light};
        }
    }
}
    
`
