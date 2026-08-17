import { useLayoutEffect, useRef, useState } from 'react'
import { navLinks } from '../data'
import { MenuIcon } from './Icons'
import { useScrolled } from '../hooks/useScrolled'

function measureCabinetGap(header) {
  const img = document.querySelector('[aria-labelledby="hero-heading"] img')
  if (!header || !img?.naturalWidth) return null

  const headerBox = header.getBoundingClientRect()
  const imgBox = img.getBoundingClientRect()
  const overlapsHeader = imgBox.top < headerBox.bottom && imgBox.bottom > headerBox.top

  if (!overlapsHeader) return null

  const scale = Math.min(imgBox.width / img.naturalWidth, imgBox.height / img.naturalHeight)
  const contentWidth = img.naturalWidth * scale
  const left = imgBox.left + (imgBox.width - contentWidth) / 2 - headerBox.left
  const right = left + contentWidth

  return { left, right }
}

export default function Navbar() {
  const scrolled = useScrolled(20)
  const headerRef = useRef(null)
  const [gap, setGap] = useState(null)
  const splitDivider = Boolean(gap) && !scrolled

  useLayoutEffect(() => {
    const header = headerRef.current
    const img = document.querySelector('[aria-labelledby="hero-heading"] img')

    const update = () => {
      if (window.scrollY > 20) return
      setGap(measureCabinetGap(header))
    }

    update()
    window.addEventListener('resize', update)
    img?.addEventListener('load', update)

    const observer = img ? new ResizeObserver(update) : null
    if (img) observer.observe(img)

    return () => {
      window.removeEventListener('resize', update)
      img?.removeEventListener('load', update)
      observer?.disconnect()
    }
  }, [])

  return (
    <header
      ref={headerRef}
      className={`inset-x-0 top-0 ${scrolled ? 'fixed z-[100]' : 'absolute'}`}
    >
      <div
        aria-hidden="true"
        className={`pointer-events-none absolute inset-y-0 left-0 z-50 bg-white transition-[width] duration-300 ease-out ${
          scrolled ? 'w-full' : 'w-full md:w-[57.5%] lg:w-[55%]'
        }`}
      />
      <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 bottom-0 z-[100] h-px">
        <div
          className={`absolute top-0 left-0 h-px bg-[#E7E5DE] transition-opacity duration-300 ${
            splitDivider ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ width: gap?.left ?? 0 }}
        />
        <div
          className={`absolute top-0 h-px bg-[#E7E5DE] transition-opacity duration-300 ${
            splitDivider ? 'opacity-100' : 'opacity-0'
          }`}
          style={{ left: gap?.right ?? '100%', right: 0 }}
        />
        <div
          className={`absolute inset-x-0 top-0 h-px bg-[#E7E5DE] transition-opacity duration-300 ${
            splitDivider ? 'opacity-0' : 'opacity-100'
          }`}
        />
      </div>
      <div className="relative mx-auto flex h-[4.5rem] w-full min-w-0 max-w-[1280px] items-center justify-between gap-4 px-8 md:h-[5.5rem] md:px-10 lg:h-24 lg:px-12 xl:px-16">
        <a
          href="#top"
          className="relative z-[70] shrink-0 font-display text-[1.75rem] font-semibold leading-none tracking-[0.28em] text-ayra-forest md:text-[1.85rem] lg:text-[2rem]"
        >
          AYRA
        </a>

        <nav className="hidden min-w-0 lg:block" aria-label="Primary">
          <ul className="flex items-center justify-end gap-7 lg:gap-8 xl:gap-9">
            {navLinks.map((link) => {
              const isMasuk = link.label === 'Masuk'
              const behindCabinet =
                link.label === 'Tentang Kami' || link.label === 'Hubungi Kami' || isMasuk

              return (
                <li
                  key={link.label}
                  className={`flex shrink-0 items-center ${
                    behindCabinet ? 'relative z-50' : 'relative z-[70]'
                  }`}
                >
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
          className="relative z-[70] grid h-11 w-11 shrink-0 place-items-center text-ayra-forest lg:hidden"
          aria-label="Open menu"
        >
          <MenuIcon className="h-6 w-6" />
        </button>
      </div>
    </header>
  )
}
