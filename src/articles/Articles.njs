import Nullstack from "nullstack";
import ArticleGrid from '../layout/ArticleGrid';

const ARTICLES_PER_PAGE = 20;
class Articles extends Nullstack {

  page({ params }) {
    return +params.page || 1
  }

  static async getArticlesList({ articles, page }) {
    const start = (page -1) * ARTICLES_PER_PAGE;
    const end = start + ARTICLES_PER_PAGE;
    const paged = articles.slice(start, end);
    const count = articles.length;
    return { articles: paged, count };
  }

  async initiate() {
    const data = await this.getArticlesList({
      page: this.page()
    });
    Object.assign(this, data);
  }

  render() {
    const nextPage = this.page() + 1;
    const numberOfPages = Math.ceil(this.count / ARTICLES_PER_PAGE);
    return (
      <div>
        <ArticleGrid articles={this.articles} />
        {numberOfPages >= nextPage &&
          <a href={`/artigos/${nextPage}`}> Ver mais artigos </a>
        }
      </div>
    );
  }
  
}

export default Articles;
