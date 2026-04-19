import * as React from "react"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const tagVariants = cva(
  "inline-flex items-center gap-1 whitespace-nowrap rounded-sm px-2 text-xs font-medium h-6",
  {
    variants: {
      variant: {
        neutral:  "bg-tag-neutral-bg text-tag-neutral-text",
        positive: "bg-tag-positive-bg text-tag-positive-text",
        error:    "bg-tag-error-bg text-tag-error-text",
        warning:  "bg-tag-warning-bg text-tag-warning-text",
        info:     "bg-tag-info-bg text-tag-info-text",
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
