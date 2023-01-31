import { StyledLink, StyledNavbar } from '@/styles/components/Navbar'
import Link from 'next/link'
import { useRouter } from 'next/router'

interface INavLink {
    label: string
    route: string
    iconSrc: string
}

const NavLink = (props: INavLink) => {
    const router = useRouter()

    return (
        <StyledLink src={props.iconSrc} className={router.pathname === props.route ? 'active' : ''}>
            <Link href={props.route}>{props.label}</Link>
        </StyledLink>
    )
}

const Navbar = () => {
    const router = useRouter()

    return (
        <StyledNavbar>
            <ul>
                <NavLink route="/" label="About.Me" iconSrc="icons/info.png" />
                <NavLink route="/contact" label="Contact.Me" iconSrc="icons/comment.png" />
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
