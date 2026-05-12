import { Link } from 'react-router-dom'
import { useLang } from '../context/LangContext'
import './Hero.css'

export default function Hero() {
  const { t } = useLang()
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">{t.hero.greeting}</p>
          <h1 className="hero-heading">
            {t.hero.heading.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </h1>
          <p className="hero-tagline">
            {t.hero.tagline.split('\n').map((line, i) => (
              <span key={i}>{line}<br /></span>
            ))}
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">{t.hero.ctaPrimary}</Link>
            <Link to="/projects" className="btn btn-outline">{t.hero.ctaOutline}</Link>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="hero-avatar-ring">
            <img src="/portfolio/avatar.jpg" alt="Matheus Sena" />
          </div>
        </div>
      </div>
    </section>
  )
}
