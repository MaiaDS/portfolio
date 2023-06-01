import { Environment } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import { ReactNode } from 'react'
import { NoToneMapping, Vector3 } from 'three'

interface IExperienceProps {
    directionnalLightPosition?: Vector3
    directionnalLightIntensity?: number
    ambientLightIntensity?: number
    cameraProps?: {
        fov: number
        near: number
        far: number
        position: Vector3
    }
    children: ReactNode
}

const ThreejsCanvas = (props: IExperienceProps) => {
    const checkDirectionnalLightPosition = props.directionnalLightPosition ?? new Vector3(0, 0, 2)
    const checkDirectionnalLightIntensity = props.directionnalLightIntensity ?? 0.4
    const checkAmbientLightIntensity = props.ambientLightIntensity ?? 0.2
    return (
        <Canvas
            gl={{ toneMapping: NoToneMapping }}
            className="threejs"
            shadows
            camera={props.cameraProps ?? {}}>
            <directionalLight
                castShadow
                position={checkDirectionnalLightPosition}
                intensity={checkDirectionnalLightIntensity}
            />
            <ambientLight intensity={checkAmbientLightIntensity} />
            <Environment preset="forest" />
            {props.children}
        </Canvas>
    )
}

export default ThreejsCanvas
