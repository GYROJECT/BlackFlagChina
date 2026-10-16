import { Link } from 'react-router-dom'
import { articles, news, books } from '../data/content'

export default function Home() {
  const latestArticles = articles.slice(0, 3)
  const latestNews = news.slice(0, 2)

  return (
    <>
      <section className="hero">
        <p className="hero-kicker">Black Flag China</p>
        <h1>黑旗中国网</h1>
        <p className="hero-lead">
          中国无政府主义协会面向中国境内社会性与组织化无政府主义者的公共资料与宣传空间。
          以清晰、克制、易读的方式整理文章、新闻、书籍与视觉素材。
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>最新文章</h2>
          <Link to="/articles">查看全部 →</Link>
        </div>
        <div className="card-grid">
          {latestArticles.map((a) => (
            <Link key={a.slug} to={`/articles/${a.slug}`} className="card">
              <div className="card-meta">
                {a.date}
                {a.category ? ` · ${a.category}` : ''}
              </div>
              <h3>{a.title}</h3>
              {a.excerpt ? <p>{a.excerpt}</p> : null}
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>新闻</h2>
          <Link to="/news">查看全部 →</Link>
        </div>
        <div className="article-list">
          {latestNews.map((n) => (
            <Link key={n.slug} to="/news" className="article-row">
              <div className="article-date">{n.date}</div>
              <div>
                <h3>{n.title}</h3>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>书籍与小册子</h2>
          <Link to="/books">浏览索引 →</Link>
        </div>
        <p style={{ color: 'var(--text-muted)', marginBottom: '1rem' }}>
          当前索引收录 {books.length}+ 条公开阅读 / 下载资料（完整目录持续同步中）。
        </p>
        <div className="card-grid">
          {['巴枯宁全集', '平台主义—特定主义', '工团主义', '选集及文集'].map((cat) => (
            <Link key={cat} to="/books" className="card">
              <div className="card-meta">主题</div>
              <h3>{cat}</h3>
              <p>查看该分类下的文献与译本</p>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
