import './Testimonials.scss';
import Nullstack from 'nullstack';


class Testimonials extends Nullstack {

    
    renderOl( { children } ) {

        return (
            <ol class="carousel-indicators">
                <li class="inline-block mr-3">
                    <label for="carousel-1" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-indigo-500">{ children }</label>
                </li>
                <li class="inline-block mr-3">
                    <label for="carousel-2" class="carousel-bullet cursor-pointer block text-4xl text-white hover:text-indigo-500">{ children }</label>
                </li>
            </ol>
        )
    }

   

    renderLabel({ backwards, control, nameFor }) {

        const text = backwards ? '<' : '>'
    
        return (
            <label for={nameFor} class={`prev ${control} w-10 h-10 ml-2 md:ml-12 absolute cursor-pointer
            hidden text-3xl font-bold text-black hover:text-white rounded-full bg-indigo-100 hover:bg-indigo-500 
            leading-tight text-center z-10 inset-y-0 ${backwards ? 'left-0' : 'right-0'} my-auto`}>{text}</label>
        )
    }

    renderCarousel({children}) {

        return (
            <div class="carousel-item absolute opacity-0" style="height:50vh;">
                    <div class="block h-full w-full">
                        {children}    
                    </div>
             </div>
        )
    }

   render() {
    return (
        <section class="py-32 bg-tips-dark">

            <div class="container mx-auto">

                <h2 class="font-bold text-5xl mb-24 text-center text-indigo-100">O que estão falando sobre o curso Fullstack Turbo da TipsCode</h2>

                <div class="carousel relative"> 

                    <div class="carousel-inner relative overflow-hidden w-full">
                        <input class="carousel-open" type="radio" id="carousel-1" name="carousel" aria-hidden="true" hidden="" checked="checked" />

                    <Carousel>
                    
                        <div class="flex items-center justify-center">
                            
                            <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-center">
                                
                                <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
                                    <img
                                        class="w-full cursor-pointer"
                                        src="./img-depoimento-guilherme.png"
                                        alt="Sunset in the mountains"></img>
                                    <div class="px-6 py-6  bg-indigo-500">
                                        <div class="font-bold text-2xl mb-3 text-indigo-100">Guilherme Nogueira</div>
                                        <p class="text-grey-darker text-base text-indigo-100">
                                            Aluno TipsCode Turbo.
                                        </p>
                                    </div>
                                    
                                </div>

                                
                                <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
                                    <img
                                        class="w-full cursor-pointer"
                                        src="./img-depoimento-mihai.png"
                                        alt="Sunset in the mountains"></img>
                                    <div class="px-6 py-6  bg-indigo-500">
                                        <div class="font-bold text-2xl mb-3 text-indigo-100">Mihai</div>
                                        <p class="text-grey-darker text-base text-indigo-100">
                                            Aluno TipsCode Turbo.
                                        </p>
                                    </div>
                                    
                                </div>

                                
                                <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
                                    <img
                                        class="w-full cursor-pointer"
                                        src="./img-depoimento-felipe.png"
                                        alt="Sunset in the mountains"></img>
                                    <div class="px-6 py-6 bg-indigo-500">
                                        <div class="font-bold text-2xl mb-3 text-indigo-100">Felipe Loures</div>
                                        <p class="text-grey-darker text-base text-indigo-100">
                                            Aluno TipsCode Turbo.
                                        </p>
                                    </div>
                                    
                                </div>

                            </div>

                        </div>
                                
                    </Carousel>

                    <Label backwards control="control-1" nameFor="carousel-2" />
                    <Label control="control-1" nameFor="carousel-2" />

                        <input class="carousel-open" type="radio" id="carousel-2" name="carousel" aria-hidden="true" hidden="" />

                        <Carousel>

                            <div class="flex items-center justify-center">
                                
                                <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 text-center">
                                    
                                    <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
                                        <img
                                            class="w-full cursor-pointer"
                                            src="./img-depoimento-ricardo.png"
                                            alt="Sunset in the mountains"></img>
                                        <div class="px-6 py-6  bg-indigo-500">
                                            <div class="font-bold text-2xl mb-3 text-indigo-100">Ricardo</div>
                                            <p class="text-grey-darker text-base text-indigo-100">
                                                Aluno TipsCode Turbo (59 anos).
                                            </p>
                                        </div>
                                        
                                    </div>

                                    
                                    <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
                                        <img
                                            class="w-full cursor-pointer"
                                            src="./img-depoimento-claudio.png"
                                            alt="Sunset in the mountains"></img>
                                        <div class="px-6 py-6  bg-indigo-500">
                                            <div class="font-bold text-2xl mb-3 text-indigo-100">Claudio</div>
                                            <p class="text-grey-darker text-base text-indigo-100">
                                                Aluno TipsCode Turbo.
                                            </p>
                                        </div>
                                        
                                    </div>

                                    
                                    <div class="max-w-xs rounded-md overflow-hidden shadow-lg my-2">
                                        <img
                                            class="w-full cursor-pointer"
                                            src="./img-depoimento-joneivison.png"
                                            alt="Sunset in the mountains"></img>
                                        <div class="px-6 py-6 bg-indigo-500">
                                            <div class="font-bold text-2xl mb-3 text-indigo-100">Joneivison</div>
                                            <p class="text-grey-darker text-base text-indigo-100">
                                                Aluno TipsCode Turbo.
                                            </p>
                                        </div>
                                        
                                    </div>

                                </div>

                            </div>

                        </Carousel>



                        <Label backwards control="control-2" nameFor="carousel-1" />
                        <Label control="control-2" nameFor="carousel-1" />

                        <input class="carousel-open" type="radio" id="carousel-3" name="carousel" aria-hidden="true" hidden="" />


                        <Ol>•</Ol>

                    </div>
                </div>
            </div>

        </section>
    )
  }

}

export default Testimonials;