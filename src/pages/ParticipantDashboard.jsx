import { useAuth } from '../context/AuthContext'
import './Dashboard.css'

export default function ParticipantDashboard() {
  const { user } = useAuth()
  const name = user?.user_metadata?.name || user?.email

  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <div className="container">
          <p className="dashboard-eyebrow">Espace participant</p>
          <h1 className="dashboard-title">Bienvenue, {name}</h1>
          <p className="dashboard-subtitle">Découvrez les prochaines dictées et suivez votre progression.</p>
        </div>
      </div>

      <div className="container dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"/>
                <path d="m21 21-4.35-4.35"/>
              </svg>
            </div>
            <h3>Trouver une dictée</h3>
            <p>Parcourez les événements à venir près de chez vous.</p>
            <button className="btn btn-primary" disabled>Bientôt disponible</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
              </svg>
            </div>
            <h3>Mes inscriptions</h3>
            <p>Consultez les dictées auxquelles vous êtes inscrit.</p>
            <button className="btn btn-secondary" disabled>Bientôt disponible</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
              </svg>
            </div>
            <h3>Ma progression</h3>
            <p>Suivez vos résultats et votre évolution au fil du temps.</p>
            <button className="btn btn-secondary" disabled>Bientôt disponible</button>
          </div>
        </div>
      </div>
    </div>
  )
}
