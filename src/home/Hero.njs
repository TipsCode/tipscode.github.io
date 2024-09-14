import Nullstack from 'nullstack';

class Header extends Nullstack {

  render() {
    return (
      <section class="flex-row px-4 sm:py-36 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between mt-6 sm:mt-2">
        <div class="flex-col sm:justify-self-center grid gap-8">
          <h1 class="text-4xl md:text-5xl text-tips-dark text-opacity-80 traking-wide font-bold mb-0">
            Bem vindo à TipsCode
          </h1>
          <div>

            <p class="sm:text-left text-tips-dark text-opacity-60 text-lg sm:text-2xl tracking-wide leading-relaxed">
              Essa é a sua nova escola de programação online<br />
              Garanta seu lugar em um mercado altamente competivo.
            </p>
          </div>
          <div class="block sm:inline-block">
            <a
              href="https://bit.ly/4d5uzwX"
              class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-blue text-white font-bold rounded mt-4 lg:mt-0 py-2 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
            >
              Quero ser FullStack
            </a>
          </div>
        </div>

        <figure class="flex-row mt-8 sm:flex justify-center sm:justify-end">
          <img src="/img-hero-blue.png" alt="Vem vindo à TipsCode" width="328" height="346" loading="lazy" />
        </figure>
      </section>
    );
  }

}

export default Header;