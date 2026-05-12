import { useLang } from '../context/LangContext'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

export default function ProjectsSection({ limit }) {
  const { t } = useLang()
  const items = limit ? t.projects.slice(0, limit) : t.projects
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">{t.sections.projects}<span>.</span></h2>
        <div className="projects-grid">
          {items.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  )
}
