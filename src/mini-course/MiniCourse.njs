import Nullstack from 'nullstack';
import Content from './Content';
import Hero from './Hero';
import CallToAction from './CallToAction';
import Footer from '../layout/Footer';
import Thanks from './Thanks';

class MiniCourse extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Criando um Jogo com JavaScript`;
    page.description = `${project.name} Venha estudar JS criando um jogo irado`;
    page.locale = 'pt-BR';
  }

  render({ params, self }) {
    if (params.obrigado && self.hydrated) return <Thanks />;
    return (
      <>
        <Hero />
        <Content />
        <CallToAction />
        <Footer
          class={{
            footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around',
            p: 'text-center sm:text-center w-full text-tips-dark text-opacity-80',
          }}
          src="./tipscode-logo-1.svg"
        />

      </>
    );
  }

}

export default MiniCourse;