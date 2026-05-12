import { useLang } from '../context/LangContext'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

export default function ProjectsSection({ limit }) {
  const { t } = useLang()
  const items = limit ? t.projects.slice(0, limit) : t.projects
  const row1 = items.slice(0, 2)
  const row2 = items.slice(2, 4)
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">{t.sections.projects}<span>.</span></h2>
        <div className="projects-row projects-row--1">
          {row1.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
        <div className="projects-row projects-row--2">
          {row2.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  )
}
