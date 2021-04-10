import Nullstack from "nullstack";

class Header extends Nullstack {
  render() {
    return (
      <section class="container mx-auto px-4 py-36 flex items-center justify-between">
        <div class="flex-col justify-self-end">
          <h1 class="text-6xl text-blue-700">Bem vindo á TipsCode</h1>
          <h2 class="text-4xl">A sua escola de <br /> programação online</h2>

          <p class="mt-3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ipsum
            mauris orci luctus.
          </p>

          <div class="mt-5">
            <a class="button-color p-4 rounded-lg bg-blue-400">Já sou aluno</a>
            <a class="ml-2 button-color p-4 rounded-lg bg-green-300">Quero ser FullStack</a>
          </div>
        </div>

        <figure class="flex justify-end">
          <img src="/hero.svg" />
        </figure>
      </section>
    );
  }
}

export default Header;
