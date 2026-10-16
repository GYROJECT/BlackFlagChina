export type Article = {
  slug: string
  title: string
  date: string
  category?: string
  excerpt?: string
  body: string
}

export type Book = {
  slug: string
  title: string
  category: string
  body?: string
}

export type NewsItem = {
  slug: string
  title: string
  date: string
  body: string
}

export type Notice = {
  slug: string
  title: string
  date: string
  body: string
}

export const articles: Article[] = [
  {
    slug: 'on-organization-camatte-collu',
    title: '雅克·卡马特、詹尼·科卢：《论组织》',
    date: '2026-10-16',
    category: '翻译',
    excerpt: '关于革命组织与形式的经典讨论。',
    body: `## 雅克·卡马特、詹尼·科卢：《论组织》

（内容迁移自黑旗中国网 Notion。完整正文将持续补充。）

> 组织问题始终是革命运动的核心问题之一。
`,
  },
  {
    slug: 'not-age-but-work',
    title: '问题不在年龄，而在工作：那些被习以为常的身体损耗，直到身体喊“停”的那一刻',
    date: '2026-10-16',
    category: '翻译',
    excerpt: '关于劳动身体损耗与日常反抗。',
    body: `## 问题不在年龄，而在工作

（内容迁移自黑旗中国网 Notion。完整正文将持续补充。）
`,
  },
  {
    slug: 'mussolini-to-power',
    title: '墨索里尼掌权',
    date: '2026-10-15',
    category: '翻译',
    excerpt: '历史文本：法西斯上台的过程与教训。',
    body: `## 墨索里尼掌权

（内容迁移自黑旗中国网 Notion。完整正文将持续补充。）
`,
  },
  {
    slug: 'completely-ungoverned',
    title: '完全不受统治！',
    date: '2026-10-12',
    category: '翻译',
    body: `## 完全不受统治！

（内容迁移自黑旗中国网 Notion。完整正文将持续补充。）
`,
  },
  {
    slug: 'libertarians',
    title: '自由意志主义者？',
    date: '2026-10-12',
    category: '翻译',
    body: `## 自由意志主义者？

（内容迁移自黑旗中国网 Notion。完整正文将持续补充。）
`,
  },
  {
    slug: 'triple-structure',
    title: '三重结构：关于工作、工资与出路',
    date: '2026-10-01',
    category: '战术与实践',
    excerpt: '关于工作、工资与出路的结构性讨论。',
    body: `## 三重结构：关于工作、工资与出路

（内容迁移自黑旗中国网 Notion。完整正文将持续补充。）
`,
  },
  {
    slug: 'anarchism-not-a-label',
    title: '无政府主义不是可以随意借用的政治标签',
    date: '2026-08-01',
    category: '理论',
    excerpt: '澄清无政府主义作为一种政治立场与运动的边界。',
    body: `## 无政府主义不是可以随意借用的政治标签

在中国网络环境中，「无政府主义者」经常被当成一个可以随意使用的政治标签。有人把无政府主义理解为单纯的个人自由，有人把它理解为反对一切组织，也有人试图把无政府主义与民族主义、国家主义或者威权社会主义结合起来。

与此同时，一些个人还会以“全体中国无政府主义者”的名义发表自己的政治观点，使外界很难区分个人立场和无政府主义运动本身。

我们认为，这种情况需要被明确澄清。一个人自称无政府主义者，并不意味着他的全部政治主张都属于无政府主义。
`,
  },
]

export const news: NewsItem[] = [
  {
    slug: 'pinned-update',
    title: '站点动态与资料更新',
    date: '2026-10-08',
    body: `## 站点动态

黑旗中国网持续更新文章、新闻与书籍资料。欢迎关注与转载。
`,
  },
]

export const notices: Notice[] = []

export const books: Book[] = [
  { slug: 'bakunin-vol-1', title: '巴枯宁全集 Volume I：La polemica con Mazzini', category: '巴枯宁全集' },
  { slug: 'bakunin-vol-2', title: '巴枯宁全集 Volume II：La Prima Internazionale in Italia e il conflitto con Marx', category: '巴枯宁全集' },
  { slug: 'bakunin-vol-3', title: '巴枯宁全集 Volume III：反对马克思的斗争', category: '巴枯宁全集' },
  { slug: 'bakunin-vol-4', title: '巴枯宁全集 Volume IV：国家制度与无政府状态', category: '巴枯宁全集' },
  { slug: 'bakunin-vol-5', title: '巴枯宁全集 Volume V：涅恰耶夫问题与俄国革命文献', category: '巴枯宁全集' },
  { slug: 'bakunin-vol-6', title: '巴枯宁全集 Volume VI：巴枯宁与第一国际及俄国革命运动文献', category: '巴枯宁全集' },
  { slug: 'three-sins', title: '世界之三大罪恶（附《无神论》）', category: '20世纪中国无政府主义文献' },
  { slug: 'chinese-anarchists-history', title: '中国历史上之安那其主义者', category: '20世纪中国无政府主义文献' },
  { slug: 'black-flag-reexamining', title: '黑旗：重审无政府主义（中文全译本）', category: '平台主义—特定主义' },
  { slug: 'makhno-selected', title: '马赫诺选集', category: '平台主义—特定主义' },
  { slug: 'anarcho-syndicalism-rocker', title: 'Anarcho-Syndicalism（罗克尔）', category: '工团主义' },
  { slug: 'what-is-anarcho-syndicalism', title: '什么是无政府工团主义？', category: '工团主义' },
  { slug: 'shifu-collected', title: '师复文集', category: '选集及文集' },
  { slug: 'bajin-essays', title: '巴金短文选集', category: '选集及文集' },
  { slug: 'kropotkin-revolutionary-essays', title: '克鲁泡特金：无政府主义——革命文集', category: '选集及文集' },
  { slug: 'advise-chinese-youth', title: '敬告中国青年', category: '简介' },
]

export const aboutBody = `## 关于黑旗中国

「黑旗中国」是一个面向中文读者的中华人民共和国境内无政府主义新闻、文章与资料平台。

「黑旗中国」是独立的公开传播与资料平台。本站可以刊载中国无政府主义协会（CAA）及相关组织的公开内容，但并不等同于组织机关报。

转载请注明「黑旗中国」及原文出处。
`

export const contactBody = `## 联系

投稿、合作与反馈，请通过协会公开渠道联系。

中国无政府主义协会官网：https://www.caanet.top/
`

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug)
}

export function getBook(slug: string) {
  return books.find((b) => b.slug === slug)
}

export function booksByCategory() {
  const map = new Map<string, Book[]>()
  for (const b of books) {
    if (!map.has(b.category)) map.set(b.category, [])
    map.get(b.category)!.push(b)
  }
  return map
}
