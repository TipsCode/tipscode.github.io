import Nullstack from "nullstack";
import { readFileSync, existsSync } from "fs";
import { Remarkable } from "remarkable";

class Articles extends Nullstack {
  static async getArticleContent({ slug }) {
    const path = `articles/${slug}.md`;
    if (existsSync(path)) {
      const markdown = readFileSync(path, "utf-8");
      const md = new Remarkable();
      return md.render(markdown);
    } else {
      return "";
    }
  }

  async initiate({ page, params }) {
    this.content = await this.getArticleContent({ slug: params.slug });
    if (!this.content) {
      page.status = 404;
    }
  }

  render({ params }) {
    return (
      <div>
        Articles: {params.slug}
        <article html={this.content} />
      </div>
    );
  }
}

export default Articles;
