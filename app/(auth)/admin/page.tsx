import {Pencil, Plus} from "lucide-react";
import React from "react";
import {Button} from "@/components/ui/button";

export default function Page() {

    return (
        <div className={"flex flex-col gap-4"}>
            <div className={"flex flex-col gap-4"}>
                <div className={"flex items-center justify-between"}>
                    <h2 className={"text-xl font-bold text-gray-900 dark:text-white"}>Dashboard</h2>
                    <div className={"flex items-center gap-4"}>
                        <Button className={"flex items-center gap-2 group"}
                                variant={"secondary"}
                        >
                            <div
                                className={"rounded-full border-2 p-1 dark:bg-green-700 bg-green-300 border-foreground group-hover:scale-105 duration-100 ease-linear"}>
                                <Plus size={15}/>
                            </div>
                            <span className={"text-sm font-medium text-gray-900 dark:text-white"}>Add
                                                Widget</span>
                        </Button>
                        <Button className={"flex items-center gap-2 group"}
                                variant={"secondary"}
                        >
                            <div
                                className={"rounded-full border-2 p-1 dark:bg-red-700 bg-red-300 border-foreground group-hover:scale-105 duration-100 ease-linear"}>
                                <Pencil size={15}/>
                            </div>
                            <span className={"text-sm font-medium text-gray-900 dark:text-white"}>Edit
                                                Widgets</span>
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    )
}