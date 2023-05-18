import Link from 'next/link'
import { useRouter } from 'next/router'
import { StyledNavbar } from './StyledNavbar'

const Navbar = () => {
    const router = useRouter()
    const routes = [
        {
            label: 'READ.me',
            route: '/readme'
        },
        {
            label: 'About.Me',
            route: '/aboutme'
        }
    ]
    return (
        <StyledNavbar>
            <ul>
                {routes.map((link) => (
                    <li key={link.label}>
                        <Link
                            href={link.route}
                            className={router.pathname === link.route ? 'active' : ''}>
                            {link.label}
                        </Link>
                    </li>
                ))}
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
