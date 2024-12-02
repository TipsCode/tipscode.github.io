import Nullstack from 'nullstack';
import Checkout from './Checkout'

class CheckoutPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Pré-cadastro curso Python Turbo`;
    page.description = `${project.name} Falta pouco...`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png';
  }

  render() {
    return (
        // bg-[#1e1e1e]
      <section >
        <Checkout />
      </section>
    );
  }

}

export default CheckoutPage;