'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {AuthButton} from "@/components/layout/ui/login/auth-button";
import {HiOutlineMail} from "react-icons/hi";
import React, {useState} from "react";
import {signIn} from "next-auth/react";
import {z} from "zod";
import {toast} from "@/components/ui/use-toast";

export default function EmailLoginForm() {
    const [email, setEmail] = useState<string>()
    const [isLoading, setIsLoading] = useState<boolean>()
    const emailSchema = z.string().email()

    return (
        <form className={"grid w-full items-center gap-4"} onSubmit={(e) => {
            e.preventDefault()

            if (!emailSchema.safeParse(email).success) {
                return
            }

            setIsLoading(true)
            signIn("email", {email: email, redirect: false}).then(() => {
                setIsLoading(false)
                toast({
                    title: "Email Sent",
                    description: "Check your email for the magic link",
                })
            }).catch((error) => {
                setIsLoading(false)
                toast({
                    title: "Error",
                    description: error.message,
                })
            })
        }}>
            <Label className={"sr-only"} htmlFor={"email"}>Email</Label>
            <Input
                onInput={(event) => setEmail(event.currentTarget.value)}
                type={"email"}
                name={"email"}
                placeholder="name@example.com"
                autoCapitalize="none"
                autoComplete="email"
                autoCorrect="off"
                required
            />
            <AuthButton externalLoadingState={isLoading} usingExternalLoadingState
                        icon={<HiOutlineMail/>}>
                Login with Email
            </AuthButton>
        </form>
    )
}