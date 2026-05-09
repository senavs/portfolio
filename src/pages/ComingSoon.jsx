import { Link } from 'react-router-dom'
import './ComingSoon.css'

export default function ComingSoon({ title }) {
  return (
    <main className="coming-soon">
      <h1 className="coming-soon-title">{title}<span>.</span></h1>
      <p>This page is coming soon.</p>
      <Link to="/" className="btn btn-outline">← Back to Home</Link>
    </main>
  )
}
