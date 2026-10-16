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
          <Link to="/articles">返回文章列表</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      {article.cover ? (
        <div className="page-cover">
          <img src={article.cover.startsWith('http') ? article.cover : `${import.meta.env.BASE_URL}${article.cover.replace(/^\//, '')}`} alt="" />
        </div>
      ) : null}
      <header className="page-header">
        <p className="card-meta">
          {article.date}
          {article.category ? ` · ${article.category}` : ''}
        </p>
        <h1>{article.title}</h1>
      </header>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{article.body}</ReactMarkdown>
      </article>
    </>
  )
}
