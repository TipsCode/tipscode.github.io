import Nullstack from 'nullstack';

class Calltoaction extends Nullstack {
    render() {
        return (
            <div class="bg-tips-dark">

                <section class="container mx-auto text-center py-6">

                    <h1 class="w-full my-2 text-5xl font-bold leading-tight text-center text-white">
                        Você está a poucos passos de se tornar um profissional disputado no mercado
                    </h1>

                    <div class="mx-auto py-12 flex flex-wrap justify-center">
                        <div class="pr-8">
                            <p class="text-indigo-100 text-left">Apenas</p>
                            <h3 class="my-4 md:text-3xl lg:text-5xl leading-tight text-tips-green font-bold">
                                12x  R$41,41
                            </h3>
                            <p class="text-indigo-100 text-right">Ou 490,90 à vista</p>
                        </div>
                        <div>
                            <img src="./garantia-7-dias.png"></img>
                        </div>
                    </div>
                    
                    <h3 class="my-4 text-2xl leading-tight text-white">
                        Basta clicar no botão abaixo! Vai deixar essa oportunidade passar? 
                    </h3>

                    <button
                        class="mx-auto lg:mx-0 bg-tips-green text-white font-bold rounded-md my-6 py-4 px-8 shadow-lg focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
                        Quero ser um programador
                    </button>

                </section>
            </div>
        )
    }
}

export default Calltoaction;