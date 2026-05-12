import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import HistorySection from '../components/HistorySection'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

function RevealSection({ children }) {
  const ref = useScrollReveal()
  return <div ref={ref} className="reveal">{children}</div>
}

export default function Home() {
  return (
    <main>
      <Hero />
      <RevealSection><ProjectsSection limit={4} /></RevealSection>
      <RevealSection><ExperienceSection /></RevealSection>
      <RevealSection><SkillsSection /></RevealSection>
      <RevealSection><HistorySection /></RevealSection>
      <Footer />
    </main>
  )
}
