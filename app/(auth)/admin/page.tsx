import google from "@/public/images/google.svg";
import Image from "next/image";
import Link from "next/link";
import {Pencil, Plus} from "lucide-react";
import ThemeSwitcher from "@/components/layout/ui/theme-switcher";
import React, {Suspense} from "react";
import AdminProfileDropdown from "@/components/layout/ui/admin-profile-dropdown";
import {cn} from "@/lib/utils";
import AdminSidebar from "@/components/layout/dashboard/admin-sidebar";


export default function Page() {

    return (
            <div className={"flex flex-col gap-4"}>
                <div className={"flex flex-col gap-4"}>
                    <div className={"flex items-center justify-between"}>
                        <h2 className={"text-xl font-bold text-gray-900 dark:text-white"}>Dashboard</h2>
                        <div className={"flex items-center gap-4"}>
                            <button className={"flex items-center gap-2 group"}>
                                <div
                                    className={"rounded-full border-2 p-1 dark:bg-green-700 bg-green-300 border-foreground group-hover:scale-105"}>
                                    <Plus size={15}/>
                                </div>
                                <span className={"text-sm font-medium text-gray-900 dark:text-white"}>Add
                                                Widget</span>
                            </button>
                            <button className={"flex items-center gap-2 group"}>
                                <div
                                    className={"rounded-full border-2 p-1 dark:bg-red-700 bg-red-300 border-foreground group-hover:scale-105"}>
                                    <Pencil size={15}/>
                                </div>
                                <span className={"text-sm font-medium text-gray-900 dark:text-white"}>Edit
                                                Widgets</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
    )
}