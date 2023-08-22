'use client'

import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {cn} from "@/lib/utils";
import React from "react";
import {adminLinks} from "@/lib/admin-links";
import {usePathname} from "next/navigation";
import {m} from "framer-motion";
import {ScrollArea} from "@/components/ui/scroll-area";
import AdminSidebarLink from "@/components/layout/admin/admin-nav-link";

export default function AdminSidebar() {
    const pathname = usePathname()

    return (
        <aside
            className={"absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-accent-foreground duration-300 ease-linear dark:bg-gray-900 lg:static lg:translate-x-0 -translate-x-full"}>
            <div className={"flex items-center justify-between gap-2 px-6 py-5 lg:py-6"}>
                <Link href="/">
                    <Image src={logo} alt="logo"/>
                </Link>
            </div>
            <ScrollArea className={"overflow-y-auto mt-5 py-4 px-4 lg:mt-9 lg:px-6 lg:py-6"}>
                <ul className={"flex flex-col gap-4"}>
                    {adminLinks.groups.map((group, index) => (
                        <li key={index}>
                            <div className={"flex items-center justify-between"}>
                                <span
                                    className={"text-sm font-semibold text-gray-500 uppercase tracking-wider"}>{group.name}</span>
                            </div>
                            <ul className={"mt-2 flex flex-col gap-2"}>
                                {group.links.map((link, index) => (
                                    <AdminSidebarLink key={index} index={index} link={link} pathname={pathname}/>
                                ))}
                            </ul>
                        </li>
                    ))}
                </ul>
            </ScrollArea>
        </aside>
    )
}