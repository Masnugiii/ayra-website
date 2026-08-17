import { ArrowLeftIcon, ArrowRightIcon } from '../Icons'

export default function ProductNavigation({ colors, selectedColor, onPrevious, onNext, onSelect }) {
  const activeIndex = colors.findIndex((color) => color.id === selectedColor)

  return (
    <div className="mt-8 flex flex-col items-center gap-5">
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onPrevious}
          className="grid h-[50px] w-[50px] place-items-center rounded-full border border-white/20 bg-transparent text-white transition-colors duration-200 hover:border-white/45"
          aria-label="Previous color"
        >
          <ArrowLeftIcon className="h-4 w-4" />
        </button>
        <button
          type="button"
          onClick={onNext}
          className="grid h-[50px] w-[50px] place-items-center rounded-full border border-[#C8D96B] bg-[#C8D96B] text-[#1F3A34] transition-colors duration-200 hover:bg-[#d4e47a]"
          aria-label="Next color"
        >
          <ArrowRightIcon className="h-4 w-4" />
        </button>
      </div>

      <div className="flex items-center gap-2.5" role="tablist" aria-label="Bottle colors">
        {colors.map((color, index) => {
          const isActive = index === activeIndex

          return (
            <button
              key={color.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              aria-label={color.label}
              onClick={() => onSelect(color.id)}
              className={`h-2 w-2 rounded-full transition-colors duration-200 ${
                isActive ? 'bg-[#C8D96B]' : 'bg-white/30 hover:bg-white/55'
              }`}
            />
          )
        })}
      </div>
    </div>
  )
}
