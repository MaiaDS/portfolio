import { BeehiveSVG } from '@/components/BeehiveSVG'
import MainLayout from '@/components/layout/MainLayout'
import Skills from '@/components/skills/Skills'
import { StyledAboutMe } from '@/styles/pages/StyledAboutMe'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AboutMe = () => {
    const router = useRouter()
    const query = useRouter().query

    const tabs = ['Skills', 'Experiences', 'Education']

    const selectedTab = query ? Object.keys(router.query)[0] : 'Skills'

    const isSelected = (tab: string) => {
        return selectedTab === tab
    }

    return (
        <MainLayout>
            <StyledAboutMe>
                <div>
                    <h1>About.Me</h1>
                    <nav>
                        <ul>
                            {tabs.map((tab) => (
                                <li>
                                    <Link
                                        href={{ pathname: '/aboutme', query: tab }}
                                        className={`title ${isSelected(tab) ? 'selected' : ''}`}>
                                        {tab}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    <section>
                        {selectedTab === 'Skills' && <Skills />}
                        {selectedTab === 'Experiences' && <p>Experiences</p>}
                        {selectedTab === 'Education' && <p>Education</p>}
                    </section>
                </div>
                <BeehiveSVG />
            </StyledAboutMe>
        </MainLayout>
    )
}

export default AboutMe
