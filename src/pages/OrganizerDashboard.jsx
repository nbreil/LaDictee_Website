import { useAuth } from '../context/AuthContext'
import './Dashboard.css'

export default function OrganizerDashboard() {
  const { user } = useAuth()
  const name = user?.user_metadata?.name || user?.email

  return (
    <div className="dashboard-page">
      <div className="dashboard-hero">
        <div className="container">
          <p className="dashboard-eyebrow">Espace organisateur</p>
          <h1 className="dashboard-title">Bienvenue, {name}</h1>
          <p className="dashboard-subtitle">Gérez vos dictées et suivez vos événements depuis ici.</p>
        </div>
      </div>

      <div className="container dashboard-content">
        <div className="dashboard-grid">
          <div className="dashboard-card">
            <div className="dashboard-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 5v14M5 12h14"/>
              </svg>
            </div>
            <h3>Créer un événement</h3>
            <p>Organisez une nouvelle dictée pour votre école ou organisme.</p>
            <button className="btn btn-primary" disabled>Bientôt disponible</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                <line x1="16" y1="2" x2="16" y2="6"/>
                <line x1="8" y1="2" x2="8" y2="6"/>
                <line x1="3" y1="10" x2="21" y2="10"/>
              </svg>
            </div>
            <h3>Mes événements</h3>
            <p>Consultez et gérez vos dictées passées et à venir.</p>
            <button className="btn btn-secondary" disabled>Bientôt disponible</button>
          </div>

          <div className="dashboard-card">
            <div className="dashboard-card-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                <circle cx="9" cy="7" r="4"/>
                <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
              </svg>
            </div>
            <h3>Participants</h3>
            <p>Suivez les inscriptions et gérez la liste des participants.</p>
            <button className="btn btn-secondary" disabled>Bientôt disponible</button>
          </div>
        </div>
      </div>
    </div>
  )
}
