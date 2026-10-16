import { Link } from 'react-router-dom'
import { booksByCategory } from '../data/content'

export default function Books() {
  const cats = booksByCategory()

  return (
    <>
      <header className="page-header">
        <h1>书籍与小册子</h1>
        <p>公开阅读 / 下载资料索引（自 Notion 迁移，持续完善）</p>
      </header>
      {[...cats.entries()].map(([cat, items]) => (
        <section key={cat} className="book-cat">
          <h3>{cat}</h3>
          <ul className="book-list">
            {items.map((b) => (
              <li key={b.slug}>
                <Link to={`/books/${b.slug}`}>{b.title}</Link>
              </li>
            ))}
          </ul>
        </section>
      ))}
    </>
  )
}
