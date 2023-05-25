import { StyledEducation } from './StyledEducation'
import { EDUCATION } from './data'

const Education = () => {
    return (
        <StyledEducation>
            {EDUCATION.map((diploma) => (
                <article key={diploma.title}>
                    <h3>
                        {diploma.title} | {diploma.school}
                    </h3>
                    <h4>
                        {diploma.dates} | {diploma.location}
                    </h4>
                    {diploma.description}
                </article>
            ))}
        </StyledEducation>
    )
}

export default Education
