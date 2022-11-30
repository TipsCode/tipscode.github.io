import Nullstack from 'nullstack';

class StepByStep extends Nullstack {

  render() {
    return (
      <>
        <section class="container md:w-2/4 md:m-auto md:mt-10 mb-10 md:mb-10">
            <div class="w-11/12 mx-auto">
                <h2 class="text-2xl text-center mb-5 md:text-4xl font-bold text-white">Método Step By Step</h2>
                <figure>
                    <img src="/sales-page-img/method-step-by-step.png" alt="Imagem do método step by step" />
                    <figcaption>
                        <p class="text-1xl md:text-2xl text-center text-white">
                            O método step by step é composto por <span class="span-text">5 fases chamadas de STEP</span> e em cada
                            step você terá 45 dias de estudos dedicando de 30 a 60min por dia 
                            usando a <span class="span-text">técnica de pomodoro para melhorar</span> sua eficiencia no estudo.
                            Todos os demais detalhes de como usar o método estão em uma aula bem detalhada no curso.
                        </p>
                    </figcaption>
                </figure>
            </div>

            <div class="mx-auto mt-10 text-center">

                <a class="md:px-60 md:text-2xl mx-auto w-80 text-center mt-3 lg:w-9/12 cta-hero  text-white font-bold rounded-md md:my-6 py-2 md:py-4 
                    px-2 md:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out" 
                    href="https://pay.hotmart.com/A43229044U?off=ti4be3ou&checkoutMode=10">
                    ENTRAR NO CURSO FULL STACK TURBO
                </a>
            </div>
        </section>
      </>
    );
  }

}

export default StepByStep;