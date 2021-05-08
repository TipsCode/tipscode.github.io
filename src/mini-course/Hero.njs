
export default function Hero() {
  return (
    <section class="bg-white text-center md:text-left">
      <div class="w-full">
        <img src="/tipscode-logo-1.svg" class="mx-auto md-w-40" />
      </div>

      <div class="px-4 py-10 sm:py-20 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between">
        <div class="flex-col sm:justify-self-center grid gap-8 lg:w-5/12">
          <h1 class="text-lg md:text-2xl text-isca-green font-semibold -mb-6 tracking-wide">Curso Gratuito</h1>
          <h1 class="text-2xl md:text-4xl leading-relaxed tracking-wide text-tips-dark font-bold mb-0">
            Aprenda JavaScript <br /> criando um jogo do <br />zero
          </h1>
          <div>
            <p class="leading-relaxed text-tips-dark text-opacity-60 text-lg">
              Neste super Treinamento vou te ensinar JavaScript desenvolvendo um Jogo, tudo passo a passo, linha a linha.
            </p>
          </div>

          <form class="mt-4">
            <input type="text" placeholder="Dgite seu melhor e-mail" class="p-2 rounded-md focus:outline-none bg-white shadow-md border w-full lg:w-5/6" />
            <button type="submit" class="py-2 px-6 mt-2 font-semibold focus:outline-none bg-isca-green text-white rounded-md shadow-md border w-full lg:w-5/6">Inscrever-se</button>
          </form>
        </div>

        <figure class="lg:w-6/12 flex-row mt-8 sm:flex justify-center">
          <img src="/laptop-flappu-2.gif" class="w-full" />
        </figure>
      </div>
    </section>
  );
}