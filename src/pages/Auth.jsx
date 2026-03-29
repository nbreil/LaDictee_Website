import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import { useLanguage } from '../context/LanguageContext'
import './Auth.css'

export default function Auth({ mode }) {
  const { t } = useLanguage()
  const navigate = useNavigate()
  const isSignup = mode === 'signup'

  const [role, setRole] = useState(null)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [organization, setOrganization] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(false)
  const [successMsg, setSuccessMsg] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError(null)
    setSuccessMsg(null)

    if (isSignup && password !== confirmPassword) {
      setError('Les mots de passe ne correspondent pas.')
      return
    }

    setLoading(true)

    if (isSignup) {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: { name, role, organization },
        },
      })
      if (error) {
        setError(error.message)
      } else if (data.user && !data.user.identities?.length === 0) {
        navigate(role === 'organizer' ? '/dashboard/organizer' : '/dashboard/participant')
      } else {
        setSuccessMsg('Compte créé ! Vérifiez votre courriel pour confirmer votre inscription.')
      }
    } else {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password })
      if (error) {
        setError(error.message)
      } else {
        const userRole = data.user?.user_metadata?.role
        navigate(userRole === 'organizer' ? '/dashboard/organizer' : '/dashboard/participant')
      }
    }

    setLoading(false)
  }

  return (
    <div className="auth-page">
      <div className="auth-split">
        {/* Left decorative panel */}
        <div className="auth-panel">
          <div className="auth-panel-content">
            <h2>La Dictée</h2>
            <p>{t('hero_subtitle')}</p>
            <div className="auth-panel-quote">
              <blockquote>
                &laquo; La langue française est une femme. Et cette femme est si belle, si fière... &raquo;
              </blockquote>
              <cite>— Albert Camus</cite>
            </div>
          </div>
        </div>

        {/* Right form */}
        <div className="auth-form-container">
          <div className="auth-form-wrapper">
            <h1>{isSignup ? t('signup_title') : t('login_title')}</h1>

            {/* Role selection for signup */}
            {isSignup && (
              <div className="role-selection">
                <p className="role-label">{t('auth_role')}</p>
                <div className="role-options">
                  <button
                    type="button"
                    className={`role-card ${role === 'organizer' ? 'selected' : ''}`}
                    onClick={() => setRole('organizer')}
                  >
                    <div className="role-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                        <line x1="16" y1="2" x2="16" y2="6"/>
                        <line x1="8" y1="2" x2="8" y2="6"/>
                        <line x1="3" y1="10" x2="21" y2="10"/>
                      </svg>
                    </div>
                    <strong>{t('auth_role_organizer')}</strong>
                    <span>{t('auth_role_organizer_desc')}</span>
                  </button>
                  <button
                    type="button"
                    className={`role-card ${role === 'participant' ? 'selected' : ''}`}
                    onClick={() => setRole('participant')}
                  >
                    <div className="role-icon">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                        <circle cx="12" cy="7" r="4"/>
                      </svg>
                    </div>
                    <strong>{t('auth_role_participant')}</strong>
                    <span>{t('auth_role_participant_desc')}</span>
                  </button>
                </div>
              </div>
            )}

            <form className="auth-form" onSubmit={handleSubmit}>
              {isSignup && (
                <div className="form-group">
                  <label>{t('auth_name')}</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="Jean Dupont"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
              )}

              <div className="form-group">
                <label>{t('auth_email')}</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="votre@courriel.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              {isSignup && role === 'organizer' && (
                <div className="form-group">
                  <label>{t('auth_organization')}</label>
                  <input
                    type="text"
                    className="form-input"
                    placeholder="École / Organisme"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                  />
                </div>
              )}

              <div className="form-group">
                <label>{t('auth_password')}</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              {isSignup && (
                <div className="form-group">
                  <label>{t('auth_confirm_password')}</label>
                  <input
                    type="password"
                    className="form-input"
                    placeholder="••••••••"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              )}

              {!isSignup && (
                <div className="auth-extras">
                  <Link to="#" className="auth-link">{t('auth_forgot_password')}</Link>
                </div>
              )}

              {error && <p className="auth-error">{error}</p>}
              {successMsg && <p className="auth-success">{successMsg}</p>}

              <button type="submit" className="btn btn-primary btn-full" disabled={loading}>
                {loading ? '...' : (isSignup ? t('auth_signup_btn') : t('auth_login_btn'))}
              </button>
            </form>

            <p className="auth-switch">
              {isSignup ? t('auth_has_account') : t('auth_no_account')}{' '}
              <Link to={isSignup ? '/login' : '/signup'} className="auth-switch-link">
                {isSignup ? t('auth_login_btn') : t('auth_signup_btn')}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
