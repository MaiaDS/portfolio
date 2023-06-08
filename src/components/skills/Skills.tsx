import { useEffect, useRef, useState } from 'react'
import LandscapeSkills from './landscape/LandscapeSkills'
import PortraitSkills from './portrait/PortraitSkills'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import { StyledSkills } from './StyledSkills'

const Skills = () => {
    const { theme } = useCustomThemeContext()
    const containerRef = useRef<HTMLElement>(null!)
    const [containerWidth, setContainerWidth] = useState<number>()
    const [scale, setScale] = useState<number>(1)

    const updateContainerWidth = () => {
        if (containerRef.current) {
            setContainerWidth(containerRef.current.clientWidth)
        }
    }

    useEffect(() => {
        updateContainerWidth()
        window.addEventListener('resize', () => {
            updateContainerWidth()
        })
    }, [containerRef])

    useEffect(() => {
        if (containerWidth) {
            let skillInitialWidth: number
            if (theme === ScreenFormats.DESKTOP) {
                skillInitialWidth = 1332
            } else {
                skillInitialWidth = 300
            }
            setScale((containerWidth * 100) / skillInitialWidth / 100)
        }
    }, [containerWidth])

    return (
        <StyledSkills ref={containerRef} scale={scale}>
            {theme === ScreenFormats.DESKTOP ? <LandscapeSkills /> : <PortraitSkills />}
        </StyledSkills>
    )
}

export default Skills
