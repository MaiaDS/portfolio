import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode, Suspense } from 'react'
import { NoToneMapping, Vector3 } from 'three'

interface IExperienceProps {
    directionnalLightPosition: Vector3
    directionnalLightIntensity: number
    ambientLightIntensity: number
    children: ReactNode
}

const ThreejsCanvas = (props: IExperienceProps) => {
    return (
        <Canvas gl={{ toneMapping: NoToneMapping }}>
            <directionalLight
                castShadow
                position={props.directionnalLightPosition}
                intensity={props.directionnalLightIntensity}
            />
            <ambientLight intensity={props.ambientLightIntensity} />
            <Environment preset="forest" />
            <Suspense fallback={null}>{props.children}</Suspense>
        </Canvas>
    )
}

export default ThreejsCanvas
