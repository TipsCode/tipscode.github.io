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
    <section class="md:flex-col my-16 sm:my-28" style="margin-bottom: 0px">
      <div class="bg-center bg-no-repeat bg-contain mx-3 overflow-hidden">

        <h3 class="text-center text-3xl md:text-5xl text-white font-bold">Ainda não conhece o método? <br />
          <span class="text-center text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-purple-500 to-indigo-600'">STEP-BY-STEP</span>
        </h3>

        <p class="text-white text-center">Não importa se você nunca estudou React, aqui você vai aprender todos os conceitos e fundamentos. <br /> Logo após este passo conceitual vamos criar na prática mais de 6 projetos com essa biblioteca que conquistou o mercado <br />e ainda vai dominar o principal framework front-end da atualidade, o Next.js.</p>

        <div class="container mx-auto px-4 sm:max-w-screen-xl sm:mx-auto sm:px-4 sm:py-10 flex flex-wrap sm:flex-nowrap sm:items-center justify-center sm:justify-around">
          <div class="mt-10 sm:mt-none order-2 sm:order-1 md:w-1/5">
            <ul>
              <DivBox nameTitle="JavaScript">No módulo Javascript você vai aprender os fundamentos de funções, maps, paramentros, callback, argumentos e muito mais. Neste passo, estaremos lhe preparando para o mundo React.</DivBox>
              <DivBox nameTitle="React.JS 1">Nos módulos de React aprofundaremos no funcionamento e avançaremos para o JSX, Bable, Template String, Componentes, Props, Hooks, States e muito mais.</DivBox>
            </ul>
          </div>

          <div class="mt-10 sm:mt-none order-1 sm:order-2">
            <img src="./about-alisson-suassuna.png" alt="Alisson Suassuna" height="520" width="468" />
          </div>

          <div class="sm:mt-10 sm:mt-none order-3 md:w-1/5">
            <ul>
              <DivBox nameTitle="ReactJS 2">Você vera Módulo 2 você vai aprender
                o que é ReactJS, introdução ao JSX e Babel
                usando téoria e prática, expressões JSX, aplicar
                folhas de estilos CSS com React, Atributos, CSS inline,
                Components React.
              </DivBox>
              <DivBox nameTitle="ReactJS 3, 4">Continuação do projeto Keep, Manipulações com formulários, <br />f
                renderização com operador ternário AND, Status, Hooks,
                Destructuring com ReactJS, Manipulações de eventos, classes Vs Hooks
                e muito mais..
              </DivBox>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}