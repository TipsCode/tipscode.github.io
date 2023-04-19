import Nullstack from 'nullstack';
import { readdirSync, readFileSync } from 'fs';
import prismjs from 'prismjs';
import { Remarkable } from 'remarkable';
import meta from 'remarkable-meta';
import Application from './src/Application';

const context = Nullstack.start(Application);

context.start = async function start() {
  await import('prismjs/components/prism-jsx.min');
  const articles = readdirSync('articles');
  const md = new Remarkable({
    // eslint-disable-next-line no-undef
    highlight: (code) => Prism.highlight(code, prismjs.languages.jsx, 'javascript'),
  });
  md.use(meta);
  md.use((md) => {
    const originalRender = md.renderer.rules.link_open;
    md.renderer.rules.link_open = (...args) => {
      let result = originalRender(...args);
      const regexp = /href="([^"]*)"/;
      const href = regexp.exec(result)[1];
      if (!href.startsWith('/')) {
        result = result.replace('>', ' target="_blank" rel="noopener">');
      }
      return result;
    };
  });
  context.articles = articles.map((name) => {
    const markdown = readFileSync(`articles/${name}`, 'utf-8');
    const [slug] = name.split('.');
    const content = md.render(markdown);
    const { date: dateString, ...meta } = md.meta;
    const date = new Date(dateString);
    const readingTime = ~~(content.split(' ').length / 200);
    return { slug, content, date, readingTime, ...meta };
  }).sort((a, b) => b.date - a.date);
};

export default context;