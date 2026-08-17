export function SearchIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="11" cy="11" r="6.25" stroke="currentColor" strokeWidth="1.5" />
      <path d="M16 16.5 20 20.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CartIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7.5h14l-1.2 10.2a1.5 1.5 0 0 1-1.5 1.3H7.7a1.5 1.5 0 0 1-1.5-1.3L5 7.5Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
      <path d="M8 7.5 9.2 4.8H14.8L16 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function MenuIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 8.5h14M5 15.5h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function CloseIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="m7 7 10 10M17 7 7 17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function PaletteIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="8" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="9" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="8" cy="16" r="2.25" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="16" cy="16" r="2.25" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function SizesIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="4.5" y="8" width="4.5" height="11" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="10" y="5.5" width="4.5" height="13.5" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
      <rect x="15.5" y="3.5" width="4.5" height="15.5" rx="2.2" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function ShieldIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3.8 19 6.2v6.1c0 4.1-2.9 6.9-7 8.2-4.1-1.3-7-4.1-7-8.2V6.2L12 3.8Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function WarrantyIcon({ className = 'h-6 w-6' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="8" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 8v4.2L14.6 14" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function TrophyIcon({ className = 'h-24 w-24' }) {
  return (
    <svg className={className} viewBox="0 0 80 80" fill="#C8D96B" aria-hidden="true">
      <path d="M26 19C14.5 19 9 26.2 9 34c0 8.4 6.8 14.5 18.2 14.5H30v-7.4h-2.6c-6.4 0-10.4-3.6-10.4-7.1 0-3.4 3.8-6.6 10.2-6.6H30V19H26Z" />
      <path d="M54 19h4c11.5 0 17 7.2 17 15 0 8.4-6.8 14.5-18.2 14.5H50v-7.4h2.6c6.4 0 10.4-3.6 10.4-7.1 0-3.4-3.8-6.6-10.2-6.6H50V19h4Z" />
      <path d="M27 13.5c0-4.2 5.6-7.5 13-7.5s13 3.3 13 7.5c0 14.2-3.8 25.2-13 27.8C30.8 38.7 27 27.7 27 13.5Z" />
      <rect x="27" y="11.5" width="26" height="9" rx="4.5" />
      <rect x="33.5" y="40" width="13" height="6.5" rx="3.25" />
      <rect x="36" y="44" width="8" height="10" rx="3" />
      <rect x="29.5" y="52.5" width="21" height="8" rx="4" />
      <rect x="20" y="59.5" width="40" height="13.5" rx="5.5" />
    </svg>
  )
}

export function AwardBadgeIcon({ className = 'h-24 w-24' }) {
  return (
    <svg className={className} viewBox="0 0 96 96" fill="none" aria-hidden="true">
      <path
        d="M18 58c-4.5-7-5.5-16-1.8-23 5.4 3.2 9 9.6 10 16.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M78 58c4.5-7 5.5-16 1.8-23-5.4 3.2-9 9.6-10 16.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path d="M20 64c3.5 2.2 7.6 3.4 12 3.4M76 64c-3.5 2.2-7.6 3.4-12 3.4" stroke="#C8D96B" strokeWidth="1.4" strokeLinecap="round" />
      <circle cx="48" cy="42" r="18" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="48" cy="42" r="12.5" stroke="#C8D96B" strokeWidth="1.2" />
      <path
        d="M48 32.5 50.6 38l6 .7-4.4 4.1 1.2 5.9L48 45.8l-5.4 2.9 1.2-5.9-4.4-4.1 6-.7Z"
        fill="#C8D96B"
      />
      <path d="M40 59.5 43.5 84 48 76.5 52.5 84 56 59.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  )
}

export function LaurelIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path
        d="M8 22c-2-3-2.5-7-.8-10 2.4 1.4 4 4.2 4.4 7.4M24 22c2-3 2.5-7 .8-10-2.4 1.4-4 4.2-4.4 7.4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <path d="M11 24.5h10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <path d="M16 7.5v4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function MarkIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <circle cx="12" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="20" cy="13" r="3.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7.5 22.5c1.6-2.6 4.2-4 8.5-4s6.9 1.4 8.5 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  )
}

export function SparkIcon({ className = 'h-8 w-8' }) {
  return (
    <svg className={className} viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M16 6v4M16 22v4M6 16h4M22 16h4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
      <rect x="12" y="12" width="8" height="8" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  )
}

export function ChatIcon({ className = 'h-5 w-5' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M5 7.2A2.2 2.2 0 0 1 7.2 5h9.6A2.2 2.2 0 0 1 19 7.2v7.1a2.2 2.2 0 0 1-2.2 2.2H9.4L5 19.4V7.2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.5 9.5h7M8.5 12.5h4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  )
}

export function ArrowUpIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 18V7M7.5 11.5 12 7l4.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowLeftIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M19 12H6M10.5 7.5 5 12l5.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export function ArrowRightIcon({ className = 'h-4 w-4' }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12h13M13.5 7.5 19 12l-5.5 4.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

const benefitIcons = {
  palette: PaletteIcon,
  sizes: SizesIcon,
  shield: ShieldIcon,
  warranty: WarrantyIcon,
}

const awardIcons = {
  laurel: LaurelIcon,
  mark: MarkIcon,
  spark: SparkIcon,
}

export function BenefitIcon({ name, className }) {
  const Icon = benefitIcons[name]
  return Icon ? <Icon className={className} /> : null
}

export function AwardIcon({ name, className }) {
  const Icon = awardIcons[name]
  return Icon ? <Icon className={className} /> : null
}
