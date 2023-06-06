import { Euler, Vector3 } from 'three'
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { colors } from '@/styles/utils/utils'
import { beeStripesShader } from '../shaders/beeShader'
import { Float } from '@react-three/drei'
import { useCustomThemeContext } from '@/utils/CustomTheme'

const CombeeModel = () => {
    const model: any = useLoader(GLTFLoader, '/assets/combee.glb')
    const scene = model.scene
    scene.children = scene.children.filter((child: any) => child.name !== 'Tail')
    const { theme } = useCustomThemeContext()
    const positionX = theme === 'mobile' ? 1 : 1.5
    const scale = theme === 'mobile' ? 1 : 1
    return (
        <Float rotationIntensity={0.1} speed={4}>
            <group
                rotation={new Euler(-0.25, -1, 0)}
                position={new Vector3(positionX, -3, 0)}
                scale={scale}>
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
