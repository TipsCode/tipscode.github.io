import Nullstack from "nullstack";
import Hero from "./Hero";
import Articles from "./Articles";

import Categories from './Categories'

class Home extends Nullstack {
  
  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
    page.locale = "pt-BR";
  }

  renderLink({ children, href }) {
    const link = href + "?ref=create-nullstack-app";
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  render() {
    return (
      <div>
        <Hero />
        <Categories />
        <Articles />
      </div>
    )
  }

}

export default Home;
