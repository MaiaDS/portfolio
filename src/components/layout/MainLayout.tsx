import { ReactNode } from 'react'
import { StyledMainLayout } from './StyledMainLayout'
import Navbar from './navbar/Navbar'

const MainLayout = (props: { children: ReactNode }) => {
    return (
        <StyledMainLayout>
            <Navbar />
            <main>{props.children}</main>
        </StyledMainLayout>
    )
}

export default MainLayout
