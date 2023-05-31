import { colors } from '@/styles/utils/utils'
import { Center, Environment, Shadow } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { NoToneMapping, Shader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const Combee = () => {
    const model = useLoader(GLTFLoader, '/assets/combee.glb')
    const scene = model.scene
    scene.children = scene.children.filter((child) => child.name !== 'Tail')

    const onbeforeCompile = (shader: Shader) => {
        shader.vertexShader = shader.vertexShader.replace(
            'void main() {',
            `
                varying vec3 vPosition;
                void main() {
                vPosition = position;
            `
        )
        shader.fragmentShader = shader.fragmentShader.replace(
            `void main() {`,
            `
                varying vec3 vPosition;
                void main() {
            `
        )
        shader.fragmentShader = shader.fragmentShader.replace(
            `#include <output_fragment>`,
            `
                float customBeeColor = step(0.0, cos(vPosition.x * 10.0));
                outgoingLight *= customBeeColor;
                #include <output_fragment>
            `
        )
    }

    console.log(model.nodes.Tail)

    return (
        <Canvas gl={{ toneMapping: NoToneMapping }}>
            <directionalLight castShadow position={[3, 0, 2]} intensity={0.4} />
            <ambientLight intensity={0.2} />
            <Environment preset="forest" />
            <Suspense fallback={null}>
                <Center>
                    <Shadow />
                    <group>
                        <primitive
                            object={model.scene}
                            // rotation={[0, -1.1, 0.25]}
                            // position={[1.5, -3.5, 0]}
                        />
                        <mesh
                            geometry={model.nodes.Tail.geometry}
                            position={model.nodes.Tail.position}
                            rotation={model.nodes.Tail.rotation}>
                            <meshStandardMaterial
                                color={colors.yellow}
                                onBeforeCompile={onbeforeCompile}
                            />
                        </mesh>
                    </group>
                </Center>
            </Suspense>
        </Canvas>
    )
}

export default Combee
