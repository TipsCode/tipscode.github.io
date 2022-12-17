export default function CtaButton() {

    return (
        <section class="mt-8 text-center">       

            <a href="https://pay.hotmart.com/A43229044U?off=vcc2d8rx&checkoutMode=10"
                    class="text-center cta-hero md:text-2xl font-bold w-full px-4 py-2 mx-auto mt-3 text-green-100 transition duration-500 ease-in-out transform bg-green-600 border-green-600 rounded-md items-centerw-full text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-600">
                     ENTRAR NO CURSO FULL STACK TURBO
            </a>
       
            <div class="w-full xl:w-1/4 md:w-1/4 lg:ml-auto m-auto">
                <div class="relative flex flex-col h-full p-8">
                    <h2 class="flex items-end mx-auto text-4xl font-black leading-none text-white mb-2">
                        <span>12x de R$34,83</span>
                    </h2>
                    <h1 class="flex items-end mx-auto text-1xl font-black leading-none text-white ">
                        <span>Ou à vista R$349,00</span>
                    </h1>
                    <figure>
                        <img class="m-auto" src="/formas-de-pagamentos.png" />
                    </figure>
                </div>
            </div>
      </section>

    );
  }