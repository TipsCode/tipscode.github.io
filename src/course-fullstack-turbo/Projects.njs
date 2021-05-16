import Nullstack from 'nullstack';

import CardProject from './CardProject';


class Projects extends Nullstack {

  render() {
    return (
      <>
        <div class="container mx-auto">
          <h2 class="font-bold text-2xl md:text-5xl md:my-24 md:mb-24 w-5/6 mx-auto text-center text-white">Veja alguns dos mais de 30 projetos que você aprenderá no curso</h2>

          <div class="flex items-center justify-center">

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

              <CardProject src="./sales-page-img/projects/projeto-flappybird.webp" alt="Jogo Flappy Bird" contentP="Um dos jogos mais famosos do mundo - Flappy Bird." />
              <CardProject src="./sales-page-img/projects/projeto-dukeza.webp" alt="App Dukeza" contentP="SPA de vendas de um APP chamado Dukeza." />
              <CardProject src="./sales-page-img/projects/projeto-netflix.webp" alt="Clone Netflix" contentP="Vamos fazer um app clone da Netflix" />

            </div>
          </div>

          <div class="flex items-center justify-center">
            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

              <CardProject src="./sales-page-img/projects/projeto-whatsapp.webp" alt="Clone do WhatsApp" contentP="Um Clone do WhatsApp." />
              <CardProject src="./sales-page-img/projects/projeto-gamebateria.webp" alt="Game Bateria" contentP="Aprenda a Bateria - um game muito divertido." />
              <CardProject src="./sales-page-img/projects/projeto-cartao.webp" alt="Cartão de visita" contentP="Site de Cartão de Visitas (HTML e CSS)." />

            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Projects;