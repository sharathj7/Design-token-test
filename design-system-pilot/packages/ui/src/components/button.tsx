import * as React from "react"
import { Loader2 } from "lucide-react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-sm text-sm font-medium leading-6 transition-all disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        // ── Figma: "primary button" / "default" ───────────────────────────
        default:
          "bg-primary text-primary-foreground hover:bg-primary-hover",
        // ── Figma: "destructive" ──────────────────────────────────────────
        destructive:
          "bg-destructive text-white hover:bg-destructive-hover focus-visible:ring-destructive/20 dark:focus-visible:ring-destructive/40 dark:bg-destructive/60",
        // ── Figma: "outline" ─────────────────────────────────────────────
        outline:
          "border bg-background hover:bg-accent hover:text-accent-foreground dark:bg-input/30 dark:border-input dark:hover:bg-input/50",
        // ── Figma: "subtle" ───────────────────────────────────────────────
        subtle:
          "bg-secondary text-secondary-foreground hover:bg-border",
        // ── secondary: kept for backwards-compat, maps loosely to subtle ──
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        // ── Figma: "ghost" ────────────────────────────────────────────────
        ghost:
          "hover:bg-accent hover:text-accent-foreground dark:hover:bg-accent/50",
        // ── Figma: "link" ─────────────────────────────────────────────────
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-9 px-4 py-2 has-[>svg]:px-3",
        sm: "h-8 rounded-md gap-1.5 px-3 has-[>svg]:px-2.5",
        lg: "h-10 rounded-md px-6 has-[>svg]:px-4",
        // ── Figma: "just icon" (square) ───────────────────────────────────
        icon: "size-9",
        // ── Figma: "just icon circle" ─────────────────────────────────────
        "icon-circle":
          "size-10 rounded-full border border-border bg-background hover:bg-secondary shadow-none p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

function Button({
  className,
  variant,
  size,
  asChild = false,
  isLoading = false,
  children,
  disabled,
  ...props
}: React.ComponentProps<"button"> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean
    /** Figma "loading" state: shows a spinner and disables the button */
    isLoading?: boolean
  }) {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      data-slot="button"
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={disabled || isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 className="size-4 animate-spin" />
          {children}
        </>
      ) : (
        children
      )}
    </Comp>
  )
}

export { Button, buttonVariants }
