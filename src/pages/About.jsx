import { useLanguage } from '../context/LanguageContext'
import './About.css'

const teamMembers = [
  {
    name: 'Camille Fontaine',
    role: { fr: 'Fondatrice & Directrice', en: 'Founder & Director' },
    initials: 'CF',
  },
  {
    name: 'Alexandre Morin',
    role: { fr: 'Directeur technique', en: 'Technical Director' },
    initials: 'AM',
  },
  {
    name: 'Isabelle Roy',
    role: { fr: 'Responsable des partenariats', en: 'Partnerships Manager' },
    initials: 'IR',
  },
  {
    name: 'Nicolas Gagné',
    role: { fr: 'Coordinateur des événements', en: 'Events Coordinator' },
    initials: 'NG',
  },
]

export default function About() {
  const { t, lang } = useLanguage()

  return (
    <div className="about-page">
      <div className="page-header">
        <h1>{t('about_title')}</h1>
        <p>{t('about_subtitle')}</p>
      </div>

      {/* Story */}
      <section className="section">
        <div className="container about-story">
          <h2 className="section-title">{t('about_story_title')}</h2>
          <div className="story-content">
            <p>{t('about_story_p1')}</p>
            <p>{t('about_story_p2')}</p>
            <p>{t('about_story_p3')}</p>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="section section-alt">
        <div className="container about-mission">
          <h2 className="section-title">{t('about_mission_title')}</h2>
          <blockquote className="mission-quote">
            {t('about_mission')}
          </blockquote>
        </div>
      </section>

      {/* Values */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">{t('about_values_title')}</h2>
          <div className="values-grid">
            <div className="value-card">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M2 12h20"/>
                  <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/>
                </svg>
              </div>
              <h3>{t('about_value_1_title')}</h3>
              <p>{t('about_value_1_desc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/>
                </svg>
              </div>
              <h3>{t('about_value_2_title')}</h3>
              <p>{t('about_value_2_desc')}</p>
            </div>
            <div className="value-card">
              <div className="value-icon">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
                </svg>
              </div>
              <h3>{t('about_value_3_title')}</h3>
              <p>{t('about_value_3_desc')}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title">{t('about_team_title')}</h2>
          <div className="team-grid">
            {teamMembers.map((member) => (
              <div key={member.name} className="team-card card">
                <div className="team-avatar">{member.initials}</div>
                <h3>{member.name}</h3>
                <p>{member.role[lang]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
