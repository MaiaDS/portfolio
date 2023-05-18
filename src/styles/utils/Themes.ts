import { colors, rem } from './utils'

export const DefaultTheme = {
    fontSizes: {
        h1: rem(40),
        h2: rem(32),
        h3: rem(24),
        h4: rem(20),
        default: rem(16),
        small: rem(14)
    },
    spacing: {
        xs: rem(10),
        s: rem(15),
        m: rem(20),
        l: rem(25),
        xl: rem(50)
    },
    colors: {
        primary: colors.tealBlue,
        secondary: colors.yellow,
        dark: colors.darkBlue,
        light: colors.lightGrey
    },
    borderRadius: `6px`
}
