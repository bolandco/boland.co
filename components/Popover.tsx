"use client"

import * as React from "react"
import * as PopoverPrimitive from "@radix-ui/react-popover"

import classNames from "classnames"

const Popover = PopoverPrimitive.Root

const PopoverTrigger = PopoverPrimitive.Trigger

const PopoverContent = React.forwardRef<
   React.ElementRef<typeof PopoverPrimitive.Content>,
   React.ComponentPropsWithoutRef<typeof PopoverPrimitive.Content>
>(({ className, align = "center", sideOffset = 4, ...props }, ref) => (
   <PopoverPrimitive.Portal>
      <PopoverPrimitive.Content
         ref={ref}
         align={align}
         sideOffset={sideOffset}
         className={classNames(
            "z-50 w-72 rounded-2xl border bg-popover p-4 text-popover-foreground shadow-md outline-none animate-in data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 mx-8",
            className
         )}
         {...props}
      />
   </PopoverPrimitive.Portal>
))
PopoverContent.displayName = PopoverPrimitive.Content.displayName

export { Popover, PopoverTrigger, PopoverContent }