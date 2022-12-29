import Nullstack from 'nullstack';

function CardMoreDetails({ src, alt, contentDiv, contentP }) {

    return (
      <div class="flex flex-col w-5/6 lg:w-1/3 mx-auto lg:mx-0 pb-20 rounded-md lg:rounded-none lg:rounded-l-lg  mt-4 z-40">
        <div class="flex-1 text-white rounded-t rounded-b-none overflow-hidden px-5">
  
          <div class="w-full">
            <img class="mx-auto" src={src} alt={alt} loading="lazy" width="100" height="100" />
          </div>
  
          <div class="p-4 text-xl lg:text-3xl font-bold text-center">
            { contentDiv }
          </div>
  
          <p class="w-full text-center text-sm">
            { contentP }
          </p>
  
        </div>
  
      </div>
    );
  }

class Practicing extends Nullstack {

  render() {
    return (
      <div>
        <section class="md:py-8 tracking-wide">
          <div class="container mx-auto px-2 md:pt-4 pb-12 text-gray-800">
            <h1 class="w-full mt-2 md:mb-20 text-2xl lg:text-5xl font-bold leading-tight text-center text-white">
            🤚 PREPARA!!! <br /> Porque aqui vai ter muita <span class="text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r 
                    from-indigo-400 via-purple-500 to-indigo-600"> PRÁTICA</span>
            </h1>


            <div class="flex flex-col lg:flex-row justify-center pt-12 my-4 relative">

              <CardMoreDetails src="/sales-page-img/sales-react/icon-cubo.svg" alt="Projeto Clone do App Google Keep" contentDiv="Clone Google Keep" contentP="Vamos colocar a mão na massa criando um projeto 100% do zero baseado no Google Keep do Google." />

              <CardMoreDetails src="/sales-page-img/sales-react/icon-cubo.svg" alt="Projeto Todo-List" contentDiv="Todo-List" contentP="Vamos criar um sistema de lista, conhecido como Todo-List, onde vamos poder adicionar nossas tarefas do dia-a-dia." />

              <CardMoreDetails src="/sales-page-img/sales-react/icon-cubo.svg" alt="Sistema que mostra o significado de cada emoji" contentDiv="Emogipedia" contentP="Sabemos que hoje é muito comum enviarmos emoji em meio ás nossas conversas, porém você sabe o significado de cada um? Esse projeto resolve esse problema." />

              <CardMoreDetails src="/sales-page-img/sales-react/icon-cubo.svg" alt="Trabalhando com formulario" contentDiv="Formulário" contentP="Nesse projeto vamos criar uma tela de login, onde vamos mostrar diferentes telas com base no input do usuário." />
              

            </div>

          </div>
        </section>
      </div>
    );
  }

}

export default Practicing;