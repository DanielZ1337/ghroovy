import React, {Suspense} from "react"
import AdminSidebar from "@/components/layout/admin/admin-sidebar"
import AdminHeader from "@/components/layout/admin/admin-header"
import {siteMetadata} from "@/lib/site-metadata";

export const metadata = {
    title: {
        default: "Admin",
        template: `%s | Admin @ ${siteMetadata.name}`,
    },
    description: "Admin Dashboard"
}

export default function Layout({children}: { children: React.ReactNode }) {


    return (
        <div className={"min-w-[100dvw] min-h-[100dvh] flex overflow-hidden"}>
            <AdminSidebar/>
            <div className={"relative flex flex-1 flex-col overflow-y-auto overflow-x-hidden"}>
                <main className={"flex flex-col min-h-screen"}>
                    <Suspense fallback={<div>Loading...</div>}>
                        <AdminHeader/>
                    </Suspense>
                    <div
                        className={"flex flex-col flex-1 px-6 py-5 lg:px-8 lg:py-8 max-w-screen-2xl p-4 md:p-6 2xl:p-10"}>
                        {children}
                    </div>
                </main>
            </div>
        </div>
    )
}