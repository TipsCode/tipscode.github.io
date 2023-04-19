import Nullstack from 'nullstack';
import ArticleGrid from '../layout/ArticleGrid';
import Menu from '../layout/Menu';
import Promotion from '../layout/Promotion';
import Footer from '../layout/Footer';
import LeadForm from '../layout/LeadForm';

const leadlover = {
  id: '559236',
  mid: '559236',
  pid: '19083046',
  list: '559236',
};

const ARTICLES_PER_PAGE = 20;
class Articles extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - TipsCode`;
    page.description = `${project.name} Descomplicando a Tecnologia`;
    page.locale = 'pt-BR';
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

  renderPaginator() {
    const page = this.page();
    const nextPage = page + 1;
    const prevPage = page - 1;
    console.log(this.page());
    const numberOfPages = Math.ceil(this.count / ARTICLES_PER_PAGE);
    return (
      <div class={`flex w-full mt-8 ${page === 1 ? 'justify-end' : 'justify-between'}`}>
        {page > 1 && (
        <a a href={`/artigos/${prevPage}`} class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-blue text-white font-bold rounded lg:mt-0 py-3 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
          Voltar
        </a>
        )}
        {numberOfPages >= nextPage && (
        <a
          href={`/artigos/${nextPage}`}
          class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-blue text-white font-bold rounded lg:mt-0 py-3 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Ver mais artigos
        </a>
        )}
      </div>
    );
  }

  render() {

    return (
      <>
        <Menu />
        <header class="flex flex-wrap text-center sm:justify-center shadow w-full bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500 p-8">
          <h1 class="mb-4 text-center text-white text-2xl w-full">Receba agora mesmo nossos conteúdos<br /> premium no seu e-mail</h1>

          <div class="sm:flex sm:justify-center w-full">
            <div class="text-sm w-full sm:w-1/3">
              <LeadForm
                config={leadlover}
                class={{
                  input: 'p-2 rounded-md focus:outline-none bg-white shadow-md border w-full',
                  button: 'bg-tips-blue py-2 px-6 mt-2 font-semibold focus:outline-none text-white rounded-md shadow-md w-full',
                }}
              />
            </div>
          </div>

        </header>
        <section class="max-w-screen-xl mx-auto px-4 mt-12">
          <ArticleGrid articles={this.articles} />
          <Paginator />
        </section>
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