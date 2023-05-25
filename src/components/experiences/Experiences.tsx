import { StyledExperiences } from './StyledExperiences'
import { EXPERIENCES } from './data'

const Experiences = () => {
    return (
        <StyledExperiences>
            {EXPERIENCES.map((experience) => (
                <article key={experience.company}>
                    <h3>
                        {experience.position} {experience.type && `(${experience.type})`} |{' '}
                        {experience.company}
                    </h3>
                    <h4>
                        {experience.dates} | {experience.location}
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
