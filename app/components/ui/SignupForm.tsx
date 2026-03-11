'use client'

import { useState } from 'react'
import { Button } from './Button'

export type SignupFormProps = React.ComponentProps<'form'>

export function SignupForm({ className = '', ...props }: SignupFormProps) {
  const [email, setEmail] = useState('')
  const [state, setState] = useState<'idle' | 'submitted' | 'error'>('idle')

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    if (!email.includes('@')) {
      setState('error')
      return
    }
    // UI only — no API call at this stage
    setState('submitted')
  }

  if (state === 'submitted') {
    return (
      <div className={`flex flex-col gap-3 ${className}`}>
        <p className="text-grey-lightest text-2xl font-normal">You&apos;re on the list.</p>
        <p className="text-grey-light text-lg font-light">We&apos;ll reach out before units ship.</p>
      </div>
    )
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-col gap-3 ${className}`}
      {...props}
    >
      <label className="text-grey-lightest text-2xl font-normal" htmlFor="signup-email">
        Be first to know
      </label>
      <p className="text-grey-light text-lg font-light">
        First units targeting end of 2027. No spam.
      </p>
      <div className="flex gap-3 flex-wrap">
        <input
          id="signup-email"
          type="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value)
            if (state === 'error') setState('idle')
          }}
          placeholder="your@email.com"
          className="bg-transparent border-2 border-grey-lightest rounded-none text-white text-lg font-light px-4 py-3 flex-1 min-w-[220px] placeholder:text-grey-mid focus:outline-none focus:border-white transition-colors"
          aria-invalid={state === 'error'}
        />
        <Button type="submit" variant="sharp">
          Notify Me
        </Button>
      </div>
      {state === 'error' && (
        <p className="text-accent text-lg font-light" role="alert">
          Please enter a valid email address.
        </p>
      )}
    </form>
  )
}
