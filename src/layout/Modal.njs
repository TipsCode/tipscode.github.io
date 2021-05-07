export default function Modal({ onclose }) {
  return (
    <div class="fixed bg-black w-4/5 left-8 sm:left-20 lg:left-1/4 xl:top-0 lg:w-6/12 top-16 z-50 m-1 p-4 rounded-2xl shadow-md">

      <button class="text-white" onclick={onclose}> FECHAR </button>

      <div class="flex-col text-white text-center">

        <div class="mt-20 lg:mt-20 xl:mt-1">
          <h2 class="mb-4 text-white text-3xl xl:text-5x1 lg:text-2xl font-bold leading-tight">Você está a um passo de ir para o próximo nível</h2>
          <iframe src="https://www.youtube.com/embed/yovzEEYOl-E" class="w-full sm:h-96" />
        </div>

        <button class="mt-14 mx-auto z-40 self-center lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">Quero me inscreve agora</button>

      </div>
    </div>
  );
}