import styled from 'styled-components'
import { rem, responsiveMediaQueries } from '../utils/utils'

export const StyledError = styled.main`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    background-color: ${({ theme }) => theme.colors.light};
    padding: ${({ theme }) => theme.spacing.xl};
    gap: ${({ theme }) => theme.spacing.xl};
    position: relative;

    @media ${responsiveMediaQueries.mobile} {
        justify-content: end;
        h2 {
            text-align: center;
        }
    }

    * {
        font-size: ${({ theme }) => theme.fonts.sizes.h1} !important;
        color: ${({ theme }) => theme.colors.primary};
    }

    h1 {
        border-right: 4px solid ${({ theme }) => theme.colors.secondary};
        vertical-align: middle !important;

        @media ${responsiveMediaQueries.mobile} {
            font-size: ${rem(75)} !important;
            border: none;
            padding: 0 !important;
            margin-right: 0 !important;
            margin-bottom: ${({ theme }) => theme.spacing.l} !important;
        }
    }

    > div:not(.threejs) {
        height: fit-content !important;

        * {
            height: fit-content !important;
        }
    }

    > a {
        width: ${rem(100)};
        height: ${rem(110)};
        background-color: ${({ theme }) => theme.colors.primary};
        clip-path: polygon(0% 25%, 0% 75%, 50% 100%, 100% 75%, 100% 25%, 50% 0%);
        display: flex;
        justify-content: center;
        align-items: center;

        svg path {
            fill: ${({ theme }) => theme.colors.light};
        }
    }

    .threejs {
        position: absolute !important;
        inset: 0;
    }
`
