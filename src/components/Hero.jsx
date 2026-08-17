import { useScrolled } from '../hooks/useScrolled'

export default function Hero() {
  const scrolled = useScrolled(20)

  return (
    <section className="relative bg-white md:h-svh" aria-labelledby="hero-heading">
      <div className="grid h-full min-h-0 items-stretch md:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:grid-cols-[minmax(0,11fr)_minmax(0,9fr)]">
        <div className="relative z-10 flex items-center">
          <div className="w-full pt-[6.5rem] pr-6 pb-12 pl-6 md:pt-[7.25rem] md:pr-8 md:pb-8 md:pl-[calc(6vw+1.5rem)] lg:pt-32 lg:pl-[calc(10vw+3.5rem)] xl:pr-4 xl:pl-[calc(12vw+4.5rem)] 2xl:pr-0">
            <div className="min-w-0 max-w-[560px] md:-translate-y-9 md:ml-auto lg:max-w-[620px] lg:-translate-y-[60px] xl:max-w-[650px] 2xl:-mr-8">
              <p className="eyebrow fade-up">Everyday hydration</p>
              <h1
                id="hero-heading"
                className="section-title fade-up fade-up-delay-1 mt-5 text-[2.4rem] text-ayra-ink sm:text-[2.75rem] md:text-[3.25rem] lg:text-[4.25rem] xl:text-[4.75rem]"
              >
                Hydration, beautifully simple.
              </h1>
              <p className="fade-up fade-up-delay-2 mt-5 max-w-md text-[0.95rem] leading-relaxed text-ayra-ink/70 md:text-base">
                Thoughtfully designed reusable bottles made to move with you, wherever the day takes you.
              </p>
              <div className="fade-up fade-up-delay-3 mt-8 flex flex-wrap gap-3">
                <a href="#shop" className="btn btn-primary">
                  Shop Bottles
                </a>
                <a href="#shop" className="btn btn-secondary">
                  Explore Collection
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="relative min-h-[240px] min-w-0 overflow-visible md:h-full md:min-h-0">
          <div
            className={`h-full w-full md:absolute md:right-0 md:bottom-0 md:left-0 md:h-auto md:transition-[top] md:duration-300 md:ease-out ${
              scrolled
                ? 'md:top-[5.5rem] md:z-40 lg:top-24'
                : 'md:top-5 md:z-[60] lg:top-0'
            }`}
          >
            <img
              src="/images/hero-cabinet.jpg"
              alt="AYRA forest-green bottle displayed in a built-in oak cabinet"
              width="983"
              height="1475"
              fetchPriority="high"
              className="h-full w-full min-h-0 object-contain object-center"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
