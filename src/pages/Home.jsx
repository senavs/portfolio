import Hero from '../components/Hero'
import ProjectsSection from '../components/ProjectsSection'
import ExperienceSection from '../components/ExperienceSection'
import SkillsSection from '../components/SkillsSection'
import HistorySection from '../components/HistorySection'
import Footer from '../components/Footer'
import useScrollReveal from '../hooks/useScrollReveal'

const historyParagraphs = [
  'My journey started in 2018 as an intern at <strong>INEP</strong>, Brazil\'s federal educational research agency, where I automated statisticians\' daily workflows and built data pipelines for the national Census of Higher Education.',
  'From there I joined <strong>Stefanini Brasil</strong>, where I spent nearly two years architecting AI and Machine Learning solutions for <strong>Banco do Brasil</strong> - building document classification systems, data curation platforms, and crawlers that reduced operational costs and waiting times for millions of customers.',
  'I then moved to <strong>Serasa</strong>, where I designed the Payment System Architecture for Serasa Limpa Nome, delivering consistency and security to Brazil\'s largest debt renegotiation platform.',
  'In 2022 I joined <strong>Amazon</strong>\'s International Technology team, working on expanding Amazon Marketplace and Amazon Flex to new countries. I was promoted to <strong>SDE II</strong> in 2024 and continue to design and ship scalable backend systems that reach customers worldwide.',
  'Alongside Amazon, I also worked with <strong>Verbal</strong>, a healthcare AI startup, where I built cloud-native infrastructure on Kubernetes, Python-based AI pipelines, and a real-time audio ingestion system in C++ helping automate quality assurance for healthcare communications. 🚀',
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
