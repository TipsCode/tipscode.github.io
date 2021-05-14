import Nullstack from 'nullstack';
import Hero from './Hero';
import Footer from '../layout/Footer';

class Ebook extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - TipsCode`;
    page.description = `${project.name} Descomplicando a Tecnologia`;
    page.locale = 'pt-BR';
  }


  render() {
    return (
      <div class="bg-tips-dark">
        <Hero />
        <Footer
          class={
           {
             footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10',
             p: 'sm:text-center w-full',
           }
         }
          src="./TipsCodelogo.png"
          light
        />
      </div>
    );
  }

}

export default Ebook;