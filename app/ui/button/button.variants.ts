export const BASE_BUTTON =
  'flex h-10 items-center rounded-lg px-4 text-sm font-medium aria-disabled:cursor-not-allowed aria-disabled:opacity-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 transition-colors'

const PRIMARY_BUTTON =
  'bg-blue-500 text-white hover:bg-blue-400 focus-visible:outline-blue-500 active:bg-blue-600'

const SECONDARY_BUTTON =
  'bg-white/0 text-slate-900 ring-1 ring-slate-900/10 hover:bg-white/25 hover:ring-slate-900/15'

const TERTIARY_BUTTON =
  'bg-transparent text-blue-500 border border-blue-500 hover:text-blue-400 transition-all hover:border-blue-400 hover:backdrop-brightness-105  focus-visible:outline-blue-500 active:text-blue-600 active:border-blue-600'

export const ButtonVariants = {
  primary: PRIMARY_BUTTON,
  secondary: SECONDARY_BUTTON,
  tertiary: TERTIARY_BUTTON,
}
