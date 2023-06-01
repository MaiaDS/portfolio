import { Vector3 } from 'three'
import ThreejsCanvas from '../threejs/ThreejsCanvas'
import ChubbeeModel from '../threejs/chubbeeModel'
import { StyledExperiences } from './StyledExperiences'
import { EXPERIENCES } from './data'

const Experiences = () => {
    return (
        <StyledExperiences>
            {EXPERIENCES.map((experience) => (
                <article key={experience.company}>
                    <h3>
                        {experience.position} {experience.type && `(${experience.type})`} |{' '}
                        {experience.company}
                    </h3>
                    <h4>
                        {experience.dates} | {experience.location}
                    </h4>
                    <ul>
                        {experience.description.map((item) => (
                            <li key={item}>{item}</li>
                        ))}
                    </ul>
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
                        new Vector3(8, -6, -5),
                        new Vector3(8, -3, 1),
                        new Vector3(14, -1, -20)
                    ]}
                />
            </ThreejsCanvas>
        </StyledExperiences>
    )
}

export default Experiences
