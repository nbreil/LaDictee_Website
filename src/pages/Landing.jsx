import { Link } from 'react-router-dom'
import { useLanguage } from '../context/LanguageContext'
import './Landing.css'

export default function Landing() {
  const { t } = useLanguage()

  const stats = [
    { value: '120+', label: t('stats_events') },
    { value: '8 500+', label: t('stats_participants') },
    { value: '45', label: t('stats_schools') },
    { value: '12', label: t('stats_cities') },
  ]

  return (
    <div className="landing">
      {/* Hero */}
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-content">
          <p className="hero-eyebrow">La Dictée</p>
          <h1 className="hero-title">{t('hero_subtitle')}</h1>
          <p className="hero-description">{t('hero_description')}</p>
          <div className="hero-actions">
            <Link to="/signup" className="btn btn-accent">{t('hero_cta_organize')}</Link>
            <Link to="/signup" className="btn btn-secondary btn-hero-secondary">{t('hero_cta_participate')}</Link>
          </div>
        </div>
        <div className="hero-decoration">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="none">
            <path d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Stats */}
      <section className="stats section">
        <div className="container">
          <div className="stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="stat-item">
                <span className="stat-value">{stat.value}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="features section section-alt">
        <div className="container">
          <h2 className="section-title">{t('features_title')}</h2>
          <div className="features-grid">
            <div className="card feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                </svg>
              </div>
              <h3>{t('feature_1_title')}</h3>
              <p>{t('feature_1_desc')}</p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                  <circle cx="9" cy="7" r="4"/>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                </svg>
              </div>
              <h3>{t('feature_2_title')}</h3>
              <p>{t('feature_2_desc')}</p>
            </div>

            <div className="card feature-card">
              <div className="feature-icon">
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                  <path d="M9 12l2 2 4-4"/>
                </svg>
              </div>
              <h3>{t('feature_3_title')}</h3>
              <p>{t('feature_3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta section">
        <div className="container cta-content">
          <h2>{t('hero_cta_organize')}</h2>
          <p>{t('hero_description')}</p>
          <Link to="/signup" className="btn btn-primary">{t('nav_signup')}</Link>
        </div>
      </section>
    </div>
  )
}
