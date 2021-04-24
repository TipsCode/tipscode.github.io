import Nullstack from "nullstack";

class Inspiration extends Nullstack {
  render() {
    return (
      <section id="about" class="mt-5 overflow-hidden sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 sm:flex sm:items-center sm:justify-between">
        <figure class="flex justify-start sm:justify-center">
          <img src="/about-alisson-suassuna.png" />
        </figure>

        <div class="text-center justify-center sm:text-left sm:justify-end">
			<h3 class="text-5xl text-blue-700 text-opacity-80 font-bold">
				Programação <br /> mudou minha vida, <br /> veja minha história
			</h3>

			<p class="mt-3">
				Me chamo Alisson Suassuna, sou deficiente físico, graduado em sistemas de informação<br />
				desenvolvedor full stack há mais de 8 anos e <strong>Deus usou a tecnologia</strong> para mudar minha história...
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
