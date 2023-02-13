import { variables } from '@/styles/variables'
import { Edges } from '@react-three/drei'
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
    const scale = useMemo(() => Math.random()-0.5,[])
    return (
        <mesh
            position={position}
            scale={[scale, scale, scale]}
            onPointerOver={() => hover(true)}
            onPointerOut={() => hover(false)}>
            <ringGeometry args={[0, 1, 6, 1, Math.PI / 2]} />
            <meshBasicMaterial
                color={hovered ? variables.colors.orange : variables.colors.arrayBlue}
            />
            <Edges color={hovered ? variables.colors.orange : variables.colors.darkGray} />
        </mesh>
    )
}

const Beehive = () => {
    return (
        <>
            {Array.from(Array(200).keys()).map(() => (
                <Hexagon />
            ))}
        </>
    )
}

export default Beehive
