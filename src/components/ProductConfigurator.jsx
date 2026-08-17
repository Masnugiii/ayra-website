import { useMemo, useState } from 'react'
import { configuratorColors, configuratorSizes } from '../data'
import ColorSelector from './configurator/ColorSelector'
import ProductDisplay from './configurator/ProductDisplay'
import ProductInfo from './configurator/ProductInfo'
import SizeSelector from './configurator/SizeSelector'

export default function ProductConfigurator() {
  const [selectedColor, setSelectedColor] = useState('green')
  const [selectedSize, setSelectedSize] = useState('normal')

  const activeColor = useMemo(
    () => configuratorColors.find((color) => color.id === selectedColor) ?? configuratorColors[0],
    [selectedColor],
  )

  const activeIndex = configuratorColors.findIndex((color) => color.id === selectedColor)

  const cycleColor = (direction) => {
    const nextIndex = (activeIndex + direction + configuratorColors.length) % configuratorColors.length
    setSelectedColor(configuratorColors[nextIndex].id)
  }

  return (
    <section
      id="shop"
      className="scroll-mt-24 min-h-[800px] bg-[#1F3A34] py-16 text-white md:min-h-[840px] md:py-20 lg:min-h-[900px] lg:py-24"
      aria-labelledby="configurator-heading"
    >
      <div className="mx-auto w-full max-w-[1320px] px-5 sm:px-8 lg:px-10">
        <div>
          <h2
            id="configurator-heading"
            className="font-display text-[2rem] font-medium leading-[1.1] tracking-tight text-white md:text-[2.75rem] lg:text-[52px]"
          >
            Designed for your everyday.
          </h2>
          <div className="mt-4 h-[2px] w-[44px] bg-[#C8D96B]" aria-hidden="true" />
        </div>

        <div className="mt-10 flex flex-col gap-10 md:mt-12 md:flex-row md:items-center md:gap-8 lg:mt-14 lg:gap-12 xl:gap-16">
          <div className="w-full shrink-0 md:w-[40%] lg:w-[38%]">
            <ProductDisplay
              color={activeColor}
              size={selectedSize}
              colors={configuratorColors}
              onPrevious={() => cycleColor(-1)}
              onNext={() => cycleColor(1)}
              onSelectColor={setSelectedColor}
            />
          </div>

          <div className="w-full min-h-[560px] rounded-[4px] border border-white/15 bg-white/[0.03] p-8 md:min-h-[600px] md:w-[58%] md:p-10 lg:w-[55%] lg:max-w-[720px] lg:p-12">
            <ColorSelector
              colors={configuratorColors}
              selectedColor={selectedColor}
              onSelect={setSelectedColor}
            />

            <div className="my-8 h-px w-full bg-white/[0.12]" />

            <SizeSelector
              sizes={configuratorSizes}
              selectedSize={selectedSize}
              onSelect={setSelectedSize}
            />

            <div className="my-8 h-px w-full bg-white/[0.12]" />

            <ProductInfo />
          </div>
        </div>
      </div>
    </section>
  )
}
