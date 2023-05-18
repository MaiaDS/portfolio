import { rem } from '@/styles/utils/utils'
import styled from 'styled-components'

export const StyledMainLayout = styled.div`
    nav {
        position: fixed;
        inset: 0 0;
    }

    main {
        margin-top: ${rem(50)};
    }
`
