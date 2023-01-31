import { hexToRgb, rem, variables } from '@/styles/variables'
import styled from 'styled-components'

const StyledTag = styled.span`
    padding: ${rem(15)} ${rem(20)};
    ${variables.glassEffect()};
    border-radius: 60px;
    position: relative;
    overflow: hidden;

    span {
        position: absolute;
        width: 100%;
        height: 2px;
    }

    span:nth-child(1) {
        top: 0;
        left: -100%;
        background: linear-gradient(90deg, transparent, ${variables.colors.declarationBlue});
    }

    &:hover span:nth-child(1) {
        left: 100%;
        transition: 0.7s;
    }

    span:nth-child(2) {
        bottom: 0;
        right: -100%;
        background: linear-gradient(90deg, transparent, ${variables.colors.orange});
    }

    &:hover span:nth-child(2) {
        right: 100%;
        transition: 0.7s;
        transition-delay: 0.35s;
    }
`

const Tag = (props: { content: string }) => {
    return (
        <StyledTag>
            <span></span>
            <span></span>
            {props.content}
        </StyledTag>
    )
}

export default Tag
