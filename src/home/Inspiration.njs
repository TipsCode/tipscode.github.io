export default function Inspiration() {
  return (
    <section id="about" class="my-5 overflow-hidden sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 sm:flex sm:items-center sm:justify-between md:my-36">
      <div class="flex flex-wrap flex-col sm:flex-row">
        <figure class="w-full sm:w-1/2 p-6 mt-6">
          <img src="./about-alisson-suassuna.png" alt="Alisson Suassuna" height="520" width="468" />
        </figure>
        <div class="w-full sm:w-1/2 p-6 my-auto">
          <h2 class="text-tips-dark text-opacity-80 text-2xl md:text-5xl font-bold mb-3 leading-relaxed traking-wide">
            Programação mudou minha vida
          </h2>

          <p class="text-tips-gray-dark text-opacity-60 text-lg md:text-xl leading-relaxed traking-wide mb-8">
            Me chamo Alisson Suassuna, sou deficiente físico, graduado em sistemas de informação
            desenvolvedor full stack há mais de 8 anos e <strong>Deus usou a tecnologia</strong> para mudar minha história...
          </p>

          <div class="mt-2">
            <a href="https://youtu.be/Cobt55DMZX0" target="_black" class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-blue text-white font-bold rounded mt-4 lg:mt-0 py-2 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
              Veja minha história
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}