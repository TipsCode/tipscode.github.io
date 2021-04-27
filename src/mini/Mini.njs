import Nullstack from 'nullstack';
import Content from './Content';
import Hero from './Hero';
import Calltoaction from './Calltoaction';

class Mini extends Nullstack {

  render() {
    return (
      <div>
        <Hero />
        <Content />
        <Calltoaction />
      </div>  
    );
  }

}

export default Mini;