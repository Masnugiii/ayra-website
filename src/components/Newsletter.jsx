export default function Newsletter() {
  return (
    <section
      className="relative overflow-hidden md:flex md:h-[min(100svh,66.67vw)] md:items-center"
      aria-labelledby="newsletter-heading"
    >
      <img
        src="/images/lifestyle.jpg"
        alt="A person holding an AYRA bottle"
        width="1400"
        height="932"
        className="absolute inset-0 h-full w-full object-cover object-[82%_16%] md:object-[88%_18%]"
      />

      <div className="relative aspect-[4/3] min-h-[300px] md:hidden" aria-hidden="true" />

      <div className="relative z-10 w-full px-8 pt-2 pb-12 sm:px-12 md:px-0 md:py-0 md:pl-[62%] md:pr-[20%]">
        <div className="max-w-[500px] text-left">
          <h2
            id="newsletter-heading"
            className="section-title whitespace-nowrap text-[2.1rem] text-[#FFFFFF] sm:text-[2.22rem] md:text-[2.4rem] lg:text-[2.7rem]"
          >
            Better hydration
            <br />
            starts here.
          </h2>
          <p className="mt-4 max-w-sm text-[1.11rem] leading-relaxed text-[#FFFFFF]/90 md:text-[1.17rem]">
            Discover a simpler way to carry water every day.
          </p>
          <a
            href="#shop"
            className="btn btn-lime mt-6 min-h-[51px] border-0 bg-[#C8D96B] px-[23px] text-[0.86rem] text-[#1F3A34]"
          >
            Shop AYRA
          </a>
        </div>
      </div>
    </section>
  )
}
