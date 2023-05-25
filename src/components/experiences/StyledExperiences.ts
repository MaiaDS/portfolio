import styled from 'styled-components'

export const StyledExperiences = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.l};
    article {
        &:first-of-type {
            border: 1px solid ${({ theme }) => theme.colors.secondary};
            padding: ${({ theme }) => theme.spacing.m};
        }

        ul {
            margin-top: ${({ theme }) => theme.spacing.l};
            max-width: 75%;
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing.s};
            li {
                list-style-image: url('/assets/hexagon.svg');
                list-style-position: inside;
            }
        }
    }
`
