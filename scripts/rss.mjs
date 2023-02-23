import RSS from 'rss';
import { allBlogs } from '../.contentlayer/generated/Blog/_index.mjs';
import { writeFileSync } from 'fs';

const generate = async () => {
  const feed = new RSS({
    title: 'Home | BByungs.dev',
    site_url: 'https://devahn.vercel.app',
    feed_url: 'https://devahn.vercel.app/feed.xml',
  });

  allBlogs
    .map((blog) => ({
      title: blog.title,
      description: blog.description,
      url: `https://devahn.vercel.app/blog/${blog.slug}`,
      date: blog.date,
    }))
    .forEach((item) => {
      feed.item(item);
    });

  writeFileSync('./public/rss.xml', feed.xml({ indent: true }));
};

generate();
