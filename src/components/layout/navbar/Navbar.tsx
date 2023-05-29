import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledNavbar } from './StyledNavbar'
import { LinkedInIco, OpenIco } from '@/utils/Icons'

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
    return (
        <StyledNavbar>
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
                <li>
                    <a
                        href="https://www.linkedin.com/in/maia-da-silva/"
                        target="_blank"
                        className="ico">
                        <LinkedInIco />
                    </a>
                </li>
                <li>
                    <a href="/assets/maia_dasilva_resume.pdf" target="_blank" className="ico">
                        <OpenIco />
                    </a>
                </li>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
