import google from "@/public/images/google.svg";
import Image from "next/image";
import Link from "next/link";
import ThemeSwitcher from "@/components/layout/ui/theme-switcher";
import {Pencil, Plus} from "lucide-react";
import AdminProfileDropdown from "@/components/layout/ui/admin-profile-dropdown";
import {Suspense} from "react";

export default function Page() {
    return (
        <div className={"min-w-[100dvw] min-h-[100dvh] flex overflow-hidden"}>
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
                            <li className={"flex items-center gap-4"}>
                                <div className={"w-2 h-2 rounded-full bg-primary"}/>
                                <span className={"text-primary"}>Dashboard</span>
                            </li>
                            <li className={"flex items-center gap-4"}>
                                <div className={"w-2 h-2 rounded-full bg-gray-300"}/>
                                <span className={"text-gray-300"}>Dashboard</span>
                            </li>
                            <li className={"flex items-center gap-4"}>
                                <div className={"w-2 h-2 rounded-full bg-gray-300"}/>
                                <span className={"text-gray-300"}>Dashboard</span>
                            </li>
                            <li className={"flex items-center gap-4"}>
                                <div className={"w-2 h-2 rounded-full bg-gray-300"}/>
                                <span className={"text-gray-300"}>Dashboard</span>
                            </li>
                            <li className={"flex items-center gap-4"}>
                                <div className={"w-2 h-2 rounded-full bg-gray-300"}/>
                                <span className={"text-gray-300"}>Dashboard</span>
                            </li>
                            <li className={"flex items-center gap-4"}>
                                <div className={"w-2 h-2 rounded-full bg-gray-300"}/>
                                <span className={"text-gray-300"}>Dashboard</span>
                            </li>
                        </ul>
                    </nav>
                </div>
            </aside>
            <div className={"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"}>
                <main className={"flex flex-col min-h-screen"}>
                    <header className={"flex items-center justify-between px-6 py-5 lg:py-6 shadow-lg"}>
                        <div className={"flex items-center gap-2"}>
                            <button className={"block lg:hidden"}>
                                <svg className={"fill-current"} width="20" height="18" viewBox="0 0 20 18" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z"
                                        fill=""></path>
                                </svg>
                            </button>

                            <h1 className={"text-2xl font-bold text-gray-900 dark:text-white"}>Dashboard</h1>
                        </div>
                        <div className={"flex items-center gap-4"}>
                            <ThemeSwitcher/>
                            {/*    notifications*/}
                            {/*    messages, chats */}
                            <Suspense fallback={<div className={"w-10 h-10 rounded-full bg-gray-300 animate-pulse"}/>}>
                                <AdminProfileDropdown/>
                            </Suspense>
                        </div>
                    </header>
                    <div className={"flex flex-col flex-1 px-6 py-5 lg:px-8 lg:py-8"}>
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
                    </div>
                </main>
            </div>
        </div>
    )
}