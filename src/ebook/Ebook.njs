import Nullstack from 'nullstack';

import Hero from './Hero';
import Footer from './Footer'

class Ebook extends Nullstack {

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