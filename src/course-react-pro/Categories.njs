function DivBox({ children, nameTitle }) {
    return (
      <div class="text-center max-w-sm rounded overflow-hidden shadow-lg mb-10 borda-box">
        <figure>
          <img class="mx-auto" src="/sales-page-img/sales-react/icon-cubo.svg" alt="icones das tecnologias" />
        </figure>
        <div class="px-6 py-4">
          <div class="font-bold text-xl mb-2 text-white">{nameTitle}</div>
          <p class="text-gray-400">
            {children}
          </p>
        </div>
      </div>
    );
  }
  
  export default function Categories() {
    return (
      <section class="md:flex-col my-16 sm:my-28">
        <div class="bg-center bg-no-repeat bg-contain mx-3 overflow-hidden">
  
          <h3 class="text-center text-3xl md:text-5xl text-white font-bold">Ainda não conhece o método <br /> 
            <span class="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600'">STEP-BY-STEP</span></h3>

            <p class="text-white text-center">Não importa se nunca estudou React, aqui você vai aprender todos <br />os conceitos e fundamentos por tras dessa biblioteca que conquistou o mercado <br/>e ainda vai dominar o principal framework front-end da atualidade, o Next.js.</p>
  
          <div class="container mx-auto px-4 sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 flex flex-wrap sm:flex-nowrap sm:items-center justify-center sm:justify-around">
            <div class="mt-10 sm:mt-none order-2 sm:order-1 md:w-1/5">
              <ul>
                <DivBox nameTitle="JavaScript"> Todos os conceitos importantes de JavaScript que você precisa saber.</DivBox>
                <DivBox nameTitle="React.JS"> A tecnologia criada pelo time do Facebook e utilizada em varias grandes empresas </DivBox> 
              </ul>
            </div>
  
            <div class="mt-10 sm:mt-none order-1 sm:order-2">
            <img src="./about-alisson-suassuna.png" alt="Alisson Suassuna" height="520" width="468" />
            </div>
  
            <div class="sm:mt-10 sm:mt-none order-3 md:w-1/5">
              <ul>
                <DivBox nameTitle="Next.JS"> Todos os conceitos importantes de JavaScript que você precisa saber.</DivBox>
                <DivBox nameTitle="TypeScript"> A tecnologia criada pelo time do Facebook e utilizada em varias grandes empresas </DivBox> 
              </ul>
            </div>
          </div>
        </div>
      </section>
    );
  }