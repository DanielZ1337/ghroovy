import React from "react";
import {AuthButton} from "@/components/layout/ui/login/auth-button";
import {LogOut} from "lucide-react";
import {siteMetadata} from "@/lib/site-metadata";

export const metadata = {
    title: "Sign Out",
    description: `Sign out to your ${siteMetadata.name} account`
}

export default function Page() {

    return (
        <h1 className="my-6">
            <span className="text-3xl font-bold">Goodbye.</span>
            <p className="text-3xl my-4">We hope to see you again soon.</p>
            <AuthButton
                variant={"default"}
                size={"lg"}
                className={"w-1/2"}
                signingOut
                signOutOptions={{
                    callbackUrl: "/",
                    redirect: false,
                }}
                icon={<LogOut/>}
            >
                Logout
            </AuthButton>
        </h1>
    )
}
