import Nullstack from 'nullstack';

class Initial extends Nullstack {

  render() {
    return (
      <div>
        <section class="bg-tips-dark md:py-12">
          <div class="container mx-auto flex flex-wrap pt-4 lmd:pb-12">
            <h2
              class="w-full my-2 text-2xl md:text-5xl font-bold leading-tight text-center text-white lg:mb-24"
            >
              Mais do que um curso, uma experiência de <br /> aprendizado
            </h2>

            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./play-circle.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Mais de 700 <br /> aulas
                </p>
              </div>

            </div>
            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./monitor.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Mais de 30 <br /> projetos
                </p>
              </div>

            </div>
            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./clock.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Mais de 120 <br /> horas
                </p>
              </div>

            </div>
            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./unlock.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Acesso <br /> vitalício
                </p>
              </div>

            </div>
          </div>
          <div class="container mx-auto flex flex-wrap">

            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./navigation.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Suporte <br /> personalizado
                </p>
              </div>

            </div>
            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./star.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Mais de 20 <br /> tecnologias
                </p>
              </div>

            </div>
            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./zap.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Aulas 100% <br /> atualizadas
                </p>
              </div>

            </div>
            <div class="w-full md:w-1/4 p-6 flex flex-col flex-grow flex-shrink">
              <div class="flex-1 overflow-hidden text-center">
                <div class="w-full font-bold text-xl items-center px-6 mb-6">
                  <img class="mx-auto " src="./users.svg" />
                </div>
                <p class="text-white text-lg px-6 mb-5">
                  Uma incrpível <br /> comunidade
                </p>
              </div>

            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default Initial;