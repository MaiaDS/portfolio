import { rem, variables } from '@/styles/variables'
import styled from 'styled-components'

const StyledTag = styled.span`
    padding: ${rem(20)};
    background-color: ${variables.colors.mediumGray};
    border-radius: 60px;
    background: linear-gradient(180deg, rgba(217, 217, 217, 0.25) 0%, rgba(217, 217, 217, 0) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.25);
    backdrop-filter: blur(25px);
`

const Tag = (props: { content: string }) => {
    return <StyledTag>{props.content}</StyledTag>
}

export default Tag
