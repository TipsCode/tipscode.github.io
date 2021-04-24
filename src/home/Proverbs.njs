import Nullstack from 'nullstack';

class Proverbs extends Nullstack {

  render() {
    return (
      <section class="justify-center mb-20">
        <div class="container mx-auto max-w-screen-xl p-12 bg-white bg-opacity-60 rounded-lg shadow-md">
          <div class="w-full">
            <p class="mt-3 sm:text-left md:text-center text-xl text-tips-dark text-opacity-60 font-medium">
              "Feliz o homem que acha sabedoria, e o homem que
              <br />
              adquire conhecimento: porque melhor é o luco que ela dá do que a da prata,
              <br />
              e melhor a sua renda do que o ouro mais fino."
              <br />
              <br />
              <strong>Provérbios 3:13-14</strong>
            </p>
          </div>
        </div>
      </section>
    );
  }

}

export default Proverbs;