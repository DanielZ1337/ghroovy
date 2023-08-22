import {Button} from "@/components/ui/button";
import {Input} from "@/components/ui/input";
import ThemeSwitcher from "@/components/layout/ui/theme-switcher";
import React, {Suspense} from "react";
import AdminProfileDropdown from "@/components/layout/admin/admin-profile-dropdown";
import Link from "next/link";
import {Bell, Home, Menu, MessageCircle} from "lucide-react";
import AdminMessagesDropdown from "@/components/layout/admin/admin-messages-dropdown";
import AdminNotificationsDropdown from "@/components/layout/admin/admin-notifications-dropdown";
import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {adminLinks} from "@/lib/admin-links";
import {ScrollArea} from "@/components/ui/scroll-area";
import AdminMobileMenu from "@/components/layout/admin/admin-mobile-menu";

export default async function AdminHeader() {

    return (
        <header
            className="flex items-center justify-between px-6 py-3 lg:py-4 shadow-lg sticky top-0 z-50 w-full drop-shadow-1 dark:drop-shadow-none">
            <div
                className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                    <Button
                        variant={"ghost"}
                        size={"icon"}
                        asChild
                    >
                        <Link href={"/"}>
                            <Home/>
                        </Link>
                    </Button>
                    <AdminMobileMenu/>
                </div>
                <div className="hidden sm:block">
                    <form>
                        <div className="relative">
                            <Button
                                variant={"ghost"}
                                size={"icon"}
                                className=" absolute left-1 top-1/2 -translate-y-1/2">
                                <svg
                                    className="fill-primary-foreground"
                                    width="20" height="20" viewBox="0 0 20 20" fill="none"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M9.16666 3.33332C5.945 3.33332 3.33332 5.945 3.33332 9.16666C3.33332 12.3883 5.945 15 9.16666 15C12.3883 15 15 12.3883 15 9.16666C15 5.945 12.3883 3.33332 9.16666 3.33332ZM1.66666 9.16666C1.66666 5.02452 5.02452 1.66666 9.16666 1.66666C13.3088 1.66666 16.6667 5.02452 16.6667 9.16666C16.6667 13.3088 13.3088 16.6667 9.16666 16.6667C5.02452 16.6667 1.66666 13.3088 1.66666 9.16666Z"
                                          fill=""></path>
                                    <path fillRule="evenodd" clipRule="evenodd"
                                          d="M13.2857 13.2857C13.6112 12.9603 14.1388 12.9603 14.4642 13.2857L18.0892 16.9107C18.4147 17.2362 18.4147 17.7638 18.0892 18.0892C17.7638 18.4147 17.2362 18.4147 16.9107 18.0892L13.2857 14.4642C12.9603 14.1388 12.9603 13.6112 13.2857 13.2857Z"
                                          fill=""></path>
                                </svg>
                            </Button>
                            <Input
                                placeholder="Type to search..."
                                className=" w-full pl-12 pr-4 font-medium focus:outline-none border-0 xl:w-96"
                                type="text"/>
                        </div>
                    </form>
                </div>
                <div className={"flex items-center justify-center gap-2"}>
                    <ThemeSwitcher
                        className={"border-0"}
                    />
                    {/*<li className="relative">
                        <Link className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                           href="#">
                                            <span
                                                className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 hidden">
                                                <span
                                                    className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75">
                                                    1
                                                </span>
                                            </span>
                            <Bell />
                        </Link>
                    </li>*/}
                    <Suspense fallback={<Button
                        variant={"ghost"}
                        size={"icon"}
                        className={"animate-pulse"}
                    >
                        <Bell/>
                    </Button>}>
                        <AdminNotificationsDropdown/>
                    </Suspense>
                    <Suspense fallback={<Button
                        variant={"ghost"}
                        size={"icon"}
                        className={"animate-pulse"}
                    >
                        <MessageCircle/>
                    </Button>}>
                        <AdminMessagesDropdown/>
                    </Suspense>
                    {/*<li className="relative">
                        <Link className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                           href="#">
                                            <span
                                                className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 hidden">
                                                <span
                                                    className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75">
                                                    yesyseyesys
                                                </span>
                                            </span>
                        </Link>
                    </li>*/}
                    <Suspense fallback={<div
                        className={"w-10 h-10 rounded-full bg-gray-300 animate-pulse"}/>}>
                        <AdminProfileDropdown/>
                    </Suspense>
                </div>
            </div>
        </header>
    )
}