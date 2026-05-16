import { useLang } from '../context/LangContext'
import Footer from '../components/Footer'
import './Contact.css'

export default function Contact() {
  const { t } = useLang()
  return (
    <main>
      <section className="contact-hero">
        <div className="container contact-inner">
          <div className="contact-content">
            <h1 className="section-title">{t.contact.heading}<span>.</span></h1>
            <p className="contact-tagline">{t.contact.tagline}</p>
            <div className="contact-info">
              <a href="mailto:senavs.ti@gmail.com" className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="4" width="20" height="16" rx="2"/>
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                </svg>
                {t.contact.emailLabel}
              </a>
              <a href="tel:+5561999522936" className="contact-item">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6.06 6.06l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                {t.contact.phoneLabel}
              </a>
            </div>
          </div>
          <div className="contact-avatar">
            <div className="contact-avatar-ring">
              <img src="/portfolio/avatar.jpg" alt="Matheus Sena" />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}
