'use client'

import {useTheme} from "next-themes";
import {Button} from "@/components/ui/button";
import {AnimatePresence, m, MotionProps} from "framer-motion";
import {MoonIcon, SunIcon} from "lucide-react";
import * as React from "react";
import {forwardRef, useEffect, useState} from "react";

export interface ThemeSwitcherProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
}

function ThemeSwitcher({...props}: ThemeSwitcherProps, ref: React.Ref<HTMLButtonElement>) {
    const {resolvedTheme, theme, setTheme} = useTheme()
    const [isMounted, setIsMounted] = useState<boolean>()
    useEffect(() => {
        setIsMounted(true)
    }, []);

    if (!isMounted) return null

    const buttonAnimation: MotionProps = {
        initial: {opacity: 0, scale: 0, rotate: 0},
        animate: {opacity: 1, scale: 1, rotate: 360},
        exit: {opacity: 0, scale: 0, rotate: 0},
        whileHover: {scale: 1.1, rotate: [0, 90, -45, 25, 0]},
        whileTap: {scale: 0.9},
    }

    return (
        <Button
            variant={"outline"}
            size={"icon"}
            aria-label="Toggle Dark Mode"
            type="button"
            className={"p-2"}
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            ref={ref}
            {...props}
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

export default forwardRef(ThemeSwitcher)