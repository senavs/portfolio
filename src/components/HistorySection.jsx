import './HistorySection.css'

export default function HistorySection({ paragraphs }) {
  return (
    <section className="history-section">
      <div className="container">
        <h2 className="section-title">My History<span>.</span></h2>
        <div className="history-body">
          {paragraphs.map((p, i) => (
            <p key={i} dangerouslySetInnerHTML={{ __html: p }} />
          ))}
        </div>
      </div>
    </section>
  )
}
