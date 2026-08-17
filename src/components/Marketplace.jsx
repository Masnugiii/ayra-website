import { marketplaces } from '../data'

export default function Marketplace() {
  return (
    <section
      id="buy"
      className="scroll-mt-24 bg-[#1F3A34] py-20 md:py-24 lg:py-28"
      aria-labelledby="marketplace-heading"
    >
      <div className="mx-auto w-full max-w-[1480px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="marketplace-heading"
            className="section-title text-[1.75rem] text-[#FFFFFF] md:text-[2.25rem] lg:text-[2.5rem]"
          >
            Find AYRA near you.
          </h2>
          <div className="mx-auto mt-5 h-px w-10 bg-[#C8D96B]" aria-hidden="true" />
        </div>

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-4">
          {marketplaces.map((place, index) => (
            <button
              key={place.name}
              type="button"
              className={`flex items-center px-4 py-6 text-left lg:px-5 ${
                index > 0
                  ? 'border-t border-[#C8D96B]/20 lg:border-t-0 lg:border-l'
                  : ''
              }`}
            >
              <span className="grid h-[77px] w-[77px] shrink-0 place-items-center rounded-[11px] bg-white">
                <img
                  src={place.logo}
                  alt={`${place.name} logo`}
                  className="h-[43px] w-[48px] object-contain"
                />
              </span>
              <span className="ml-[17px] shrink-0">
                <span className="block whitespace-nowrap font-display text-[1.14rem] font-semibold tracking-tight text-[#FFFFFF]">
                  {place.name}
                </span>
                <span className="mt-[5px] block whitespace-nowrap text-[0.744rem] tracking-[0.14em] text-white/45 uppercase">
                  Available now
                </span>
              </span>
              <span className="ml-auto shrink-0 pl-8 text-[0.816rem] tracking-[0.16em] text-[#C8D96B] uppercase">
                Shop →
              </span>
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
