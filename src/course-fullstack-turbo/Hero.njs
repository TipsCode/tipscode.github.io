import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import './Hero.scss'

class Hero extends Nullstack {


  render() {
    
    return (
      <>
        <div class="leading-normal tracking-normal text-white bg-gradient-radial">

          <div class="text-center inline-block w-full fixed p-5 bg-black z-50">
            <div class="sm:flex md:flex md:justify-around">
              <div>
                <h2>🔔 ATENÇÃO! A Oferta Encerra em BREVE!</h2>
              </div>
              <div>
                <a href="#section-cta" class="underline">
                 <h2>🔥APROVEITAR SUPER OFERTA!</h2>
                </a>
              </div>

            </div>
          </div>

          <MenuSales />

          <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">

            <div class="sm:flex md:flex md:justify-around">

              <div class="sm:w-full sm:mx-auto">

                <div class="sm:w-full sm:mx-auto">
                      <div class="embed">
                        <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                      </div>
                </div>
              </div>

              <div class="z-10 ml-4">
                <div class="text-end px-3 lg:px-0 pb-10">
                      <h2 class="uppercase leading-normal sm:text-lg md:text-3xl mb-8">
                      Aprenda como sair do ZERO e Se tornar um <span class="bg-red-900"> Programador profissional</span>, de forma 
                      prática e sem enrolação! </h2>
                  
        
                        <p class="md:text-1xl">Faça como milhares de pessoas no mundo que estão conseguindo sua <span class="bg-red-900">independência financeira e geográfica</span>, 
                      ao entrar para ramo que paga os maiores salários e que tem as maiores oportunidades, o da programação!<br /><br />

                      Aprenda com projetos reais que vão além da teoria e te colocam frente a frente com os códigos já nas primeiras aulas!

                          </p>
                  </div>
              </div>
            </div>


          </div>


       

         
          <div class="relative m-0 p-0 w-full">
            <img class="w-full block absolute bottom-0" src="/sales-page-img/hero/Waves.png" alt="waves" loading="lazy" width="1786" height="628" />
          </div>
         
        </div>
      </>
    );
  }

}

export default Hero;