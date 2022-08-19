import Nullstack from 'nullstack';

import CardBonus from './CardBonus';

class Bonus extends Nullstack {

  render() {

    return (
      <div>
        <section class="bg-tips-dark traking-wide">
          <div class="container max-w-5xl mx-auto m-8">
            <h1 class="w-full md:my-24 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
              Mais 7 super bônus
            </h1>

            <div class="flex flex-wrap md:flex-nowrap text-center">

              <CardBonus
                class={
                    {
                      div: 'w-full sm:w-1/2 p-6 mx-3',
                      span: 'bg-tips-gray-dark bg-opacity-90 text-white p-2 px-4 rounded-full font-bold text-xl',
                    }
                }
                contentSpan="1"
                src="/sales-page-img/bonus-img/Coding_Monochromatic.webp"
                contentH3="Engenharia de software"
                alt="Engenharia de software"
                contentP="Engenharia de software é uma área da engenharia e da computação voltada à especificação, 
                desenvolvimento, manutenção e criação de software, com a aplicação de tecnologias e práticas de 
                gerência de projetos e outras disciplinas, visando organização, produtividade e qualidade."
              />

              <CardBonus
                class={
                    {
                      div: 'w-full sm:w-1/2 p-6 mx-3 bg-tips-gray-dark bg-opacity-90 text-white rounded-md',
                      span: 'font-bold text-2xl',
                    }
                }
                contentSpan="2"
                src="/sales-page-img/bonus-img/Coach_Monochromatic.webp"
                alt="Acompanhamento"
                contentH3="Acompanhamento"
                contentP="Esse é sem dúvidas um dos bônus mais desafiador, pois eu me compromento de forma bem ativa
                lhe acompanhar em todo o seu aprendizado, orientando você na sua jornada como programador."
              />

            </div>

            <div class="flex flex-wrap md:flex-nowrap pt-6">

              <CardBonus
                class={
                    {
                      div: 'w-full mb-6 md:mb-0 sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                      span: 'font-bold text-2xl',
                    }
                }
                contentSpan="3"
                src="/sales-page-img/bonus-img/data-arranging.webp"
                alt="Estrutura de dados"
                contentH3="Estrutura de dados"
                contentP="Nesse bônus vamos muito além na linguagem JavaScript, aqui estaremos nos tornando realmente
                especialista em JaVaScript, onde iremos estudar estrutura de dados, que é uma ciência da computação, é 
                uma coleção tanto de valores quanto de operações. É uma implementação concreta de um tipo abstrato 
                de dado ou um tipo de dado básico ou primitivo."
              />

              <CardBonus
                class={
                    {
                      div: 'w-full sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                      span: 'font-bold text-2xl',
                    }
                }
                contentSpan="4"
                src="/sales-page-img/bonus-img/Money_motivation_Monochromatic.webp"
                alt="Vendas"
                contentH3="Vendas"
                contentP="Você vai aprender como vender o seu projeto. Além de criar sistemas você precisa oferecer bem o seu produto. para isso, vou te ensinar como conquistar seu primeiro cliente como programador profissional e se destacar da multidão construindo uma marca pessoal de sucesso."
              />

            </div>

            <div class="flex flex-wrap md:flex-nowrap pt-6">

              <CardBonus
                class={
                    {
                      div: 'w-full mb-6 md:mb-0 sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                      span: 'font-bold text-2xl',
                    }
                }
                contentSpan="5"
                src="/sales-page-img/bonus-img/linux.webp"
                alt="Dominando Linux"
                contentH3="Dominando Linux"
                contentP="Você sabia que mais de 80% dos servidores que hoje estão na web rodam em maquinas Linux?
                Por esse motivo resolvi lhe presentear com esse super bônus, onde vamos aprender um pouco mais sobre
                esse sistema operacinal."
              />

              <CardBonus
                class={
                    {
                      div: 'w-full sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                      span: 'font-bold text-2xl',
                    }
                }
                contentSpan="6"
                src="/sales-page-img/bonus-img/web-dev.webp"
                alt="HTML5 e CSS3 Avançado"
                contentH3="HTML5 e CSS3 Avançado"
                contentP="Eu poderia separar este módulo em um novo curso e vender facilmente por mais de R$ 356,00 reais, 
                mas eu decidi entregar tudo aqui. Você vai aprender construir layouts bonitos, responsivos e que chamam a 
                atenção com HTML5 e CSS3."
              />

            </div>

            <div class="flex flex-wrap md:flex-nowrap pt-6">

              <CardBonus
                class={
                    {
                      div: 'w-full mb-6 md:mb-0 sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                      span: 'font-bold text-2xl',
                    }
                }
                contentSpan="7"
                src="/sales-page-img/bonus-img/conversation.webp"
                alt="Entrevistas com Devs"
                contentH3="Entrevistas com Devs"
                contentP="Esse é sem dúvidas um bônus incrível, onde vou está entrevistando programadores de diversas áreas, 
                para que você veja grandes histórias e possa aprender muito com elas, e não vamos se limitar a pessoas 
                apenas da nossa área, faremos entrevistas também com pessoas de outras áreas pra gente ter uma visão horizontal da tecnologia."
              />

              <div class="w-full sm:w-1/2 py-8 px-4 text-center justify-center md:text-left md:justify-start">

                <div class="lg:p-14">

                  <h3 class="text-3xl lg:text-5xl text-gray-100 font-bold leading-none mb-6">
                    Não perca  mais tempo
                  </h3>
                  <p class="text-gray-200 mb-6 text-xl tracking-wide">
                  Seja desejado pelas grandes empresas, chegou o momento de subir para o próximo nível.

                  </p>
                  <a
                    href="#section-cta"
                    class="mx-auto z-50 self-center lg:mx-0 bg-tips-blue text-white font-bold rounded-md my-2 py-3 px-10 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Inscreva-se já
                  </a>
                </div>
              </div>

            </div>


          </div>
        </section>
      </div>
    );
  }

}

export default Bonus;