import { Canvas, useLoader } from '@react-three/fiber'
import { Suspense } from 'react'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'

const BeeModel = () => {
    const model = useLoader(GLTFLoader, '/assets/combee.glb')
    return (
        <primitive
            object={model.scene}
            // scale={1.25}
            rotation={[0, -1.1, 0.25]}
            position={[1.5, -3.5, 0]}
        />
    )
}

const Combee = () => {
    return (
        <Canvas>
            <directionalLight castShadow position={[0, 0, 2]} intensity={0.4} />
            <ambientLight intensity={0.2} />
            <Suspense fallback={null}>
                <BeeModel />
            </Suspense>
        </Canvas>
    )
}

export default Combee
