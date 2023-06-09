import { BeehiveSVG } from '@/components/BeehiveSVG'
import Education from '@/components/educations/Education'
import Experiences from '@/components/experiences/Experiences'
import MainLayout from '@/components/layout/MainLayout'
import Skills from '@/components/skills'
import { StyledAboutMe } from '@/styles/pages/StyledAboutMe'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import { EducationIco, ExperiencesIco, SkillsIco } from '@/utils/Icons'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { ReactElement, useEffect, useState } from 'react'
import { Vector3 } from 'three'

type Tab = {
    label: string
    ico: ReactElement
    component: ReactElement
    bees: Vector3[]
}

const AboutMe = () => {
    const router = useRouter()
    const query = useRouter().query

    const { theme } = useCustomThemeContext()

    const tabs: Tab[] = [
        { label: 'Skills', ico: <SkillsIco />, component: <Skills />, bees: [] },
        {
            label: 'Experiences',
            ico: <ExperiencesIco />,
            component: <Experiences />,
            bees:
                theme === ScreenFormats.DESKTOP
                    ? [
                          new Vector3(8, 0, 0),
                          new Vector3(8, -6, -5),
                          new Vector3(8, -3, 1),
                          new Vector3(14, -1, -20)
                      ]
                    : []
        },
        {
            label: 'Education',
            ico: <EducationIco />,
            component: <Education />,
            bees:
                theme === ScreenFormats.DESKTOP
                    ? [
                          new Vector3(8, 0, 0),
                          new Vector3(2.5, -3, 10),
                          new Vector3(8, -3, 1),
                          new Vector3(14, -1, -20)
                      ]
                    : [
                          new Vector3(1, -3.5, 10),
                          new Vector3(-1.5, -4, 5),
                          new Vector3(-0.75, -4.5, -5)
                      ]
        }
    ]

    const selectedTab = query ? Object.keys(router.query)[0] : tabs[0]

    const isSelected = (tab: string) => {
        return selectedTab === tab
    }

    const getBees = () => {
        const tab = tabs.find((e) => e.label === selectedTab)
        return tab ? tab.bees : []
    }

    const getComponent = () => {
        const tab = tabs.find((e) => e.label === selectedTab)
        return tab ? tab.component : <Skills />
    }

    return (
        <MainLayout bees={getBees()}>
            <StyledAboutMe>
                <div>
                    <h1>About.Me</h1>
                    <nav>
                        <ul>
                            {tabs.map((tab) => (
                                <li key={tab.label}>
                                    <Link
                                        href={{ pathname: '/aboutme', query: tab.label }}
                                        className={isSelected(tab.label) ? 'selected' : ''}>
                                        {theme === ScreenFormats.MOBILE && <span>{tab.ico}</span>}

                                        <h2>{tab.label}</h2>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </nav>
                    {getComponent()}
                </div>
                {theme === ScreenFormats.DESKTOP && <BeehiveSVG />}
            </StyledAboutMe>
        </MainLayout>
    )
}

export default AboutMe
