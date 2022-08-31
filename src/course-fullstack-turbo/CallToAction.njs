import Nullstack from 'nullstack';

class CallToAction extends Nullstack {

  render() {
    return (
      <div class="bg-tips-dark">

        <section id="section-cta" class="container mx-auto text-center py-6">

          <h1 class="w-full my-2 text-2xl md:text-4xl font-bold leading-tight text-center text-white md:w-5/6 mx-auto">
           Aprenda tudo do ZERO e passo a passo</h1>
          
          <h2 class="w-full my-2 text-1xl md:text-3xl font-bold leading-tight text-center text-white md:w-5/6 mx-auto">
          Você está a distância de um clique para se tornar um profissional reconhecido e disputado no mercado web.
          </h2>

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

          <h3 class="text-xl md:text-2xl leading-tight text-white">
            Basta clicar no botão abaixo! Vai deixar essa oportunidade passar?
          </h3>


          <div class="mx-auto w-80 text-center mt-3 lg:w-9/12 bg-red-900 text-white font-bold rounded-md md:my-6 py-2 md:py-4 px-2 md:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <a class="md:text-2xl" href="https://pay.hotmart.com/A43229044U?off=u0io32t2&checkoutMode=10">
                  QUERO ME TORNAR UM PROGRAMADOR REQUISITADO
                  </a>
            </div> 

        </section>
      </div>
    );
  }

}

export default CallToAction;