import { defineConfig } from 'astro/config';
import rehypeExternalLinks from 'rehype-external-links';

export default defineConfig({
  // 部署網域；若正式網址不同，請改成你的 production URL
  site: 'https://vagabonding-lilyhk.netlify.app',
  integrations: [],
  vite: {
    server: {
      watch: {
        // macOS / 部分編輯器下檔案監聽不可靠，改用 polling 確保 content 更新
        usePolling: true,
        interval: 500,
        ignored: ['**/node_modules/**', '**/.git/**'],
      },
    },
  },
  markdown: {
    rehypePlugins: [
      [
        rehypeExternalLinks,
        {
          target: '_blank',
          rel: ['noopener', 'noreferrer'],
        },
      ],
    ],
  },
});
