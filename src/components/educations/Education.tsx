import { Vector3 } from 'three'
import ThreejsCanvas from '../threejs'
import ChubbeeModel from '../threejs/chubbeeModel'
import { StyledEducation } from './StyledEducation'
import { EDUCATION } from './data'

const Education = () => {
    return (
        <StyledEducation>
            {EDUCATION.map((diploma) => (
                <article key={diploma.title}>
                    <h3>
                        {diploma.title} | {diploma.school}
                    </h3>
                    <h4>
                        {diploma.dates} | {diploma.location}
                    </h4>
                    {diploma.description}
                </article>
            ))}

            <ThreejsCanvas
                cameraProps={{
                    fov: 25,
                    near: 0.1,
                    far: 50,
                    position: new Vector3(0, -0.5, 20)
                }}>
                <ChubbeeModel
                    beesPositions={[
                        new Vector3(8, 0, 0),
                        new Vector3(2.5, -3, 10),
                        new Vector3(8, -3, 1),
                        new Vector3(14, -1, -20)
                    ]}
                />
            </ThreejsCanvas>
        </StyledEducation>
    )
}

export default Education
