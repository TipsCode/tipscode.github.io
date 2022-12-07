import Nullstack from 'nullstack';
import CtaButton from '../course-fullstack-turbo/CtaButton';

import './DeliveryMiniCourse.scss';


class PageVideoDepo extends Nullstack {

  renderAulas({srcVideo}) {
    return (
      <div class="sm:w-full sm:w-full">
        <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
              <div class="embed-minicurso">
                <iframe src={srcVideo} />
              </div>
        </div>
      </div>
    );
  }

  render() {
    return (
      
      <section class="bg-zing w-full h-full inline-block text-white text-center">
        <h3 class="leading-normal sm:text-lg text-2xl md:text-3xl mt-5">
            Entrevista com aluno 
        </h3>

       
        <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">
          <div class="md:flex md:justify-around">
            <Aulas srcVideo="https://www.youtube.com/embed/9Eo0jRI5unk" />
          </div>
          

            <h3 class="mt-10 leading-normal w-10/12 md:w-9/12 sm:text-lg text-white text-1xl md:text-2xl m-auto text-center">
              Se você quer realmente aprender a programar do jeito certo<span class="span-text"> sem precisar está copiando e colando 
              códigos dos outros</span>  e entrar no mercado que cresce a cada dia e que valoriza os seus profissionais 
              clique no link abaixo e entre no curso full stack turbo agora.
            </h3>
        </div>

        <CtaButton />
        
      </section>
    );
  }

}

export default PageVideoDepo;