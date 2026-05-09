import { useState } from 'react'
import experience from '../data/experience.json'
import './ExperienceSection.css'

export default function ExperienceSection() {
  const [active, setActive] = useState(0)
  const entry = experience[active]

  return (
    <section className="experience-section">
      <div className="container">
        <h2 className="section-title">Experience<span>.</span></h2>
        <div className="experience-layout">
          <ul className="experience-tabs">
            {experience.map((e, i) => (
              <li key={e.id}>
                <button
                  className={i === active ? 'active' : ''}
                  onClick={() => setActive(i)}
                >
                  {e.company}
                </button>
              </li>
            ))}
          </ul>
          <div className="experience-detail">
            <h3>{entry.role}</h3>
            <p className="experience-period">{entry.period}</p>
            <ul className="experience-bullets">
              {entry.bullets.map((b, i) => (
                <li key={i}><span>✓</span>{b}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}
