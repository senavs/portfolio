import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import './AboutExperienceSection.css'

export default function AboutExperienceSection() {
  const { t } = useLang()
  const lineRefs = useRef([])

  useEffect(() => {
    const observers = lineRefs.current.map((line, i) => {
      if (!line) return null
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) { line.classList.add('visible'); obs.disconnect() } },
        { threshold: 0.1 }
      )
      obs.observe(line)
      return obs
    })
    return () => observers.forEach(o => o?.disconnect())
  }, [t])

  return (
    <section className="about-exp-section">
      <div className="container">
        <h2 className="section-title">{t.about.experienceTitle}<span>.</span></h2>
        {t.experience.map((exp, i) => (
          <div key={exp.id} className="about-exp-entry">
            <div className="about-exp-number">{String(i + 1).padStart(2, '0')}</div>
            <div className="about-exp-content">
              <span className="about-exp-role">{exp.role}</span>
              <h3 className="about-exp-company">{exp.company}</h3>
              <p className="about-exp-period">{exp.period}</p>
              <ul className="about-exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
            {i < t.experience.length - 1 && (
              <div className="timeline-line" ref={el => lineRefs.current[i] = el} />
            )}
          </div>
        ))}
      </div>
    </section>
  )
}
