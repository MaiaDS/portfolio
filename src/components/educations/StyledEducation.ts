import styled from 'styled-components'

export const StyledEducation = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.l};

    .threejs {
        height: 100vh !important;
        position: fixed !important;
        bottom: 0;
        right: 0;
    }
`
