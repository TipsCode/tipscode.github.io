export default function CallToAction() {
  return (
    <section id="cta-pay-now">

      <div class="container mx-auto text-center md:py-6">
        <h3 class="leading-normal w-8/12 sm:text-lg text-white text-1xl md:text-2xl m-auto text-center">
          Se você deseja realmente aprender programação do jeito certo, sem a velha mania de muitos em copiar e
          colar códigos dos outros sem saber o que está fazendo e entrar no mercado que mais cresce no mundo
          com salarios acima de R$3.000, clique no botão abaixo e se inscreva no curso Full Stack Turbo agora mesmo
        </h3>

      </div>

      <div class="mt-8 mb-8 text-center">

        <a
          href="https://pay.hotmart.com/A43229044U?checkoutMode=10"
          class="text-center cta-hero md:text-2xl font-bold w-full px-4 py-2 mx-auto mt-3 text-green-100 transition duration-500 ease-in-out transform bg-green-600 border-green-600 rounded-md items-centerw-full text-md focus:shadow-outline focus:outline-none focus:ring-2 ring-offset-current ring-offset-2 hover:bg-green-600"
        >
          ENTRAR NO CURSO FULL STACK TURBO
        </a>

      </div>

      <div class="w-full xl:w-1/4 md:w-1/4 mb-5 lg:ml-auto m-auto">

        <div class="relative flex flex-col h-full p-8">
          <h2 class="flex items-end mx-auto text-4xl font-black leading-none text-white mb-2">
            <span>12x de R$29,64</span>
          </h2>
          <h1 class="flex items-end mx-auto text-1xl font-black leading-none text-white ">
            <span>Ou à vista R$297,00</span>
          </h1>
          <figure>
            <img class="m-auto" src="/formas-de-pagamentos.png" />
          </figure>
        </div>
        <h3 class="mx-auto text-center text-1xl leading-none text-white">
          Em caso de dúvidas entre em contato lá pelo instagram
          <span class="span-text"> <a href="https://www.instagram.com/tipscodeoficial/" target="_blank" rel="noreferrer">@tipscodeoficial</a> </span> ou pelo e-mail: suporte@tipscode.com.br
        </h3>
      </div>
    </section>
  );
}