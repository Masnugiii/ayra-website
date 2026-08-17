import { useScrolled } from '../hooks/useScrolled'
import { ArrowUpIcon } from './Icons'

export default function BackToTop() {
  const visible = useScrolled(480)

  return (
    <button
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      className={`fixed right-4 bottom-[4.75rem] z-40 grid h-11 w-11 place-items-center border border-ayra-mist bg-ayra-cream text-ayra-forest shadow-[0_8px_20px_rgba(24,32,30,0.08)] transition-[opacity,transform,background-color] duration-300 hover:bg-white md:right-6 md:bottom-[5.25rem] ${
        visible ? 'translate-y-0 opacity-100' : 'pointer-events-none translate-y-2 opacity-0'
      }`}
      aria-label="Back to top"
      tabIndex={visible ? 0 : -1}
    >
      <ArrowUpIcon />
    </button>
  )
}
