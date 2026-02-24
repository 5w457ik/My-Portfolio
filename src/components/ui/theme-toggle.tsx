import { useState, useEffect } from "react";
import { Sun, Moon } from "lucide-react";

export function ThemeToggle() {
    const [dark, setDark] = useState(false);

    useEffect(() => {
        const root = document.documentElement;
        if (dark) {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="fixed top-6 right-6 z-50 size-10 rounded-full border border-border bg-background/80 backdrop-blur-md flex items-center justify-center shadow-lg hover:scale-110 active:scale-95 transition-all duration-300 cursor-pointer"
            aria-label="Toggle theme"
        >
            {dark ? (
                <Sun className="size-4 text-primary transition-transform duration-300 rotate-0" />
            ) : (
                <Moon className="size-4 text-primary transition-transform duration-300 rotate-0" />
            )}
        </button>
    );
}
