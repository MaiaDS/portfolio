import { createGlobalStyle } from 'styled-components'
import { ICustomTheme } from './utils/theme'

export const GlobalStyle = createGlobalStyle<{ theme: ICustomTheme }>`

body {
    background-color: ${({ theme }) => theme.colors.light};
    color: ${({ theme }) => theme.colors.dark};
    font-size: ${({ theme }) => theme.fontSizes.default};
    font-family: 'Marianne-Regular';

    * {
        box-sizing: border-box;
    }

    button {
        appearance: none;
        background-color: transparent;
        cursor: pointer;
    }

    a {
        cursor: pointer;
        display: block;
    }

    h1,
    h2,
    h3,
    .title {
        font-family: 'CascadiaCode-Bold';
        text-transform: uppercase;
        font-variant-caps: all-small-caps;
        letter-spacing: 0.25rem;
        color: ${({ theme }) => theme.colors.primary};
    }

    h1 {
        font-size: ${(props) => props.theme.fontSizes.h1};
    }

    h2 {
        font-size: ${(props) => props.theme.fontSizes.h2};
    }

    h3 {
        font-size: ${(props) => props.theme.fontSizes.h3};
    }

    h4 {
        font-family: 'Marianne-Medium';
        font-size: ${(props) => props.theme.fontSizes.h4};
    }
}
    
`
