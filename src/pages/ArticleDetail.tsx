import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getArticle } from '../data/content'

export default function ArticleDetail() {
  const { slug } = useParams()
  const article = slug ? getArticle(slug) : undefined

  if (!article) {
    return (
      <div className="page-header">
        <h1>未找到文章</h1>
        <p>
          <Link to="/articles" className="back">
            ← 返回文章列表
          </Link>
        </p>
      </div>
    )
  }

  const coverSrc = article.cover
    ? article.cover.startsWith('http')
      ? article.cover
      : `${import.meta.env.BASE_URL}${article.cover.replace(/^\//, '')}`
    : null

  return (
    <>
      {coverSrc ? (
        <div className="page-cover">
          <img src={coverSrc} alt="" />
        </div>
      ) : null}
      <header className="page-header">
        <Link to="/articles" className="back">
          ← 文章
        </Link>
        <p className="card-meta">
          {article.date}
          {article.category ? ` · ${article.category}` : ''}
        </p>
        <h1>{article.title}</h1>
        {article.excerpt ? <p>{article.excerpt}</p> : null}
      </header>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
      </article>
    </>
  )
}
