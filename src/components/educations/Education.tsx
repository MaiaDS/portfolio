import { StyledEducation } from './StyledEducation'
import { EDUCATION } from './data'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'

const Education = () => {
    const { theme } = useCustomThemeContext()
    return (
        <StyledEducation>
            {EDUCATION.map((diploma) => (
                <article key={diploma.title}>
                    <h3>
                        {diploma.title}
                        {diploma.specialty && (
                            <>
                                {theme === ScreenFormats.LANDSCAPE ? ' - ' : <br />}
                                {diploma.specialty}
                            </>
                        )}
                        {theme === ScreenFormats.LANDSCAPE ? ' | ' : <br />}
                        {diploma.school}
                    </h3>
                    <h4>
                        {diploma.dates} {theme === ScreenFormats.LANDSCAPE ? ' | ' : <br />}{' '}
                        {diploma.location}
                    </h4>
                    {diploma.description}
                </article>
            ))}
        </StyledEducation>
    )
}

export default Education
