import { CustomMobileTheme, CustomTheme } from '@/styles/utils/theme'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

export enum ScreenFormats {
    LANDSCAPE,
    PORTRAIT
}

const CustomThemeContext = createContext({
    theme: ScreenFormats.LANDSCAPE,
    updateTheme: () => {}
})

export const useCustomThemeContext = () => useContext(CustomThemeContext)

export const CustomThemeProvider = (props: { children: ReactNode }) => {
    const [theme, setTheme] = useState(ScreenFormats.LANDSCAPE)
    const updateTheme = () => {
        const screenOrientation = window.screen.orientation
        if (window.innerWidth < 1024) {
            screenOrientation.lock('portrait')
            setTheme(ScreenFormats.PORTRAIT)
        } else {
            screenOrientation.lock('landscape')
            setTheme(ScreenFormats.LANDSCAPE)
        }
    }
    useEffect(() => {
        updateTheme()
        window.addEventListener('resize', () => {
            updateTheme()
        })
    }, [])

    const themeFile = theme === ScreenFormats.LANDSCAPE ? CustomTheme : CustomMobileTheme

    return (
        <CustomThemeContext.Provider value={{ theme, updateTheme }}>
            <ThemeProvider theme={themeFile}>{props.children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}
