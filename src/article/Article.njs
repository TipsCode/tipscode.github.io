import Nullstack from 'nullstack';
import Menu from '../layout/Menu';
import Promotion from '../layout/Promotion';

import Footer from '../layout/Footer';

class Articles extends Nullstack {

   prepare({ project, page }) {
    page.title = `${project.name} - TipsCode`;
    page.description = `${project.name} Descomplicando a Tecnologia`;
    page.locale = 'pt-BR';
  }


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
      Object.assign(this, article);
    }
  }

  render() {
    return (
      <>
      <Menu />
        <div class="max-w-screen-xl mx-auto px-4 py-16">
          <article>
            <h1 class="font-bold text-4xl"> {this.title} </h1>
          </article>
          <div html={this.content} class="prose max-w-none" />
        </div>
        <Promotion />
        <Footer />
      </>
    );
  }

}

export default Articles;