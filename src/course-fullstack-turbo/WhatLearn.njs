import Nullstack from 'nullstack';
import CardWhatLearn from './CardWhatLearn';
import CtaButton from './CtaButton';

class WhatLearn extends Nullstack {

  render() {
    return (
      <>
        <section>

          <div class="container max-w-5xl mx-auto m-8">
            <h1 class="w-full text-2xl my-12 md:my-24 md:text-5xl font-bold leading-tight text-center text-white ">
              O que você irá aprender
            </h1>

            <CardWhatLearn
              nameClass="flex flex-wrap"
              contentH5="WEB DESIGN"
              contentH3="HTML5, CSS3 e JavaScript"
              contentP="Nos primeiros módulos você vai entender os conceitos por trás da construção de sites na web, 
              aprenderá a estruturar as páginas com HTML5, estilizações com CSS3 e Bootstrap e as manipulações de DOM com 
              JavaScript e Jquery."
              nameSrc="/sales-page-img/card-what-learn/Web-design-image.webp"
              nameAlt="Web Desing"
              orderImg="w-full sm:w-1/2 p-6"
            />

            <CardWhatLearn
              nameClass="flex flex-wrap flex-col-reverse sm:flex-row"
              contentH5="FRON-END"
              contentH3="ReactJS, Bootstrap, Jquery"
              contentP="Você aprenderá na prática a construir aplicações altamente dinâmicas usando a biblioteca React em 
              conjunto com outras ferramentas como: Hooks, Webpack e Gulp. Evite repetição de código e melhore a manutenção,
               possibilitando um código limpo e autossustentável, com boas práticas do mercado."
              nameSrc="/sales-page-img/card-what-learn/Frontend-image.webp"
              nameAlt="Aprende tudo sobre front-end"
              orderImg="w-full sm:w-1/2 p-6 order-first"
            />

            <CardWhatLearn
              nameClass="flex flex-wrap"
              contentH5="BACK-END"
              contentH3="NodeJs, ExpressJS, EJS e API"
              contentP="Nesses módulos vamos aprender o que é, e os conceitos por 
              trás do desenvolvimento web usando a plataforma NodeJS que nos posibilita 
              escrever códigos JS no lado do servidor, assim como também trabalharemos 
              com o banco de dados NoSQL ou o famoso MongoDB usando o Mongosse, também 
              você vai estudar o framework ExpressJS um dos mais requisitados para se trabalhar com back-end no JavaScript."
              nameSrc="/sales-page-img/card-what-learn/Backend-image.webp"
              nameAlt="Tudo sobre o back-end com Nodejs"
              orderImg="w-full sm:w-1/2 p-6"
            />


            <CardWhatLearn
              nameClass="flex flex-wrap flex-col-reverse sm:flex-row"
              contentH5="Bancos de Dados"
              contentH3="SQL, MongoDb e Mongosse"
              contentP="Nesses módulos vamos estudar de forma bem detalhada os conceitos e práticas
              dos bancos de dados tradicionais no caso o SQL, mas também as novas abordagens de banco
              como o NoSQL, então você terá uma visão bem detalhada e ampla das duas formas de se modelar
              banco de dados atualmente no mercado de desenvolvimento."
              nameSrc="/sales-page-img/card-what-learn/sql-image.webp"
              nameAlt="Tudo sobre o back-end com Nodejs"
              orderImg="w-full sm:w-1/2 p-6 order-first"
            />

            <CardWhatLearn
              nameClass="flex flex-wrap"
              contentH5="FERRAMENTAS DEVS"
              contentH3="Terminal Linux, Git, GitHub"
              contentP="Nessa parte do curso iremos estudar ferramentas para você se tornar um full stack
              que são de extrema importância, como o terminal, Git e GitHub entre outras, então realmente
              você sairár do curso extremamente preparado para o mercado de trabalho."
              nameSrc="/sales-page-img/card-what-learn/git-image.webp"
              nameAlt="Tudo sobre Linux e Git"
              orderImg="w-full sm:w-1/2 p-6"
            />

          </div>
          <CtaButton />
        </section>
      </>
    );
  }

}

export default WhatLearn;