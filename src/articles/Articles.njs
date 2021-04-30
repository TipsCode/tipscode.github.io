import Nullstack from 'nullstack';
import ArticleGrid from '../layout/ArticleGrid';

const ARTICLES_PER_PAGE = 20;
class Articles extends Nullstack {

  prepare({ page }) {
    page.title = 'Tips code blog';
  }

  page({ params }) {
    return +params.page || 1;
  }

  static async getArticlesList({ articles, page }) {
    const start = (page - 1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const paged = articles.slice(start, end);
    const count = articles.length;
    return { articles: paged, count };
  }

  async initiate() {
    const data = await this.getArticlesList({
      page: this.page(),
    });
    Object.assign(this, data);
  }

  render({ page }) {
    const nextPage = this.page() + 1;
    const numberOfPages = Math.ceil(this.count / ARTICLES_PER_PAGE);
    return (
      <>
        <header class="flex flex-wrap text-center sm:justify-center shadow w-full bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500 p-8">
          <h1 class="text-center text-white text-2xl w-full">Receba agora mesmo nossos conteúdos<br /> premium no seu e-mail</h1>

          <form class="sm:flex sm:justify-center w-full">
            <div class="my-5 text-sm w-full sm:w-1/3">
              <input type="text" id="username" class="ounded-sm py-3 focus:outline-none bg-gray-100 w-full" placeholder="exemplo@gmail.com" />
            </div>

            <div class="mt-5">
              <a class="block sm:ml-4 text-white bg-tips-blue p-3 rounded-sm hover:bg-black w-full sm:w-44">Receber</a>
            </div>
          </form>

        </header>
        <section class="max-w-screen-xl mx-auto px-4 mt-12">
          <ArticleGrid articles={this.articles} />
          {numberOfPages >= nextPage && (
            <div class="flex w-full mt-8 justify-end">
              <a
                href={`/artigos/${nextPage}`}
                class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-blue text-white font-bold rounded lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Ver mais artigos
              </a>
            </div>
          )}
        </section>
      </>
    );
  }

}

export default Articles;