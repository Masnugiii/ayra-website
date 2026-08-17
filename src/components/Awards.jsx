import Container from './Container'

const awards = [
  { title: 'Top Brand', year: '2016–2020' },
  { title: 'Popular Brand Award', year: '2016–2020' },
  { title: 'Top Inovation', year: '2016–2020' },
]

export default function Awards() {
  return (
    <section className="bg-white py-16 md:py-20 lg:py-24" aria-labelledby="awards-heading">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2
            id="awards-heading"
            className="section-title text-[1.75rem] text-[#1F3A34] md:text-[2.25rem] lg:text-[2.5rem]"
          >
            Penghargaan
          </h2>
          <div className="mx-auto mt-5 h-px w-10 bg-[#C8D96B]" aria-hidden="true" />
        </div>

        <div className="mt-10 rounded-lg bg-[#1F3A34] px-6 py-10 md:mt-14 md:px-4 md:py-14 lg:px-6 lg:py-16">
          <div className="grid grid-cols-1 divide-y divide-white/10 md:grid-cols-3 md:divide-x md:divide-y-0">
            {awards.map((award) => (
              <article key={award.title} className="flex flex-col items-center px-4 py-10 text-center md:py-2 lg:px-8">
                <img
                  src="/badge.png"
                  alt=""
                  width="100"
                  height="100"
                  className="h-auto w-20 object-contain md:w-[88px] lg:w-[96px]"
                />
                <h3 className="mt-6 font-display text-lg font-medium tracking-tight text-white md:text-xl">
                  {award.title}
                </h3>
                <p className="mt-3 text-sm font-medium tracking-[0.14em] text-[#C8D96B]">{award.year}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
