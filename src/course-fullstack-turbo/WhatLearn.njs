import Nullstack from 'nullstack';

import CardWhatLearn from './CardWhatLearn'

class WhatLearn extends Nullstack {

  render() {
    return (
        <>
            <section class="bg-tips-dark py-8">

                <div class="container max-w-5xl mx-auto m-8">
                    <h1 class="w-full text-2xl my-12 md:my-24 md:text-5xl font-bold leading-tight text-center text-white ">
                        O que você irá aprender
                    </h1>

                    <CardWhatLearn nameClass="flex flex-wrap" contentH5="WEB DESIGN" 
                        contentH3="Do início. Vamos do básico a lógica de programação." contentP="Você aprenderá HTML, CSS, JavaScript e Jquery na prática."
                        nameSrc="./sales-page-img/card-what-learn/Web-design-image.svg" nameAlt="Web Desing"  orderImg="w-full sm:w-1/2 p-6" />

                    <CardWhatLearn nameClass="flex flex-wrap flex-col-reverse sm:flex-row" contentH5="FRON-END" 
                        contentH3="Aprenda a criar aplicações estáticas em poucos passos." contentP="Você aprenderá React, Botstrap, e SASS com Gulp na prática."
                        nameSrc="./sales-page-img/card-what-learn/Frontend-image.svg" nameAlt="Aprende tudo sobre front-end" orderImg="w-full sm:w-1/2 p-6 order-first" />

                     <CardWhatLearn nameClass="flex flex-wrap" contentH5="BACK-END" 
                        contentH3="Você vai criar APIs do zero com Node js e Express." contentP=" Você aprenderá Node js e Mongo DB na prática." 
                        nameSrc="./sales-page-img/card-what-learn/Backend-image.svg" nameAlt="Tudo sobre o back-end com Nodejs"  orderImg="w-full sm:w-1/2 p-6" />


                    <CardWhatLearn nameClass="flex flex-wrap flex-col-reverse sm:flex-row" contentH5="SQL" 
                        contentH3="Tudo que você precisa saber sobre banco de dados SQL e NoSQL." contentP=" Você aprenderá  tudo isso na prática." 
                        nameSrc="./sales-page-img/card-what-learn/sql-image.svg" nameAlt="Tudo sobre o back-end com Nodejs"  orderImg="w-full sm:w-1/2 p-6 order-first" />

                    <CardWhatLearn nameClass="flex flex-wrap" contentH5="LINUX E GIT" 
                        contentH3="Essa ferramanta é essencial para qualquer dev." contentP="Você aprenderá terminal Linux e Git, além das melhores práticas para montar um bom GitHub." 
                        nameSrc="./sales-page-img/card-what-learn/git-image.svg" nameAlt="Tudo sobre Linux e Git"  orderImg="w-full sm:w-1/2 p-6" />
                    
                </div>
            </section>
        </>
    );
  }

}

export default WhatLearn;