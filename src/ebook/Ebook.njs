import Nullstack from 'nullstack';
import Hero from './Hero';
import Footer from '../layout/Footer';
import Thanks from './Thanks';

class Ebook extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - TipsCode`;
    page.description = `${project.name} Ebook com mais de 100 páginas sobre HTML5`;
    page.locale = 'pt-BR';
  }

  render({ params, self }) {
    if (params.obrigado && self.hydrated) return <Thanks />;
    return (
      <div class="bg-tips-dark min-h-screen">
        <Hero />
        <Footer
          class={{
            footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10',
            p: 'text-center sm:text-center w-full',
          }}
          src="./TipsCodelogo.png"
          light
        />
      </div>
    );
  }

}

export default Ebook;