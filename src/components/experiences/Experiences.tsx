import { useCustomThemeContext } from '@/utils/CustomTheme'
import { StyledExperiences } from './StyledExperiences'
import { EXPERIENCES } from './data'

const Experiences = () => {
    const { theme } = useCustomThemeContext()
    return (
        <StyledExperiences>
            {EXPERIENCES.map((experience) => (
                <article key={experience.company}>
                    <h3>
                        {experience.position}
                        {experience.type && (
                            <>
                                {theme === 'desktop' ? ' | ' : <br />}
                                <small>{`(${experience.type})`}</small>
                            </>
                        )}
                        {theme === 'desktop' ? ' | ' : <br />}
                        {experience.company}
                    </h3>
                    <h4>
                        {experience.dates}
                        {theme === 'desktop' ? ' | ' : <br />}
                        {experience.location}
                    </h4>
                    <ul>
                        {experience.description.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
                </article>
            ))}
        </StyledExperiences>
    )
}

export default Experiences
