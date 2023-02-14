import Beehive from '@/components/beehive'
import { StyledLandingPage } from '@/styles/components/LandingPage'
import { Canvas } from '@react-three/fiber'
import { useRef, useEffect } from 'react'

export default function Home() {
    const card = useRef<HTMLDivElement>(null)
    useEffect(() => {
        card.current?.addEventListener('mousemove', (e) => {
            if (card.current) {
                const X: number =
                    (e.clientX - card.current.getBoundingClientRect().left) /
                    card.current.clientWidth
                const Y: number =
                    (e.clientY - card.current.getBoundingClientRect().top) /
                    card.current.clientHeight
                card.current.style.setProperty('--rotationX', -(X - 0.5) * 26 + 'deg')
                card.current.style.setProperty('--rotationY', (Y - 0.5) * 26 + 'deg')
            }
        })
    }, [])

    return (
        <StyledLandingPage>
            <Beehive />
            <div ref={card}>
                <h1>Maïa Da Silva</h1>
                <h2>Front-end Developer</h2>
            </div>
        </StyledLandingPage>
    )
}
