import { ReactNode } from 'react'
import { StyledMainLayout } from './StyledMainLayout'
import Navbar from './navbar/Navbar'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import { Vector3 } from 'three'
import ThreejsCanvas from '../threejs'
import ChubbeeModel from '../threejs/chubbeeModel'

const MainLayout = (props: { children: ReactNode; bees: Vector3[] }) => {
    const { theme } = useCustomThemeContext()
    return (
        <StyledMainLayout>
            <Navbar />
            {props.children}
            {props.bees.length !== 0 && theme === ScreenFormats.DESKTOP && (
                <ThreejsCanvas
                    cameraProps={{
                        fov: 25,
                        near: 0.1,
                        far: 50,
                        position: new Vector3(0, -0.5, 20)
                    }}>
                    <ChubbeeModel bees={props.bees} />
                </ThreejsCanvas>
            )}
        </StyledMainLayout>
    )
}

export default MainLayout
