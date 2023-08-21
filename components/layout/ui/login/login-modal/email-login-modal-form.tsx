'use client'

import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {LoginButton} from "@/components/layout/ui/login/login-button";
import {HiOutlineMail} from "react-icons/hi";
import React, {useState} from "react";
import {signIn} from "next-auth/react";
import {z } from "zod";

export default function EmailLoginModalForm() {
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
            signIn("email", {email: email, redirect:false}).then(() => {
                setIsLoading(false)
            })
        }}>
            <Label className={"text-left block -mb-2 ml-3"} htmlFor={"email"}>Email</Label>
            <Input onInput={(event) => setEmail(event.currentTarget.value)} type={"email"} name={"email"}
                   placeholder={"Enter your email..."} required/>
            <LoginButton externalLoadingState={isLoading} usingExternalLoadingState className={"bg-primary py-6"}
                         size={"lg"}
                         icon={<HiOutlineMail/>}>
                Login with Email
            </LoginButton>
        </form>
    )
}