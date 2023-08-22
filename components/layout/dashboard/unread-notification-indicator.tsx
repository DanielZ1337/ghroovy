import React, {forwardRef} from "react";
import {cn} from "@/lib/utils";


interface UnreadNotificationIndicatorProps extends React.HTMLAttributes<HTMLSpanElement> {
    read: boolean
}

function UnreadNotificationIndicator({read, ...props}: UnreadNotificationIndicatorProps, ref: React.ForwardedRef<HTMLSpanElement>) {
    return (
        <span className={cn("shrink-0 grow-0 w-1.5 h-2.5 rounded-full", read ? "bg-transparent" : "bg-primary")}
              ref={ref}
              {...props}/>
    )
}

export default forwardRef(UnreadNotificationIndicator)

