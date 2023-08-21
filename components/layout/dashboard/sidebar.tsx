'use client'

import Link from "next/link";
import Image from "next/image";
import google from "@/public/images/google.svg";
import {cn} from "@/lib/utils";
import React from "react";
import {adminLinks} from "@/lib/admin-links";
import {usePathname} from "next/navigation";
import {m} from "framer-motion";

function AdminSidebarLink({link, index, pathname, ...props}: { link: { to: string, label: string, icon: React.ReactElement, disabled: boolean }, index: number, pathname: string }) {
    return <m.li
        initial={{opacity: 0, y: 20}}
        animate={{opacity: 1, y: 0}}
        exit={{opacity: 0, y: 20}}
        transition={{duration: 0.2, delay: index * 0.05}}
        {...props}
    >
        <Link
            href={link.disabled ? "#" : link.to}
            className={cn("flex items-center gap-4 py-2 px-4 rounded-md hover:bg-accent hover:text-accent-foreground dark:hover:bg-gray-700 dark:hover:text-white", link.disabled ? "cursor-not-allowed" : "", link.to === pathname ? "bg-accent text-accent-foreground dark:bg-gray-700 dark:text-white" : "")}>
            {React.cloneElement(link.icon, {className: "w-6 h-6 stroke-current"})}
            <m.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className={"text-sm font-medium text-gray-500"}>{link.label}</m.span>
        </Link>
    </m.li>;
}

export default function Sidebar() {
    const pathname = usePathname()

    return (
        <aside
            className={"absolute left-0 top-0 z-50 flex h-screen w-72 flex-col overflow-y-hidden bg-accent-foreground duration-300 ease-linear dark:bg-gray-900 lg:static lg:translate-x-0 -translate-x-full"}>
            <div className={"flex items-center justify-between gap-2 px-6 py-5 lg:py-6"}>
                <Link href="#">
                    <Image src={google} alt="logo"/>
                </Link>

                <button className={"block lg:hidden"}>
                    <svg className={"fill-current"} width="20" height="18" viewBox="0 0 20 18" fill="none"
                         xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                            fill=""></path>
                    </svg>
                </button>
            </div>
            <div className={"no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear"}>
                <nav className={"mt-5 py-4 px-4 lg:mt-9 lg:px-6 lg:py-6"}>
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
                </nav>
            </div>
        </aside>
    )
}