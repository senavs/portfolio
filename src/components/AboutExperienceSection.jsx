import { useEffect, useRef } from 'react'
import { useLang } from '../context/LangContext'
import './AboutExperienceSection.css'

export default function AboutExperienceSection() {
  const { t } = useLang()
  const sectionRef = useRef(null)

  useEffect(() => {
    function onScroll() {
      if (!sectionRef.current) return
      const entries = sectionRef.current.querySelectorAll('.about-exp-entry')
      entries.forEach((entry) => {
        const line = entry.querySelector('.timeline-line')
        if (!line) return
        const rect = entry.getBoundingClientRect()
        const entryTop = rect.top + window.scrollY
        const progress = Math.min(1, Math.max(0, (window.scrollY - entryTop + window.innerHeight * 0.5) / rect.height))
        line.style.height = progress * rect.height + 'px'
      })
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [t])

  return (
    <section className="about-exp-section" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">{t.about.experienceTitle}<span>.</span></h2>
        {t.experience.map((exp, i) => (
          <div key={exp.id} className="about-exp-entry">
            {i < t.experience.length - 1 && <div className="timeline-line" />}
            <div className="about-exp-number">{String(i + 1).padStart(2, '0')}</div>
            <div className="about-exp-content">
              <span className="about-exp-role">{exp.role}</span>
              <h3 className="about-exp-company">{exp.company}</h3>
              <p className="about-exp-period">{exp.period}</p>
              <ul className="about-exp-bullets">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
