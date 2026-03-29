import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Footer.css'

export default function Footer() {
  const { t } = useLanguage()

  return (
    <footer className="footer">
      <div className="container footer-inner">
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="brand-icon">D</span>
            <span className="brand-text">La Dictée</span>
          </div>
          <p className="footer-tagline">{t('footer_tagline')}</p>
        </div>

        <div className="footer-section">
          <h4>{t('footer_links')}</h4>
          <Link to="/about">{t('nav_about')}</Link>
          <Link to="/events">{t('nav_events')}</Link>
          <Link to="/sponsors">{t('nav_sponsors')}</Link>
          <Link to="/signup">{t('nav_signup')}</Link>
        </div>

        <div className="footer-section">
          <h4>{t('footer_contact')}</h4>
          <a href="mailto:contact@ladictee.org">contact@ladictee.org</a>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} La Dictée. {t('footer_rights')}</p>
        </div>
      </div>
    </footer>
  )
}
