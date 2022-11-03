import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import CtaButton from './CtaButton';
import './Hero.scss'

class Hero extends Nullstack {


  render() {
    
    return (
      <>
        <section class="leading-normal tracking-normal text-white">
          
          <div class="sm:flex-col leading-normal text-center text-2xl bg-red-700">
            Black November chegou - 20% OFF + Bônus Clique no <a href="#cta-black">Botão abaixo e garanta sua vaga no valor promocional</a>
          </div>
          <MenuSales />

          <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">

            <div class="flex-col">
              <div class="z-10 ml-4">
                <div class="text-certer px-3 lg:px-0">
                  <div class=" text-center">

                      <h2 class="leading-normal sm:text-lg text-2xl md:text-3xl mb-8">
                     
                      <span class="span-text">Descubra como aprender programação do zero</span> de forma consistente usando uma metodologia 
                        de ensino voltada para o mercado de trabalho.
                      </h2>
                        <h3 class="leading-normal sm:text-lg text-1xl md:text-2xl mb-8">
                        Assista o vídeo para descobrir os <span class="span-text">3 pilares da metodologia step by steb que vão</span> mudar a 
                        forma como você aprende a programar. Estudos comprovam que até 2025 o Brasil estará precisando 
                        de mais de 789 mil profissionais da tecnologia e não faz sentido você perder essa oportunidade.
                        </h3> 
                
                  </div>
                  </div>
              </div>

              <div id="cta-black" class="sm:w-full sm:w-full">

                <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                      <div class="embed-full">
                        <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                      </div>
                </div>

              </div>

            </div>

            
          <h3 class="leading-normal w-10/12 md:w-9/12 sm:text-lg text-white text-1xl md:text-2xl m-auto text-center">
              Se você quer realmente aprender a programar do jeito certo<span class="span-text"> sem precisar está copiando e colando 
              códigos dos outros</span>  e entrar no mercado que cresce a cada dia e que valoriza os seus profissionais 
              clique no link abaixo e entre no curso full stack turbo agora.
              </h3>
          </div>
          
          <CtaButton />
          
        </section>
      </>
    );
  }

}

export default Hero;