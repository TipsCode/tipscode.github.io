import Nullstack from 'nullstack';

import CardDetail from './CardDetail';

class DetailsCard extends Nullstack {

  render() {
    return (
      <>
        <section>

          <div class="container mx-auto flex flex-wrap">

            <CardDetail srcName="/sales-page-img/course-details/unlock.webp" nameAlt="Acesso Vitalício" content="Acesso Vitalício " />

            <CardDetail srcName="/sales-page-img/course-details/monitor.webp" nameAlt="Garantia de 7 dias" content="Garantia de 7 dias" />

            <CardDetail srcName="/sales-page-img/course-details/users.webp" nameAlt="Hora aula" content="Comunidade Vip" />

            <CardDetail srcName="/sales-page-img/course-details/navigation.webp" nameAlt="Suporte com Professor" content="Suporte com Professor" />

          </div>

          <div class="container mx-auto flex flex-wrap">

            <CardDetail srcName="/sales-page-img/course-details/star.webp" nameAlt="Bônus - E-book HTML5" content="Bônus - E-book HTML5 " />

            <CardDetail srcName="/sales-page-img/course-details/zap.webp" nameAlt="Frameworks" content="Frameworks" />

            <CardDetail srcName="/sales-page-img/course-details/Play.webp" nameAlt="Método step by step." content="Método step by step." />

            <CardDetail srcName="/sales-page-img/course-details/clock.webp" nameAlt="Projetos para o seu portfólio." content="Projetos para o seu portfólio." />

            </div>

         
        </section>
      </>
    );
  }

}

export default DetailsCard;