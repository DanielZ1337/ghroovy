import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/google.svg";
import {Button} from "@/components/ui/button";
import {Home} from "lucide-react";
import auth_background from "@/public/images/login-background.jpg";
import {siteMetadata} from "@/lib/site-metadata";
import React from "react";

export default function Layout({children}: { children: React.ReactNode }) {
    return (
        <section className="min-h-screen flex items-stretch text-white ">
            <Link href={"/"} className={"absolute top-4 left-4 z-50 w-24 h-24"}>
                <Image src={logo} alt="logo" className={"hidden sm:block"}/>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                    className={"sm:hidden"}
                >
                    <Home/>
                </Button>
            </Link>
            <div className="lg:flex w-1/2 hidden bg-gray-500 relative items-center overflow-clip">
                <Image className="absolute z-0 inset-0 bg-gray-500 items-center" src={auth_background}
                       alt={"clothes"}/>
                <div className="absolute bg-black opacity-60 inset-0 z-0 h-screen"></div>
                <div className="w-full px-24 z-10">
                    <h1 className="text-5xl font-bold text-left tracking-wide">Keep it special</h1>
                    <p className="text-3xl my-4">Capture your personal memory in unique way, anywhere.</p>
                </div>
                <div className="bottom-0 absolute p-4 text-center right-0 left-0 flex justify-center space-x-4">
                    <SocialLinks/>
                </div>
            </div>
            <div
                className="lg:w-1/2 w-full flex items-center justify-center text-center md:px-16 px-0 z-0 bg-[#161616]">
                <Image className="absolute lg:hidden z-10 inset-0 bg-gray-500 items-center object-cover"
                       src={auth_background} alt={"clothes"}/>
                <div className="absolute lg:hidden bg-black opacity-60 inset-0 z-20 h-screen"></div>
                <div className="w-full py-6 z-20">
                    {children}
                    <div
                        className="p-4 text-center right-0 left-0 flex justify-center space-x-4 mt-16 lg:hidden ">
                        <SocialLinks/>
                    </div>
                </div>
            </div>
        </section>
    )
}

function SocialLinks() {
    return <>
        <Link className={"hover:text-primary"} href={siteMetadata.links.twitter.url}>
            {React.cloneElement(siteMetadata.links.twitter.icon, {size: 24})}
        </Link>
        <Link className={"hover:text-primary"} href={siteMetadata.links.linkedin.url}>
            {React.cloneElement(siteMetadata.links.linkedin.icon, {size: 24})}
        </Link>
        <Link className={"hover:text-primary"} href={siteMetadata.links.instagram.url}>
            {React.cloneElement(siteMetadata.links.instagram.icon, {size: 24})}
        </Link>
    </>;
}