import Container from "@/components/layout/container";
import ThemeSwitcher from "@/components/layout/ui/theme-switcher";
import ShoppingCart from "@/components/layout/ui/shopping-cart";
import HamburgerMenu from "@/components/layout/ui/hamburger-menu";
import {Button} from "@/components/ui/button";
import {getServerSession} from "next-auth";
import {nextAuthOptions} from "@/lib/auth";
import LoginModal from "@/components/layout/ui/login/login-modal/login-modal";
import LogoutButton from "@/components/layout/ui/login/login-modal/logout-button";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.svg";
import {Search} from "lucide-react";
import SearchProductsDialog from "@/components/search-products-dialog";
import UserDropdownMenu from "@/components/user-dropdown-menu";


const links = [
    {
        to: "/#features",
        label: "Features",
    },
    {
        to: "/#solution",
        label: "Solution",
    },
    {
        to: "/#reviews",
        label: "Reviews",
    },
];

export default async function Header() {
    const session = await getServerSession(nextAuthOptions)

    /*let isToggled = false;
    const navlinks = document.querySelector("#navlinks");
    const hamburger = document.querySelector("#hamburger");
    const layer = document.querySelector("#navLayer");
    const links = [...navlinks!.querySelector("ul")!.children];

    function toggleNavlinks() {
        if (isToggled) {
            navlinks.classList.add("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
            hamburger.classList.add("toggled");
            layer.classList.add("origin-top", "scale-y-100");
        } else {
            navlinks.classList.remove("!visible", "!scale-100", "!opacity-100", "!lg:translate-y-0");
            hamburger.classList.remove("toggled");
            layer.classList.remove("origin-top", "scale-y-100");
        }
    }
    hamburger.addEventListener("click", () => {
        isToggled = !isToggled;
        toggleNavlinks();
    });

    links.forEach((link) => {
        link.addEventListener("click", () => {
            isToggled = !isToggled;
            toggleNavlinks();
        });
    });*/
    return (
        <header
            className={"sticky top-0 z-40 w-full border-b border-black/5 dark:border-white/5 lg:border-background bg-background"}>
            <Container>
                <div className="relative flex flex-wrap items-center justify-between gap-6 py-3 md:gap-0 md:py-4">
                    <div className="relative z-20 flex w-full justify-between md:px-0 lg:w-max">
                        <Link href="/" aria-label="logo" className="w-24 max-h-24 lg:w-28 lg:max-h-28">
                            <Image src={logo} alt={'logo'}/>
                        </Link>

                        <div className="relative flex max-h-10 items-center lg:hidden">
                            <HamburgerMenu/>
                        </div>
                    </div>
                    <div id="navLayer" aria-hidden="true"
                         className="fixed inset-0 z-10 h-screen w-screen origin-bottom scale-y-0 bg-white/70 backdrop-blur-2xl transition duration-500 dark:bg-gray-900/70 lg:hidden"></div>
                    {/*<div id="navlinks"
                             className="invisible absolute top-full left-0 z-20 w-full origin-top-right translate-y-1 scale-90 flex-col flex-wrap justify-end gap-6 rounded-3xl border border-gray-100 bg-white p-8 opacity-0 shadow-2xl shadow-gray-600/10 transition-all duration-300 dark:border-gray-700 dark:bg-gray-800 dark:shadow-none lg:visible lg:relative lg:flex lg:w-7/12 lg:translate-y-0 lg:scale-100 lg:flex-row lg:items-center lg:gap-0 lg:border-none lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none">
                            <div className="w-full text-gray-600 dark:text-gray-200 lg:w-auto lg:pr-4 lg:pt-0">
                                <ul className="flex flex-col gap-6 tracking-wide lg:flex-row lg:gap-0 lg:text-sm">
                                    {links.map((link) => (
                                        <li key={link.to}>
                                            <a href={link.to}
                                               className="hover:text-primary block transition dark:hover:text-white md:px-4">
                                                <span>{link.label}</span>
                                            </a>
                                        </li>
                                    ))
                                    }
                                    <li>
                                        <a href="https://tailus.gumroad.com/l/astls-premium" target="_blank"
                                           className="flex gap-2 font-semibold text-gray-700 transition hover:text-primary dark:text-white dark:hover:text-white md:px-4">
                                            <span>Premium</span>
                                            <span
                                                className="flex rounded-full bg-primary/20 px-1.5 py-0.5 text-xs tracking-wider text-purple-700 dark:bg-white/10 dark:text-orange-300"> new</span>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-12 lg:mt-0">
                                <a href="/register"
                                   className="relative flex h-9 w-full items-center justify-center px-4 before:absolute before:inset-0 before:rounded-full before:bg-primary before:transition before:duration-300 hover:before:scale-105 active:duration-75 active:before:scale-95 sm:w-max">
                                    <span className="relative text-sm font-semibold text-white"> Get Started</span>
                                </a>
                            </div>
                        </div>*/}
                    <div className={"flex items-center justify-center gap-x-2"}>
                        <SearchProductsDialog/>
                        <ThemeSwitcher/>
                        {/*{session ? <LogoutButton/> : <LoginModal/>}*/}
                        {session?.user.role === "admin" && (
                            <Link href={"/admin"}>
                                <Button
                                    variant={"outline"} size={"sm"}
                                >
                                    Admin Dashboard
                                </Button>
                            </Link>
                        )}
                        <ShoppingCart/>
                        {session ? <UserDropdownMenu/> : <LoginModal/>}
                    </div>
                </div>
            </Container>
        </header>
    );
}