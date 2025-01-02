import * as React from 'react'

import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'

import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50',
  {
    variants: {
      variant: {
        default: 'text-black-950 bg-white shadow rounded-lg',
        primary:
          'bg-primary border border-primary text-primary-foreground hover:border hover:border-primary hover:bg-background hover:text-primary rounded-lg text-white',
        info: 'border border-blue-550 bg-blue-550 text-primary-foreground hover:border hover:border-blue-550 hover:bg-background hover:text-blue-550 rounded-lg text-white',
        destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-lg',
        outline:
          'border border-primary bg-background text-primary hover:bg-primary hover:text-primary-foreground rounded-lg',
        secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80 rounded-lg',
        ghost: 'hover:bg-accent hover:text-accent-foreground rounded-lg',
        link: 'text-primary underline-offset-4 hover:underline rounded-lg',
        success:
          'border border-green-550 bg-green-550 text-primary-foreground hover:border hover:border-green-550 hover:bg-background hover:text-green-550 rounded-lg text-white',
        warning:
          'bg-warning-100 text-primary-foreground hover:border hover:border-warning-100 hover:bg-background hover:text-warning-100 rounded-lg text-white',
        outlineDefault: 'border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground',
      },
      size: {
        default: 'h-10 px-4 py-2',
        sm: 'h-9 rounded-md px-3',
        lg: 'h-11 rounded-md px-8',
        icon: 'h-10 w-10',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
