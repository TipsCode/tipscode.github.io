export default function Modal({ onclose }) {
  return (
    <div class="fixed bg-black bg-opacity-90 w-full h-full items-center z-50 p-6 md:p-20">

      <button class="text-white justify-self-end" onclick={onclose}> FECHAR </button>

      <div class="flex-col text-white text-center">

        <div class="mt-20 lg:mt-20 xl:mt-1">
          <h2 class="mb-4 text-white text-2xl xl:text-5x1 lg:text-2xl font-bold leading-tight">Você está a um passo de ir para o próximo nível</h2>
          <iframe src="https://www.youtube.com/embed/yovzEEYOl-E" class="w-5/6 md:w-3/6 sm:h-96 mx-auto" />
        </div>

        <button class="mt-14 mx-auto z-40 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Quero me inscreve agora</button>

      </div>
    </div>
  );
}