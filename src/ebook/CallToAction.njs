import Nullstack from 'nullstack';

class Promotion extends Nullstack {

  render() {
    return (
      <section class="leading-normal tracking-normal bg-gradient-radial">
        <div class="px-4 sm:py-36 sm:max-w-screen-xl sm:mx-auto sm:items-center flex sm:justify-between">
          <div class="flex flex-wrap text-center shadow rounded-lg w-full bg-white p-8">
            <h2 class="pt-10 sm:mb-7 text-3xl w-full">
              Venha fazer parte do melhor curso de programação <br /> Full Stack do Brasil
            </h2>
            <div class="mt-10 sm:mt-none w-full flex justify-center">
              <a href="/curso-fullstack-turbo" class="bg-green-500 px-14 py-3 sm:px-14 sm:py-3 text-white shadow-sm rounded-sm inline-block">Adquirir Agora</a>

            </div>
          </div>
        </div>
      </section>
    );
  }

}

export default Promotion;