import Nullstack from 'nullstack';
import ArticleGrid from '../layout/ArticleGrid';

class Articles extends Nullstack {

  static async getLatestArticles({ articles }) {
    return articles.slice(0, 9);
  }

  async initiate() {
    this.articles = await this.getLatestArticles();
  }

  render() {
    return (
      <section class="max-w-screen-xl mx-auto px-4">
        <h3 class="mb-10 text-center text-2xl md:text-5xl font-bold text-tips-dark text-opacity-80 md:mb-24 ">Últimas do Blogs</h3>
        <ArticleGrid articles={this.articles} />
      </section>
    );
  }

}

export default Articles;