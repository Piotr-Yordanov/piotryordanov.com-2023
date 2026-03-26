import { useEffect, createContext, useState } from 'react'

export const ThemeContext = createContext()
export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark")

    useEffect(() => {
        if (typeof window !== "undefined") {
            const stored = localStorage.getItem("color-theme")
            if (stored) {
                setTheme(stored)
            } else {
                const userMedia = window.matchMedia("(prefers-color-scheme: dark)")
                if (userMedia.matches) {
                    setTheme("dark")
                } else {
                    setTheme("light")
                }
            }
        }
    }, [])

    const rawSetTheme = theme => {
        const root = window.document.documentElement
        const isDark = theme === "dark"

        root.classList.remove(isDark ? "light" : "dark")
        root.classList.add(theme)

        localStorage.setItem("color-theme", theme)
    }

    useEffect(
        _ => {
            rawSetTheme(theme)
        },
        [theme]
    )

    return (
        <ThemeContext.Provider value={{ theme, setTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}
