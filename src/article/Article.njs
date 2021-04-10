import Nullstack from "nullstack";

class Articles extends Nullstack {
  static async getArticleBySlug({ articles, slug }) {
    const article = articles.find((article) => article.slug === slug);
    return article;  
  }

  async initiate({ page, params }) {
    const article = await this.getArticleBySlug({ slug: params.slug });
    if (!article) {
      page.status = 404;
    } else {
      page.title = article.title;
      page.description = article.description;
      Object.assign(this, article)
    }
  }

  render() {
    return (
      <div class="container mx-auto px-4">
        <h1> {this.title} </h1>
        <article html={this.content} />
      </div>
    );
  }
}

export default Articles;