export default function Contact({ numWhats }) {
  return (
    <div class="mt-10 mb-5 text-center">
      <h3 class="w-full mt-2 md:mb-6 text-2xl lg:text-5xl font-bold leading-tight text-white">
        Ainda tem duvidas?
      </h3>
      <p class="mb-10 text-1xl lg:text-1xl font-bold text-gray-400
                text-center"
      >Clique no botão contato abaixo e para sanar todas as suas duvidas
      </p>

      <div>
        <a href={numWhats} class="bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-indigo-500 hover:border-transparent rounded-full">
          Contato
        </a>
      </div>
    </div>
  );
}