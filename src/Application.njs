//import './Application.scss';
import Nullstack from "nullstack";
import Menu from "./layout/Menu";
import Footer from "./layout/Footer";
import Home from "./home/Home";
import Articles from "./articles/Articles";

class Application extends Nullstack {
  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({ project }) {
    project.name = "Tipscode Blog";
    project.domain = "localhost";
    project.color = "#D22365";
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link
          href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap"
          rel="stylesheet"
        />
      </head>
    );
  }

  render() {
    return (
      <main>
        <Head />
        <Menu />
        <Home route="/" />
        <Articles route="/:slug" />
        <Footer />
      </main>
    );
  }
}

export default Application;
