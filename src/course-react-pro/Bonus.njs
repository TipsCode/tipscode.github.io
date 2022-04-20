import Nullstack from 'nullstack';


class Bonus extends Nullstack {

  render() {
    return (
      <div class="mb-32">
       
        <div class="bg-card-bonus m-auto max-w-sm rounded bg-card-borda">
            <img class="w-7/12 m-auto" src="/e-book-dark.png" />
        </div>

        <h1 class="w-full mt-2 md:mb-6 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
               Super bônus 👉<span class="text-5xl bg-card-bonus-heanding"> HTML5</span><br /> Semântico completo
            </h1>
        
        <p class="text-2xl lg:text-2xl font-bold text-gray-400 text-center">Todas as tags do HTML visando boas práticas de SEO. Tenho certeza que você não
        <br /> conhece todas.</p>
      </div>
    );
  }

}

export default Bonus;