import Nullstack from 'nullstack';

class StepByStep extends Nullstack {

  render() {
    return (
      <>
        <section class="container md:w-2/4 md:m-auto md:mt-10 mb-10 md:mb-10">
            <div class="w-11/12 mx-auto">
                <figure>
                    <img src="/sales-page-img/metodo-step-by-step.png" alt="Imagem do método step by step" />
                    <figcaption>
                        <p class="text-1xl md:text-2xl text-center text-white">
                            O método step by step é composto por <span class="span-text">7 fases chamadas de STEP</span> e em cada
                            step você terá 25 dias de estudos dedicando de 30 a 60min por dia 
                            usando a <span class="span-text">técnica de pomodoro para melhorar</span> sua eficiencia no estudo.
                            Todos os demais detalhes de como usar o método estão em uma aula bem detalhada.
                        </p>
                    </figcaption>
                </figure>
            </div>

            <div class="mx-auto mt-10 text-center">
              <a href="#cta-pay-now"
                      class="text-center cta-hero md:text-2xl font-bold w-full px-4 py-2 mx-auto mt-3 text-green-100 transition duration-500 ease-in-out transform bg-green-600 border-green-600 rounded-md items-centerw-full text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-600">
                      ENTRAR NO CURSO FULL STACK TURBO
              </a>
            </div>
        </section>
      </>
    );
  }

}

export default StepByStep;