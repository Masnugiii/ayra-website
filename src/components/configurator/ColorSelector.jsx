export default function ColorSelector({ colors, selectedColor, onSelect }) {
  return (
    <div className="w-full min-w-0">
      <h3 className="font-display text-[22px] font-medium tracking-tight text-white">Multiple Colors</h3>
      <div className="mt-6 grid w-full min-w-0 grid-cols-5 items-center gap-2 py-1 md:flex md:flex-wrap md:gap-4 md:overflow-visible md:py-0 md:pb-1">
        {colors.map((color) => {
          const isActive = color.id === selectedColor

          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onSelect(color.id)}
              aria-pressed={isActive}
              aria-label={color.label}
              className={`aspect-square h-9 w-9 max-w-full justify-self-center rounded-full p-0 transition-shadow duration-200 md:h-[58px] md:w-[58px] md:shrink-0 ${
                isActive
                  ? 'ring-2 ring-[#C8D96B] ring-offset-2 ring-offset-[#1F3A34] shadow-[0_0_0_1px_rgba(200,217,107,0.55)]'
                  : 'border border-white/20 hover:border-white/50'
              }`}
              style={{ backgroundColor: color.hex }}
            />
          )
        })}
      </div>
    </div>
  )
}
