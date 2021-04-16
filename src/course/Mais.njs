import Nullstack from 'nullstack';

class Mais extends Nullstack {
    render() {
        return (
            <div>
                <section class="bg-gray-800 py-8">
                    <div class="container mx-auto px-2 pt-4 pb-12 text-gray-800">
                        <h1
                            class="w-full mt-2 mb-20 text-5xl font-bold leading-tight text-center text-white">
                            Mais
                        </h1>
                        
                        <div class="flex flex-col sm:flex-row justify-center pt-12 my-12 sm:my-4 relative ">
                            
                            <div
                                class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-none lg:rounded-l-lg bg-white mt-4 z-50">
                                <div
                                    class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden px-4">

                                    <div class="w-full">
                                        <img class="mx-auto" src="./Webpack-bubble.svg"></img>
                                    </div>
                                    <div class="p-8 text-3xl font-bold text-center">
                                        Webpack
                                    </div>
                                    <p class="w-full text-center text-sm">
                                        Webpack é um empacotador de módulo JavaScript de código aberto. Ele é feito principalmente para JavaScript.
                                    </p>
                                    
                                </div>
                                
                            </div>
                            <div
                                class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 bg-white mt-4 pb-20 z-50">
                                <div
                                    class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden px-4 ">

                                    <div class="w-full">
                                        <img class="mx-auto" src="./Heroku-bubble.svg"></img>
                                    </div>
                                    <div class="p-8 text-3xl font-bold text-center">
                                        Heroku
                                    </div>
                                    <p class="w-full text-center text-sm">
                                        Heroku é uma plataforma em nuvem como um serviço que suporta várias linguagens de programação.
                                    </p>
                                    
                                </div>
                                
                            </div>
                            <div
                                class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 rounded-none lg:rounded-r-lg bg-white mt-4 z-50">
                                <div
                                    class="flex-1 bg-white text-gray-600 rounded-t rounded-b-none overflow-hidden px-4">

                                    <div class="w-full">
                                        <img class="mx-auto" src="./Security-bubble.svg"></img>
                                    </div>
                                    <div class="p-8 text-3xl font-bold text-center">
                                        Segurança e autenticação
                                    </div>
                                    <p class="w-full text-center text-sm">
                                        A autenticação e segurança está diretamente relacionada com proteção de um conjunto de informações.
                                    </p>
                                    
                                </div>
                                
                            </div>
                            <div class="w-full absolute -bottom-35 self-center pt-20 ">
                                <img class="w-full mx-auto" src="./Elipses-Background-mais.svg"></img>
                            </div>
                        </div>
                        <div class="w-full justify-center items-center">
                            <h4 class="w-full mt-32 mb-12 text-3xl font-bold leading-tight text-center text-white">Entre para o seleto hall de alunos do TipsCode e conquiste as melhores oportunidades do mercado</h4>
                            <div class="flex w-full justify-center items-center my-0">
                                <button
                                    class="mx-auto z-50 self-center lg:mx-0 bg-green-400 text-white font-bold rounded-md my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                    Quero ser fullstack
                                </button>
                            </div>
                        </div>
                        
                    </div>
                </section>
            </div>
        )
    }
}

export default Mais;