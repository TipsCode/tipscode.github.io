import Nullstack from "nullstack";
import ArticleGrid from '../layout/ArticleGrid';
class Articles extends Nullstack {

  static async getArticlesList({ articles, page }) {
    const perPage = 20;
    const start = (page -1) * perPage;
    const end = start + perPage
    return articles.slice(start, end);
  }

  async initiate({ params }) {
    this.articles = await this.getArticlesList({
      page: params.page || 1
    });
  }

  render() {
    return (
      <div>
        <ArticleGrid articles={this.articles} />
      </div>
    );
  }
  
}

export default Articles;
