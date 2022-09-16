import Nullstack from 'nullstack';
import CtaButton from './CtaButton';

class CallToAction extends Nullstack {

  render() {
    return (
      <div class="bg-tips-dark">

        <section class="container mx-auto text-center py-6">
        <h3 class="leading-normal w-8/12 sm:text-lg text-white text-1xl md:text-2xl m-auto text-center">
            Se você quer realmente aprender a programar do jeito certo sem precisar está copiando e colando 
            códigos dos outros e entrar no mercado que cresce a cada dia e que valoriza os seus profissionais 
            clique no link abaixo e entre no curso full stack turbo agora.
            </h3>
        
         <CtaButton />

        </section>
      </div>
    );
  }

}

export default CallToAction;