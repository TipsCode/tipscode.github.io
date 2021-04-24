import Nullstack from 'nullstack';

class Promotion extends Nullstack {

  render() {
    return (
       <section class="leading-normal tracking-normal bg-gray-900">
        <div class="flex-row px-4 sm:py-36 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between">
          
          <figure class="flex-row mt-8 sm:flex justify-center sm:justify-end">
            <img src="/ebook-html.webp" />
          </figure>
          
          <div class="flex-col sm:justify-self-center grid gap-8 w-6/12">
            <h1 class="text-5xl text-white text-opacity-80 font-bold text-center sm:text-left mb-0">
              Você chegou até aqui e ainda não baixou seu LIVROS DIGITAL GRÁTIS
            </h1>
            <div>
              <p class="text-center sm:text-left text-white text-opacity-60 text-2xl">
                Baixe de graça seu LIVRO DIGITAL "Guia Completo Descubra o Poder do HTML" e comece agora mesmos seus estudos e passe para o próximo nível.
              </p>
              <p class="text-center sm:text-left text-white text-opacity-60 text-2xl">
                Você vai se surpreender com quão esse Livro vai te ensinar.
              </p>
            </div>
            <div class="block sm:inline-block">
              <a
                href="/curso-fullstack-turbo"
                class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-green text-white font-bold rounded mt-4 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Download Grátis
              </a>
            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Promotion;