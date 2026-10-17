# UI：紧凑布局 + 浅色/深色

## 改动

1. **更紧凑**
   - 内容区最大宽度 920px（原 1120）
   - 字号、间距、卡片、列表整体缩小
   - 首页改为列表式（不再大卡片堆叠）
   - Hero 文案缩短

2. **浅色 / 深色**
   - 右上角「明 / 暗」切换
   - 记住选择（localStorage）
   - 默认跟随系统

## 手机替换文件

| 仓库路径 | 操作 |
|----------|------|
| `src/styles/global.css` | **整文件替换**（本包已含 gallery/logo 相关样式） |
| `src/components/Layout.tsx` | 整文件替换 |
| `src/components/ThemeToggle.tsx` | **新建** |
| `src/pages/Home.tsx` | 整文件替换 |

## index.html（防闪屏）

打开根目录 `index.html`，在 `<head>` 最前面（`<meta charset` 之后）插入本包 `theme-snippet.html` 里的 `<script>...</script>`。

## 说明

若你本地 `global.css` 里曾手动追加过 logo-and-cover / gallery 片段，本包 **已合并**，直接整文件替换即可，不必再追加。
