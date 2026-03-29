import { useLanguage } from '../context/LanguageContext'
import './Sponsors.css'

const sponsors = {
  gold: [
    { name: 'Clairefontaine', logo: '/sponsors/clairefontaine.png', url: 'http://www.clairefontaine.com' },
    { name: 'Lireka',         logo: '/sponsors/lireka.png',         url: 'http://www.lireka.com' },
    { name: 'FrenchBee',      logo: '/sponsors/frenchbee.png',      url: 'http://www.frenchbee.com' },
  ],
  silver: [
    { name: 'The Gourmet Corner',    logo: '/sponsors/gourmetcorner.png',   url: 'http://www.thegourmetcorner.com' },
    { name: 'Maison Alyzée',         logo: '/sponsors/maisonalyzee.png',    url: 'http://www.maisonalyzee.com' },
    { name: 'Brioche Pasquier US',   logo: '/sponsors/briochepasquier.png', url: 'http://www.briochepasquierus.com' },
    { name: 'Bay Road Story Studio', logo: '/sponsors/bayroadstory.png',    url: 'http://www.bayroadstorystudio.com' },
  ],
}

export default function Sponsors() {
  const { t, lang } = useLanguage()

  return (
    <div className="sponsors-page">
      <div className="page-header">
        <h1>{t('sponsors_title')}</h1>
        <p>{t('sponsors_subtitle')}</p>
      </div>

      <div className="section">
        <div className="container">
          <div className="sponsor-tier-section">
            <h3 className="tier-label tier-label-gold">{lang === 'fr' ? 'Partenaires Or' : 'Gold Partners'}</h3>
            <div className="sponsors-grid-real sponsors-grid-gold">
              {sponsors.gold.map((sponsor) => (
                <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-card card sponsor-card-gold">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo-img" />
                  <p className="sponsor-name">{sponsor.name}</p>
                </a>
              ))}
            </div>
          </div>

          <div className="sponsor-tier-section">
            <h3 className="tier-label tier-label-silver">{lang === 'fr' ? 'Partenaires Argent' : 'Silver Partners'}</h3>
            <div className="sponsors-grid-real">
              {sponsors.silver.map((sponsor) => (
                <a key={sponsor.name} href={sponsor.url} target="_blank" rel="noopener noreferrer" className="sponsor-card card">
                  <img src={sponsor.logo} alt={sponsor.name} className="sponsor-logo-img" />
                  <p className="sponsor-name">{sponsor.name}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="section section-alt">
        <div className="container sponsor-cta">
          <h2>{t('sponsors_become')}</h2>
          <p>{t('sponsors_become_desc')}</p>
          <a href="mailto:partenaires@ladictee.org" className="btn btn-primary">
            {t('sponsors_contact')}
          </a>
        </div>
      </div>
    </div>
  )
}
