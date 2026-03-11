/**
 * Button — primary CTA
 * Variants: 'sharp' (0px radius) | 'rounded' (6px radius)
 * Server Component — no client state needed.
 */

export type ButtonProps = React.ComponentProps<'button'> & {
  variant?: 'sharp' | 'rounded'
}

export function Button({ variant = 'rounded', className = '', ...props }: ButtonProps) {
  const radius = variant === 'sharp' ? 'rounded-none' : 'rounded'

  return (
    <button
      className={`bg-accent text-white text-lg font-light px-6 py-3 border-2 border-accent ${radius} hover:bg-transparent hover:text-accent transition-colors duration-200 cursor-pointer ${className}`}
      {...props}
    />
  )
}
