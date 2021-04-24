import Nullstack from 'nullstack';

class Header extends Nullstack {

  render() {
    return (
      <section class="leading-normal tracking-normal bg-gradient-radial">
        <div class="flex-row px-4 sm:py-36 sm:max-w-screen-xl sm:mx-auto sm:items-center sm:flex sm:justify-between">
          <div class="flex-col sm:justify-self-center grid gap-8 w-6/12">
            <h1 class="text-5xl text-tips-dark text-opacity-80 font-bold text-center sm:text-left mb-0">
              Constrindo seu jogo com javascript
            </h1>
            <div>
              <p class="text-center sm:text-left text-tips-dark text-opacity-60 text-2xl">
                Neste mini-curso vomos construir do ZERO um game usando HTML5, CSS3 e JavaScript. O jogo que vamos criar se chama Flappy Bird.
              </p>
              <p class="text-center sm:text-left text-tips-dark text-opacity-60 text-2xl">
                O mini-curso é composto por 6 aulas, todas elas direto ao ponto sem enrolação, são elas
              </p>
            </div>
            <div class="block sm:inline-block">
              <a
                href="/curso-fullstack-turbo"
                class="inline-block text-center w-full sm:w-auto lg:mx-0 bg-tips-green text-white font-bold rounded mt-4 lg:mt-0 py-4 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
              >
                Inscreva-se agora
              </a>
            </div>
          </div>

          <figure class="flex-row mt-8 sm:flex justify-center sm:justify-end">
            <img src="/flappy-bird.gif" />
          </figure>
        </div>
      </section>
    );
  }

}

export default Header;