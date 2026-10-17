# 透明背景标志

黑色底已去掉；玻璃面改为半透明深灰 + 细描边，深色/浅色模式都能看清；红条保留。

## Termux

```bash
cd ~/BlackFlagChina-out
mkdir -p ~/bfc-extract
rm -rf ~/bfc-extract/*
unzip -o /sdcard/Download/BlackFlagChina-logo-transparent.zip -d ~/bfc-extract

mkdir -p public
cp ~/bfc-extract/public/* public/

git add public/
git commit -m "fix: transparent logo background"
git push
```
