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
published: 2026-09-04
location: 日本 · 大阪
coverImage: /img/main.jpg
region: east-asia
excerpt: 一句話摘要，會顯示在首頁卡片。
---

正文寫在這裡……
```

`date` 是旅程時間（只顯示年月）；`published` 是文章上線時間，用來決定首頁「最新兩篇」。省略 `published` 時會改用 `date`。

`region` 可選：`east-asia` | `southeast-asia` | `south-asia` | `europe` | `middle-east` | `africa`

香港／屋企專屬文章：在 frontmatter 加上 `featuredOnHome: true`，文章會出現在「屋企」頁，不會出現在「旅途」；若屬於最新兩篇，仍會出現在首頁。

封面圖放在 `public/img/`，路徑用 `/img/檔名.jpg`。
