import Nullstack from 'nullstack';
import './Home.scss';
import Logo from 'nullstack/logo';

class Home extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Nulla-chan te dá as boas vindas!`;
    page.description = `${project.name} foi feito com Nullstack`;
    page.locale = 'pt-BR';
  }

  renderLink({ children, href }) {
    const link = href + '?ref=create-nullstack-app';
    return (
      <a href={link} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
    )
  }

  render({ project }) {
    return (
      <section>
        <article>
          <Link href="https://nullstack.app/pt-br">
            <Logo height={60} light />
          </Link>
          <h1> {project.name} </h1>
          <p>
            Fizemos alguns exemplos para te ajudar a começar! Dê uma olhada na
            <Link href="vscode://file/C:/Users/Alisson Suassuna/Desktop/Site-tipscode/tipscode-blog/src">
              pasta src
            </Link>.
          </p>
          <span>
            Dica: nós temos uma
            <Link href="vscode:extension/ChristianMortaro.vscode-nullstack">
              Extensão para VS Code
            </Link>
          </span>
          <ul>
            <li>
              <Link href="https://nullstack.app/pt-br/componentes-renderizaveis">
                🎉 Crie seu primeiro componente 
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/pt-br/rotas-e-parametros">
                ✨ Configure sua primeira rota
              </Link>
            </li>
            <li>
              <Link href="https://nullstack.app/pt-br/contexto">
                ⚡ Defina seu context
              </Link>
            </li>
            <li>
              <Link href="https://github.com/nullstack/nullstack/stargazers">
                ⭐ Dê uma estrela no github
              </Link>
            </li>
            <li>
              <Link href="https://youtube.com/nullstack">
                🎬 Se inscreva no nosso Canal do Youtube
              </Link>
            </li>
          </ul>
          <div>
            <span>
              Como diria da Vinci:
            </span>
            <blockquote>
              "A simplicidade é a sofisticação suprema"
            </blockquote>
          </div>
        </article>
        <aside>
          <Link href="https://nullstack.app/pt-br/waifu">
            <img src="/nulla-chan.webp" alt="Nulla-Chan: waifu oficial do Nullstack" />
          </Link>
        </aside>
      </section>
    )
  }

}

export default Home;