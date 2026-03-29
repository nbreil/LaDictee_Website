import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import { useAuth } from '../context/AuthContext'
import './Navbar.css'

export default function Navbar() {
  const { t, lang, toggleLang } = useLanguage()
  const { user, signOut } = useAuth()
  const location = useLocation()
  const [menuOpen, setMenuOpen] = useState(false)

  const links = [
    { to: '/', label: t('nav_home') },
    { to: '/about', label: t('nav_about') },
    { to: '/events', label: t('nav_events') },
    { to: '/sponsors', label: t('nav_sponsors') },
  ]

  return (
    <nav className="navbar">
      <div className="navbar-inner container">
        <Link to="/" className="navbar-brand">
          <span className="brand-icon">D</span>
          <span className="brand-text">La Dictée</span>
        </Link>

        <button
          className={`navbar-toggle ${menuOpen ? 'open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span /><span /><span />
        </button>

        <div className={`navbar-menu ${menuOpen ? 'open' : ''}`}>
          <div className="navbar-links">
            {links.map(({ to, label }) => (
              <Link
                key={to}
                to={to}
                className={`navbar-link ${location.pathname === to ? 'active' : ''}`}
                onClick={() => setMenuOpen(false)}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="navbar-actions">
            <button className="lang-toggle" onClick={toggleLang}>
              {lang === 'fr' ? 'EN' : 'FR'}
            </button>
            {user ? (
              <>
                <span className="navbar-user">{user.email}</span>
                <button className="btn btn-logout btn-sm" onClick={signOut} title={t('nav_logout')}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/>
                    <polyline points="16 17 21 12 16 7"/>
                    <line x1="21" y1="12" x2="9" y2="12"/>
                  </svg>
                  {t('nav_logout')}
                </button>
              </>
            ) : (
              <>
                <Link to="/login" className="btn btn-secondary btn-sm" onClick={() => setMenuOpen(false)}>
                  {t('nav_login')}
                </Link>
                <Link to="/signup" className="btn btn-primary btn-sm" onClick={() => setMenuOpen(false)}>
                  {t('nav_signup')}
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  )
}
