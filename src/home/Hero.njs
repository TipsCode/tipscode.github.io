import Nullstack from "nullstack";

class Header extends Nullstack {
  render() {
    return (
      <section class="flex-row px-4 sm:py-36 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between">
        <div class="flex-col sm:justify-self-center sm:justify-self-end">
          <h1 class="text-5xl text-tips-dark text-opacity-80 font-bold text-center sm:text-left mb-4">
            Bem vindo à TipsCode 
          </h1>
          <h2 class="text-center sm:text-left text-tips-dark text-opacity-60 text-2xl font-semibold md:pr-52">
            Essa é a sua nova escola de programação online
          </h2>
  
          <div class="mt-5 text-center sm:text-left">
            
            <div class="block sm:inline-block pr-4">
              <button
                class="mx-auto lg:mx-0 bg-tips-blue text-white font-bold rounded mt-4 lg:mt-0 py-2 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Já sou aluno
              </button>
            </div>
            <div class="block sm:inline-block mt-2 sm:ml-2">
              <button
                class="mx-auto lg:mx-0 bg-white text-tips-blue font-bold border border-tips-blue rounded mt-4 lg:mt-0 py-2 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Quero ser FullSatack
              </button>
            </div>
          </div>
        </div>

        <figure class="flex-row mt-8 sm:flex justify-center sm:justify-end">
          <img src="/img-hero-blue.png" />
        </figure>
      </section>
    );
  }
}

export default Header;
