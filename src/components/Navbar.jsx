import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import './Navbar.css'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const { lang, toggle, t } = useLang()

  const links = [
    { to: '/', label: t.nav.home },
    { to: '/projects', label: t.nav.projects },
    { to: '/about', label: t.nav.about },
    { to: '/contact', label: t.nav.contact },
  ]

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <NavLink to="/" className="navbar-logo">Matheus Sena.</NavLink>
        <button className="navbar-burger" onClick={() => setOpen(o => !o)} aria-label="Toggle menu">
          <span /><span /><span />
        </button>
        <ul className={`navbar-links${open ? ' open' : ''}`}>
          {links.map(({ to, label }) => (
            <li key={to}>
              <NavLink
                to={to}
                end={to === '/'}
                className={({ isActive }) => isActive ? 'active' : ''}
                onClick={() => setOpen(false)}
              >
                {label}
              </NavLink>
            </li>
          ))}
        </ul>
        <button className="navbar-lang" onClick={toggle} aria-label="Toggle language">
          {lang === 'en' ? '🇧🇷' : '🇺🇸'}
        </button>
      </div>
    </nav>
  )
}
