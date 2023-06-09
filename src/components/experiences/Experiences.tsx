import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
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
                                {theme !== ScreenFormats.MOBILE ? ' | ' : <br />}
                                <small>{`(${experience.type})`}</small>
                            </>
                        )}
                        {theme !== ScreenFormats.MOBILE ? ' | ' : <br />}
                        {experience.company}
                    </h3>
                    <h4>
                        {experience.dates}
                        {theme !== ScreenFormats.MOBILE ? ' | ' : <br />}
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
