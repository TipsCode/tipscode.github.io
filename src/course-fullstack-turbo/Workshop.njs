import Clock from '../icons/Clock';

export default function Workshop() {

    return (
        <section class="w-full h-auto bg-tips-dark md:py-8 pb-9 traking-wide">

            <h1 class="w-full text-5xl font-bold leading-tight text-center text-white mb-5">
                Workshops
            </h1>

            <p class="w-full text-center text-white text-2xl">
                Você tera acesso a workshops com profissionais das gigantes da tecnologia
            </p>

            <div class="container mx-auto pt-36 pb-28 flex flex-wrap justify-center md:flex-row items-center pt-6 gap-x-12 gap-y-36 sm:flex-col">

                <div class="w-80 bg-green-500 opacity-100 rounded-r-2xl relative">
                    <div class="bg-tips-dark opacity-95 flex flex-col text-white pt-12 pl-4 pr-8 border-t-4 border-r-4 border-b-4 border-green-300 rounded-r-2xl">

                        <figure class="absolute left-12 -top-28">
                            <img
                                src="./rodrigo-facebook.png"
                                alt="Foto do Rodrigo Egenheiro de software no Facebook"
                            />
                        </figure>

                        <h3 class="text-2xl mb-5">Rodrigo</h3>

                        <div class="text-lg leading-8 mb-5">
                            <p class="mb-5">Engenheiro de software no Facebook </p>
                            <p>Workshop com o tema <strong>Engenharia de Software</strong></p>
                            <p>dando dicas de como melhorar no desenvolvimento</p>
                        </div>

                        <figure class="w-full flex justify-center mb-5">
                            <img class="w-36" src="./facebook-logo.svg" alt="Logo da Empresa" />
                        </figure>

                        <div class="w-full flex justify-center text-sm mb-5 gap-2 text-gray-400">
                            <Clock />
                            <p>1h 40 minutos</p>
                        </div>
                    </div>
                </div>

                <div class="w-80 bg-green-500 opacity-100 rounded-r-2xl relative">
                    <div class="bg-tips-dark opacity-95 flex flex-col text-white pt-12 pl-4 pr-8 border-t-4 border-r-4 border-b-4 border-green-300 rounded-r-2xl">

                        <figure class="absolute left-12 -top-28">
                            <img
                                src="./gustavo-google.png"
                                alt="Foto do Rodrigo Egenheiro de software no Facebook"
                            />
                        </figure>

                        <h3 class="text-2xl mb-5">Gustavo</h3>

                        <div class="text-lg leading-8 mb-5">
                            <p class="mb-5">Engenheiro de software no Google </p>
                            <p>Workshop com o tema de como se <strong>preparar</strong> para uma <strong>entrevista</strong></p>
                            <p>nas empresas de tecnologia.</p>
                        </div>

                        <figure class="w-full flex justify-center mb-5">
                            <img class="w-36" src="./google-logo.svg" alt="Logo da Empresa" />
                        </figure>

                        <div class="w-full flex justify-center text-sm mb-5 gap-2 text-gray-400">
                            <Clock />
                            <p>1h 30 minutos</p>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    )
}