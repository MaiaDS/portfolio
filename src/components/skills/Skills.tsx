import LandscapeSkills from './landscape/LandscapeSkills'
import PortraitSkills from './portrait/PortraitSkills'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'

const Skills = () => {
    const { theme } = useCustomThemeContext()
    return (
        <section>
            {theme === ScreenFormats.LANDSCAPE ? <LandscapeSkills /> : <PortraitSkills />}
        </section>
    )
}

export default Skills
