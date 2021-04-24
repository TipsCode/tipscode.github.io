import Nullstack from 'nullstack';

class Testmonials extends Nullstack {

  render() {
    return (
      <div class="container mx-auto">
        <h2 class="font-bold text-2xl md:text-5xl md:my-24 md:mb-24 text-center text-white">O que estão falando sobre o curso Fullstack Turbo da TipsCode</h2>

        <div class="flex items-center justify-center">

          <div
            class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center"
          >

            <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
              <img
                class="w-full cursor-pointer"
                src="./img-depoimento-guilherme.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-6  bg-tips-blue">
                <div class="font-bold text-2xl mb-3 text-white">Guilherme Nogueira</div>
                <p class="text-grey-darker text-base text-indigo-100">
                  Aluno TipsCode Turbo.
                </p>
              </div>

            </div>

            <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
              <img
                class="w-full cursor-pointer"
                src="./img-depoimento-mihai.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-6  bg-tips-blue">
                <div class="font-bold text-2xl mb-3 text-white">Mihai</div>
                <p class="text-grey-darker text-base text-indigo-100">
                  Aluno TipsCode Turbo.
                </p>
              </div>

            </div>

            <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
              <img
                class="w-full cursor-pointer"
                src="./img-depoimento-felipe.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-6 bg-tips-blue">
                <div class="font-bold text-2xl mb-3 text-white">Felipe Loures</div>
                <p class="text-grey-darker text-base text-indigo-100">
                  Aluno TipsCode Turbo.
                </p>
              </div>

            </div>

            <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
              <img
                class="w-full cursor-pointer"
                src="./img-depoimento-ricardo.png"
                alt="Sunset in the mountains"
              />

              <div class="px-6 py-6  bg-tips-blue">
                <div class="font-bold text-2xl mb-3 text-white">Ricardo</div>
                <p class="text-grey-darker text-base text-indigo-100">
                  Aluno TipsCode Turbo (59 anos).
                </p>
              </div>

            </div>

            <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
              <img
                class="w-full cursor-pointer"
                src="./img-depoimento-claudio.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-6  bg-tips-blue">
                <div class="font-bold text-2xl mb-3 text-white">Claudio</div>
                <p class="text-grey-darker text-base text-white">
                  Aluno TipsCode Turbo.
                </p>
              </div>

            </div>

            <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
              <img
                class="w-full cursor-pointer"
                src="./img-depoimento-joneivison.png"
                alt="Sunset in the mountains"
              />
              <div class="px-6 py-6 bg-tips-blue">
                <div class="font-bold text-2xl mb-3 text-white">Joneivison</div>
                <p class="text-grey-darker text-base text-indigo-100">
                  Aluno TipsCode Turbo.
                </p>
              </div>

            </div>

          </div>

        </div>
      </div>
    );
  }

}

export default Testmonials;