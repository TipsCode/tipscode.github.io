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
    console.log(article)
  }

  // TODO - export it as a plugin
  renderMarkdown({html, tag, class: classes}) {
    const article = Object.keys(classes).reduce((output, key) => {
      return output.split(`<${key}>`).join(`<${key} class="${classes[key]}">`);
    }, html || '');
    return (
      <element tag={tag || 'article'} html={article} class={classes.root} />
    )
  }

  render() {
    return (
      <div class="container mx-auto px-4 py-16">
        <h1 class="font-bold text-4xl"> {this.title} </h1>
        <Markdown html={this.content} class={{root: 'py-8', p: 'mb-2', h2: 'font-bold mb-2 text-3xl', a: 'text-green-500'}} />
      </div>
    );
  }
}

export default Articles;