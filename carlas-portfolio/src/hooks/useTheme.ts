import { useEffect, useState } from "react";

type Theme = "light" | "dark";

export function useTheme() {
    const [theme, setTheme ] = useState<Theme>(() => {
        if (typeof window === "undefined") return "light";
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
        return (localStorage.getItem("theme") as Theme) || (prefersDark ? "dark" : "light");
    });

    useEffect(() => {
        const root = document.documentElement;

        if (theme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", theme);
    }, [theme]);

    return {
        theme,
        toggleTheme: () =>
            setTheme((prev) => (prev === "dark" ? "light" : "dark")),
    };
}