import { useParams, Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { getBook } from '../data/content'

export default function BookDetail() {
  const { slug } = useParams()
  const book = slug ? getBook(slug) : undefined

  if (!book) {
    return (
      <div className="page-header">
        <h1>未找到条目</h1>
        <p>
          <Link to="/books">返回书籍索引</Link>
        </p>
      </div>
    )
  }

  return (
    <>
      <header className="page-header">
        <p className="card-meta">{book.category}</p>
        <h1>{book.title}</h1>
      </header>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {book.body ||
            `## ${book.title}\n\n该条目已从 Notion 索引迁入。正文、下载链接与说明将继续补全。\n`}
        </ReactMarkdown>
      </article>
    </>
  )
}
