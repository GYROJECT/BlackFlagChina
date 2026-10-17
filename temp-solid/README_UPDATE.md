# 标志：实心底（不抠图）

不做智能去背。原图全部像素 100% 不透明，贴在实心矩形底上。

| 文件 | 底色 |
|------|------|
| `logo-header-dark.png` / `logo-dark.png` | `#0e0d0c`（深色顶栏） |
| `logo-header-light.png` / `logo-light.png` | `#f7f4ef`（浅色顶栏） |
| `logo-header.png` / `logo.png` | 默认同 dark |

`Layout.tsx` 会按 `data-theme` 自动切换 dark/light 两张 header 图。

## Termux

```bash
cd ~/BlackFlagChina-out
mkdir -p ~/bfc-extract
rm -rf ~/bfc-extract/*
unzip -o /sdcard/Download/BlackFlagChina-logo-solid.zip -d ~/bfc-extract

mkdir -p public src/components
cp ~/bfc-extract/public/* public/
cp ~/bfc-extract/src/components/Layout.tsx src/components/

git add public/ src/components/Layout.tsx
git commit -m "fix: solid-background logo, no knockout holes"
git push
```
