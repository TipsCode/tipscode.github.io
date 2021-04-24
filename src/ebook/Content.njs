import Nullstack from 'nullstack';

class Content extends Nullstack {

  render() {
    return (
      <div>
        <section class="bg-tips-dark py-8">
          <div class="container max-w-5xl mx-auto m-8">
            <div class="my-12 sm:my-24">
              <h1 class="w-full text-2xl md:text-3xl font-bold leading-tight text-center text-white">
                LIVRO DIGITAL GRÁTIS
              </h1>

              <h2 class="w-full text-2xl md:text-5xl font-bold leading-tight text-center text-white">
                Veja o que você vai aprender no Livro
              </h2>
            </div>

            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6">
                <h5 class="text-gray-400 font-bold leading-none mb-3">
                  O poder do HTML
                </h5>
                <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
                  As melhores prática do HTML você aprenderá com esse Ebook.
                </h3>
                <p class="text-gray-200 mb-8">
                  A versão 5 do HTML é muito poderosa, neste livro
                  você realmente vai aprender tudo que é realmente 
                  necessário para criar um loyout seguindo os
                  melhores padrões.

                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <img src="./Web-design-image.svg" alt="web design" />
              </div>
            </div>
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <img src="./Frontend-image.svg" />
              </div>
              <div class="w-5/6 sm:w-1/2 p-6">
                <h5 class="text-gray-400 font-bold leading-none mb-3">
                  Elementos Assíncronos
                </h5>
                <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
                  Veja como usar elementos Assíncronos no HTML5
                </h3>
                <p class="text-gray-200 mb-8">
                  O HTML5 tem alguns elementos e atributos que possuir técnicas assíncronos e 
                  síncronos, pois é não são só as linguagens de programação que possuir, 
                  essas tags e atributos tem um impacto muito grande na performance e neste 
                  livro você vai dominar esses elementos.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6">
                <h5 class="text-gray-400 font-bold leading-none mb-3">
                  Detalhes de Cada Elementos
                </h5>
                <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
                  Veja como realmente as coisas funcionam.
                </h3>
                <p class="text-gray-200 mb-8">
                  Esse livro digital tem um nível de detalhes muito profundo, 
                  você vai aprende o que cada elemento faz, cada atributos e todas as 
                  variações que poderá ser aplicados nesses elementos..
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <img src="./Backend-image.svg" alt="web design" />
              </div>
            </div>
            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <img src="./sql-image.svg" />
              </div>
              <div class="w-5/6 sm:w-1/2 p-6">
                <h5 class="text-gray-400 font-bold leading-none mb-3">
                  Elementos de Entrada
                </h5>
                <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
                  Tudo sobre inputs e outputs
                </h3>
                <p class="text-gray-200 mb-8">
                  Os elementos de entradas são algo de extrema importância em qualquer projeto que você vá 
                  desenvolver, neste livro você vai aprende e dominar todos os atributos existentes e 
                  formas de inputs e outputs do HTML.
                </p>
              </div>
            </div>
            <div class="flex flex-wrap">
              <div class="w-5/6 sm:w-1/2 p-6">
                <h5 class="text-gray-400 font-bold leading-none mb-3">
                  O Verdadeiro Poder da Semântica HTML
                </h5>
                <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
                  Tudo sobre Semântica.
                </h3>
                <p class="text-gray-200 mb-8">
                  A semântica é algo incrível que a versão 5 do HTML trouce, e neste livro digital 
                  você vai conhecer todos os elementos novos da versão 5 e os motivos que você 
                  precisar conhece e aplicar em seus projetos
                </p>
              </div>
              <div class="w-full sm:w-1/2 p-6">
                <img src="./git-image.svg" alt="web design" />
              </div>
            </div>

            <div class="flex flex-wrap flex-col-reverse sm:flex-row">
              <div class="w-full sm:w-1/2 p-6 mt-6">
                <img src="./sql-image.svg" />
              </div>
              <div class="w-5/6 sm:w-1/2 p-6">
                <h5 class="text-gray-400 font-bold leading-none mb-3">
                  Atributos HTML
                </h5>
                <h3 class="text-xl md:text-3xl text-gray-100 font-bold leading-none mb-3">
                  Os atributos são uma parte essencial para o HTML
                </h3>
                <p class="text-gray-200 mb-8">
                  Os atributos são algo muito comum na linguagem HTML, existem muitos atributos para 
                  cada situação pode ter certeza que existe um atributo, neste livro você verá os 
                  principais e os que realmente faz sentido aprender.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
  }

}

export default Content;