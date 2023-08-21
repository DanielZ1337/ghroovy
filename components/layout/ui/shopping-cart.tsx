import {Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger} from "@/components/ui/sheet";
import {Button} from "@/components/ui/button";
import {HiOutlineShoppingCart} from "react-icons/hi2";

export default function ShoppingCart() {
    return (
        <Sheet>
            <SheetTrigger
                aria-label={"Open cart"}
                asChild>
                <Button variant={"outline"} size={"sm"} className={"relative leading-normal"}>
                    <HiOutlineShoppingCart/>
                    <div
                        className={"absolute right-0 top-0 -mr-2 -mt-2 h-4 w-4 rounded bg-primary text-[11px] font-medium text-white text-center"}>4
                    </div>
                </Button>
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetTitle>Are you sure absolutely sure?</SheetTitle>
                    <SheetDescription>
                        This action cannot be undone. This will permanently delete your account
                        and remove your data from our servers.
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
        </Sheet>
    )
}