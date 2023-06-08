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

    useEffect(() => {
        setContainerWidth(containerRef.current.clientWidth)
        window.addEventListener('resize', () => {
            setContainerWidth(containerRef.current.clientWidth)
        })
    }, [containerRef])

    useEffect(() => {
        const containerWidth = containerRef.current.clientWidth
        let skillInitialWidth: number
        if (theme === ScreenFormats.LANDSCAPE) {
            skillInitialWidth = 1332
        } else {
            skillInitialWidth = 300
        }
        setScale((containerWidth * 100) / skillInitialWidth / 100)
    }, [containerWidth])

    console.log(scale)

    return (
        <StyledSkills ref={containerRef} scale={scale}>
            {theme === ScreenFormats.LANDSCAPE ? <LandscapeSkills /> : <PortraitSkills />}
        </StyledSkills>
    )
}

export default Skills
