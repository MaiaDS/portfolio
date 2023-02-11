import { DATA } from '@/data/data'
import { rem, variables } from '@/styles/variables'
import styled from 'styled-components'
import Button from '../button'

const StyledResumeButtons = styled.div`
    display: flex;
    gap: ${rem(20)};
    /* button:first-child {
        margin-right: ${rem(20)};
    } */
`

const ResumeButtons = () => {
    return (
        <StyledResumeButtons>
            <Button
                label="CV"
                icon="assets/icons/info.png"
                color={variables.colors.arrayBlue}
                hoverBgColor={variables.colors.orange}
                onClick={() => {}}
            />
            <Button
                label="See more on LinkedIn"
                icon="assets/icons/info.png"
                color={variables.colors.arrayBlue}
                hoverBgColor={variables.colors.orange}
                onClick={() => {
                    window.open(DATA.linkedin, '_blank')
                }}
            />
        </StyledResumeButtons>
    )
}

export default ResumeButtons
