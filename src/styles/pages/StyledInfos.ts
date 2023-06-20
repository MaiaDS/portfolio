import styled from 'styled-components'
import { rem, responsiveMediaQueries } from '../utils/utils'

export const StyledInfos = styled.main`
    display: flex;
    flex-direction: column;
    gap: ${({ theme }) => theme.spacing.l};

    h1 {
        z-index: 10;
    }

    section {
        h2 {
            margin-bottom: ${({ theme }) => theme.spacing.l};
        }

        > ul {
            display: flex;
            flex-direction: column;
            gap: ${({ theme }) => theme.spacing.s};
        }

        li {
            list-style-image: url('/assets/hexagon.svg');
            list-style-position: inside;

            ul {
                padding-left: ${({ theme }) => theme.spacing.l};
            }

            a {
                position: relative;
                display: initial;
                text-decoration: underline;
                color: ${({ theme }) => theme.colors.dark};
                z-index: 10;
            }
        }
    }

    .beehive {
        &:first-of-type {
            right: ${rem(-125)};
            bottom: ${rem(50)};
            transform: rotate(90deg);

            @media ${responsiveMediaQueries.mobile} {
                right: ${rem(-50)};
                bottom: ${rem(-225)};
                transform: rotate(0deg);
            }
        }

        @media ${responsiveMediaQueries.desktop} {
            &:last-of-type {
                top: ${rem(-150)};
                left: 20vw;
            }
        }
    }
`
