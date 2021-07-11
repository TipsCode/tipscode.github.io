import Nullstack from 'nullstack';

import CardDetail from './CardDetail';

class CourseDetails extends Nullstack {

  render() {
    return (
      <>
        <section class="bg-tips-dark md:py-12">
          <div class="container mx-auto flex flex-wrap pt-4 lmd:pb-12">

            <h2 class="w-full my-2 text-2xl md:text-5xl font-bold leading-tight text-center text-white lg:mb-24">
              Mais do que um curso, uma experiência de <br /> aprendizado
            </h2>

            <CardDetail srcName="/sales-page-img/course-details/Play.webp" nameAlt="Você terá acesso a mais de 700 aulas" content="Mais de 700 <br /> aulas " />

            <CardDetail srcName="/sales-page-img/course-details/monitor.webp" nameAlt="Vamos criar mais de 30 projetos" content="Mais de 30 <br /> projetos " />

            <CardDetail srcName="/sales-page-img/course-details/clock.webp" nameAlt="Hora aula" content="Mais de 120 <br /> horas" />

            <CardDetail srcName="/sales-page-img/course-details/unlock.webp" nameAlt="Acesso vitalício" content="Acesso <br /> vitalício" />
          </div>

          <div class="container mx-auto flex flex-wrap">

            <CardDetail srcName="/sales-page-img/course-details/navigation.webp" nameAlt="Suporte personalizado" content="Suporte <br /> personalizado" />

            <CardDetail srcName="/sales-page-img/course-details/star.webp" nameAlt="Mais de 20 tecnologias" content="Mais de 20 <br /> tecnologias" />

            <CardDetail srcName="/sales-page-img/course-details/zap.webp" nameAlt="Aulas 100% atualizadas" content="Aulas 100% <br /> atualizadas" />

            <CardDetail srcName="/sales-page-img/course-details/users.webp" nameAlt="Uma comunidade incrível" content="Uma incrível <br /> comunidade" />
          </div>
        </section>
      </>
    );
  }

}

export default CourseDetails;