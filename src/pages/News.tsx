import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { news } from '../data/content'

export default function News() {
  return (
    <>
      <header className="page-header">
        <h1>新闻</h1>
        <p>中国安圈动态、快讯与转载</p>
      </header>
      <div className="article-list">
        {news.length === 0 ? (
          <p style={{ color: 'var(--text-muted)' }}>暂无新闻，内容同步中。</p>
        ) : (
          news.map((n) => (
            <div key={n.slug} className="article-row" style={{ display: 'block' }}>
              <div className="article-date" style={{ marginBottom: '0.5rem' }}>
                {n.date}
              </div>
              <h3 style={{ fontFamily: 'var(--serif)', marginBottom: '0.75rem' }}>{n.title}</h3>
              <div className="prose">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>{n.body}</ReactMarkdown>
              </div>
            </div>
          ))
        )}
      </div>
    </>
  )
}
