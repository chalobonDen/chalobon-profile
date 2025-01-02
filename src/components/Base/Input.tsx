import * as React from 'react'

import { cn } from '@/lib/utils'

export interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean
}

const Input = React.forwardRef<HTMLInputElement, IInputProps>(({ className, type, error, ...props }, ref) => {
  return (
    <input
      type={type}
      className={cn(
        'focus-visible:ring-ring flex h-10 w-full rounded-md border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:bg-gray-200 disabled:opacity-50',
        `${error ? 'border-red-350' : 'border-gray-200'}`,
        className,
      )}
      autoComplete="new-password"
      ref={ref}
      {...props}
    />
  )
})
Input.displayName = 'Input'

export { Input }
