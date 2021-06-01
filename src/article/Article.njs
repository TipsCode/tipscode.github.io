import Nullstack from 'nullstack';
import Menu from '../layout/Menu';
import Promotion from '../layout/Promotion';
import Footer from '../layout/Footer';

const routes = {
  '/desenvolvedor-full-stack-turbo': 'https://tipscode.com.br/curso-fullstack-turbo ',
  '/profissional-fullstack': 'https://tipscode.com.br/curso-fullstack-turbo',
  '/ebook-gratuito-html': 'https://tipscode.com.br/ebook-gratuito',
  '/mini-curso-construindo-seu-jogo-em-javascript': 'https://tipscode.com.br/mini-curso-gratuito',
};
class Articles extends Nullstack {

  async hydrate({ router }) {
    const target = routes[router.path];

    if (target) {
      router.url = target;
    }
  }

  static async getArticleBySlug({ articles, slug }) {
    const article = articles.find((article) => article.slug === slug);
    return article;
  }

  async initiate({ page, params, project }) {
    const article = await this.getArticleBySlug({ slug: params.slug });
    if (!article) {
      page.status = 404;
    } else {
      Object.assign(this, article);

      page.title = `${article.title} - ${project.name}`;
      page.description = article.description;
      if (article.imgArticle) {
        page.image = article.imgArticle;
      }
    }
  }

  render() {
    return (
      <>
        <Menu />
        <div class="max-w-screen-xl mx-auto sm:m-auto sm:text-justify px-4 py-16">

          <article>
            <h1 class="font-bold text-4xl text-left sm:text-left"> {this.title} </h1>
            <figure class="mt-10">
              <img width="1242" src={this.imgArticle} />
              <ficaption>{this.date}</ficaption>
            </figure>

            <div html={this.content} class="mt-10 prose max-w-none" />
          </article>


        </div>
        <Promotion />
        <Footer
          class={{
            footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around',
            p: 'text-center sm:text-center w-full text-tips-dark text-opacity-80',
          }}
          src="./tipscode-logo-1.svg"
        />

      </>
    );
  }

}

export default Articles;