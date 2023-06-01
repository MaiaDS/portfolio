import { BeehiveSVG } from '@/components/BeehiveSVG'
import Educations from '@/components/educations/Education'
import Experiences from '@/components/experiences/Experiences'
import MainLayout from '@/components/layout/MainLayout'
import Skills from '@/components/skills/Skills'
import { StyledAboutMe } from '@/styles/pages/StyledAboutMe'
import Link from 'next/link'
import { useRouter } from 'next/router'

const AboutMe = () => {
    const router = useRouter()
    const query = useRouter().query

    const tabs = ['Skills', 'Experiences', 'Education']

    const selectedTab = query ? Object.keys(router.query)[0] : tabs[0]

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
                                        <h2>{tab}</h2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {selectedTab === tabs[0] && <Skills />}
                    {selectedTab === tabs[1] && <Experiences />}
                    {selectedTab === tabs[2] && <Educations />}
                </div>
                <BeehiveSVG />
            </StyledAboutMe>
        </MainLayout>
    )
}

export default AboutMe
