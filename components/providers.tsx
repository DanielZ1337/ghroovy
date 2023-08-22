'use client'

import {ThemeProvider} from "next-themes";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {SessionProvider} from "next-auth/react";
import {domAnimation, LazyMotion} from "framer-motion";

export default function Providers({children}: { children: React.ReactNode }) {
    const queryClient = new QueryClient()

    return (
        <SessionProvider>
            <QueryClientProvider client={queryClient}>
                <ThemeProvider attribute="class" disableTransitionOnChange>
                    <LazyMotion strict features={domAnimation}>
                        {children}
                    </LazyMotion>
                </ThemeProvider>
            </QueryClientProvider>
        </SessionProvider>
    )
}