'use client'

import React, {useState} from "react";
import {Button, ButtonProps} from "@/components/ui/button";
import {signIn, SignInOptions} from "next-auth/react";
import {ImSpinner8} from "react-icons/im";

export interface LoginButtonProps
    extends ButtonProps {
    provider?: string
    icon?: React.ReactElement
    children?: React.ReactNode
    ref?: React.ForwardedRef<HTMLButtonElement>
    signInOptions?: SignInOptions
    externalLoadingState?: boolean
    usingExternalLoadingState?: boolean
}

function LoginButtonWrapper({provider, icon, children, signInOptions, externalLoadingState, usingExternalLoadingState, ...props}: LoginButtonProps, ref: React.ForwardedRef<HTMLButtonElement>) {
    const [isLoading, setIsLoading] = useState<boolean>()

    return (
        <Button
            variant={"secondary"}
            disabled={isLoading || externalLoadingState}
            onClick={() => {
                if (usingExternalLoadingState) return

                setIsLoading(true)
                signIn(provider, signInOptions).then(() => {
                    setIsLoading(false)
                })
            }}
            ref={ref}
            {...props}
        >
            {icon && !isLoading && !externalLoadingState && React.cloneElement(icon, {className: "w-5 h-5"})}
            {(isLoading || externalLoadingState && usingExternalLoadingState) && <ImSpinner8 className={"animate-spin w-5 h-5"}/>}
            <span className={"ml-2"}>{children}</span>
        </Button>
    )
}

export const LoginButton = React.forwardRef<HTMLButtonElement, LoginButtonProps>(LoginButtonWrapper)