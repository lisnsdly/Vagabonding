# 浪遊 Vagabonding（Astro）

以內容驅動的旅遊部落格。原稿靜態 HTML 已備份在 `_legacy/`。

## 指令

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # 輸出到 dist/
npm run preview  # 預覽正式建置
```

## 新增一篇旅遊文章

在 `src/content/blog/` 新增 Markdown，例如 `osaka.md`：

```md
---
title: 大阪的第一碗拉麵
date: 2026-01-20
location: 日本 · 大阪
coverImage: /img/main.jpg
region: east-asia
excerpt: 一句話摘要，會顯示在首頁卡片。
---

正文寫在這裡……
```

`region` 可選：`east-asia` | `southeast-asia` | `europe` | `middle-east` | `africa`

封面圖放在 `public/img/`，路徑用 `/img/檔名.jpg`。
