import Nullstack from 'nullstack';

class Promotion extends Nullstack {
  
  render() {
    return (
      <sectino class="sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:pt-32 sm:py-10 sm:flex sm:items-center ">
          <div class="container mx-auto mt-10 text-center shadow rounded-lg w-full h-64 bg-gradient-to-r from-green-400 to-blue-500 focus:from-pink-500 focus:to-yellow-500">
              <h2 class="pt-10 sm:mb-7 text-white text-3xl">
                Venha fazer parte do melhor curso de programação <br /> Full Stack do Brasil
              </h2>
              <div class="mt-10 sm:mt-none">
                <a href="#" class="bg-green-500 px-14 py-3 sm:px-14 sm:py-3 text-white shadow-sm rounded-sm">Adquirir Agora</a>

              </div>
          </div>
      </sectino>
    )
  }

}

export default Promotion;