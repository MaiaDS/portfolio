import { useLoader } from '@react-three/fiber'
import { Vector3 } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
import { beeStripesShader } from '../shaders/beeShader'
import { colors } from '@/styles/utils/utils'
import { Clone, Float } from '@react-three/drei'

const ChubbeeModel = (props: { bees: Vector3[] }) => {
    const model: any = useLoader(GLTFLoader, '/assets/bee.glb')
    const scene = model.scene
    scene.children = scene.children.filter((child: any) => child.name !== 'Body')

    return (
        <>
            {props.bees.map((bee) => (
                <Float rotationIntensity={0.1} speed={0.75} key={bee.toArray().toString()}>
                    <group position={bee}>
                        <Clone object={scene} />
                        <mesh
                            geometry={model.nodes.Body.geometry}
                            position={model.nodes.Body.position}
                            rotation={model.nodes.Body.rotation}>
                            <meshStandardMaterial
                                color={colors.yellow}
                                onBeforeCompile={beeStripesShader}
                            />
                        </mesh>
                    </group>
                </Float>
            ))}
        </>
    )
}

export default ChubbeeModel
