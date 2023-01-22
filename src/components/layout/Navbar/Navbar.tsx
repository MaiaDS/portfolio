import { StyledLink, StyledNavbar } from '@/styles/components/Navbar'
import Link from 'next/link'

const Navbar = () => {
    return (
        <StyledNavbar>
            <ul>
                <StyledLink src="icons/info.png">
                    <Link href="/">About.Me</Link>
                </StyledLink>
                <li>
                    Projects
                    <ul>
                        <StyledLink src="">Project 1</StyledLink>
                        <StyledLink src="">Project 2</StyledLink>
                    </ul>
                </li>
                <li>Playground</li>
                <StyledLink src="icons/comment.png">
                    <Link href="/contact">Contact.Me</Link>
                </StyledLink>
            </ul>
        </StyledNavbar>
    )
}

export default Navbar
