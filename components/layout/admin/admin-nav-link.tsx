import React from "react";
import {m} from "framer-motion";
import Link from "next/link";
import {cn} from "@/lib/utils";

interface AdminSidebarLinkProps {
    link: {
        to: string
        label: string
        icon?: React.ReactElement | null
        disabled: boolean
    }
    pathname: string
    index: number
}

export default function AdminSidebarLink({link, pathname, index, ...props}: AdminSidebarLinkProps) {
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
            {link.icon && React.cloneElement(link.icon, {className: cn("w-6 h-6 stroke-primary-foreground", link.to === pathname ? "stroke-accent-foreground" : "")})}
            <m.span
                initial={{opacity: 0}}
                animate={{opacity: 1}}
                exit={{opacity: 0}}
                className={cn("text-sm font-medium text-gray-500", link.to === pathname ? "text-foreground" : "")}>{link.label}</m.span>
        </Link>
    </m.li>;
}