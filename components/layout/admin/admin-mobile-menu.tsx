'use client'

import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {Menu} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {ScrollArea} from "@/components/ui/scroll-area";
import {adminLinks} from "@/lib/admin-links";
import React from "react";
import AdminSidebarLink from "@/components/layout/admin/admin-nav-link";
import {usePathname} from "next/navigation";

export default function AdminMobileMenu() {
    const pathname = usePathname()


    return (
        <Sheet>
            <SheetTrigger asChild>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    aria-controls="sidebar"
                    // className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
                >
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side={"left"}>
                <SheetHeader>
                    <SheetTitle>
                        <Button
                            variant={"ghost"}
                            size={"lg"}
                            asChild
                        >
                            <Link href="/" aria-label="logo">
                                <Image src={logo} alt={'logo'} className={"w-24 max-h-24 lg:w-28 lg:max-h-28"}/>
                            </Link>
                        </Button>
                    </SheetTitle>
                    <SheetDescription>
                        <ScrollArea className={"overflow-y-auto mt-5 py-4 px-4"}>
                            <ul className={"flex flex-col gap-4"}>
                                {adminLinks.groups.map((group, index) => (
                                    <li key={index}>
                                        <div className={"flex items-center justify-between"}>
                                <span
                                    className={"text-sm font-semibold text-gray-500 uppercase tracking-wider"}>{group.name}</span>
                                        </div>
                                        <ul className={"mt-2 flex flex-col gap-2"}>
                                            {group.links.map((link, index) => (
                                                <AdminSidebarLink key={index} index={index} link={link}
                                                                  pathname={pathname}/>
                                            ))}
                                        </ul>
                                    </li>
                                ))}
                            </ul>
                        </ScrollArea>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}