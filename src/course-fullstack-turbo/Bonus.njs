import Nullstack from 'nullstack';

import CardBonus from './CardBonus';

class Bonus extends Nullstack {

  render() {
    return (
      <div>
        <section class="bg-tips-dark md:py-8 traking-wide">
          <div class="container max-w-5xl mx-auto m-8">
            <h1 class="w-full md:my-24 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
              Mais 7 super bônus
            </h1>

            <div class="flex flex-wrap md:flex-nowrap text-center">

                <CardBonus class={
                    {
                        div: 'w-full sm:w-1/2 p-6 mx-3',
                        span: 'bg-tips-gray-dark bg-opacity-90 text-white p-2 px-4 rounded-full font-bold text-xl'
                    }
                } contentSpan="1" src="./Coding_Monochromatic-1.svg" contentH3="Engenharia de software" 
                 alt="Engenharia de software" contentP="Não basta só programar, é preciso saber o que está fazendo." />

                 <CardBonus class={
                    {
                        div: 'w-full sm:w-1/2 p-6 mx-3 bg-tips-gray-dark bg-opacity-90 text-white rounded-md',
                        span: 'font-bold text-2xl'
                    }
                } contentSpan="2" src="./Coach_Monochromatic-1.svg" alt="Engenharia de software" 
                contentH3="Acompanhamento" contentP="Na TipsCode o suporte é personalizado." />

            </div>

            <div class="flex flex-wrap md:flex-nowrap pt-6">

                 <CardBonus class={
                    {
                        div: 'w-full mb-6 md:mb-0 sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                        span: 'font-bold text-2xl'
                    }
                } contentSpan="3" src="./Data_Arranging_Monochromatic-1.svg" alt="Estrutura de dados" 
                contentH3="Estrutura de dados" contentP=" Aprenda estrutura de dados JacScript." />

                <CardBonus class={
                    {
                        div: 'w-full sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                        span: 'font-bold text-2xl'
                    }
                } contentSpan="4" src="./Money-motivation_Monochromatic.svg" alt="Estrutura de dados" 
                contentH3="Vendas" contentP="Aprenda o passo a passo para conquistar seu primeiro cliente como programador profissional. Entenda como se destacar da multidão construindo uma marca pessoal de sucesso. " />

            </div>

            <div class="flex flex-wrap md:flex-nowrap pt-6">

                <CardBonus class={
                    {
                        div: 'w-full mb-6 md:mb-0 sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                        span: 'font-bold text-2xl'
                    }
                } contentSpan="5" src="./coding-linux.svg" alt="Dominando Linux" 
                contentH3="Dominando Linux" contentP=" Domine o terminal Linux com esse super bônus." />

                <CardBonus class={
                    {
                        div: 'w-full sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                        span: 'font-bold text-2xl'
                    }
                } contentSpan="6" src="./webdesign-advanced.svg" alt="HTML5 e CSS3 Avançado" 
                contentH3="Dominando Linux" contentP="Um curso de web design avançado para se diferenciar no mercado" />
            
            </div>

            <div class="flex flex-wrap md:flex-nowrap pt-6">

                <CardBonus class={
                    {
                        div: 'w-full mb-6 md:mb-0 sm:w-1/2 p-6 bg-tips-gray-dark bg-opacity-90 text-white rounded-md mx-3',
                        span: 'font-bold text-2xl'
                    }
                } contentSpan="7" src="./dev-entrevistas.svg" alt="Entrevistas com Devs" 
                contentH3="Entrevistas com Devs" contentP="Entrevistas com Desenvolvedores experientes" />

              <div class="w-full sm:w-1/2 py-8 px-4 text-center justify-center md:text-left md:justify-start">

                <div class="lg:p-14">

                  <h3 class="text-3xl lg:text-5xl text-gray-100 font-bold leading-none mb-6">
                    Não perca  mais tempo
                  </h3>
                  <p class="text-gray-200 mb-6 text-xl tracking-wide">
                    Eleve seus estudos para outro nível.
                  </p>
                  <a href="https://payment.hotmart.com/A43229044U?checkoutMode=10"
                    class="mx-auto z-50 self-center lg:mx-0 bg-tips-blue text-white font-bold rounded-md my-2 py-3 px-10 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
                  >
                    Inscrever-se já
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