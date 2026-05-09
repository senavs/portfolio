import { Link } from 'react-router-dom'
import './Hero.css'

export default function Hero() {
  return (
    <section className="hero">
      <div className="container hero-inner">
        <div className="hero-text">
          <p className="hero-greeting">Hey, I'm Matheus 👋</p>
          <h1 className="hero-heading">Software<br />Development<br />Engineer</h1>
          <p className="hero-tagline">
            I build robust, scalable systems and craft clean interfaces.<br />
            Based in Brazil, working globally.
          </p>
          <div className="hero-ctas">
            <Link to="/contact" className="btn btn-primary">Get In Touch</Link>
            <Link to="/projects" className="btn btn-outline">Browse Projects</Link>
          </div>
        </div>
        <div className="hero-avatar">
          <div className="hero-avatar-ring">
            <img src="/portfolio/avatar.svg" alt="Matheus Sena" />
          </div>
        </div>
      </div>
    </section>
  )
}
