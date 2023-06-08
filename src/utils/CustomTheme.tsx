import { CustomMobileTheme, CustomTheme } from '@/styles/utils/theme'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

export enum ScreenFormats {
    MOBILE,
    TABLET,
    DESKTOP
}

const CustomThemeContext = createContext({
    theme: ScreenFormats.DESKTOP,
    updateTheme: () => {}
})

export const useCustomThemeContext = () => useContext(CustomThemeContext)

export const CustomThemeProvider = (props: { children: ReactNode }) => {
    const [theme, setTheme] = useState(ScreenFormats.DESKTOP)
    const updateTheme = () => {
        if (window.innerWidth < 768) {
            setTheme(ScreenFormats.MOBILE)
        } else if (window.innerWidth < 1024) {
            setTheme(ScreenFormats.TABLET)
        } else {
            setTheme(ScreenFormats.DESKTOP)
        }
    }
    useEffect(() => {
        updateTheme()
        window.addEventListener('resize', () => {
            updateTheme()
        })
    }, [])

    const themeFile = theme !== ScreenFormats.DESKTOP ? CustomMobileTheme : CustomTheme

    return (
        <CustomThemeContext.Provider value={{ theme, updateTheme }}>
            <ThemeProvider theme={themeFile}>{props.children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}
