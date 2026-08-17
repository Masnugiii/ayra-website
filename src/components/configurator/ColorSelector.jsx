export default function ColorSelector({ colors, selectedColor, onSelect }) {
  return (
    <div>
      <h3 className="font-display text-[22px] font-medium tracking-tight text-white">Multiple Colors</h3>
      <div className="mt-6 flex flex-nowrap gap-4 overflow-x-auto pb-1 md:flex-wrap md:overflow-visible">
        {colors.map((color) => {
          const isActive = color.id === selectedColor

          return (
            <button
              key={color.id}
              type="button"
              onClick={() => onSelect(color.id)}
              aria-pressed={isActive}
              aria-label={color.label}
              className={`h-[58px] w-[58px] shrink-0 rounded-full transition-shadow duration-200 ${
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
