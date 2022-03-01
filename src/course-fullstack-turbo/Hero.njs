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
                <h1 class="my-3 text-3xl lg:text-6xl font-bold leading-tight">Curso Full Stack Turbo</h1>
                <p class="leading-normal sm:text-lg md:text-2xl mb-8">Aprenda a programar do ZERO e trabalhe de casa, ganhando de 3 mil a 25 mil reais,
                  usando as 20 tecnologias mais requisitadas no mercado em 2022</p>
              </div>

              <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
                <div class="embed">
                  <iframe src="https://www.youtube.com/embed/hMr10rksntQ" />
                </div>
              </div>

              <div class="flex items-center w-full mx-auto justify-center">
                <a href="https://pay.hotmart.com/A43229044U?off=ldr88c8g&checkoutMode=10" class="mx-auto z-30 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-2 px-4 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Quero me tornar um programador(a) completo
                </a>
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