import Nullstack from 'nullstack';

class Hero extends Nullstack {
    render() {
        return (
            <div class="leading-normal tracking-normal text-white gradient bg-purple-900">
                
                <nav id="header" class="w-full z-30 top-0 text-white">
                    <div
                        class="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
                        <div class="pl-4 flex items-center">
                            <a
                                class="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl"
                                href="#">
                                <img src="./TipsCodelogo.png"></img>
                            </a>
                        </div>
                        <div class="block lg:hidden pr-4">
                            <button
                                id="nav-toggle"
                                class="flex items-center p-1 text-white-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                <svg
                                    class="fill-current h-6 w-6"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg">
                                    <title>Menu</title>
                                    <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                                </svg>
                            </button>
                        </div>
                        <div
                            class="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20"
                            id="nav-content">
                            <ul class="list-reset lg:flex justify-end flex-1 items-center">
                                <li class="mr-3">
                                    <p class="inline-block py-2 px-4 text-white font-bold no-underline" href="#">Já é aluno?</p>
                                </li>
                            </ul>
                            <button
                                id="navAction"
                                class="mx-auto lg:mx-0 bg-green-400 text-white font-bold rounded-md mt-4 lg:mt-0 py-2 px-8 shadow  focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Entrar
                            </button>
                        </div>
                    </div>
            
                </nav>
                
                <div id="hero" class="pt-10 max-w-screen-xl justify-center mx-auto">
                    <div
                        class="container px-3 mx-auto h-screen items-center">
                        
                        <div
                            class="text-center px-3 lg:px-0">
                            
                            <h1 class="my-3 text-6xl font-bold leading-tight">
                                FullSatack Turbo
                            </h1>
                            <p class="leading-normal sm:text-lg md:text-2xl mb-8">
                            Assista o vídeo abaixo e descubra como desenvolver qualquer sistema, precifiacar e vender para o seu cliente!
                            </p>
                            
                        </div>
                        
                        <div class="flex  items-center w-full mx-auto">
                            <img class="w-full z-50 cursor-pointer" src="./Image-hero.svg"/>
                        </div>
                        <div class="flex  items-center w-full mx-auto justify-center">
                            <button
                                class="mx-auto z-50 self-center lg:mx-0 bg-green-400 text-white font-bold rounded-md my-6 py-2 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                                Quero ser fullstack
                            </button>
                        </div>
                        
                                                
                    </div>
                </div>
                <div class="relative m-0 p-0 w-full">
                    <img class="w-full block absolute bottom-0" src="./Waves.svg" alt="waves"></img>
                </div>
                


            </div>
        )
    }
}

export default Hero;