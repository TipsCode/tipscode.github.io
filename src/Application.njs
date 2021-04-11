import './Application.scss';
import Nullstack from "nullstack";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import Home from "./home/Home";
import Articles from "./articles/Articles";
import Article from "./article/Article";
import { readdirSync, readFileSync } from 'fs';
import prismjs from 'prismjs';
import {Remarkable} from 'remarkable';
import meta from 'remarkable-meta';

class Application extends Nullstack {

  static async start(context) {
    await import('prismjs/components/prism-jsx.min');
    const articles = readdirSync('articles');
    const md = new Remarkable({
        highlight: (code) => Prism.highlight(code, prismjs.languages.jsx, 'javascript')
      });
      md.use(meta);
      md.use((md) => {
      const originalRender = md.renderer.rules.link_open;
      md.renderer.rules.link_open = function() {
        let result = originalRender.apply(null, arguments);
        const regexp = /href="([^"]*)"/;
        const href = regexp.exec(result)[1];
        if(!href.startsWith('/')) {
          result = result.replace('>', ' target="_blank" rel="noopener">');
        }
        return result;
      };
    });
    context.articles = articles.map((name) => {
      const markdown = readFileSync(`articles/${name}`, 'utf-8');
      const [slug] = name.split('.')
      const content = md.render(markdown);
      const { date, ...meta} = md.meta;
      const createdAt = new Date(date);
      return {
        slug,
        content,
        date,
        ...meta
      }
    }).sort((a, b) => b.createdAt - a.createdAt)
  }

  prepare({ page }) {
    page.locale = "pt-BR";
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Menu />
        <Home route="/" />
        <Articles route="/artigos" />
        <Articles route="/artigos/:page" />
        <Article route="/:slug" />
        <Footer />
      </main>
    );
  }
  
}

export default Application;
