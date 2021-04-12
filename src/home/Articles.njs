import Nullstack from "nullstack";
import ArticleGrid from "../layout/ArticleGrid";

class Articles extends Nullstack {
  static async getLatestArticles({ articles }) {
    return articles.slice(0, 5);
  }

  async initiate() {
    this.articles = await this.getLatestArticles();
  }

  render() {
    return (
      <div class="max-w-screen-xl mx-auto px-4">
        <ArticleGrid articles={this.articles} />
      </div>
    );
  }
}

export default Articles;
