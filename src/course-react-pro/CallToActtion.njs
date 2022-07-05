import Nullstack from 'nullstack';


class CallToActtion extends Nullstack {

  render() {
    return (
      <div class="mt-32">
        <p class="text-1xl lg:text-1xl font-bold text-gray-400 text-center">NÃO PERCA</p>
        <h3 class="w-full mt-2 md:mb-6 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
              O preço mais 👉<span class="text-5xl bg-card-bonus-heanding"> ACESSÍVEL</span> do <br /> mercado
            </h3>
        
        <p class="text-1xl lg:text-1xl font-bold text-gray-400 text-center">Menos de R$ 20 por mês, mais barato do que um café no aeroporto, <br /> 
pra tu aprender a biblioteca mais usada do mercado web, papai!!</p>

        <div class="w-full xl:w-1/4 md:w-1/4 lg:ml-auto m-auto">
            <div class="relative flex flex-col h-full p-8">
                <h2 class="flex items-end mx-auto text-2xl font-black leading-none text-white mb-2">
                    <span>R$109,00 á vista ou </span>
                </h2>
                <h1 class="flex items-end mx-auto text-3xl font-black leading-none text-white ">
                    <span>12x de R$10,88 </span>
                </h1>
                <a href="https://pay.hotmart.com/F68520890I?off=sghzc2e9&checkoutMode=10"
                    class="text-center w-full px-4 py-2 mx-auto mt-3 text-blue-100 transition duration-500 ease-in-out transform bg-blue-600 border-blue-600 rounded-md items-centerw-full text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-blue-800">
                    Fazer Inscrição agora
                </a>
                <p class="mx-auto mt-6 text-xs text-white">Sim, quero formar o maior número de profissionais qualificados que eu puder</p>
            </div>
        </div>
      </div>
    );
  }

}

export default CallToActtion;