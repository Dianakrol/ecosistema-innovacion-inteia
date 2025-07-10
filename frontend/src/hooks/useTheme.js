import { useEffect, useState } from 'react'

export default function useTheme() {
    const [isDark, setIsDark] = useState(() => {
        const saved = localStorage.getItem('theme')
        return saved === 'dark' || (!saved && window.matchMedia('(prefers-color-scheme: dark)').matches)
    })

    useEffect(() => {
        const root = document.documentElement

        if (isDark) {
            root.classList.add('dark')
            localStorage.setItem('theme', 'dark')
        } else {
            root.classList.remove('dark')
            localStorage.setItem('theme', 'light')
        }

        root.style.colorScheme = isDark ? 'dark' : 'light'
    }, [isDark])

    return [isDark, setIsDark]
}
