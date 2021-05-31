import Nullstack from 'nullstack';

import CardWhatLearn from './CardWhatLearn';

class WhatLearn extends Nullstack {

  render() {
    return (
      <>
        <section class="bg-tips-dark py-8">

          <div class="container max-w-5xl mx-auto m-8">
            <h1 class="w-full text-2xl my-12 md:my-24 md:text-5xl font-bold leading-tight text-center text-white ">
              O que você irá aprender
            </h1>

            <CardWhatLearn
              nameClass="flex flex-wrap"
              contentH5="WEB DESIGN"
              contentH3="Do início. Vamos do básico ao avançado"
              contentP="Nos primeiros módulos você vai entender os conceitos por trás da construção de sites na web, 
              aprenderá a estruturar as páginas com HTML5, estilizações com CSS3 e Bootstrap 4.6 e as manipulações de DOM com 
              JavaScript e Jquery."
              nameSrc="./sales-page-img/card-what-learn/Web-design-image.webp"
              nameAlt="Web Desing"
              orderImg="w-full sm:w-1/2 p-6"
            />

            <CardWhatLearn
              nameClass="flex flex-wrap flex-col-reverse sm:flex-row"
              contentH5="FRON-END"
              contentH3="Aprenda a criar aplicações dinâmicas com as melhores tecnologias do mercardo"
              contentP="Você aprenderá os conceitos por trás de aplicações altamente dinâmicas usando a 
              biblioteca React em conjuntos de outras ferramentas como: Hooks, Webpack e Gulp. Entraremos de forma detalhada nos conceitos e boas práticas no desenvolvimento front-end com React."
              nameSrc="./sales-page-img/card-what-learn/Frontend-image.webp"
              nameAlt="Aprende tudo sobre front-end"
              orderImg="w-full sm:w-1/2 p-6 order-first"
            />

            <CardWhatLearn
              nameClass="flex flex-wrap"
              contentH5="BACK-END"
              contentH3="Você vai criar APIS, poderosas e integrar com qualquer aplicação seja ela front-end ou não"
              contentP="Nesses módulos vamos aprender o que é, e os conceitos por 
              trás do desenvolvimento web usando a plataforma NodeJS que nos posibilita 
              escrever códigos JS no lado do servidor, assim como também trabalharemos 
              com o banco de dados NoSQL ou o famoso MongoDB usando o Mongosse, também 
              você vai estudar o framework ExpressJS um dos mais requisitados do 
              mercado back-end com JavaScript."
              nameSrc="./sales-page-img/card-what-learn/Backend-image.webp"
              nameAlt="Tudo sobre o back-end com Nodejs"
              orderImg="w-full sm:w-1/2 p-6"
            />


            <CardWhatLearn
              nameClass="flex flex-wrap flex-col-reverse sm:flex-row"
              contentH5="Bancos de Dados"
              contentH3="Tudo que você precisa saber sobre banco de dados SQL e NoSQL"
              contentP="Nesses módulos vamos estudar de forma bem detalhada os conceitos e práticas
              dos bancos de dados tradicionais no caso o SQL, mas também as novas abordagens de banco
              como o NoSQL, então você terá uma visão bem detalhada e ampla das duas formas de se modelar
              banco de dados atualmente no mercado de desenvolvimento."
              nameSrc="./sales-page-img/card-what-learn/sql-image.webp"
              nameAlt="Tudo sobre o back-end com Nodejs"
              orderImg="w-full sm:w-1/2 p-6 order-first"
            />

            <CardWhatLearn
              nameClass="flex flex-wrap"
              contentH5="TERMINAL LINUX, GIT E GITBUB"
              contentH3="Ferramentas essenciais para qualquer dev"
              contentP="Nessa parte do curso iremos estudar ferramentas para você se tornar full stack
              são de extrema importâncias, como o terminal, Git e GitHub entre outras, então realmente
              você sairár do curso extremamente preparado para o mercado de trabalho."
              nameSrc="./sales-page-img/card-what-learn/git-image.webp"
              nameAlt="Tudo sobre Linux e Git"
              orderImg="w-full sm:w-1/2 p-6"
            />

          </div>
        </section>
      </>
    );
  }

}

export default WhatLearn;