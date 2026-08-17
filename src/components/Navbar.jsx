import { navLinks } from '../data'
import { MenuIcon } from './Icons'

export default function Navbar() {
  return (
    <header className="sticky top-0 h-[4.5rem] border-b border-[#E7E5DE] bg-white md:h-[5.5rem] lg:h-24">
      <div className="mx-auto flex h-full w-full min-w-0 max-w-[1280px] items-center justify-between gap-4 px-8 md:px-10 lg:px-12 xl:px-16">
        <a
          href="#top"
          className="shrink-0 font-display text-[1.75rem] font-semibold leading-none tracking-[0.28em] text-ayra-forest md:text-[1.85rem] lg:text-[2rem]"
        >
          AYRA
        </a>

        <nav className="hidden min-w-0 lg:block" aria-label="Primary">
          <ul className="flex items-center justify-end gap-7 lg:gap-8 xl:gap-9">
            {navLinks.map((link) => {
              const isMasuk = link.label === 'Masuk'

              return (
                <li key={link.label} className="flex shrink-0 items-center">
                  <a
                    href={link.href}
                    className="group inline-flex flex-col items-stretch gap-1.5 text-[0.9375rem] font-medium leading-none tracking-[0.04em] text-ayra-forest/75 transition-colors duration-200 hover:text-ayra-forest lg:text-base"
                  >
                    {link.label}
                    <span
                      className={`h-px w-full origin-left transition-[background-color,transform] duration-300 ${
                        isMasuk
                          ? 'bg-ayra-lime'
                          : 'bg-transparent group-hover:bg-ayra-lime'
                      }`}
                      aria-hidden="true"
                    />
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>

        <button
          type="button"
          className="grid h-11 w-11 shrink-0 place-items-center text-ayra-forest lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
