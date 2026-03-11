import Image from 'next/image'
import { SignupForm } from './ui/SignupForm'

export function Footer() {
  return (
    <footer id="notify" className="border-t border-grey-lightest">
      {/* Main footer row */}
      <div className="mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6 py-24">
        <div className="grid grid-cols-2 gap-12 items-start">
          {/* Left — full horizontal logo lockup (white SVG) + location */}
          <div className="flex flex-col gap-4">
            <Image
              src="/LOGO_FIN_HOR_white.svg"
              alt="CONVEX"
              width={220}
              height={32}
              priority
            />
            <p className="text-lg font-light text-grey-light">Riga, Latvia</p>
          </div>

          {/* Right — signup form */}
          <SignupForm />
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-grey-mid">
        <div className="mx-auto w-full max-w-[1500px] xl:max-w-[1220px] lg:max-w-[1000px] px-6 py-6 flex items-center justify-between">
          <span className="text-lg font-light text-grey-mid">
            © {new Date().getFullYear()} CONVEX
          </span>
          <span className="text-lg font-light text-grey-mid">convexpc.com</span>
        </div>
      </div>
    </footer>
  )
}
