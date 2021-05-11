import Nullstack from 'nullstack';

import LeadForm from '../layout/LeadForm';

const leadlover = {
  id: '447468',
  mid: '447468',
  pid: '16073864',
  list: '447468',
};


class Header extends Nullstack {

  render() {
    return (
      <section class="bg-tips-dark text-center md:text-left">

        <div class="w-full">
          <img src="/TipsCodelogo.png" class="mx-auto md-w-40" />
        </div>

        <div class="px-4 py-10 sm:py-20 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between">
          <div class="flex-col sm:justify-self-center grid gap-8 lg:w-6/12">
            <h1 class="text-lg md:text-2xl text-isca-red font-semibold -mb-6 tracking-wide">Curso Gratuito</h1>
            <h1 class="text-2xl md:text-4xl leading-relaxed tracking-wide text-white font-bold mb-0">
              Nesse livro digital você vai aprender tudo sobre a linguagem de marcação HTML.
            </h1>
            <ul class="mx-auto sm:mx-0">
              <li class="flex flex-wrap py-4">
                <img src="./check-circle.png" class="h-6 mr-4" />
                <p class="text-md md:text-lg text-white text-opacity-80 font-semibold">Semântica e SEO</p>
              </li>
              <li class="flex flex-wrap py-4">
                <img src="./check-circle.png" class="h-6 mr-4" />
                <p class="text-md md:text-lg text-white text-opacity-80 font-semibold w-32 lg:w-72  ">Os detalhes de cada Elemento</p>
              </li>
              <li class="flex flex-wrap py-4">
                <img src="./check-circle.png" class="h-6 mr-4" />
                <p class="text-md text-left md-text-center md:text-lg text-white text-opacity-80 font-semibold w-32 lg:w-72">Elementos Assíncronos</p>
              </li>
            </ul>

            <form class="mt-4">
              <LeadForm
                  config={leadlover}
                  class={{
                    input: 'p-2 rounded-md focus:outline-none bg-white shadow-md border w-full lg:w-5/6',
                    button: 'py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-red text-white rounded-md shadow-md w-full lg:w-5/6',
                  }}
                />
            </form>
          </div>

          <figure class="lg:w-6/12 flex-row mt-8 sm:flex justify-center p-16">
            <img src="/e-book-dark.png" class="w-full" />
          </figure>
        </div>
      </section>
    );
  }

}

export default Header;