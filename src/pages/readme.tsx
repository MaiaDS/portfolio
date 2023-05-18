import { BeehiveSVG } from '@/components/BeehiveSVG'
import MainLayout from '@/components/layout/MainLayout'
import { StyledReadMe } from '@/styles/pages/StyledReadMe'
import { EmailIco, PhoneIco } from '@/utils/Icons'

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
                <BeehiveSVG />
                <BeehiveSVG />
            </StyledReadMe>
        </MainLayout>
    )
}

export default ReadMe
