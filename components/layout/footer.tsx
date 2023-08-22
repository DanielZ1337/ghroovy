import Container from "@/components/layout/container";
import Link from "next/link";
import {siteMetadata} from "@/lib/site-metadata";
import React from "react";
import Image from "next/image";
import logo from "@/public/logo.svg";

function FooterIconLink({href, title, children}: { href: string; title?: string; children: React.ReactElement }) {
    return <Link href={href}
                 className="text-gray-500 transition-colors duration-300 hover:text-primary dark:text-gray-300 dark:hover:text-white">
        <span className="sr-only">{title}</span>
        {React.cloneElement(children, {className: "w-5 h-5 fill-current"})}
    </Link>;
}

export default function Footer() {
    const fullYear = new Date().getFullYear();


    return (
        <footer className="bg-white dark:bg-gray-900">
            <Container>
                <div className="flex flex-col items-center justify-between py-12 md:flex-row">
                    <div className="flex flex-col items-center md:items-start">
                        <Link href="/" aria-label="logo" className="w-24 max-h-24 lg:w-28 lg:max-h-28">
                            <Image src={logo} alt={'logo'}/>
                        </Link>
                        <p className="mt-4 text-gray-500 dark:text-gray-400">&copy; {fullYear} {siteMetadata.name}. All
                            rights reserved</p>
                    </div>
                    <div className="flex mt-4 md:mt-0 gap-x-5">
                        <FooterIconLink href={siteMetadata.links.github.url} title="GitHub">
                            {siteMetadata.links.github.icon}
                        </FooterIconLink>
                        <FooterIconLink href={siteMetadata.links.twitter.url} title="Twitter">
                            {siteMetadata.links.twitter.icon}
                        </FooterIconLink>
                        <FooterIconLink href={siteMetadata.links.linkedin.url} title="Discord">
                            {siteMetadata.links.linkedin.icon}
                        </FooterIconLink>
                    </div>
                </div>
            </Container>
        </footer>
    )
}