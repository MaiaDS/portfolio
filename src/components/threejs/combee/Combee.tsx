import { colors } from '@/styles/utils/utils'
import { Center, Environment, Shadow } from '@react-three/drei'
import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { NoToneMapping, Shader } from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const CombeeModel = () => {
    const model: any = useLoader(GLTFLoader, '/assets/combee.glb')
    const scene = model.scene
    scene.children = scene.children.filter((child: any) => child.name !== 'Tail')

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

    return (
        <group rotation={[-0.25, -1, 0]} position={[1.5, -3, 0]} scale={1}>
            <primitive object={model.scene} />
            <mesh
                geometry={model.nodes.Tail.geometry}
                position={model.nodes.Tail.position}
                rotation={model.nodes.Tail.rotation}>
                <meshStandardMaterial color={colors.yellow} onBeforeCompile={onbeforeCompile} />
            </mesh>
        </group>
    )
}

const Combee = () => {
    return (
        <Canvas gl={{ toneMapping: NoToneMapping }}>
            <directionalLight castShadow position={[0, 0, 2]} intensity={0.4} />
            <ambientLight intensity={0.2} />
            <Environment preset="forest" />
            <Suspense fallback={null}>
                <CombeeModel />
            </Suspense>
        </Canvas>
    )
}

export default Combee
