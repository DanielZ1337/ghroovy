import {authProviders} from "@/lib/auth-providers";
import {LoginButton} from "@/components/layout/ui/login/login-button";
import React from "react";
import EmailLoginPageForm from "@/components/layout/ui/login/login-page/email-login-page-form";

export default function LoginOptions() {

    return (
        <div className="grid w-full items-center gap-4">
            <EmailLoginPageForm/>
            <div className={"flex justify-center items-center gap-4"}>
                <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
                <div className="text-center">
                    <p className="text-sm text-muted-foreground">OR</p>
                </div>
                <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
            </div>
            {authProviders.map((provider) => (
                <LoginButton key={provider.provider} provider={provider.provider}
                             icon={provider.icon} className={"bg-primary py-6"} size={"lg"}>
                    Login with {provider.name}
                </LoginButton>
            ))}
        </div>
    )
}