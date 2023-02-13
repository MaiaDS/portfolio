import styled from 'styled-components'
import { rem, variables } from '../variables'

export const StyledLandingPage = styled.div`
    width: 100vw;
    height: 100vh;
    position: relative;

    canvas {
        width: 100%;
        height: 100%;
    }

    > div:last-of-type {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotateY(var(--rotationX)) rotateX(var(--rotationY));
        background-color: ${variables.glassEffect()};
        padding: ${rem(50)};
        border-radius: ${variables.borderRadius};
        text-align-last: justify;
        text-justify: inter-character;
    }
`
