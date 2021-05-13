import Nullstack from 'nullstack';


class Projects extends Nullstack {

  render() {
    return (
      <>
        <div class="container mx-auto">
          <h2 class="font-bold text-2xl md:text-5xl md:my-24 md:mb-24 w-5/6 mx-auto text-center text-white">Veja alguns dos mais de 30 projetos que você aprenderá no curso</h2>

          <div class="flex items-center justify-center">

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">
              <div class="max-w-xs rounded-md overflow-hidden shadow-md my-2 bg-tips-gray-dark">
                <img
                  class="w-full cursor-pointer"
                  src="./projeto-flappybird.png"
                  alt=""
                />

                <div class="px-6 py-6">
                  <p class="text-grey-darker font-medium text-base text-indigo-100">
                    Um dos jogos mais famosos do mundo - Flappy Bird.
                  </p>
                </div>
              </div>
              <div class="max-w-xs rounded-md overflow-hidden shadow-md my-2 bg-tips-gray-dark">
                <img
                  class="w-full cursor-pointer"
                  src="./projeto-dukeza.png"
                  alt=""
                />

                <div class="px-6 py-6">
                  <p class="text-grey-darker font-medium text-base text-indigo-100">
                    SPA de vendas de um APP chamado Dukeza.
                  </p>
                </div>
              </div>
              <div class="max-w-xs rounded-md overflow-hidden shadow-md bg-tips-gray-dark my-2">
                <img
                  class="w-full cursor-pointer"
                  src="./projeto-netflix.png"
                  alt=""
                />

                <div class="px-6 py-6  ">
                  <p class="text-grey-darker font-medium text-base text-indigo-100">
                    Vamos fazer um app clone da Netflix
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div class="flex items-center justify-center">

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">
              <div class="max-w-xs rounded-md overflow-hidden shadow-md my-2 bg-tips-gray-dark">
                <img
                  class="w-full cursor-pointer"
                  src="./projeto-whatsapp.png"
                  alt=""
                />

                <div class="px-6 py-6">
                  <p class="text-grey-darker font-medium text-base text-indigo-100">
                    Um Clone do WhatsApp.
                  </p>
                </div>
              </div>
              <div class="max-w-xs rounded-md overflow-hidden shadow-md my-2 bg-tips-gray-dark">
                <img
                  class="w-full cursor-pointer"
                  src="./projeto-gamebateria.png"
                  alt=""
                />

                <div class="px-6 py-6">
                  <p class="text-grey-darker font-medium text-base text-indigo-100">
                    Aprenda a Bateria - um game muito divertido.
                  </p>
                </div>
              </div>
              <div class="max-w-xs rounded-md overflow-hidden shadow-md bg-tips-gray-dark my-2">
                <img
                  class="w-full cursor-pointer"
                  src="./projeto-cartao.png"
                  alt=""
                />

                <div class="px-6 py-6  ">
                  <p class="text-grey-darker font-medium text-base text-indigo-100">
                    Site de Cartão de Visitas (HTML e CSS)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Projects;