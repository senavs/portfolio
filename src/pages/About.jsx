import { useLang } from '../context/LangContext'
import useScrollReveal from '../hooks/useScrollReveal'
import SkillCarousel from '../components/SkillCarousel'
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
          <div className="about-hero-inner">
            <div>
              <h1 className="section-title">{t.about.heading}<span>.</span></h1>
              <div className="about-bio">
                <p>{t.about.bio}</p>
              </div>
            </div>
            <SkillCarousel />
          </div>
        </div>
      </section>

      <RevealSection><HistorySection /></RevealSection>
      <RevealSection><AboutExperienceSection /></RevealSection>
      <Footer />
    </main>
  )
}
