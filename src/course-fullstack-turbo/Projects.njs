import Nullstack from 'nullstack';

import CardProject from './CardProject';


class Projects extends Nullstack {

  render() {
    return (
      <>
        <div class="container mx-auto mt-10">

        <div class="mx-auto w-80 text-center mt-3 lg:w-9/12 bg-red-900 text-white font-bold rounded-md md:my-6 py-2 md:py-4 px-2 md:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                  <a class="md:text-2xl" href="https://pay.hotmart.com/A43229044U?off=u0io32t2&checkoutMode=10">
                  QUERO ME TORNAR UM PROGRAMADOR REQUISITADO
                  </a>
            </div> 

         

          <h2 class="font-bold text-2xl md:text-4xl w-5/6 mx-auto text-center text-white mt-5">Projetos que você vai
            criar do zero neste curso</h2>
           <p class="text-1xl md:text-1xl md:my-5 md:mb-5 w-5/6 mx-auto text-center text-white">
           Ao concluir apenas esses projetos, (são mais de 30!). Você já será perfeitamente capaz de se 
           candidatar a uma vaga de emprego ou prestar serviços freelancers para qualquer empresa do mercado 
           e ganhar muito bem pelos sistemas desenvolvidos por você. 

           </p>

          <div class="flex items-center justify-center mx-3">

            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 text-center">

              <CardProject src="/sales-page-img/projects/projeto-flappybird.webp" alt="Jogo Flappy Bird" contentP="Um dos jogos mais famosos do mundo - Flappy Bird." />
              <CardProject src="/sales-page-img/projects/projeto-dukeza.webp" alt="App Dukeza" contentP="SPA de vendas de um APP chamado Dukeza." />
              <CardProject src="/sales-page-img/projects/projeto-netflix.webp" alt="Clone Netflix" contentP="Vamos fazer um app clone da Netflix" />

              <CardProject src="/sales-page-img/projects/projeto-whatsapp.webp" alt="Clone do WhatsApp" contentP="Um Clone do WhatsApp." />
              <CardProject src="/sales-page-img/projects/projeto-gamebateria.webp" alt="Game Bateria" contentP="Aprenda a Bateria - um game muito divertido." />
              <CardProject src="/sales-page-img/projects/projeto-cartao.webp" alt="Cartão de visita" contentP="Site de Cartão de Visitas (HTML e CSS)." />

              <CardProject src="/sales-page-img/projects/projeto-facebook.png" alt="Clone do facebook" contentP="Clone da Plataforma Facebook." />
              <CardProject src="/sales-page-img/projects/projeto-meteorologia.png" alt="meteorologia" contentP="App Meteorologia." />
              <CardProject src="/sales-page-img/projects/projeto-newsllter.png" alt="App Newsllter" contentP="App Newsllter" />
              <CardProject src="/sales-page-img/projects/projeto-tips-keep.png" alt="App TipsKeep" contentP="TipsKeep - baseado no Google Keep" />

              <CardProject src="/sales-page-img/projects/projeto-emojipedia.png" alt="App Emojipedia" contentP="App Emojipedia" />
              <CardProject src="/sales-page-img/projects/projeto-todo-list.png" alt="App Todo List" contentP="App Todo list" />
              <CardProject src="/sales-page-img/projects/projeto-cronometro.png" alt="App cronometro" contentP="App Cronometro" />
            </div>
          </div>
        </div>
      </>
    );
  }

}

export default Projects;