import { useLanguage } from '../context/LanguageContext'
import './Events.css'

const pastEvents = [
  {
    id: 1,
    title: { fr: 'La Grande Dictée de Montréal', en: 'The Great Montreal Dictée' },
    date: '2025-11-15',
    location: { fr: 'Bibliothèque nationale, Montréal', en: 'National Library, Montreal' },
    participants: 320,
    winner: 'Marie-Claire Dubois',
    description: {
      fr: 'Notre plus grand événement à ce jour, réunissant des participants de tout le Québec dans un cadre exceptionnel.',
      en: 'Our largest event to date, bringing together participants from all over Quebec in an exceptional setting.',
    },
  },
  {
    id: 2,
    title: { fr: 'Dictée des Écoles — Édition Printemps', en: 'School Dictée — Spring Edition' },
    date: '2025-05-22',
    location: { fr: 'En ligne — 12 écoles participantes', en: 'Online — 12 participating schools' },
    participants: 540,
    winner: 'Thomas Lefèvre (École Saint-Joseph)',
    description: {
      fr: 'Un événement inter-écoles qui a permis de connecter des élèves de partout au pays autour de la langue française.',
      en: 'An inter-school event that connected students from across the country around the French language.',
    },
  },
  {
    id: 3,
    title: { fr: 'Soirée Dictée — Café Littéraire', en: 'Dictée Evening — Literary Café' },
    date: '2025-03-08',
    location: { fr: 'Café des Lettres, Ottawa', en: 'Café des Lettres, Ottawa' },
    participants: 85,
    winner: 'Sophie Tremblay',
    description: {
      fr: 'Une soirée intime et conviviale dans un cadre chaleureux, autour d\'un texte de Marguerite Duras.',
      en: "An intimate and friendly evening in a warm setting, around a text by Marguerite Duras.",
    },
  },
  {
    id: 4,
    title: { fr: 'Dictée Communautaire de Québec', en: 'Quebec City Community Dictée' },
    date: '2024-10-05',
    location: { fr: 'Centre communautaire Saint-Roch, Québec', en: 'Saint-Roch Community Center, Quebec City' },
    participants: 150,
    winner: 'Jean-Philippe Martin',
    description: {
      fr: 'Un événement familial ouvert à tous les niveaux, dans le cœur historique de la ville de Québec.',
      en: 'A family event open to all levels, in the historic heart of Quebec City.',
    },
  },
]

function formatDate(dateStr, lang) {
  const date = new Date(dateStr + 'T00:00:00')
  return date.toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
}

export default function Events() {
  const { t, lang } = useLanguage()

  return (
    <div className="events-page">
      <div className="page-header">
        <h1>{t('events_title')}</h1>
        <p>{t('events_subtitle')}</p>
      </div>

      <div className="section">
        <div className="container">
          <div className="events-list">
            {pastEvents.map((event) => (
              <div key={event.id} className="event-card card">
                <div className="event-date-badge">
                  <span className="event-month">
                    {new Date(event.date + 'T00:00:00').toLocaleDateString(lang === 'fr' ? 'fr-CA' : 'en-CA', { month: 'short' }).toUpperCase()}
                  </span>
                  <span className="event-day">
                    {new Date(event.date + 'T00:00:00').getDate()}
                  </span>
                  <span className="event-year">
                    {new Date(event.date + 'T00:00:00').getFullYear()}
                  </span>
                </div>
                <div className="event-content">
                  <h3>{event.title[lang]}</h3>
                  <p className="event-description">{event.description[lang]}</p>
                  <div className="event-meta">
                    <span className="event-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                        <circle cx="12" cy="10" r="3"/>
                      </svg>
                      {event.location[lang]}
                    </span>
                    <span className="event-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                        <circle cx="9" cy="7" r="4"/>
                        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                      </svg>
                      {event.participants} {t('events_participants')}
                    </span>
                    <span className="event-meta-item">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="8" r="7"/>
                        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                      </svg>
                      {t('events_winner')}: {event.winner}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
