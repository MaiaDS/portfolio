import { Euler, Vector3 } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { colors } from '@/styles/utils/utils'
import { beeStripesShader } from '../shaders/beeShader'
import { Float } from '@react-three/drei'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import { useState, useEffect } from 'react'

const CombeeModel = () => {
    const model: any = useLoader(GLTFLoader, '/assets/combee.glb')
    const scene = model.scene
    scene.children = scene.children.filter((child: any) => child.name !== 'Tail')
    const { theme } = useCustomThemeContext()
    const [containerWidth, setContainerWidth] = useState<number>()
    const [positionX, setPositionX] = useState<number>(1)

    useEffect(() => {
        setContainerWidth(window.innerWidth)
        window.addEventListener('resize', () => {
            setContainerWidth(window.innerWidth)
        })
    }, [])

    useEffect(() => {
        if (containerWidth) {
            if (theme === ScreenFormats.DESKTOP) {
                setPositionX((containerWidth * 4.5) / 1440)
            } else {
                setPositionX(1)
            }
        }
    }, [containerWidth])

    return (
        <Float rotationIntensity={0.1} speed={4}>
            <group
                rotation={new Euler(-0.25, -1.25, 0)}
                position={new Vector3(positionX, -3, 0)}
                scale={1}>
                <primitive object={scene} />
                <mesh
                    geometry={model.nodes.Tail.geometry}
                    position={model.nodes.Tail.position}
                    rotation={model.nodes.Tail.rotation}>
                    <meshStandardMaterial
                        color={colors.yellow}
                        onBeforeCompile={beeStripesShader}
                    />
                </mesh>
            </group>
        </Float>
    )
}

export default CombeeModel
