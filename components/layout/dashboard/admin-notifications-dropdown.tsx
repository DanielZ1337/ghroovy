import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger
} from "@/components/ui/dropdown-menu";
import {Button} from "@/components/ui/button";
import {AlertCircle, Bell} from "lucide-react";
import React from "react";
import {ScrollArea} from "@/components/ui/scroll-area";
import {Skeleton} from "@/components/ui/skeleton";
import {Separator} from "@/components/ui/separator";
import {cn} from "@/lib/utils";
import UnreadNotificationIndicator from "@/components/layout/dashboard/unread-notification-indicator";

const notifications = [
    {
        id: 1,
        title: "New user registeredNew user registeredNew user registeredNew user registeredNew user registered",
        description: "A new user has registered on your website. Check out this cool dashboard template.",
        time: "5m",
        read: false,
    }
]

export default function AdminNotificationsDropdown() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"ghost"}
                    size={"icon"}
                >
                    <Bell/>
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator/>
                <DropdownMenuGroup>
                    {!notifications && (
                        <ScrollArea
                            className="flex flex-col gap-2 items-center justify-between w-full h-72">
                            <div className="pr-2 pb-2">
                                {[...Array(10)].map((_, idx) => (
                                    <>
                                        <div className={"flex gap-2 items-center justify-center w-full"}
                                             key={idx}>
                                            <span
                                                className="-ml-1 w-2.5 h-2.5 rounded-full bg-primary"></span>
                                            <div className="space-y-2 w-full">
                                                <div
                                                    className="h-8 w-full flex justify-center items-center gap-2">
                                                    <Skeleton className="h-8 w-8 rounded-full"/>
                                                    <Skeleton className="h-4 w-full"/>
                                                </div>
                                                <Skeleton className="h-4 w-full"/>
                                            </div>
                                        </div>
                                        <Separator
                                            className={cn("my-2", idx === 9 && "hidden")}/>
                                    </>
                                ))}
                            </div>
                        </ScrollArea>
                    )}
                    {notifications && (
                        <ScrollArea className={"h-72 w-full"}>
                            {notifications.length === 0 && (
                                <div className="flex flex-col items-center justify-center py-6 h-72 w-full">
                                    <AlertCircle className={"stroke-destructive"}/>
                                    <h3 className="text-foreground font-medium text-xl mt-4">
                                        No messages
                                    </h3>
                                    <p className="text-muted-foreground text-center px-6">
                                        You currently don&apos;t have any messages.
                                    </p>
                                </div>
                            )}
                            {notifications && notifications.length > 0 && (
                                notifications.map((notification, idx) => (
                                    <div className="pr-2" key={idx}>
                                        <DropdownMenuItem>
                                            <div className="flex items-center justify-between group pr-2"
                                                 data-read={notification.read}>
                                                <div className="flex items-center gap-3">
                                                    <UnreadNotificationIndicator read={notification.read}/>
                                                    <div className="flex flex-col gap-2">
                                                        <span
                                                            className={"gap-2 text-sm font-medium group-data-[read=true]:font-light text-foreground line-clamp-1"}>{notification.title}</span>
                                                        <span
                                                            className="text-xs text-muted-foreground w-full line-clamp-3">{notification.description}</span>
                                                        <span
                                                            className="text-xs text-muted-foreground">{notification.time}</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </DropdownMenuItem>
                                        <Separator
                                            className={cn("my-2", idx === notifications.length - 1 && "hidden")}/>
                                    </div>
                                ))
                            )}
                        </ScrollArea>
                    )}
                </DropdownMenuGroup>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}