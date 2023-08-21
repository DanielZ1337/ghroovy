import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import {Button} from "@/components/ui/button";
import {LoginButton} from "@/components/layout/ui/login/login-button";
import {authProviders} from "@/lib/auth-providers";
import EmailLoginPageForm from "@/components/layout/ui/login/login-page/email-login-page-form";
import React from "react";

export default async function LoginModal() {

    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="outline" size="sm">
                    Login
                </Button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className={"text-center"}>Login</DialogTitle>
                    <DialogDescription className={"flex flex-col gap-4"}>
                        <EmailLoginPageForm/>
                        <div className={"flex justify-center items-center gap-4"}>
                            <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
                            <div className="text-center">
                                <p className="text-sm text-muted-foreground">OR</p>
                            </div>
                            <div className="h-1 w-1/2 bg-muted-foreground rounded-full my-4"/>
                        </div>
                        <div className="grid w-full items-center gap-4">
                            {authProviders.map((provider) => (
                                <LoginButton key={provider.provider} provider={provider.provider}
                                             icon={provider.icon}>Login with {provider.name}</LoginButton>
                            ))}
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    )
}

