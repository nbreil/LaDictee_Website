import { createContext, useContext, useState } from 'react'

const translations = {
  fr: {
    // Nav
    nav_home: 'Accueil',
    nav_about: 'À propos',
    nav_events: 'Événements passés',
    nav_sponsors: 'Nos partenaires',
    nav_login: 'Connexion',
    nav_signup: 'Inscription',
    nav_logout: 'Déconnexion',

    // Landing
    hero_title: 'La Dictée',
    hero_subtitle: 'Célébrons la beauté de la langue française',
    hero_description: 'Nous aidons les écoles et les organismes à but non lucratif à organiser des dictées qui rassemblent les communautés autour de la richesse de la langue française.',
    hero_cta_organize: 'Organiser une dictée',
    hero_cta_participate: 'Participer',
    features_title: 'Pourquoi La Dictée ?',
    feature_1_title: 'Pour les écoles',
    feature_1_desc: 'Un outil simple et élégant pour organiser des dictées en classe ou entre établissements.',
    feature_2_title: 'Pour les organismes',
    feature_2_desc: 'Créez des événements qui célèbrent la langue française et rassemblent les gens.',
    feature_3_title: 'Pour tous',
    feature_3_desc: 'Que vous soyez débutant ou expert, la dictée est un exercice enrichissant et accessible à tous.',
    stats_events: 'Événements organisés',
    stats_participants: 'Participants',
    stats_schools: 'Écoles partenaires',
    stats_cities: 'Villes',

    // Auth
    login_title: 'Connexion',
    signup_title: 'Inscription',
    auth_email: 'Adresse courriel',
    auth_password: 'Mot de passe',
    auth_confirm_password: 'Confirmer le mot de passe',
    auth_name: 'Nom complet',
    auth_organization: 'Organisation (facultatif)',
    auth_role: 'Je suis...',
    auth_role_organizer: 'Un organisateur',
    auth_role_participant: 'Un participant',
    auth_role_organizer_desc: 'Je souhaite créer et gérer des événements de dictée.',
    auth_role_participant_desc: 'Je souhaite participer à des événements de dictée.',
    auth_login_btn: 'Se connecter',
    auth_signup_btn: "S'inscrire",
    auth_no_account: "Vous n'avez pas de compte ?",
    auth_has_account: 'Vous avez déjà un compte ?',
    auth_forgot_password: 'Mot de passe oublié ?',

    // Sponsors
    sponsors_title: 'Nos partenaires',
    sponsors_subtitle: 'Ils nous soutiennent dans notre mission de promouvoir la langue française.',
    sponsors_become: 'Devenir partenaire',
    sponsors_become_desc: 'Vous souhaitez soutenir La Dictée ? Contactez-nous pour en savoir plus sur nos opportunités de partenariat.',
    sponsors_contact: 'Nous contacter',

    // Events
    events_title: 'Événements passés',
    events_subtitle: 'Revivez les moments forts de nos dictées précédentes.',
    events_participants: 'participants',
    events_location: 'Lieu',
    events_date: 'Date',
    events_winner: 'Gagnant(e)',

    // About
    about_title: 'Notre histoire',
    about_subtitle: 'Comment La Dictée est née et pourquoi elle existe.',
    about_story_title: 'Une passion pour la langue française',
    about_story_p1: "La Dictée est née d'une conviction simple : la langue française est un trésor vivant qui mérite d'être célébré. Fondée par un groupe de passionnés de la francophonie, notre plateforme a pour mission de rendre la dictée accessible à tous, partout.",
    about_story_p2: "Ce qui a commencé comme un petit événement local s'est transformé en un mouvement qui rassemble des écoles, des organismes et des amoureux de la langue française à travers le pays.",
    about_story_p3: "Aujourd'hui, La Dictée offre une plateforme moderne et élégante qui permet à quiconque d'organiser ou de participer à une dictée, que ce soit en personne ou en ligne.",
    about_mission_title: 'Notre mission',
    about_mission: 'Promouvoir la maîtrise et la beauté de la langue française à travers des événements de dictée accessibles, inclusifs et rassembleurs.',
    about_values_title: 'Nos valeurs',
    about_value_1_title: 'Accessibilité',
    about_value_1_desc: 'La dictée est pour tous, peu importe le niveau ou le parcours.',
    about_value_2_title: 'Communauté',
    about_value_2_desc: 'Nous croyons au pouvoir rassembleur de la langue.',
    about_value_3_title: 'Excellence',
    about_value_3_desc: 'Nous visons la qualité dans tout ce que nous faisons.',
    about_team_title: "L'équipe",

    // Footer
    footer_tagline: 'Célébrons la beauté de la langue française, ensemble.',
    footer_links: 'Liens rapides',
    footer_contact: 'Contact',
    footer_rights: 'Tous droits réservés.',
  },
  en: {
    // Nav
    nav_home: 'Home',
    nav_about: 'About Us',
    nav_events: 'Past Events',
    nav_sponsors: 'Sponsors',
    nav_login: 'Log In',
    nav_signup: 'Sign Up',
    nav_logout: 'Log Out',

    // Landing
    hero_title: 'La Dictée',
    hero_subtitle: 'Celebrating the beauty of the French language',
    hero_description: 'We help schools and non-profits organize dictées that bring communities together around the richness of the French language.',
    hero_cta_organize: 'Organize a dictée',
    hero_cta_participate: 'Participate',
    features_title: 'Why La Dictée?',
    feature_1_title: 'For Schools',
    feature_1_desc: 'A simple, elegant tool to organize dictées in the classroom or between schools.',
    feature_2_title: 'For Organizations',
    feature_2_desc: 'Create community events that celebrate the French language and bring people together.',
    feature_3_title: 'For Everyone',
    feature_3_desc: 'Whether you are a beginner or an expert, the dictée is an enriching exercise accessible to all.',
    stats_events: 'Events organized',
    stats_participants: 'Participants',
    stats_schools: 'Partner schools',
    stats_cities: 'Cities',

    // Auth
    login_title: 'Log In',
    signup_title: 'Sign Up',
    auth_email: 'Email address',
    auth_password: 'Password',
    auth_confirm_password: 'Confirm password',
    auth_name: 'Full name',
    auth_organization: 'Organization (optional)',
    auth_role: 'I am...',
    auth_role_organizer: 'An organizer',
    auth_role_participant: 'A participant',
    auth_role_organizer_desc: 'I want to create and manage dictée events.',
    auth_role_participant_desc: 'I want to participate in dictée events.',
    auth_login_btn: 'Log In',
    auth_signup_btn: 'Sign Up',
    auth_no_account: "Don't have an account?",
    auth_has_account: 'Already have an account?',
    auth_forgot_password: 'Forgot your password?',

    // Sponsors
    sponsors_title: 'Our Sponsors',
    sponsors_subtitle: 'They support our mission to promote the French language.',
    sponsors_become: 'Become a Sponsor',
    sponsors_become_desc: 'Would you like to support La Dictée? Contact us to learn more about our partnership opportunities.',
    sponsors_contact: 'Contact Us',

    // Events
    events_title: 'Past Events',
    events_subtitle: 'Relive the highlights of our previous dictées.',
    events_participants: 'participants',
    events_location: 'Location',
    events_date: 'Date',
    events_winner: 'Winner',

    // About
    about_title: 'Our Story',
    about_subtitle: 'How La Dictée was born and why it exists.',
    about_story_title: 'A passion for the French language',
    about_story_p1: 'La Dictée was born from a simple conviction: the French language is a living treasure that deserves to be celebrated. Founded by a group of Francophonie enthusiasts, our platform aims to make the dictée accessible to everyone, everywhere.',
    about_story_p2: 'What started as a small local event has grown into a movement that brings together schools, community organizations, and French language lovers across the country.',
    about_story_p3: 'Today, La Dictée offers a modern and elegant platform that allows anyone to organize or participate in a dictée, whether in person or online.',
    about_mission_title: 'Our Mission',
    about_mission: 'To promote the mastery and beauty of the French language through accessible, inclusive, and unifying dictée events.',
    about_values_title: 'Our Values',
    about_value_1_title: 'Accessibility',
    about_value_1_desc: 'The dictée is for everyone, regardless of level or background.',
    about_value_2_title: 'Community',
    about_value_2_desc: 'We believe in the unifying power of language.',
    about_value_3_title: 'Excellence',
    about_value_3_desc: 'We strive for quality in everything we do.',
    about_team_title: 'The Team',

    // Footer
    footer_tagline: 'Celebrating the beauty of the French language, together.',
    footer_links: 'Quick Links',
    footer_contact: 'Contact',
    footer_rights: 'All rights reserved.',
  },
}

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('fr')

  const t = (key) => translations[lang][key] || key

  const toggleLang = () => setLang((prev) => (prev === 'fr' ? 'en' : 'fr'))

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLang, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}
