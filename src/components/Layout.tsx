import { useState } from 'react'
import { Outlet, NavLink, Link } from 'react-router-dom'

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

  return (
    <div className="site">
      <header className="site-header">
        <div className="header-inner">
          <Link to="/" className="logo" onClick={() => setOpen(false)}>
            <img
              src={`${import.meta.env.BASE_URL}logo-header.png`}
              alt=""
              className="logo-img"
              width={36}
              height={36}
            />
            <span>黑旗中国</span>
          </Link>
          <button
            className="nav-toggle"
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label="菜单"
          >
            {open ? '关闭' : '菜单'}
          </button>
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
        <p style={{ marginTop: '0.4rem', opacity: 0.7 }}>
          内容采用自由分享原则 · 欢迎转载并注明出处
        </p>
      </footer>
    </div>
  )
}
