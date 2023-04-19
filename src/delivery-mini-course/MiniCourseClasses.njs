import Nullstack from 'nullstack';
import CtaButton from '../course-fullstack-turbo/CtaButton';

import './DeliveryMiniCourse.scss';


class MiniCourseClasses extends Nullstack {

  video = 1

  renderAulas({ srcVideo }) {
    return (
      <div class="sm:w-full sm:w-full">
        <div class="flex-col justify-center sm:flex sm:items-center sm:w-full sm:mx-auto">
          <div class="embed-minicurso">
            <iframe src={srcVideo} />
          </div>
        </div>
      </div>
    );
  }

  renderMudar() {

    if (this.video === 1) {

      return (
        <Aulas srcVideo="https://www.youtube.com/embed/UkNLE-cy6iM" />
      );
    } if (this.video === 2) {
      return (
        <Aulas srcVideo="https://www.youtube.com/embed/j0z9M6sRJYA" />

      );

    } if (this.video === 3) {
      return (
        <Aulas srcVideo="https://www.youtube.com/embed/A7ZgMUZwFqI" />

      );
    }
    if (this.video === 4) {
      return (
        <Aulas srcVideo="https://www.youtube.com/embed/xiJ6fGNCvr8" />

      );
    } if (this.video === 5) {
      return (
        <Aulas srcVideo="https://www.youtube.com/embed/1-E2G7x-dK4" />

      );
    }
    return (
      <Aulas srcVideo="https://www.youtube.com/embed/SBb3zos2njc" />

    );

  }

  render() {
    return (

      <section class="bg-zing w-full h-full inline-block text-white text-center">
        <h3 class="leading-normal sm:text-lg text-2xl md:text-3xl mt-5">
          Mini curso jogo com Javascript
        </h3>


        <div id="hero" class="sm:mt-12 max-w-screen-xl justify-center mx-auto">
          <div class="md:flex md:justify-around">
            <div>
              <Mudar video />
            </div>

            <aside>
              <ul class="divide-y-2 divide-gray-100">
                <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer" onclick={{ video: 1 }}>Aula 01</li>
                <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer" onclick={{ video: 2 }}>Aula 02</li>
                <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer" onclick={{ video: 3 }}>Aula 03</li>
                <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer" onclick={{ video: 4 }}>Aula 04</li>
                <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer" onclick={{ video: 5 }}>Aula 05</li>
                <li class="p-3 hover:bg-blue-600 hover:text-blue-200 cursor-pointer" onclick={{ video: 6 }}>Aula 06</li>
              </ul>
            </aside>
          </div>


          <h3 class="mt-10 leading-normal w-10/12 md:w-9/12 sm:text-lg text-white text-1xl md:text-2xl m-auto text-center">
            Se você quer realmente aprender a programar do jeito certo
            <span class="span-text"> sem precisar está copiando e colando códigos dos outros </span>
            e entrar no mercado que cresce a cada dia e que valoriza os seus profissionais
            clique no link abaixo e entre no curso full stack turbo agora.
          </h3>
        </div>

        <CtaButton />

      </section>
    );
  }

}

export default MiniCourseClasses;