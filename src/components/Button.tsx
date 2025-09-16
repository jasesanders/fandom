import type { ButtonHTMLAttributes } from 'react'

type ButtonVariant = 'primary' | 'secondary'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant
}

const baseClasses =
  'inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-60 disabled:pointer-events-none'

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-emerald-500 text-emerald-950 shadow-lg shadow-emerald-500/25 hover:bg-emerald-400 focus-visible:outline-emerald-400',
  secondary:
    'border border-emerald-400/40 text-emerald-200 hover:border-emerald-300 hover:text-emerald-100 focus-visible:outline-emerald-300',
}

export function Button({
  className = '',
  variant = 'primary',
  type = 'button',
  ...props
}: ButtonProps) {
  const classes = [baseClasses, variantClasses[variant], className]
    .filter(Boolean)
    .join(' ')

  return <button type={type} className={classes} {...props} />
}
