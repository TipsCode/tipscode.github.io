import '../tailwind.css';
import './Application.scss';
import Nullstack from 'nullstack';
import Home from './home/Home';
import Articles from './articles/Articles';
import Article from './article/Article';
import SalesPage from './course-fullstack-turbo/SalesPage';
import SalesPageReactPro from './course-react-pro/SalesPageReactPro';
import SalesPagePython from './course-python/SalesPagePython';
import Ebook from './ebook/Ebook';
import MiniCourse from './mini-course/MiniCourse';
import MiniCourseThankPage from './delivery-mini-course/MiniCourseThankPage';
import MiniCourseClasses from './delivery-mini-course/MiniCourseClasses';
import PageVideoDepo from './delivery-mini-course/PageVideoDepo';
import GoogleAnalytics from './layout/GoogleAnalytics';
import FacebookPixel from './layout/FacebookPixel';

class Application extends Nullstack {

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

  renderTrackers() {
    return (
      <>
        <FacebookPixel id="294337825339805" />
        <GoogleAnalytics id="UA-120538403-3" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-7630588299359214"
          crossorigin="anonymous"
        />
      </>
    );
  }

  render() {
    return (
      <main class="bg-tips-light">
        <Trackers />
        <Head />
        <Home route="/" />
        <Articles route="/artigos" />
        <Articles route="/artigos/:page" />
        <SalesPage route="/curso-fullstack-turbo" />
        <SalesPageReactPro route="/curso-react-pro" />
        <SalesPagePython route='/curso-python-turbo' />
        <Ebook route="/ebook-gratuito" />
        <MiniCourse route="/mini-curso-gratuito" />
        <MiniCourseThankPage route="/obrigado-por-entrar-no-mini-curso" />
        <MiniCourseClasses route="/aulas-do-mini-curso" />
        <PageVideoDepo route="/entrevista-com-aluno" />
        <Article route="/:slug" />
        <span href="/curso-react-pro" />
        <span href="/curso-python-turbo" />
        <span href="/curso-fullstack-turbo" />
        <span href="/obrigado-por-entrar-no-mini-curso" />
        <span href="/aulas-do-mini-curso" />
        <span href="/entrevista-com-aluno" />
      </main>
    );
  }

}

export default Application;