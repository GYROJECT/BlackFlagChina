import { Link } from 'react-router-dom'
import { articles, news, books } from '../data/content'

export default function Home() {
  const latestArticles = articles.slice(0, 5)
  const latestNews = news.slice(0, 3)

  return (
    <>
      <section className="hero">
        <p className="hero-kicker">Black Flag China</p>
        <h1>黑旗中国网</h1>
        <p className="hero-lead">
          公共资料与宣传空间：文章、新闻、书籍与视觉素材。
        </p>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>最新文章</h2>
          <Link to="/articles">全部 →</Link>
        </div>
        <div className="article-list">
          {latestArticles.map((a) => (
            <Link key={a.slug} to={`/articles/${a.slug}`} className="article-row">
              <div className="article-date">{a.date}</div>
              <div>
                <h3>{a.title}</h3>
                {a.excerpt ? <p>{a.excerpt}</p> : null}
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="section-header">
          <h2>新闻</h2>
          <Link to="/news">全部 →</Link>
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
          <h2>书籍</h2>
          <Link to="/books">索引 →</Link>
        </div>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem' }}>
          当前收录 {books.length}+ 条公开阅读 / 下载资料。
        </p>
      </section>
    </>
  )
}
