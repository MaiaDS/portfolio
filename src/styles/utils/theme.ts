import { colors, rem } from './utils'

export interface ICustomTheme {
    fontSizes: {
        h1: string
        h2: string
        h3: string
        default: string
        small: string
    }
    spacing: {
        xs: string
        s: string
        m: string
        l: string
        xl: string
    }
    colors: {
        primary: string
        secondary: string
        dark: string
        light: string
    }
    borderRadius: string
}

export const CustomTheme = {
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

export const CustomDesktopTheme = {
    ...CustomTheme,
    fontSizes: {
        h1: rem(40),
        h2: rem(32),
        h3: rem(24),
        default: rem(16),
        small: rem(14)
    }
}

export const CustomMobileTheme = {
    ...CustomTheme,
    fontSizes: {
        h1: rem(32),
        h2: rem(24),
        h3: rem(20),
        default: rem(14),
        small: rem(12)
    }
}
