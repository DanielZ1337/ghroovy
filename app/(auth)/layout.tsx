import '@/app/globals.css'
import type {Metadata} from 'next'
import {Inter} from 'next/font/google'
import Providers from "@/components/providers";
import {siteMetadata} from "@/lib/site-metadata";
import {Suspense} from "react";
import {Toaster} from "@/components/ui/toaster";

const inter = Inter({subsets: ['latin']})

if (process.env.NODE_ENV === 'development') {
    siteMetadata.url = 'http://localhost:3000'
}

export const metadata: Metadata = {
    metadataBase: new URL(siteMetadata.url),
    title: {
        template: `%s | ${siteMetadata.title}`,
        default: siteMetadata.title,
    },
    icons: [
        {
            rel: 'icon',
            type: 'image/x-icon',
            url: new URL('/favicon.ico', siteMetadata.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '32x32',
            url: new URL('/favicon-32x32.png', siteMetadata.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/png',
            sizes: '16x16',
            url: new URL('/favicon-16x16.png', siteMetadata.url).toString(),
        },
        {
            rel: 'icon',
            type: 'image/svg+xml',
            url: new URL('/favicon.svg', siteMetadata.url).toString(),
        },
        {
            rel: 'apple-touch-icon',
            sizes: '180x180',
            url: new URL('/apple-touch-icon.png', siteMetadata.url).toString(),
        },
        {
            rel: 'manifest',
            url: new URL('/manifest.json', siteMetadata.url).toString(),
        },
        {
            rel: 'mask-icon',
            url: new URL('/safari-pinned-tab.svg', siteMetadata.url).toString(),
            color: '#000000',
        },
    ],
    description: 'Personal website of @danielz1337',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: siteMetadata.url,
        siteName: siteMetadata.title,
        title: siteMetadata.title,
        description: siteMetadata.description,
        images: {
            url: new URL('/og.png', siteMetadata.url).toString(),
            width: 1200,
            height: 630,
        },
    },
    twitter: {
        title: siteMetadata.title,
        description: siteMetadata.description,
        site: siteMetadata.links.twitter.url,
        images: {
            url: new URL(siteMetadata.ogImage, siteMetadata.url).toString(),
            width: 1200,
            height: 630,
            alt: siteMetadata.title,
        },
        creator: siteMetadata.links.twitter.url,
        card: "summary_large_image"
    },
    creator: siteMetadata.links.twitter.url,
    authors: [
        {
            name: siteMetadata.creator,
            url: siteMetadata.links.twitter.url,
        },
        {
            name: siteMetadata.creator,
            url: siteMetadata.links.github.url,
        },
        {
            name: siteMetadata.creator,
            url: siteMetadata.links.linkedin.url,
        },
        {
            name: siteMetadata.creator,
            url: siteMetadata.links.email.url,
        },
    ],
    other: {
        'theme-color': '#000000',
        'msapplication-TileColor': '#000000',
        'msapplication-config': new URL('/browserconfig.xml', siteMetadata.url).toString(),
    }
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {

    return (
        <body className={inter.className}>
        <Suspense>
            <Providers>
                <div className={"min-h-[100dvh]"}>
                    {/*<Header/>*/}
                    {children}
                </div>
                {/*<Footer/>*/}
                <Toaster/>
            </Providers>
        </Suspense>
        </body>
    )
}
