import Nullstack from 'nullstack';

import CardDetail from './CardDetail';

class CourseDetails extends Nullstack {

  render() {
    return (
      <>
        <section class="bg-tips-dark md:py-12">
        <div class="container mx-auto">

          <div class="m-auto w-80 text-center mt-3 lg:w-96 lg:m-auto bg-tips-green text-white font-bold rounded-md md:my-6 py-2 md:py-4 px-2 md:px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            <a href="https://pay.hotmart.com/A43229044U?off=u0io32t2&checkoutMode=10">
              Quero ser um desenvolvedor(a) agora
            </a>
          </div> 

          <div class="text-center lg:text-center">
              <h3 class="my-4 text-2xl md:text-3xl text-center lg:text-3xl leading-tight text-red-700 font-bold">
                42% OFF valor temporário
              </h3>
              <p class="text-indigo-100">Por Apenas</p>
              <h3 class="text-2xl md:text-2xl lg:text-3xl leading-tight text-tips-green font-bold">R$295,00 ou</h3>
              <h2 class="text-2xl my-4 md:text-3xl lg:text-5xl leading-tight text-tips-green font-bold">
                12x  R$29,44
              </h2>
          </div>
        </div>

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