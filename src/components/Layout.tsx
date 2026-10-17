import { useState, useEffect } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'

const links = [
  { to: '/articles', label: '文章' },
  { to: '/news', label: '新闻' },
  { to: '/notices', label: '公告' },
  { to: '/books', label: '书籍' },
  { to: '/gallery', label: '图集' },
  { to: '/about', label: '关于' },
  { to: '/contact', label: '联系' },
]

export default function Layout() {
  const [open, setOpen] = useState(false)
  const [theme, setTheme] = useState<'light' | 'dark'>('dark')

  useEffect(() => {
    const read = () => {
      const t = document.documentElement.getAttribute('data-theme')
      setTheme(t === 'light' ? 'light' : 'dark')
    }
    read()
    const obs = new MutationObserver(read)
    obs.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })
    return () => obs.disconnect()
  }, [])

  const logoSrc =
    theme === 'light'
      ? `${import.meta.env.BASE_URL}logo-header-light.png`
      : `${import.meta.env.BASE_URL}logo-header-dark.png`

  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <img
              src={logoSrc}
              alt=""
              className="logo-img"
              width={28}
              height={28}
            />
            <span>黑旗中国</span>
          </Link>
          <div className="header-actions">
            <ThemeToggle />
            <button
              className="nav-toggle"
              type="button"
              onClick={() => setOpen((v) => !v)}
              aria-label="菜单"
            >
              {open ? '关闭' : '菜单'}
            </button>
          </div>
          <nav className={`nav${open ? ' open' : ''}`}>
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                className={({ isActive }) => (isActive ? 'active' : undefined)}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
        </div>
      </header>
      <main className="site-main">
        <Outlet />
      </main>
      <footer className="site-footer">
        <p>
          黑旗中国网 · 独立公共资料平台 ·{' '}
          <a href="https://www.caanet.top" target="_blank" rel="noreferrer">
            中国无政府主义者总会
          </a>
        </p>
        <p style={{ marginTop: '0.25rem', opacity: 0.7 }}>
          内容采用自由分享原则 · 欢迎转载并注明出处
        </p>
      </footer>
    </div>
  )
}
