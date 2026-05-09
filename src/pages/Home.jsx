import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import HistorySection from '../components/HistorySection'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

const historyParagraphs = [
  'My journey in software engineering started back in 2017, working as a <strong>freelance developer</strong> for clients across e-commerce, fintech, and media.',
  'After a couple of years on my own, I joined <strong>Initech</strong> as a junior engineer, where I discovered my passion for building internal tooling and contributing to open-source projects.',
  'I then moved to <strong>Globex</strong>, where I scaled APIs to serve millions of daily users and deepened my expertise in distributed systems and real-time architectures.',
  'Today I work at <strong>Acme Corp</strong>, leading the design and delivery of event-driven platforms and mentoring the next generation of engineers. And I love what I do! 🚀',
]

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
      <RevealSection><HistorySection paragraphs={historyParagraphs} /></RevealSection>
      <Footer />
    </main>
  )
}
