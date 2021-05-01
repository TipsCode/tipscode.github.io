import Nullstack from 'nullstack';

import Hero from './Hero';
import Footer from './Footer';

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
        <Footer />
      </div>
    );
  }

}

export default Ebook;