export default function Teacher() {
  return (
    <section class="container mx-auto">

      <h2 class="font-bold text-2xl md:text-5xl my-12 md:my-24 md:mb-24 w-5/6 mx-auto text-center text-white">Conheça seu professor</h2>


      <div class="flex flex-wrap mx-3 flex-col sm:flex-row items-center md:w-4/6 sm:m-auto bg-tips-gray-dark rounded-lg">
        <figure class="w-full sm:w-1/2 p-6">
          <img src="/Alisson-Suassuna-Perfil-300x300.webp" alt="Alisson Suassuna" loading="lazy" height="520" width="541" class="w-72 rounded-full" />
        </figure>
        <div class="w-5/6 sm:w-1/2 p-6">
          <div class="m-auto self-center justify-center">
            <h2 class="text-white text-xl md:text-3xl font-bold mb-3 leading-relaxed traking-wide">
              Alisson Suassuna
            </h2>

            <p class="text-tips-light text-opacity-80 text-lg md:text-xl leading-relaxed traking-wide mb-8">
              Deficiente físico, graduado em sistemas de informação,
              desenvolvedor full stack há mais de 8 anos, já trabalhou em vários projetos de várias empresas. <strong>Deus usou a tecnologia</strong> para mudar minha história...
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}