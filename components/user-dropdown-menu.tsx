'use client'

import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuSubContent,
    DropdownMenuSubTrigger,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {signOut, useSession} from "next-auth/react";
import React, {useState} from "react";
import {Avatar, AvatarFallback, AvatarImage} from "@/components/ui/avatar";
import {
    ChevronDown,
    Cloud,
    CreditCard,
    Github,
    Keyboard,
    LifeBuoy,
    LogOut,
    Mail,
    MessageSquare,
    Plus,
    PlusCircle,
    Settings,
    User,
    UserPlus,
    Users
} from "lucide-react";
import {AuthButton} from "@/components/layout/ui/login/auth-button";
import {ImSpinner8} from "react-icons/im";
import {Button} from "@/components/ui/button";

export default function UserDropdownMenu() {
    const {data: session, status} = useSession()
    const [isLoading, setIsLoading] = useState<boolean>()

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <div className={"flex gap-2 items-center justify-center cursor-pointer"}>
                    <Avatar className={"w-9 h-9"}>
                        <AvatarImage src={session?.user.image!}/>
                        <AvatarFallback>{session?.user.name?.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <ChevronDown className={"hidden lg:block w-3 h-3 lg:w-4 lg:h-4"}/>
                </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>
                    <p className={"hidden lg:block"}>My Account</p>
                    <div className="flex-col space-y-1 flex lg:hidden">
                        <p className="text-sm font-medium leading-none">{session?.user.name}</p>
                        <p className="text-xs leading-none text-muted-foreground">
                            {session?.user.email}
                        </p>
                    </div>
                </DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <User className="mr-2 h-4 w-4"/>
                        <span>Profile</span>
                        <DropdownMenuShortcut>⇧⌘P</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <CreditCard className="mr-2 h-4 w-4"/>
                        <span>Billing</span>
                        <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Settings className="mr-2 h-4 w-4"/>
                        <span>Settings</span>
                        <DropdownMenuShortcut>⌘S</DropdownMenuShortcut>
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                        <Keyboard className="mr-2 h-4 w-4"/>
                        <span>Keyboard shortcuts</span>
                        <DropdownMenuShortcut>⌘K</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    <DropdownMenuItem>
                        <Users className="mr-2 h-4 w-4"/>
                        <span>Team</span>
                    </DropdownMenuItem>
                    <DropdownMenuSub>
                        <DropdownMenuSubTrigger>
                            <UserPlus className="mr-2 h-4 w-4"/>
                            <span>Invite users</span>
                        </DropdownMenuSubTrigger>
                        <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                                <DropdownMenuItem>
                                    <Mail className="mr-2 h-4 w-4"/>
                                    <span>Email</span>
                                </DropdownMenuItem>
                                <DropdownMenuItem>
                                    <MessageSquare className="mr-2 h-4 w-4"/>
                                    <span>Message</span>
                                </DropdownMenuItem>
                                <DropdownMenuSeparator/>
                                <DropdownMenuItem>
                                    <PlusCircle className="mr-2 h-4 w-4"/>
                                    <span>More...</span>
                                </DropdownMenuItem>
                            </DropdownMenuSubContent>
                        </DropdownMenuPortal>
                    </DropdownMenuSub>
                    <DropdownMenuItem>
                        <Plus className="mr-2 h-4 w-4"/>
                        <span>New Team</span>
                        <DropdownMenuShortcut>⌘+T</DropdownMenuShortcut>
                    </DropdownMenuItem>
                </DropdownMenuGroup>
                <DropdownMenuSeparator/>
                <DropdownMenuItem>
                    <Github className="mr-2 h-4 w-4"/>
                    <span>GitHub</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                    <LifeBuoy className="mr-2 h-4 w-4"/>
                    <span>Support</span>
                </DropdownMenuItem>
                <DropdownMenuItem disabled>
                    <Cloud className="mr-2 h-4 w-4"/>
                    <span>API</span>
                </DropdownMenuItem>
                <DropdownMenuSeparator/>
                <DropdownMenuItem asChild>
                    <Button variant={"ghost"} className={"w-full"}
                            onClick={() => {
                                setIsLoading(true)
                                signOut({
                                    callbackUrl: "/",
                                    redirect: true
                                }).then(() => {
                                    setIsLoading(false)
                                })
                            }}
                            disabled={isLoading}
                    >
                        {!isLoading && <LogOut className={"mr-2 h-4 w-4"}/> }
                        <span> {isLoading ? <ImSpinner8 className={"animate-spin w-5 h-5"}/> : "Logout"}</span>
                        <DropdownMenuShortcut>⇧⌘Q</DropdownMenuShortcut>
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}