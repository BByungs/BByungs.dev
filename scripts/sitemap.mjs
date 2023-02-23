import { writeFileSync } from 'fs';
import { globby } from 'globby';
import prettier from 'prettier';

const pages = await globby(['pages/*.tsx', 'posts/**/*.mdx', '!pages/_*.tsx']);

const sitemap = `
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${pages
      .map((page) => {
        const path = page
          .replace('pages', '')
          .replace('posts', '')
          .replace('.tsx', '')
          .replace('.js', '')
          .replace('.mdx', '')
          .replace('/index', '');
        return `
          <url>
              <loc>${`https://devahn.vercel.app${path}`}</loc>
          </url>
        `;
      })
      .join('')}
</urlset>
`;

const prettierConfig = await prettier.resolveConfig('./prettierrc');
const formatted = prettier.format(sitemap, {
  ...prettierConfig,
  parser: 'html',
});

writeFileSync('public/sitemap.xml', formatted);
