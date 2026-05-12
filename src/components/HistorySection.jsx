import { useLang } from '../context/LangContext'
import './HistorySection.css'

export default function HistorySection() {
  const { t } = useLang()
  return (
    <section className="history-section">
      <div className="container">
        <h2 className="section-title">{t.sections.history}<span>.</span></h2>
        <div className="history-body">
          {t.history.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </section>
  )
}
