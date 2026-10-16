import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { notices } from '../data/content'

export default function Notices() {
  return (
    <>
      <header className="page-header">
        <h1>公告</h1>
        <p>声明、通知、征稿与活动信息</p>
      </header>
      {notices.length === 0 ? (
        <p style={{ color: 'var(--text-muted)' }}>暂无公告。</p>
      ) : (
        notices.map((n) => (
          <div key={n.slug} style={{ marginBottom: '2rem' }}>
            <div className="card-meta">{n.date}</div>
            <h2 style={{ fontFamily: 'var(--serif)', marginBottom: '0.75rem' }}>{n.title}</h2>
            <div className="prose">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{n.body}</ReactMarkdown>
            </div>
          </div>
        ))
      )}
    </>
  )
}
