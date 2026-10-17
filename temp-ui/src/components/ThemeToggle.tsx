import { useEffect, useState } from 'react'

type Theme = 'light' | 'dark'

function getInitial(): Theme {
  if (typeof window === 'undefined') return 'dark'
  const saved = localStorage.getItem('bfc-theme') as Theme | null
  if (saved === 'light' || saved === 'dark') return saved
  return window.matchMedia('(prefers-color-scheme: light)').matches ? 'light' : 'dark'
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>('dark')

  useEffect(() => {
    const t = getInitial()
    setTheme(t)
    document.documentElement.setAttribute('data-theme', t)
  }, [])

  function toggle() {
    const next: Theme = theme === 'dark' ? 'light' : 'dark'
    setTheme(next)
    document.documentElement.setAttribute('data-theme', next)
    localStorage.setItem('bfc-theme', next)
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggle}
      aria-label={theme === 'dark' ? '切换浅色' : '切换深色'}
      title={theme === 'dark' ? '浅色模式' : '深色模式'}
    >
      {theme === 'dark' ? '明' : '暗'}
    </button>
  )
}
