import './Application.scss';
import Nullstack from 'nullstack';
import { readdirSync, readFileSync } from 'fs';
import prismjs from 'prismjs';
import { Remarkable } from 'remarkable';
import meta from 'remarkable-meta';
import Menu from './layout/Menu';
import Footer from './layout/Footer';
import Home from './home/Home';
import Articles from './articles/Articles';
import Article from './article/Article';
import Promotion from './layout/Promotion';
import Course from './course/Course';
import Ebook from './ebook/Ebook';
import Mini from './mini/Mini';
import ThanksEbook from './thanks-ebook/ThanksEbook';

class Application extends Nullstack {

  static async start(context) {
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
      const { date, ...meta } = md.meta;
      return {
        slug,
        content,
        date,
        readingTime: (content.length / 100),
        ...meta,
      };
    }).sort((a, b) => b.createdAt - a.createdAt);
  }

  prepare({ page }) {
    page.locale = 'pt-BR';
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />

        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap"
          rel="stylesheet"
        />

        <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css" rel="stylesheet" />
      </head>
    );
  }

  render({ router }) {
    return (
      <main class="bg-tips-light">
        <Head />
        {router.path !== '/curso-fullstack-turbo' && <Menu />}
        <Home route="/" />
        <Articles route="/artigos" />
        <Articles route="/artigos/:page" />
        <Course route="/curso-fullstack-turbo" />
        <Ebook route="/ebook-gratuito" />
        <ThanksEbook route="/ebook-obrigado" />
        <Mini route="/mini-curso-gratuito" />
        <Article route="/:slug" />
        {router.path !== '/curso-fullstack-turbo' && <Promotion />}
        {router.path !== '/curso-fullstack-turbo' && <Footer />}
      </main>
    );
  }

}

export default Application;