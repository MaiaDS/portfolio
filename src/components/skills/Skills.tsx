import LandscapeSkills from './landscape/LandscapeSkills'
import PortraitSkills from './portrait/PortraitSkills'
import { useCustomThemeContext } from '@/utils/CustomTheme'

const Skills = () => {
    const { theme } = useCustomThemeContext()
    return <section>{theme === 'desktop' ? <LandscapeSkills /> : <PortraitSkills />}</section>
}

export default Skills
