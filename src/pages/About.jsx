import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import SkillCarousel from '../components/SkillCarousel'
import MapSection from '../components/MapSection'
import HistorySection from '../components/HistorySection'
import AboutExperienceSection from '../components/AboutExperienceSection'
import Footer from '../components/Footer'
import './About.css'

function RevealSection({ children }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal">{children}</div>
}

export default function About() {
  const { t } = useLang()
  return (
    <main>
      <section className="about-hero">
        <div className="container">
          <h1 className="section-title">{t.about.heading}<span>.</span></h1>
          <div className="about-bio">
            <p>{t.about.bio}</p>
          </div>
        </div>
      </section>

      <RevealSection>
        <div className="about-stack-map container">
          <div className="about-stack-col">
            <SkillCarousel />
          </div>
          <div className="about-map-col">
            <MapSection />
          </div>
        </div>
      </RevealSection>

      <RevealSection><HistorySection /></RevealSection>
      <RevealSection><AboutExperienceSection /></RevealSection>
      <Footer />
    </main>
  )
}
