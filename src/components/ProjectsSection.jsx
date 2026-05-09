import projects from '../data/projects.json'
import ProjectCard from './ProjectCard'
import './ProjectsSection.css'

export default function ProjectsSection({ limit }) {
  const items = limit ? projects.slice(0, limit) : projects
  return (
    <section className="projects-section">
      <div className="container">
        <h2 className="section-title">Public Projects<span>.</span></h2>
        <div className="projects-grid">
          {items.map(p => <ProjectCard key={p.id} {...p} />)}
        </div>
      </div>
    </section>
  )
}
