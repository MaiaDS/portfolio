import ThreejsCanvas from '@/components/threejs'
import ChubbeeModel from '@/components/threejs/chubbeeModel'
import { StyledError } from '@/styles/pages/StyledError'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import { DebugIco } from '@/utils/Icons'
import Error from 'next/error'
import Link from 'next/link'
import { Vector3 } from 'three'

export async function getServerSideProps() {
    const res = await fetch('https://api.github.com/repos/vercel/next.js')
    const errorCode = res.ok ? false : res.status

    return {
        props: { errorCode }
    }
}

const ErrorPage = (props: { errorCode: number | false }) => {
    const { theme } = useCustomThemeContext()

    const bees =
        theme === ScreenFormats.DESKTOP
            ? [
                  new Vector3(-2.5, -3, 12),
                  new Vector3(4, -3, 10),
                  new Vector3(4, -3, 5),
                  new Vector3(5, -6, -10),
                  new Vector3(-15, -4, -15)
              ]
            : [new Vector3(1.5, 1.5, 0), new Vector3(0, 1.5, 2), new Vector3(-3, 1.5, -10)]

    return (
        <StyledError>
            {props.errorCode ? (
                <Error statusCode={props.errorCode} />
            ) : (
                <div>AN UNEXPECTED ERROR HAS OCCURRED</div>
            )}

            <Link href="/">
                <DebugIco />
            </Link>

            <ThreejsCanvas
                cameraProps={{
                    fov: 25,
                    near: 0.1,
                    far: 50,
                    position: new Vector3(0, -0.5, 20)
                }}>
                <ChubbeeModel bees={bees} />
            </ThreejsCanvas>
        </StyledError>
    )
}

export default ErrorPage
