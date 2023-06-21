import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledNavbar } from './StyledNavbar'
import { GitHubIco, InfosIco, LinkedInIco, MenuIco, OpenIco } from '@/utils/Icons'
import { useState, useEffect } from 'react'
import ThreejsCanvas from '@/components/threejs'
import ChubbeeModel from '@/components/threejs/chubbeeModel'
import { Vector3 } from 'three'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'

const Navbar = () => {
    const router = useRouter()
    const routes = [
        {
            label: 'READ.me',
            route: '/readme'
        },
        {
            label: 'About.Me',
            route: '/aboutme',
            query: 'Skills'
        }
    ]

    const [isMenuHidden, setIsMenuHidden] = useState(false)

    const { theme } = useCustomThemeContext()

    useEffect(() => {
        setIsMenuHidden(theme === ScreenFormats.MOBILE)
    }, [theme])

    useEffect(() => {
        if (theme === ScreenFormats.MOBILE) {
            setIsMenuHidden(!isMenuHidden)
        }
    }, [router.pathname])

    return (
        <StyledNavbar className={isMenuHidden ? 'hidden' : 'visible'}>
            {theme === ScreenFormats.MOBILE && !isMenuHidden && (
                <ThreejsCanvas
                    cameraProps={{
                        fov: 25,
                        near: 0.1,
                        far: 50,
                        position: new Vector3(0, -0.5, 20)
                    }}>
                    <ChubbeeModel bees={[new Vector3(0, 3, -5), new Vector3(-1, 1, 5)]} />
                </ThreejsCanvas>
            )}
            {theme === ScreenFormats.MOBILE && (
                <button
                    onClick={() => {
                        setIsMenuHidden(!isMenuHidden)
                    }}>
                    {isMenuHidden && <MenuIco />}
                </button>
            )}
            <ul>
                <li>
                    <ul>
                        {routes.map((link) => (
                            <li key={link.label}>
                                <Link
                                    href={
                                        link.query
                                            ? { pathname: link.route, query: link.query }
                                            : link.route
                                    }
                                    className={router.pathname === link.route ? 'active' : ''}>
                                    {link.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </li>
                <li>
                    <ul>
                        <li>
                            <a href="https://github.com/MaiaDS" target="_blank" className="ico">
                                <GitHubIco />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/maia-da-silva/"
                                target="_blank"
                                className="ico">
                                <LinkedInIco />
                            </a>
                        </li>
                        <li>
                            <a href="/assets/cv_maia_da-silva.pdf" target="_blank" className="ico">
                                <OpenIco />
                            </a>
                        </li>
                        <li>
                            <Link href="/infos" className="ico">
                                <InfosIco />
                            </Link>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
