import Nullstack from "nullstack";

class Inspiration extends Nullstack {
  render() {
    return (
      <section class="mt-5 overflow-hidden sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 sm:flex sm:items-center sm:justify-between">
        <figure class="flex justify-start sm:justify-center">
          <img src="/man-tipscode.png" />
        </figure>

        <div class="text-center justify-center sm:text-left sm:justify-end">
			<h3 class="text-5xl text-blue-700 text-opacity-80 font-bold">
				Programação <br /> muda vidas, <br /> veja nossos alunos
			</h3>

			<p class="mt-3">
				Nosso conteúdo é planejado e organizado para que você,
				tenha a melhor experiência de aprender a aprender
			</p>

			<div class="block sm:inline-block mt-2 sm:ml-2">
				<button class="mt-2 button-color p-3 rounded-lg bg-green-300 text-white font-bold border border-tips-blue rounded mt-4 lg:mt-0 py-2 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
				{" "}
				Conhece
				</button>
          	</div>
        </div>
      </section>
    );
  }
}

export default Inspiration;
