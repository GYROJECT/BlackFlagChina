import { Link } from 'react-router-dom'
import { articles } from '../data/content'

export default function Articles() {
  return (
    <>
      <header className="page-header">
        <h1>文章</h1>
        <p>长文、专题、评论与研究</p>
      </header>
      <div className="article-list">
        {articles.map((a) => (
          <Link key={a.slug} to={`/articles/${a.slug}`} className="article-row">
            <div className="article-date">{a.date}</div>
            <div>
              {a.category ? <span className="tag">{a.category}</span> : null}
              <h3>{a.title}</h3>
              {a.excerpt ? <p>{a.excerpt}</p> : null}
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
