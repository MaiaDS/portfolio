import { rem } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledMainLayout = styled.div`
    padding: ${({ theme }) => theme.spacing.l} ${({ theme }) => theme.spacing.xl};
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    position: relative;
`
