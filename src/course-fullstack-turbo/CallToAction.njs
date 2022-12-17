import Nullstack from 'nullstack';
import CtaButton from './CtaButton';

class CallToAction extends Nullstack {

  render() {
    return (
      <section >

        <div class="container mx-auto text-center md:py-6">
          <h3 class="leading-normal w-8/12 sm:text-lg text-white text-1xl md:text-2xl m-auto text-center">
            Se você deseja realmente aprender programação do jeito certo, sem a velha mania de muitos em copiar e 
            colar códigos dos outros sem saber o que está fazendo e entrar no mercado que mais cresce no mundo 
            com salarios acima de R$3.000, clique no botão abaixo e se inscreva no curso Full Stack Turbo agora mesmo
              </h3>
    
        </div>
         <CtaButton />
      </section>
    );
  }

}

export default CallToAction;