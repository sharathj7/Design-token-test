import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-sm px-2 text-xs font-medium h-6",
  {
    variants: {
      variant: {
        neutral:  "bg-gray-300 text-gray-800",
        positive: "bg-green-300 text-green-800",
        error:    "bg-red-300 text-red-800",
        warning:  "bg-amber-300 text-amber-800",
        info:     "bg-blue-300 text-blue-800",
      },
    },
    defaultVariants: {
      variant: "neutral",
    },
  }
)

export interface TagProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof tagVariants> {}

function Tag({ className, variant, ...props }: TagProps) {
  return (
    <span
      data-slot="tag"
      className={cn(tagVariants({ variant, className }))}
      {...props}
    />
  )
}

export { Tag, tagVariants }
