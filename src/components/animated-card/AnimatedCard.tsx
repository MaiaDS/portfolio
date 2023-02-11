import { rem, variables } from '@/styles/variables'
import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledAnimatedCard = styled.div`
    width: ${rem(489.5)};
    height: ${rem(726.35)};
    clip-path: inset(0 0 1px 0 round 6px);
    transform: rotateY(var(--rotationX)) rotateX(var(--rotationY));
    position: relative;

    div {
        width: 100%;
        height: 100%;
        position: absolute;
        inset: 0;
    }

    > div {
        perspective: ${rem(600)};

        > div {
            /* transform: rotateY(var(--rotationX)) rotateX(var(--rotationY));
            clip-path: inset(0 0 1px 0 round 6px); */

            img {
                width: 100%;
                height: 100%;
                object-fit: cover;
            }

            > div:first-of-type {
                z-index: 10;
                mix-blend-mode: soft-light;
                background: radial-gradient(
                    farthest-corner circle at var(--x) var(--y),
                    rgba(255, 255, 255, 0.8) 10%,
                    rgba(255, 255, 255, 0.65) 20%,
                    rgba(255, 255, 255, 0) 90%
                );
            }

            > div:last-of-type {
                z-index: 30;
                mix-blend-mode: color-dodge;
                will-change: background;
                transition-property: opacity;
                background-blend-mode: hue, hard-light, overlay;
                background: var(--hue), var(--pattern);
            }
        }
    }

    --hue: repeating-linear-gradient(
            0deg,
            rgb(255, 119, 115) calc(var(--step) * 1),
            rgba(255, 237, 95, 1) calc(var(--step) * 2),
            rgba(168, 255, 95, 1) calc(var(--step) * 3),
            rgba(131, 255, 247, 1) calc(var(--step) * 4),
            rgba(120, 148, 255, 1) calc(var(--step) * 5),
            rgb(216, 117, 255) calc(var(--step) * 6),
            rgb(255, 119, 115) calc(var(--step) * 7)
        )
        0% var(--bg-y) / 200% 700%;

    --pattern: repeating-linear-gradient(
            128deg,
            #0e152e 0%,
            hsl(180, 10%, 60%) 3.8%,
            hsl(180, 10%, 60%) 4.5%,
            hsl(180, 10%, 60%) 5.2%,
            #0e152e 10%,
            #0e152e 12%
        )
        var(--bg-x) var(--bg-y) / 300%;
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

                card.current.style.setProperty('--x', 100 * X + '%')
                card.current.style.setProperty('--y', 100 * Y + '%')
                card.current.style.setProperty('--rotationX', -(X - 0.5) * 26 + 'deg')
                card.current.style.setProperty('--rotationY', (Y - 0.5) * 26 + 'deg')
                card.current.style.setProperty('--bg-x', 40 + 20 * X + '%')
                card.current.style.setProperty('--bg-y', 40 + 20 * Y + '%')
            }
        })
    }, [])

    return (
        <StyledAnimatedCard ref={card}>
            <div>
                <div>
                    <img src="/assets/logo-white.svg" />
                    <div></div>
                    <div></div>
                </div>
            </div>
        </StyledAnimatedCard>
    )
}

export default AnimatedCard
