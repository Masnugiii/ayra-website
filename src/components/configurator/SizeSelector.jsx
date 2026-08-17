export default function SizeSelector({ sizes, selectedSize, onSelect }) {
  return (
    <div>
      <h3 className="font-display text-[22px] font-medium tracking-tight text-white">Multiple Sizes</h3>
      <div className="mt-6 grid grid-cols-2 gap-3">
        {sizes.map((size) => {
          const isActive = size.id === selectedSize

          return (
            <button
              key={size.id}
              type="button"
              onClick={() => onSelect(size.id)}
              aria-pressed={isActive}
              className={`h-[110px] rounded-[4px] border px-5 py-5 text-left transition-colors duration-200 ${
                isActive
                  ? 'border-[#C8D96B] bg-[#C8D96B]/10'
                  : 'border-white/20 bg-transparent hover:border-white/40'
              }`}
            >
              <span className="block text-base font-medium tracking-wide text-white">{size.label}</span>
              <span
                className={`mt-2 block text-sm tracking-[0.14em] uppercase ${
                  isActive ? 'text-[#C8D96B]' : 'text-white/55'
                }`}
              >
                {size.volume}
              </span>
            </button>
          )
        })}
      </div>
    </div>
  )
}
