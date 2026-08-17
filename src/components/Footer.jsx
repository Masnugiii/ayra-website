import Container from './Container'

const contactLines = ['Alamat', 'Kota', 'Kode Pos', 'Telp']
const socialLinks = ['Facebook', 'Instagram', 'Twitter']
const productLinks = ['Promo', 'Baru', 'Kategori 1', 'Kategori 2', 'Kategori 3']
const companyLinks = [
  'About',
  'Contact Us',
  'Lowongan Kerja',
  'Gallery',
  'Blog',
  'Kebijakan Privasi',
  'Syarat dan Ketentuan',
]

export default function Footer() {
  return (
    <footer id="about" className="w-full max-w-full scroll-mt-24 overflow-x-clip bg-ayra-charcoal text-ayra-cream">
      <Container className="min-w-0 py-14 md:py-16">
        <div className="flex min-w-0 flex-col gap-10 md:flex-row md:items-start md:justify-between">
          <div className="min-w-0 max-w-full">
            <p className="section-title max-w-full whitespace-normal break-words text-[1.188rem] text-ayra-cream md:whitespace-nowrap md:text-[1.548rem] lg:text-[1.8rem]">
              <a href="#top" className="font-bold transition-colors duration-300 hover:text-ayra-lime">
                AYRA
              </a>
              <span className="font-normal"> - Made for every day.</span>
            </p>

            <ul className="mt-8 space-y-3 text-[1.05rem] leading-snug break-words whitespace-normal text-ayra-cream/80">
              {contactLines.map((line) => (
                <li key={line}>{line}</li>
              ))}
            </ul>

            <ul className="mt-3 space-y-3">
              {socialLinks.map((name) => (
                <li key={name}>
                  <a
                    href={`#${name.toLowerCase()}`}
                    className="text-[1.05rem] leading-snug break-words whitespace-normal text-ayra-cream/80 transition-colors duration-300 hover:text-ayra-lime"
                  >
                    {name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="grid min-w-0 grid-cols-1 gap-10 text-left md:shrink-0 md:grid-cols-2 md:gap-14">
            <div className="min-w-0">
              <p className="text-[1.05rem] font-bold text-ayra-cream">Produk</p>
              <ul className="mt-4 space-y-2.5">
                {productLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#shop"
                      className="text-[1.05rem] break-words whitespace-normal text-ayra-cream/80 transition-colors duration-300 hover:text-ayra-lime"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            <div className="min-w-0">
              <p className="text-[1.05rem] font-bold text-ayra-cream">Perusahaan</p>
              <ul className="mt-4 space-y-2.5">
                {companyLinks.map((item) => (
                  <li key={item}>
                    <a
                      href="#about"
                      className="text-[1.05rem] break-words whitespace-normal text-ayra-cream/80 transition-colors duration-300 hover:text-ayra-lime"
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Container>

      <div className="w-full max-w-full border-t border-ayra-cream/10">
        <p className="mx-auto w-full max-w-full px-6 py-5 pb-24 text-center text-xs tracking-wide break-words whitespace-normal text-ayra-cream/50 md:px-5 md:pb-5">
          © 2019–2021 Gradin. All Rights Reserved. Please send bug report and feedback to: Gradin
        </p>
      </div>
    </footer>
  )
}
