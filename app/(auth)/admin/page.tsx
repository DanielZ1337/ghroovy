import google from "@/public/images/google.svg";
import Image from "next/image";
import Link from "next/link";
import {Pencil, Plus} from "lucide-react";
import ThemeSwitcher from "@/components/layout/ui/theme-switcher";
import React, {Suspense} from "react";
import AdminProfileDropdown from "@/components/layout/ui/admin-profile-dropdown";
import {cn} from "@/lib/utils";
import Sidebar from "@/components/layout/dashboard/sidebar";


export default function Page() {

    return (
        <div className={"min-w-[100dvw] min-h-[100dvh] flex overflow-hidden"}>
            <Sidebar/>
            <div className={"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"}>
                <main className={"flex flex-col min-h-screen"}>
                    <header
                        className="flex items-center justify-between px-6 py-3 lg:py-4 shadow-lg sticky top-0 z-50 w-full drop-shadow-1 dark:drop-shadow-none">
                        <div
                            className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
                            <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
                                <button aria-controls="sidebar"
                                        className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden">
                                    <span className="relative block h-5.5 w-5.5 cursor-pointer"><span
                                        className="du-block absolute right-0 h-full w-full"><span
                                        className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white !w-full delay-300"></span><span
                                        className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white delay-400 !w-full"></span><span
                                        className="relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white !w-full delay-500"></span></span><span
                                        className="absolute right-0 h-full w-full rotate-45"><span
                                        className="absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white !h-0 !delay-[0]"></span><span
                                        className="delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white !h-0 !delay-200"></span></span></span>
                                </button>
                                <a className="block flex-shrink-0 lg:hidden" href="/"/>
                            </div>
                            <div className="hidden sm:block">
                                <form action="https://formbold.com/s/unique_form_id" method="POST">
                                    <div className="relative">
                                        <button className="absolute left-0 top-1/2 -translate-y-1/2">
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
                                        </button>
                                        <input placeholder="Type to search..."
                                               className="w-full pl-9 pr-4 font-medium focus:outline-none xl:w-125"
                                               type="text"/></div>
                                </form>
                            </div>
                            <div className={"flex items-center justify-center gap-4"}>
                                <ThemeSwitcher/>
                                <li className="relative">
                                    <a className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                                       href="#">
                                            <span
                                                className="absolute -top-0.5 right-0 z-1 h-2 w-2 rounded-full bg-meta-1 hidden">
                                                <span
                                                    className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75">
                                                    1
                                                </span>
                                            </span>
                                        <svg className="fill-current duration-300 ease-in-out" width="18"
                                             height="18"
                                             viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M16.1999 14.9343L15.6374 14.0624C15.5249 13.8937 15.4687 13.7249 15.4687 13.528V7.67803C15.4687 6.01865 14.7655 4.47178 13.4718 3.31865C12.4312 2.39053 11.0812 1.7999 9.64678 1.6874V1.1249C9.64678 0.787402 9.36553 0.478027 8.9999 0.478027C8.6624 0.478027 8.35303 0.759277 8.35303 1.1249V1.65928C8.29678 1.65928 8.24053 1.65928 8.18428 1.6874C4.92178 2.05303 2.4749 4.66865 2.4749 7.79053V13.528C2.44678 13.8093 2.39053 13.9499 2.33428 14.0343L1.7999 14.9343C1.63115 15.2155 1.63115 15.553 1.7999 15.8343C1.96865 16.0874 2.2499 16.2562 2.55928 16.2562H8.38115V16.8749C8.38115 17.2124 8.6624 17.5218 9.02803 17.5218C9.36553 17.5218 9.6749 17.2405 9.6749 16.8749V16.2562H15.4687C15.778 16.2562 16.0593 16.0874 16.228 15.8343C16.3968 15.553 16.3968 15.2155 16.1999 14.9343ZM3.23428 14.9905L3.43115 14.653C3.5999 14.3718 3.68428 14.0343 3.74053 13.6405V7.79053C3.74053 5.31553 5.70928 3.23428 8.3249 2.95303C9.92803 2.78428 11.503 3.2624 12.6562 4.2749C13.6687 5.1749 14.2312 6.38428 14.2312 7.67803V13.528C14.2312 13.9499 14.3437 14.3437 14.5968 14.7374L14.7655 14.9905H3.23428Z"
                                                fill=""></path>
                                        </svg>
                                    </a>
                                </li>
                                <li className="relative">
                                    <a className="relative flex h-8.5 w-8.5 items-center justify-center rounded-full border-[0.5px] border-stroke bg-gray hover:text-primary dark:border-strokedark dark:bg-meta-4 dark:text-white"
                                       href="#">
                                            <span
                                                className="absolute -top-0.5 -right-0.5 z-1 h-2 w-2 rounded-full bg-meta-1 hidden">
                                                <span
                                                    className="absolute -z-1 inline-flex h-full w-full animate-ping rounded-full bg-meta-1 opacity-75">
                                                    yesyseyesys
                                                </span>
                                            </span>
                                        <svg className="fill-current duration-300 ease-in-out" width="18"
                                             height="18"
                                             viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path
                                                d="M10.9688 1.57495H7.03135C3.43135 1.57495 0.506348 4.41558 0.506348 7.90308C0.506348 11.3906 2.75635 13.8375 8.26885 16.3125C8.40947 16.3687 8.52197 16.3968 8.6626 16.3968C8.85947 16.3968 9.02822 16.3406 9.19697 16.2281C9.47822 16.0593 9.64697 15.75 9.64697 15.4125V14.2031H10.9688C14.5688 14.2031 17.522 11.3625 17.522 7.87495C17.522 4.38745 14.5688 1.57495 10.9688 1.57495ZM10.9688 12.9937H9.3376C8.80322 12.9937 8.35322 13.4437 8.35322 13.9781V15.0187C3.6001 12.825 1.74385 10.8 1.74385 7.9312C1.74385 5.14683 4.10635 2.8687 7.03135 2.8687H10.9688C13.8657 2.8687 16.2563 5.14683 16.2563 7.9312C16.2563 10.7156 13.8657 12.9937 10.9688 12.9937Z"
                                                fill=""></path>
                                            <path
                                                d="M5.42812 7.28442C5.0625 7.28442 4.78125 7.56567 4.78125 7.9313C4.78125 8.29692 5.0625 8.57817 5.42812 8.57817C5.79375 8.57817 6.075 8.29692 6.075 7.9313C6.075 7.56567 5.79375 7.28442 5.42812 7.28442Z"
                                                fill=""></path>
                                            <path
                                                d="M9.00015 7.28442C8.63452 7.28442 8.35327 7.56567 8.35327 7.9313C8.35327 8.29692 8.63452 8.57817 9.00015 8.57817C9.33765 8.57817 9.64702 8.29692 9.64702 7.9313C9.64702 7.56567 9.33765 7.28442 9.00015 7.28442Z"
                                                fill=""></path>
                                            <path
                                                d="M12.5719 7.28442C12.2063 7.28442 11.925 7.56567 11.925 7.9313C11.925 8.29692 12.2063 8.57817 12.5719 8.57817C12.9375 8.57817 13.2188 8.29692 13.2188 7.9313C13.2188 7.56567 12.9094 7.28442 12.5719 7.28442Z"
                                                fill=""></path>
                                        </svg>
                                    </a>
                                </li>
                                <Suspense fallback={<div
                                    className={"w-10 h-10 rounded-full bg-gray-300 animate-pulse"}/>}>
                                    <AdminProfileDropdown/>
                                </Suspense>
                            </div>
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