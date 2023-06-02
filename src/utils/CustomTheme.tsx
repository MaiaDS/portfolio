import { CustomDesktopTheme, CustomMobileTheme } from '@/styles/utils/theme'
import { ReactNode, createContext, useContext, useEffect, useState } from 'react'
import { ThemeProvider } from 'styled-components'

const CustomThemeContext = createContext({
    theme: 'desktop',
    updateTheme: () => {}
})

export const useCustomThemeContext = () => useContext(CustomThemeContext)

export const CustomThemeProvider = (props: { children: ReactNode }) => {
    const [theme, setTheme] = useState('desktop')
    const updateTheme = () => {
        let value = 'desktop'
        if (theme !== 'desktop' && window.innerWidth > 768) {
            value = 'desktop'
        } else if (theme !== 'mobile' && window.innerWidth < 769) {
            value = 'mobile'
        }
        setTheme(value)
        window.localStorage.setItem('maiadasilva', value)
    }
    useEffect(() => {
        updateTheme()
        window.addEventListener('resize', () => {
            updateTheme()
        })
    }, [])

    const themeFile = theme === 'desktop' ? CustomDesktopTheme : CustomMobileTheme
    console.log(themeFile)
    return (
        <CustomThemeContext.Provider value={{ theme, updateTheme }}>
            <ThemeProvider theme={themeFile}>{props.children}</ThemeProvider>
        </CustomThemeContext.Provider>
    )
}
