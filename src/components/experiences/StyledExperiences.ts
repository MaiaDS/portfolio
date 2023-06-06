import { responsiveMediaQueries } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledExperiences = styled.section`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.l};
    article {
        h3 {
            position: relative;
            z-index: 10;
        }

        &:first-of-type {
            padding: ${({ theme }) => theme.spacing.m};
            position: relative;

            &::before {
                border: 2px solid ${({ theme }) => theme.colors.secondary};
                width: 100%;
                height: 100%;
                content: '';
                position: absolute;
                z-index: 0;
                inset: 0;
                left: 50%;
                transform: translateX(-50%);

                @media ${responsiveMediaQueries.mobile} {
                    width: 100vw;
                    height: 92%;
                    top: 8%;
                }
            }
        }

        ul {
            margin-top: ${({ theme }) => theme.spacing.l};
            max-width: 75%;
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing.s};

            @media ${responsiveMediaQueries.mobile} {
                max-width: 100%;
            }

            li {
                list-style-image: url('/assets/hexagon.svg');
                list-style-position: inside;
            }
        }
    }
`
