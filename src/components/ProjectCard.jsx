import './ProjectCard.css'

export default function ProjectCard({ title, description, tags, liveUrl, imageUrl }) {
  return (
    <article className="project-card">
      <div className="project-card-image">
        {imageUrl ? <img src={imageUrl} alt={title} /> : <div className="project-card-arc" />}
      </div>
      <div className="project-card-body">
        <h3>
          {title}
          <a href={liveUrl} target="_blank" rel="noopener noreferrer" aria-label={`Visit ${title}`}>↗</a>
        </h3>
        <p>{description}</p>
        <ul className="project-card-tags">
          {tags.map(t => <li key={t}>{t}</li>)}
        </ul>
      </div>
    </article>
  )
}
