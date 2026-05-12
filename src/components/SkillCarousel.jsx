import { useLang } from '../context/LangContext'
import './SkillCarousel.css'

export default function SkillCarousel() {
  const { t } = useLang()
  const all = t.skills.flatMap(s => s.items)
  const size = Math.ceil(all.length / 3)
  const rows = [all.slice(0, size), all.slice(size, size * 2), all.slice(size * 2)]

  return (
    <div className="skill-carousel">
      <h2 className="section-title">{t.about.stackTitle}<span>.</span></h2>
      <div className="carousel-wrapper">
        {rows.map((row, ri) => (
          <div key={ri} className={`carousel-track ${ri === 1 ? 'reverse' : ''}`}>
            <div className="carousel-inner">
              {[...row, ...row].map((item, i) => (
                <span key={i} className="skill-pill">{item}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
