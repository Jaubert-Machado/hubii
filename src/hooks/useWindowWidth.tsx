'use client'

import { useEffect, useState } from 'react'

export function useWindowWidth() {
    const [windowWidth, setWindowWidth] = useState<number>(0)

    useEffect(() => {
        if (typeof window === 'undefined') return

        setWindowWidth(window.innerWidth)

        function handleResize() {
            setWindowWidth(window.innerWidth)
        }

        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }
    }, [])

    return windowWidth
}
