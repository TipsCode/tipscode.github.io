import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import CtaButton from './CtaButton';
import './Hero.scss'

class Hero extends Nullstack {


  render() {
    
    return (
      <>
        <section class="leading-normal tracking-normal text-white">
        
          <MenuSales />

          <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">

            <div class="flex-col">
              <div class="z-10 ml-4">
                <div class="text-certer px-3 lg:px-0">
                  <div class=" text-center">

                      <h2 class="leading-normal sm:text-lg text-2xl md:text-3xl mb-8">
                     
                      <span class="span-text">Saiba como pessoas comuns estão </span> aprendendo programação do zero e 
                        de forma consistente, usando uma metodologia de ensino totalmente validada e voltada para o mercado
                        de trabalho.
                      </h2>
                        <h3 class="leading-normal sm:text-lg text-1xl md:text-2xl mb-8">
                        Assista o vídeo para descobrir os <span class="span-text">3 pilares da metodologia step by steb que vão</span> mudar a 
                        forma como você aprende a programar.
                        </h3> 
                
                  </div>
                  </div>
              </div>

              <div id="cta-black" class="sm:w-full sm:w-full">

                <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                      <div class="embed-full">
                        <iframe src="https://www.youtube.com/embed/GZkIty_se6s" />
                      </div>
                </div>

              </div>

            </div>

          </div>
          
          <CtaButton />

          <figure>
                      <img class="m-auto" src="/formas-de-pagamentos.png" />
          </figure>
          
        </section>
      </>
    );
  }

}

export default Hero;