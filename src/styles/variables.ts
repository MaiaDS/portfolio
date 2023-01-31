import { createGlobalStyle, css } from 'styled-components'

export function rem(pixels: number, context: number = variables.browserContext) {
    return `${pixels / context}rem`
}

export const hexToRgb = (hex: string): { r: number; g: number; b: number } => {
    const res = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex)!
    return {
        r: parseInt(res[1], 16),
        g: parseInt(res[2], 16),
        b: parseInt(res[3], 16)
    }
}

export const variables = {
    colors: {
        lightBlue: '#679AD1',
        darkBlue: '#16385B',
        orange: '#C5947C',
        lightGray: '#C7C7C7',
        mediumGray: '#2D2D2D',
        darkGray: '#252526',
        black: '#1E1E1E'
    },
    browserContext: 16,
    borderRadius: 6,
    glassEffect: () => css`
        /* background: linear-gradient(
            180deg,
            rgba(217, 217, 217, 0.25) 0%,
            rgba(217, 217, 217, 0) 100%
        ); */
        box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
        backdrop-filter: saturate(180%) blur(25px);
        background: rgba(45, 45, 45, 0.4);
        border: 1px solid rgba(45, 45, 45, 0.17);
    `
}

export const responsive = {
    phone: 'screen and ( max-width: 576px )',
    ipadPortrait: 'screen and ( max-width: 769px )',
    ipadLandscape: 'screen and ( max-width: 1024px)',
    desktop: 'screen and ( min-width: 1025px )'
}

export const Font = createGlobalStyle`
    @font-face {
        font-family: 'CascadiaCode-Regular';
        src: url('/public/font/CascadiaCode-Regular.otf') format('otf'),
            url('/public/font/CascadiaCode-Regular.woff2') format('woff2');
    }
    @font-face {
        font-family: 'CascadiaCode-Bold';
        src: url('/public/font/CascadiaCode-Bold.otf') format('otf'),
            url('/public/font/CascadiaCode-Bold.woff2') format('woff2');
    }
`
