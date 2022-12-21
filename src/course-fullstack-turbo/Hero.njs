import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import CtaButton from './CtaButton';
import './Hero.scss'

class Hero extends Nullstack {


  render() {
    
    return (
      <>
        <section class="leading-normal tracking-normal text-white">
        
          <div class="md:flex md:justify-around text-center fixed z-50 w-full bg-text text-black span-text p-5">
            <div class="p-3 md:text-1xl">
              COMECE UMA MUDANÇA PROFISSIONAL NA SUA VIDA  🚀
            </div>
            <div class="flex cta-hero justify-center text-center cursor-pointer p-3 md:text-1xl font-bold text-green-100 transition duration-500 ease-in-out transform bg-green-600 border-green-600 rounded-md items-center text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-600">
              <a href="https://pay.hotmart.com/A43229044U?off=y5gucwc5&checkoutMode=10">

              QUERO ESTÁ OFERTA AGORA 
              </a>
              
              <span class="text-center">
                <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true" focusable="false" height="24px" width="24px" xmlns="http://www.w3.org/2000/svg"><desc></desc><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><circle cx="6" cy="19" r="2"></circle><circle cx="17" cy="19" r="2"></circle><path d="M17 17h-11v-14h-2"></path><path d="M20 6l-1 7h-13"></path><path d="M10 10l6 -6"></path><circle cx="10.5" cy="4.5" r=".5"></circle><circle cx="15.5" cy="9.5" r=".5"></circle></svg>
              </span>
            </div>
          </div>

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

          </div>
          
          <CtaButton />
          
        </section>
      </>
    );
  }

}

export default Hero;