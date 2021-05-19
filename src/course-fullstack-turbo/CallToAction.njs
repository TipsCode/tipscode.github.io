import Nullstack from 'nullstack';

class CallToAction extends Nullstack {

  render() {
    return (
      <div class="bg-tips-dark">

        <section class="container mx-auto text-center py-6">

          <h1 class="w-full my-2 text-2xl md:text-4xl md:my-24 font-bold leading-tight text-center text-white md:w-5/6 mx-auto">
            Você está a poucos passos de se tornar um profissional disputado no mercado
          </h1>

          <div class="mx-auto py-12 flex flex-wrap justify-center">
            <div class="pr-8">
              <p class="text-indigo-100 text-left">Apenas</p>
              <h2 class="my-4 md:text-3xl lg:text-5xl leading-tight text-tips-green font-bold">
                12x  R$41,41
              </h2>
              <p class="text-indigo-100 text-right">Ou 490,90 à vista</p>
            </div>
            <div>
              <img src="./garantia-7-dias.webp" alt="garantia de 7 dias" loading="lazy" width="180" height="122" />
            </div>
          </div>

          <h3 class="my-12 text-xl md:text-2xl leading-tight text-white">
            Basta clicar no botão abaixo! Vai deixar essa oportunidade passar?
          </h3>

          <a
            href="https://payment.hotmart.com/A43229044U?checkoutMode=10"
            class="mx-auto lg:mx-0 bg-tips-green text-white font-bold rounded-md md:my-6 py-2 md:py-4 px-2 md:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Quero ser um programador
          </a>

        </section>
      </div>
    );
  }

}

export default CallToAction;