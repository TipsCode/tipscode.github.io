import Nullstack from 'nullstack';
import Menu from '../layout/Menu';
import Hero from './Hero';
import Articles from './Articles';
import Inspiration from './Inspiration';
import Categories from './Categories';
import Proverbs from './Proverbs';
import Footer from '../layout/Footer';
import Promotion from '../layout/Promotion';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - TipsCode`;
    page.description = `${project.name} Descomplicando a Tecnologia`;
    page.locale = 'pt-BR';
  }

  renderLink({ children, href }) {
    const link = `${href}?ref=create-nullstack-app`;
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    );
  }

  render() {
    return (
      <div>
        <Menu />
        <Hero />
        <Proverbs />
        <Inspiration />
        <Articles />
        <Categories />
        <Promotion />
        <Footer
          class={{
            footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around',
            p: 'text-center sm:text-center w-full text-tips-dark text-opacity-80',
          }}
          src="./tipscode-logo-1.svg"
        />

      </div>
    );
  }

}

export default Home;