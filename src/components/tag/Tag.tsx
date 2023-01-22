import { rem, variables } from '@/styles/variables'
import styled from 'styled-components'

const StyledTag = styled.span`
    padding: ${rem(15)} ${rem(20)};
    ${variables.glassEffect}
    border-radius: 60px;
`

const Tag = (props: { content: string }) => {
    return <StyledTag>{props.content}</StyledTag>
}

export default Tag
