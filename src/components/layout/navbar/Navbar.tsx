import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledNavbar } from './StyledNavbar'
import { LinkedInIco, MenuIco, OpenIco } from '@/utils/Icons'
import { ScreenFormats, useCustomThemeContext } from '@/utils/CustomTheme'
import { useState, useEffect } from 'react'
import ThreejsCanvas from '@/components/threejs'
import ChubbeeModel from '@/components/threejs/chubbeeModel'
import { Vector3 } from 'three'

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

    const { theme } = useCustomThemeContext()
    const [isMenuHidden, setIsMenuHidden] = useState(false)

    useEffect(() => {
        if (theme === ScreenFormats.PORTRAIT) {
            setIsMenuHidden(true)
        } else {
            setIsMenuHidden(false)
        }
    }, [theme])

    const handleClick = () => {
        setIsMenuHidden(!isMenuHidden)
    }

    return (
        <StyledNavbar className={isMenuHidden ? 'hidden' : 'visible'}>
            {theme === ScreenFormats.PORTRAIT && !isMenuHidden && (
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
            {theme === ScreenFormats.PORTRAIT && (
                <button onClick={handleClick}>{isMenuHidden && <MenuIco />}</button>
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
                                    onClick={handleClick}
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
                            <a
                                href="https://www.linkedin.com/in/maia-da-silva/"
                                onClick={handleClick}
                                target="_blank"
                                className="ico">
                                <LinkedInIco />
                            </a>
                        </li>
                        <li>
                            <a
                                href="/assets/maia_dasilva_resume.pdf"
                                onClick={handleClick}
                                target="_blank"
                                className="ico">
                                <OpenIco />
                            </a>
                        </li>
                    </ul>
                </li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
