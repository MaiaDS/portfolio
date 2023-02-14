import { variables } from '@/styles/variables'
import { Canvas } from '@react-three/fiber'
import { useMemo, useState } from 'react'
import { Vector3 } from 'three'

const Hexagon = () => {
    const [hovered, hover] = useState(false)
    const position = useMemo(
        () =>
            new Vector3(
                (Math.random() - 0.5) * 15,
                (Math.random() - 0.5) * 10,
                Math.random() - 0.5
            ),
        []
    )
    const scale = useMemo(() => Math.random() * 0.1, [])
    return (
        <mesh
            position={position}
            scale={[scale, scale, scale]}
            rotation={[Math.PI * 0.5, 0, 0]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}>
            <cylinderGeometry args={[6, 6, 6, 6]} />
            <meshStandardMaterial
                color={hovered ? variables.colors.orange : variables.colors.arrayBlue}
            />
            {/* <Edges color={hovered ? variables.colors.orange : variables.colors.darkGray} /> */}
        </mesh>
    )
}

const Beehive = () => {
    return (
        <>
            <Canvas>
                <ambientLight intensity={0.5} />
                <pointLight />
                {Array.from(Array(150).keys()).map(() => (
                    <Hexagon />
                ))}
            </Canvas>
        </>
    )
}

export default Beehive
