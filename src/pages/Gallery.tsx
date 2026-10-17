import { useMemo, useState } from 'react'
import { galleryItems, galleryByCategory } from '../data/gallery'

export default function Gallery() {
  const byCat = useMemo(() => galleryByCategory(), [])
  const categories = useMemo(() => ['全部', ...Array.from(byCat.keys())], [byCat])
  const [active, setActive] = useState('全部')

  const list =
    active === '全部'
      ? galleryItems
      : byCat.get(active) ?? []

  return (
    <>
      <header className="page-header">
        <h1>图集</h1>
        <p>宣传海报、活动宣传图与视觉素材</p>
      </header>

      <div className="gallery-filters">
        {categories.map((c) => (
          <button
            key={c}
            type="button"
            className={`gallery-filter${active === c ? ' active' : ''}`}
            onClick={() => setActive(c)}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="gallery-grid">
        {list.map((item) => (
          <a
            key={item.src}
            className="gallery-item"
            href={`${import.meta.env.BASE_URL}${item.src}`}
            target="_blank"
            rel="noreferrer"
          >
            <img
              src={`${import.meta.env.BASE_URL}${item.src}`}
              alt={item.title || item.category}
              loading="lazy"
              onError={(e) => {
                const el = e.currentTarget
                el.style.opacity = '0.25'
                el.alt = '待上传'
              }}
            />
            <span className="gallery-cap">{item.category}</span>
          </a>
        ))}
      </div>

      {list.length === 0 && (
        <p className="hero-lead">该分类暂无图片。请将文件上传到 public/gallery/。</p>
      )}
    </>
  )
}
