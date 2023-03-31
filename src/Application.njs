import './Application.scss';
import Nullstack from 'nullstack';
import { readdirSync, readFileSync } from 'fs';
import prismjs from 'prismjs';
import { Remarkable } from 'remarkable';
import meta from 'remarkable-meta';
import Home from './home/Home';
import Articles from './articles/Articles';
import Article from './article/Article';
import SalesPage from './course-fullstack-turbo/SalesPage';
import SalesPageReactPro from './course-react-pro/SalesPageReactPro';
import Ebook from './ebook/Ebook';
import MiniCourse from './mini-course/MiniCourse';
import MiniCourseThankPage from './delivery-mini-course/MiniCourseThankPage';
import MiniCourseClasses from './delivery-mini-course/MiniCourseClasses';
import PageVideoDepo from './delivery-mini-course/PageVideoDepo';

import GoogleAnalytics from './layout/GoogleAnalytics';
import FacebookPixel from './layout/FacebookPixel';

import FacePixelFullStack from './course-fullstack-turbo/FacePixelFullStack';
import FacePixelReact from './course-react-pro/FacePixelReact';

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
      const { date: dateString, ...meta } = md.meta;
      const date = new Date(dateString);
      const readingTime = ~~(content.split(' ').length / 200);
      return { slug, content, date, readingTime, ...meta };
    }).sort((a, b) => b.date - a.date);
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
      </head>
    );
  }

  render({router}) {
    return (
      <main class="bg-tips-light">
        <div>
          {
            router.url.endsWith('/curso-fullstack-turbo') ? <FacePixelFullStack id="294337825339805" /> : <FacebookPixel id="294337825339805" />
          }

          {
            router.url.endsWith('/curso-react-pro') ? <FacePixelReact id="729313284878557" /> : <FacebookPixel id="294337825339805" />
          }
          <GoogleAnalytics id="AW-641358523" />
          <GoogleAnalytics id="UA-120538403-3" />
        </div>

        <Head />
        <Home route="/" />
        <Articles route="/artigos" />
        <Articles route="/artigos/:page" />
        <SalesPage route="/curso-fullstack-turbo" />
        <SalesPage route="/curso-full-stack-turbo" />
        <SalesPageReactPro route="/curso-react-pro" />
        <Ebook route="/ebook-gratuito" />
        <MiniCourse route="/mini-curso-gratuito" />
        <MiniCourseThankPage route="/obrigado-por-entrar-no-mini-curso" />
        <MiniCourseClasses route="/aulas-do-mini-curso" />
        <PageVideoDepo route="/entrevista-com-aluno" />
        <Article route="/:slug" />

        <span href="/curso-react-pro"> </span>
        <span href="/obrigado-por-entrar-no-mini-curso"> </span>
        <span href="/aulas-do-mini-curso"> </span>
        <span href="/entrevista-com-aluno"> </span>
        <span href="/curso-full-stack-turbo"></span>


      </main>
    );
  }

}

export default Application;