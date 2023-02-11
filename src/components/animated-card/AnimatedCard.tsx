import { rem, variables } from '@/styles/variables'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledAnimatedCard = styled.div`
    clip-path: inset(0 0 1px 0 round 6px);
    transform: rotateY(var(--rotationX)) rotateX(var(--rotationY));
    width: ${rem(489.5)};
    height: ${rem(726.35)};
    background-color: ${variables.colors.arrayBlue};
`

const AnimatedCard = () => {
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

                // card.current.style.setProperty('--x', 100 * x + '%')
                // card.current.style.setProperty('--y', 100 * y + '%')
                card.current.style.setProperty('--rotationX', -(X - 0.5) * 26 + 'deg')
                card.current.style.setProperty('--rotationY', (Y - 0.5) * 26 + 'deg')
            }
        })
    }, [])

    return <StyledAnimatedCard ref={card}></StyledAnimatedCard>
}

export default AnimatedCard
