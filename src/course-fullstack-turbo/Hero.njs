import Nullstack from 'nullstack';
import MenuSales from './MenuSales';
import './Hero.scss'

class Hero extends Nullstack {

  render() {
    return (
      <>
        <div class="leading-normal tracking-normal text-white bg-gradient-radial">

          <MenuSales />

          <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">
            <div class="container px-3 mx-auto items-center">

              <div class="text-center px-3 lg:px-0">
                <h1 class="my-3 text-3xl lg:text-6xl font-bold leading-tight">Full Stack Turbo</h1>
                <p class="leading-normal sm:text-lg md:text-2xl mb-8">
                  Já imaginou desenvolver aplicações para empresas nacionais e internacionais de sua casa
                  e ter sua liberdade financeira? Veja apresentação abaixo, vou te mostrar como isso é possível
                </p>

              </div>

              <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                <div class="embed">
                  <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                </div>
              </div>

              <div class="flex items-center w-full mx-auto justify-center">
                <a href="https://payment.hotmart.com/A43229044U?checkoutMode=10" class="mx-auto z-30 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  QUERO SER FULL STACK
                </a>
              </div>
            </div>
          </div>

          <div class="relative m-0 p-0 w-full">
            <img class="w-full block absolute bottom-0" src="./sales-page-img/hero/Waves.png" alt="waves" loading="lazy" width="1786" height="628" />
          </div>
        </div>
      </>
    );
  }

}

export default Hero;