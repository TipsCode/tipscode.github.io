function BoxJourney({ children, nameTitle }) {
  return (
    <div>
      <figure class="jouney-img">
        <img src="/sales-page-img/sales-react/icon-cubo.svg" alt="icones das tecnologias" />
      </figure>
      <div class="border-solid border-white border-l-4 p-10">

        <div class="ml-5">
          <div class="jouney-heading">
            <h3 class="text-white text-start text-2xl">{nameTitle}</h3>
            <p class="text-gray-400">{children}</p>

          </div>
        </div>
      </div>
    </div>
  );
}

export default function Journey() {
  return (
    <div class="m-10 xm:flex-col lg:flex md:flex md:justify-around justify-around">

      <div>
        <h2 class="text-white text-start text-5xl"><span class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r
                    from-indigo-400 via-purple-500 to-indigo-600'"
        >STEP-BY-STEP
                                                   </span> no <br />caminho do sucesso
        </h2>
      </div>
      <div>
        <BoxJourney nameTitle="Revisão JavaScript">Nesse módulo vamos revisar todos os conceitos importantes de Javascript
          <br /> que você precisa saber antes de comçar no React.
        </BoxJourney>
        <BoxJourney nameTitle="Módulo 2 React JS">Agora sim, depois de dominar o  conceito em JS puro vamos partir pro
          <br /> Onde você vera Módulo 2 você vai aprender
          o que é ReactJS, introdução  <br /> ao JSX e Babel
          usando téoria e prática, expressões JSX, aplicar
          folhas <br />de estilos CSS com React, Atributos, CSS inline,
          Components React.
        </BoxJourney>

        <BoxJourney nameTitle="Módulo 3 ReactJS">
          Import e Exports JS, preparando ambiente React, Props, React DevTools,
          <br /> mapeamento de components, projetos keep
        </BoxJourney>

        <BoxJourney nameTitle="Módulo 4 ReactJS">
          Continuação do projeto Keep, Manipulações com formulários, <br />f
          renderização com operador ternário <br />AND, Status, Hooks,
          Destructuring com ReactJS, <br /> Manipulações de eventos, classes Vs Hooks
          e muito mais..
        </BoxJourney>
      </div>

    </div>
  );
}