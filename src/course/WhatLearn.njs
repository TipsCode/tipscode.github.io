import Nullstack from "nullstack";

class WhatLearn extends Nullstack {
    render() {
        return (
            <div>
                <section class="bg-gray-800 py-8">
                    <div class="container max-w-5xl mx-auto m-8">
                        <h1
                            class="w-full my-24 text-5xl font-bold leading-tight text-center text-white ">
                            O que você irá aprender
                        </h1>
                        
                        <div class="flex flex-wrap">
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h5 class="text-gray-400 font-bold leading-none mb-3">
                                    WEB DESIGN
                                </h5>
                                <h3 class="text-3xl text-gray-100 font-bold leading-none mb-3">
                                    Do início. Vamos do básico a lógica de programação.
                                </h3>
                                <p class="text-gray-200 mb-8">
                                    Você aprenderá HTML, CSS, JavaScript e Jquery na prática.
    
                                </p>
                            </div>
                            <div class="w-full sm:w-1/2 p-6">
                               <img src="./Web-design-image.svg" alt="web design"></img>
                            </div>
                        </div>
                        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div class="w-full sm:w-1/2 p-6 mt-6">
                                <img src="./Frontend-image.svg"></img>
                            </div>
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h5 class="text-gray-400 font-bold leading-none mb-3">
                                    FRONT-END   
                                </h5>
                                <h3 class="text-3xl text-gray-100 font-bold leading-none mb-3">
                                    Aprenda a criar aplicações estáticas em poucos passos
                                </h3>
                                <p class="text-gray-200 mb-8">
                                    Você aprenderá React, Botstrap, e SASS com Gulp na prática.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h5 class="text-gray-400 font-bold leading-none mb-3">
                                    BACK-END
                                </h5>
                                <h3 class="text-3xl text-gray-100 font-bold leading-none mb-3">
                                    Você vai criar APIs do zero com Node js e Express. 
                                </h3>
                                <p class="text-gray-200 mb-8">
                                    Você aprenderá Node js e Mongo DB na prática.
    
                                </p>
                            </div>
                            <div class="w-full sm:w-1/2 p-6">
                               <img src="./Backend-image.svg" alt="web design"></img>
                            </div>
                        </div>
                        <div class="flex flex-wrap flex-col-reverse sm:flex-row">
                            <div class="w-full sm:w-1/2 p-6 mt-6">
                                <img src="./sql-image.svg"></img>
                            </div>
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h5 class="text-gray-400 font-bold leading-none mb-3">
                                    SQL   
                                </h5>
                                <h3 class="text-3xl text-gray-100 font-bold leading-none mb-3">
                                    Tudo que você precisa saber sobre banco de dados SQL e NoSQL.
                                </h3>
                                <p class="text-gray-200 mb-8">
                                    Você aprenderá  tudo isso na prática.
                                </p>
                            </div>
                        </div>
                        <div class="flex flex-wrap">
                            <div class="w-5/6 sm:w-1/2 p-6">
                                <h5 class="text-gray-400 font-bold leading-none mb-3">
                                    LINUX E GIT 
                                </h5>
                                <h3 class="text-3xl text-gray-100 font-bold leading-none mb-3">
                                    Essa ferramanta é essencial para qualquer dev. 
                                </h3>
                                <p class="text-gray-200 mb-8">
                                    Você aprenderá terminal Linux e Git, além das melhores práticas para montar um bom GitHub.
    
                                </p>
                            </div>
                            <div class="w-full sm:w-1/2 p-6">
                               <img src="./git-image.svg" alt="web design"></img>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default WhatLearn