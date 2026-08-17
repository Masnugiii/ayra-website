import { ShieldIcon, WarrantyIcon } from '../Icons'

const details = [
  {
    title: 'Durable Design',
    text: (
      <>
        Made to keep up with
        <br />
        everyday movement.
      </>
    ),
    icon: ShieldIcon,
  },
  {
    title: '1 Year Warranty',
    text: (
      <>
        Reliable quality, backed
        <br />
        by AYRA.
      </>
    ),
    icon: WarrantyIcon,
  },
]

export default function ProductInfo() {
  return (
    <div className="grid gap-8 sm:grid-cols-2 sm:gap-6">
      {details.map((detail) => {
        const Icon = detail.icon

        return (
          <div key={detail.title} className="flex gap-3">
            <div className="mt-0.5 text-[#C8D96B]">
              <Icon className="h-5 w-5" />
            </div>
            <div>
              <h3 className="font-display text-base font-medium tracking-tight text-white">{detail.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-white/60">{detail.text}</p>
            </div>
          </div>
        )
      })}
    </div>
  )
}
