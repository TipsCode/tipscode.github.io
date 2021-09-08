export default function Promotion() {
  return (
    <sectino class="px-4 sm:max-w-screen-xl sm:mx-auto sm:items-center flex sm:justify-between mt-10">
      <div class="flex flex-wrap shadow rounded-lg w-full bg-gradient-to-r from-tips-blue to-purple-500 focus:from-pink-500 focus:to-yellow-500 p-8">
        <div class="flex flex-wrap flex-col sm:flex-row items-center">
          <figure class="w-full sm:w-1/2">
            <img src="/banner-img.png" alt="Estudante TipsCode" width="440" height="454" />
          </figure>
          <div class="w-full md:w-1/2">
            <h2 class="text-tips-light text-lg md:text-3xl font-semibold mb-3 leading-relaxed traking-wide">
              Vagas abertas para o melhor curso de programção <strong>Fullstack</strong> do Brasil. Clique no botão abaixo para conhecer.
            </h2>

            <div class="mt-2">
              <a href="https://bit.ly/2YivXeS" class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-green text-white font-bold rounded mt-4 lg:mt-0 py-2 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                Conhecer Treinamento
              </a>
            </div>
          </div>
        </div>
      </div>
    </sectino>
  );
}