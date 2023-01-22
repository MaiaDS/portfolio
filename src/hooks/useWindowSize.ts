import { useEffect, useState } from 'react'

type WindowSize = {
    width: number
    height: number
}

const useWindowSize = (): WindowSize => {
    const [windowSize, setWindowSize] = useState<WindowSize>({
        width: 100,
        height: 100
    })
    useEffect(() => {
        function handleResize(): void {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }
        window.addEventListener('resize', handleResize)
        handleResize()
        return (): void => window.removeEventListener('resize', handleResize)
    }, [])

    return windowSize
}

export default useWindowSize
