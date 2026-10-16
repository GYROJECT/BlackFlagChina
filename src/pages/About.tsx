import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { aboutBody } from '../data/content'

export default function About() {
  return (
    <>
      <header className="page-header">
        <h1>关于</h1>
        <p>站点说明、原则与转载许可</p>
      </header>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{aboutBody}</ReactMarkdown>
      </article>
    </>
  )
}
