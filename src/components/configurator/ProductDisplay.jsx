import ProductNavigation from './ProductNavigation'

export default function ProductDisplay({ color, size, colors, onPrevious, onNext, onSelectColor }) {
  const isLarge = size === 'large'

  return (
    <div className="flex flex-col items-center">
      <div className="relative flex h-[480px] w-full items-center justify-center overflow-hidden sm:h-[560px] md:overflow-visible lg:h-[680px]">
        <div
          className={`relative flex h-[380px] w-full origin-bottom items-end justify-center transition-transform duration-300 ease-out sm:h-[500px] lg:h-[640px] ${
            isLarge ? 'scale-[1.13]' : 'scale-100'
          }`}
        >
          <div
            className="pointer-events-none absolute bottom-1 left-1/2 h-5 w-24 -translate-x-1/2 rounded-full bg-black/40 blur-xl"
            aria-hidden="true"
          />
          {colors.map((item) => {
            const isActive = item.id === color.id

            return (
              <img
                key={item.id}
                src={item.image}
                alt={isActive ? item.alt : ''}
                width="420"
                height="980"
                className={`absolute bottom-0 left-1/2 h-full w-auto max-w-full -translate-x-1/2 object-contain object-bottom transition-opacity duration-300 ease-out ${
                  isActive ? 'opacity-100' : 'pointer-events-none opacity-0'
                }`}
              />
            )
          })}
        </div>
      </div>

      <ProductNavigation
        colors={colors}
        selectedColor={color.id}
        onPrevious={onPrevious}
        onNext={onNext}
        onSelect={onSelectColor}
      />
    </div>
  )
}
