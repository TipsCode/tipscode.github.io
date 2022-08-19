import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import './Hero.scss'

class Hero extends Nullstack {


  render() {
    
    return (
      <>
        <div class="leading-normal tracking-normal text-white">

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

              <div class="sm:w-full sm:w-full">

                <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                      <div class="embed-full">
                        <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                      </div>
                </div>

              </div>

              <div class="z-10 ml-4">
                <div class="text-certer px-3 lg:px-0 pb-10">
                  <div>

                      <h2 class="uppercase leading-normal sm:text-lg md:text-3xl mb-8">

                        De acordo com a Brasscom, de 2021 até 2025 as empresas 
                        vão demandar <span class="bg-red-900">mais de 797 mil talentos</span>. Chegou a 
                        hora de você se tornar esse profissional requisitado pelo mercado <span class="bg-red-900">mesmo que você não saiba nada de programação web.</span>

                      </h2>
                  

                        <p class="md:text-1xl">Faça como milhares de pessoas no mundo que estão conseguindo sua 
                          <span class="bg-red-900">independência financeira e geográfica</span>, 
                            ao entrar para ramo que paga os maiores salários e que tem as maiores oportunidades, o da programação!<br /><br />
                            Aprenda com projetos reais que vão além da teoria e te colocam frente a frente com os códigos já nas primeiras aulas!

                        </p>
                  </div>
                  </div>
              </div>
            </div>


          </div>
        </div>
      </>
    );
  }

}

export default Hero;