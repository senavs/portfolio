import { useLang } from '../context/LangContext'
import './SkillsSection.css'

export default function SkillsSection() {
  const { t } = useLang()
  return (
    <section className="skills-section">
      <div className="container">
        <h2 className="section-title">{t.sections.skills}<span>.</span></h2>
        <div className="skills-grid">
          {t.skills.map(({ category, items }) => (
            <div key={category} className="skills-col">
              <h3>{category}</h3>
              <ul>
                {items.map(item => <li key={item}>{item}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
