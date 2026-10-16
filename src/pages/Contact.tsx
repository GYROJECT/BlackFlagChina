import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { contactBody } from '../data/content'

export default function Contact() {
  return (
    <>
      <header className="page-header">
        <h1>联系</h1>
        <p>投稿、合作与反馈</p>
      </header>
      <article className="prose">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{contactBody}</ReactMarkdown>
      </article>
    </>
  )
}
