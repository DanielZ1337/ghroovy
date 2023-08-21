'use client'

import {signOut} from "next-auth/react";
import {Button} from "@/components/ui/button";
import React, {useState} from "react";
import {ImSpinner8} from "react-icons/im";

export default function LogoutButton() {
    const [isLoading, setIsLoading] = useState<boolean>()

    return (
        <Button
            onClick={() => {
                setIsLoading(true)
                signOut().then(() => {
                    setIsLoading(false)
                })
            }}
            variant={"outline"}
            size={"sm"}
            disabled={isLoading}
        >
            {isLoading ? <ImSpinner8 className={"animate-spin w-5 h-5"}/> : "Logout"}
        </Button>
    )
}