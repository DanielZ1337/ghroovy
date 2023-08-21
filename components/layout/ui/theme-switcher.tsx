'use client'

import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {AnimatePresence, m, MotionProps} from "framer-motion";
import {MoonIcon, SunIcon} from "lucide-react";
import {useEffect, useState} from "react";

export default function ThemeSwitcher() {
    const {resolvedTheme, theme, setTheme} = useTheme()
    const [isMounted, setIsMounted] = useState<boolean>()
    useEffect(() => {setIsMounted(true)}, []);

    if (!isMounted) return null

    const buttonAnimation: MotionProps = {
        initial: {opacity: 0, scale: 0, rotate: 0},
        animate: {opacity: 1, scale: 1, rotate: 360},
        exit: {opacity: 0, scale: 0, rotate: 0},
        whileHover: {scale: 1.1, rotate: [0, 90, 12, -45, 25, 0]},
        whileTap: {scale: 0.9},
        whileFocus: {scale: 1.1},
    }

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            aria-label="Toggle Dark Mode"
            type="button"
            className={"p-2"}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
        >
            <AnimatePresence>
                {resolvedTheme === "dark" ? (
                    <m.span
                        {...buttonAnimation}
                        className={"text-accent-foreground absolute"}
                        key={"sun"}
                    >
                        <SunIcon/>
                    </m.span>
                ) : (
                    <m.span
                        {...buttonAnimation}
                        className={"text-accent-foreground absolute"}
                        key={"moon"}
                    >
                        <MoonIcon/>
                    </m.span>
                )}

            </AnimatePresence>
        </Button>
    )
}