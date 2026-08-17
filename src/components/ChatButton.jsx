import { ChatIcon } from './Icons'

export default function ChatButton() {
  return (
    <button
      type="button"
      className="fixed right-4 bottom-4 z-40 grid h-12 w-12 place-items-center bg-ayra-forest text-ayra-lime shadow-[0_10px_24px_rgba(31,58,52,0.22)] transition-colors duration-300 hover:bg-ayra-charcoal md:right-6 md:bottom-6"
      aria-label="Open chat"
    >
      <ChatIcon />
    </button>
  )
}
