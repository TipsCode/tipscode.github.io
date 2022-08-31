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

            <div class="flex-col">
              <div class="z-10 ml-4">
                <div class="text-certer px-3 lg:px-0 pb-10">
                  <div class=" text-center">

                      <h2 class="leading-normal sm:text-lg text-2xl md:text-3xl mb-8">
                        De acordo com a Brasscom, de 2021 até 2025 as empresas 
                        vão demandar <span class="bg-red-900">mais de 797 mil talentos</span>.
                        

                      </h2>
                        <h3 class="leading-normal sm:text-lg text-2xl md:text-3xl mb-8">Chegou a 
                        hora de você se tornar esse profissional requisitado pelo mercado 
                        <span class="bg-red-900"> mesmo que você não saiba nada de programação web.</span></h3> 
                
                        <p class="md:text-2xl">Faça como milhares de pessoas no mundo que estão conseguindo sua 
                          <span class="bg-red-900"> independência financeira e geográfica</span>, 
                            ao entrar para ramo que paga os maiores salários e que tem as maiores oportunidades, o da programação!<br /><br />
                            Aprenda com projetos reais que vão além da teoria e te colocam frente a frente com os códigos já nas primeiras aulas!
                        </p>

                        <p class="md:text-2xl font-bold">Assista o vídeo e veja como</p>
                  </div>
                  </div>
              </div>

              <div class="sm:w-full sm:w-full">

                <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                      <div class="embed-full">
                        <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                      </div>
                </div>

              </div>

            </div>

            <div class="mx-auto w-80 text-center mt-3 lg:w-9/12 bg-red-900 text-white font-bold rounded-md md:my-6 py-2 md:py-4 px-2 md:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <a class="md:text-2xl" href="https://pay.hotmart.com/A43229044U?off=u0io32t2&checkoutMode=10">
                  QUERO ME TORNAR UM PROGRAMADOR REQUISITADO
                  </a>
            </div> 


          </div>

            <div class="w-full xl:w-1/4 md:w-1/4 lg:ml-auto m-auto">
              <div class="relative flex flex-col h-full p-8">
                  <h2 class="flex items-end mx-auto text-2xl font-black leading-none text-white mb-2">
                      <span>R$295,00 á vista ou </span>
                  </h2>
                  <h1 class="flex items-end mx-auto text-3xl font-black leading-none text-white ">
                      <span>12x de R$29,44 </span>
                  </h1>
                <figure>
                  <img class="m-auto" src="/formas-de-pagamentos.png" />
                </figure>
              </div>
          </div>
          
        </div>
      </>
    );
  }

}

export default Hero;