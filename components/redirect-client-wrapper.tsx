'use client'

import {useEffect} from "react";
import {usePathname, useRouter} from "next/navigation";
import {useSession} from "next-auth/react";

interface RedirectClientWrapperProps {
    redirectIfAuthenticated?: boolean
    redirectUrl: string
    redirectIfNotAdmin?: boolean
    redirectIfNotAuthenticated?: boolean
    children?: React.ReactNode
}

export default function RedirectClientWrapper({redirectIfAuthenticated, redirectUrl, redirectIfNotAdmin, redirectIfNotAuthenticated, children}: RedirectClientWrapperProps) {
    const pathname = usePathname()
    const router = useRouter()
    const {data: session} = useSession()
    useEffect(() => {

        if (redirectIfNotAdmin && session?.user?.role !== "admin") {
            router.push(redirectUrl)
            return
        }

        if (redirectIfAuthenticated && session) {
            router.push(redirectUrl)
            return
        }

        if (redirectIfNotAuthenticated && !session) {
            router.push(redirectUrl)
            return
        }

        return () => {
            if (pathname === redirectUrl) {
                router.push("/")
            }
        }
    }, [pathname, redirectIfAuthenticated, redirectIfNotAdmin, redirectIfNotAuthenticated, redirectUrl, router, session, session?.user?.role]);

    return <>
        {children}
    </>;
}