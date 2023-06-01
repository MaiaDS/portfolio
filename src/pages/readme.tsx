import { BeehiveSVG } from '@/components/BeehiveSVG'
import MainLayout from '@/components/layout/MainLayout'
import ThreejsCanvas from '@/components/threejs/ThreejsCanvas'
import ChubbeeModel from '@/components/threejs/chubbeeModel/ChubbeeModel'
import { StyledReadMe } from '@/styles/pages/StyledReadMe'
import { EmailIco } from '@/utils/Icons'
import { Vector3 } from 'three'

const ReadMe = () => {
    return (
        <MainLayout>
            <StyledReadMe>
                <section>
                    <div>
                        <h1>READ.me</h1>
                        <h2>Hi! I'm Maïa, a Front-end developer</h2>
                    </div>
                    <article>
                        <p>
                            Passionate about creating beautiful and user-friendly interfaces, I have
                            honed my skills in HTML, CSS, and JavaScript/TypeScript frameworks and I
                            am always seeking to improve my craft. Additionally, I initially, I
                            studied graphic design which enables me to understand better the
                            designers I’m working with, and so improving communication within the
                            team one another.
                        </p>
                        <p>
                            Currently, I am preparing to make the move to Toronto, and I am excited
                            to explore new opportunities and collaborate with like-minded
                            professionals in the field.
                        </p>
                        <p>
                            Please take a moment to browse through my portfolio and get to know me.
                        </p>
                    </article>
                </section>
                <section>
                    <h2>Contact.Me</h2>
                    <div>
                        <EmailIco />
                        <span>maia.dasilva.12@gmail.com</span>
                    </div>
                </section>

                <div className="beehives">
                    <BeehiveSVG />
                    <BeehiveSVG />
                </div>
                <ThreejsCanvas
                    cameraProps={{
                        fov: 25,
                        near: 0.1,
                        far: 50,
                        position: new Vector3(0, -0.5, 20)
                    }}>
                    <ChubbeeModel
                        beesPositions={[
                            new Vector3(-0.5, -3, 8),
                            new Vector3(1, -2.5, -4),
                            new Vector3(1, -3.5, 10),
                            new Vector3(5.5, -4.5, 0),
                            new Vector3(12, -8, -15),
                            new Vector3(8, -3, 1),
                            new Vector3(14, 0, -20)
                        ]}
                    />
                </ThreejsCanvas>
            </StyledReadMe>
        </MainLayout>
    )
}

export default ReadMe
