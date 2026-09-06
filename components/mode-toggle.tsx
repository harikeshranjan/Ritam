"use client";

import { useTheme } from "next-themes";
import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";

export default function ModeToggle() {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    return (
        <Button
            size={"icon"}
            variant={"outline"}
            className="cursor-pointer"
            onClick={toggleTheme}
        >
            {theme === "dark" ? <Sun /> : <Moon />}
        </Button>
    );
}
