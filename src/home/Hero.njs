import Nullstack from "nullstack";

class Header extends Nullstack {
  render() {
    return (
      <section class="flex-row px-4 sm:py-36 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between">
        <div class="flex-col sm:justify-self-center sm:justify-self-end">
          <h1 class="text-6xl text-blue-700 text-center sm:text-left">
            Bem vindo á TipsCode  <br />
            <span class="text-black text-4xl">A sua escola de <br /> programação online</span>
          </h1>

          <p class="mt-3 text-center sm:text-left">
            Feliz o homem que acha sabedoria, e o homem que  <br /> adquire conhecimento:
            porque melhor é o luco que ela dá do que a da prata,  <br />
            e melhor a sua renda do que o ouro mais fino. <br />
            <strong>Provérbios 3:13-14</strong>
          </p>

          <div class="mt-5 text-center sm:text-left">
            <a class="block sm:inline-block button-color p-4 rounded-lg bg-blue-400">Já sou aluno</a>
            <a class="block sm:inline-block mt-2 sm:ml-2 button-color p-4 rounded-lg bg-green-300">
              Quero ser FullStack
            </a>
          </div>
        </div>

        <figure class="flex-row mt-10 sm:flex justify-center sm:justify-end">
          <img src="/img-hero-blue.png" />
        </figure>
      </section>
    );
  }
}

export default Header;
