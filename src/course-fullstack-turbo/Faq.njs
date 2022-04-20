import Nullstack from 'nullstack';
import './Faq.scss';

class Faq extends Nullstack {

  render({classe}) {
    return (
      <div class={classe}>
        <div class="container mx-auto">
          <div class="w-full md:w-3/5 mx-auto p-8">
            <h1 class="text-center text-2xl md:text-5xl font-bold text-white my-16">Perguntas frequentes</h1>
            <div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0 "
                  id="tab-multi-one"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-one">EU VOU CONSEGUIR ACOMPANHAR NÃO SENDO AINDA UM PROGRAMADOR?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Nós desenvolvemos um curso passo a passo com conteúdos que você poderá sim acompanhar. As aulas possuem exercícios com resolução, então será realmente fácil acompanhar todo o conteúdo e absorver o que está sendo ensinado mesmo que você comece do zero.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-two"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-two">POSSO COMEÇAR MESMO SEM NENHUM CONHECIMENTO?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Com certeza! O curso foi feito mesmo para aqueles que nunca tiveram contato com programação. Você vai aprender do zero, tudo que precisa para dominar a programação Web.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-three"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-three">QUAL A GARANTIA DO CURSO?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Você tem garantia de até 7 dias. Dessa forma, se por algum motivo quiser o seu dinheiro de volta, devolvemos tudo. Pedimos apenas o motivo do reembolso para que possamos melhorar nossos serviços.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-four"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-four">AS GRAVAÇÕES ESTÃO FINALIZADAS?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Não. Novas aulas,módulos e projetos são adicionados constantamente sem nenhum custo adicional. Você paga apenas uma vez e continua recebendo novos conteúdos.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-five"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-five">O CURSO TEM UMA DURAÇÃO LIMITE?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Não. A partir do momento que você recebe acesso ao curso, você tem acesso vitalício. Ou seja, nunca vai expirar e você pode acessar a hora que quiser.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-six"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-six">PARA QUAL FAIXA ETÁRIA É O CURSO?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">O curso é para todas as faixa etárias! Devido ao suporte personalizado, isso possibilita qualquer aluno(a), independente da sua idade, aprender ao máximo junto com o acompanhamento do instrutor.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-seven"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-seven">E SE EU TIVER DÚVIDAS?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Nós teremos um grupo exclusivo do curso para tirarmos dúvidas, promover a troca de conhecimentos e a criação de um networking entre os os alunos.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-eight"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-eight">COMO RECEBO AS ATUALIZAÇÕES DO CURSO?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Novas aulas e projetos são adicionadas constantemente no curso, sem nenhum custo adicional! Você será avisado no grupo de alunos e também via e-mail.</p>
                </div>
              </div>
              <div class="tab w-full overflow-hidden">
                <input
                  class="absolute opacity-0"
                  id="tab-multi-nine"
                  type="checkbox"
                  name="tabs"
                />
                <label class="block p-5 leading-normal cursor-pointer text-white" for="tab-multi-nine">O CURSO POSSUI CERTIFICADO?</label>
                <div
                  class="tab-content overflow-hidden border-l-2 bg-tips-dark border-indigo-500 leading-normal"
                >
                  <p class="p-5 text-white">Sim, após a conclusão das aulas você receberá imediatamente um certificado de conclusão do curso</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }

}

export default Faq;