import Nullstack from 'nullstack';
import CardMoreDetails from './CardMoreDetails';

class MoreDetails extends Nullstack {

  render() {
    return (
      <div>
        <section class="bg-tips-dark md:py-8 tracking-wide">
          <div class="container mx-auto px-2  text-gray-800">
            <h1 class="w-full mt-2 md:mb-20 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
              E não so isso, veja mais o que você vai aprender.
            </h1>


            <div class="flex flex-col lg:flex-row justify-center pt-12 my-4 md:my-12 relative">

              <CardMoreDetails src="/sales-page-img/card-more-details/Webpack-bubble.webp" alt="Webpack" contentDiv="Webpack" contentP="Webpack é um empacotador de módulo JavaScript de código aberto. Ele é feito principalmente para JavaScript." />

              <CardMoreDetails src="/sales-page-img/card-more-details/Heroku-bubble.webp" alt="Heroku" contentDiv="Heroku" contentP="Com o Heroku você será capaz com apenas 3 cliques colocar uma
aplicação / site no ar, para todos verem o seu projeto." />

              <CardMoreDetails src="/sales-page-img/card-more-details/Security-bubble.webp" alt="Segurança e autenticação" contentDiv="Segurança e autenticação" contentP="Você aprenderá técnicas de segurança e proteção dos dados da 
aplicação para tornar seu site mais seguro." />


              <div class="w-full absolute -bottom-35 self-center pt-20 ">
                <img class="w-full mx-auto" src="/Elipses-Background-mais.svg" alt="plano de fundo Elipses" loading="lazy" width="752" height="393" />
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default MoreDetails;