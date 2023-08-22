'use client'

import React, {useState} from "react";
import {Button, ButtonProps} from "@/components/ui/button";
import {signIn, SignInOptions, signOut, SignOutParams} from "next-auth/react";
import {ImSpinner8} from "react-icons/im";
import {toast} from "@/components/ui/use-toast";
import {useRouter} from "next/navigation";

export interface AuthButtonProps
    extends ButtonProps {
    provider?: string
    icon?: React.ReactElement
    children?: React.ReactNode
    ref?: React.ForwardedRef<HTMLButtonElement>
    signInOptions?: SignInOptions
    externalLoadingState?: boolean
    usingExternalLoadingState?: boolean
    signingOut?: boolean
    signOutOptions?: SignOutParams
}

function AuthButtonWrapper({provider, icon, children, signInOptions, externalLoadingState, usingExternalLoadingState, signingOut, signOutOptions, ...props}: AuthButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
    const [isLoading, setIsLoading] = useState<boolean>()

    return (
        <Button
            variant={"secondary"}
            disabled={isLoading || externalLoadingState}
            onClick={() => {
                if (usingExternalLoadingState) return

                if (signingOut) {
                    signOut(signOutOptions).then(() => {
                        setIsLoading(false)
                    }).catch(() => {
                        setIsLoading(false)
                        toast({
                            title: "Error",
                            description: "There was an error logging you out",
                        })
                    })
                } else {

                    if (!provider) throw new Error("Provider is required")

                    setIsLoading(true)
                    signIn(provider, signInOptions).then(() => {
                        setIsLoading(false)
                    }).catch((error) => {
                        setIsLoading(false)
                        toast({
                            title: "Error",
                            description: error.message,
                        })
                    })
                }
            }}
            ref={ref}
            {...props}
        >
            {icon && !isLoading && !externalLoadingState && React.cloneElement(icon, {className: "w-5 h-5"})}
            {(isLoading || externalLoadingState && usingExternalLoadingState) &&
                <ImSpinner8 className={"animate-spin w-5 h-5"}/>}
            <span className={"ml-2"}>{children}</span>
        </Button>
    )
}

export const AuthButton = React.forwardRef<HTMLButtonElement, AuthButtonProps>(AuthButtonWrapper)