import Nullstack from 'nullstack';
import CallToAction from './CallToAction';
import Content from './Content';
import Hero from './Hero';

class Ebook extends Nullstack {

  render() {
    return (
      <div>
        <Hero />
        <Content />
        <CallToAction />
      </div>
    );
  }

}

export default Ebook;