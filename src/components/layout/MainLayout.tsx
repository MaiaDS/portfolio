import { ReactNode } from 'react'
import { StyledMainLayout } from './StyledMainLayout'

const MainLayout = (props: { children: ReactNode }) => {
    return <StyledMainLayout>{props.children}</StyledMainLayout>
}

export default MainLayout
