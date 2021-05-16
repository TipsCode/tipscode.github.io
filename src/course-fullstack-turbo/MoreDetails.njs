import Nullstack from 'nullstack';
import CardMoreDetails from './CardMoreDetails';

class MoreDetails extends Nullstack {

  render() {
    return (
      <div>
        <section class="bg-tips-dark md:py-8 tracking-wide">
          <div class="container mx-auto px-2 md:pt-4 pb-12 text-gray-800">
            <h1 class="w-full mt-2 md:mb-20 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
              E não so isso, veja mais o que você vai aprender.
            </h1>


            <div class="flex flex-col lg:flex-row justify-center pt-12 my-4 md:my-12 relative">

              <CardMoreDetails src="./sales-page-img/card-more-details/Webpack-bubble.webp" alt="Webpack" contentDiv="Webpack" contentP="Webpack é um empacotador de módulo JavaScript de código aberto. Ele é feito principalmente para JavaScript." />

              <CardMoreDetails src="./sales-page-img/card-more-details/Heroku-bubble.webp" alt="Heroku" contentDiv="Heroku" contentP="Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens de programação." />

              <CardMoreDetails src="./sales-page-img/card-more-details/Security-bubble.webp" alt="Segurança e autenticação" contentDiv="Segurança e autenticação" contentP="A autenticação e segurança está diretamente relacionada com proteção de um conjunto de informações." />


              <div class="w-full absolute -bottom-35 self-center pt-20 ">
                <img class="w-full mx-auto" src="./Elipses-Background-mais.svg" alt="plano de fundo Elipses" loading="lazy" width="752" height="393" />
              </div>

            </div>

            <div class="w-full justify-center items-center">
              <h4 class="w-full mt-12 md:mt-32 mb-12 text-xl lg:text-3xl font-bold leading-tight text-center text-white">Entre para o seleto hall de alunos do TipsCode e conquiste as melhores oportunidades do mercado</h4>
              <div class="flex w-full justify-center items-center my-0">
                <a href="https://payment.hotmart.com/A43229044U?checkoutMode=10" class="mx-auto z-50 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md md:my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  Quero ser fullstack
                </a>
              </div>
            </div>

          </div>
        </section>
      </div>
    );
  }

}

export default MoreDetails;