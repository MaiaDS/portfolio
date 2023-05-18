import { createGlobalStyle } from 'styled-components'

export function rem(pixels: number, context: number = 16) {
    return `${pixels / context}rem`
}

export const colors = {
    white: '#ffffff',
    lightGrey: '#f5f5f5',
    black: '#333333',
    yellow: '#ffb600',
    tealBlue: '#006775',
    darkBlue: '#2f4858'
}

export const Fonts = createGlobalStyle`
    @font-face {
        font-family: 'CascadiaCode-Bold';
        src: url('/fonts/CascadiaCode-Bold.otf') format('otf'),
            url('/fonts/CascadiaCode-Bold.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Marianne-Regular';
        src: url('/fonts/Marianne-Regular.otf') format('otf'),
            url('/fonts/Marianne-Regular.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Marianne-Medium';
        src: url('/fonts/Marianne-Medium.otf') format('otf'),
            url('/fonts/Marianne-Medium.woff2') format('woff2');
    }
    @font-face {
        font-family: 'Marianne-Bold';
        src: url('/fonts/Marianne-Bold.otf') format('otf'),
            url('/fonts/Marianne-Bold.woff2') format('woff2');
    }
`
