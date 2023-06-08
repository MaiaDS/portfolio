import { responsiveMediaQueries } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledMainLayout = styled.div`
    padding: ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.xl};
    width: 100%;
    min-height: 100vh;
    overflow: hidden;
    position: relative;

    @media ${responsiveMediaQueries.portrait} {
        padding: ${({ theme }) => theme.spacing.l};

        main {
            margin-top: ${({ theme }) => theme.spacing.xl};
            h1 {
                position: absolute;
                right: ${({ theme }) => theme.spacing.l};
                top: ${({ theme }) => theme.spacing.l};
            }
        }
    }

    > .threejs {
        position: fixed !important;
        bottom: 0;
        right: 0;
    }
`
