import Nullstack from 'nullstack';
import "../course-python/SalesPagePython.css";
import Hero from './Hero';
import WhatLearn from './WhatLearn';
import MoreDetails from './MoreDetails';
import Testimonials from './Testimonials';
import Projects from './Projects';
import CallToAction from './CallToAction';
import Teacher from './Teacher';
import Faq from './Faq';
import Footer from '../layout/Footer';
import Workshop from './Workshop';
import Print from './Print';
import Warranty from './Warranty';
import Argumentation from './Argumentation';
import StepByStep from './StepByStep';
import CoursePlatform from './CoursePlatform';

class SalesPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso Desenvolvedor FullStack Turbo`;
    page.description = `${project.name} Você no próximo nível`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png';
  }

  render() {
    return (
     <div class="container-page-python">
        <h1>Este conteúdo foi movido!</h1>
        <p>
        O site que você está tentando acessar agora está disponível em um novo link.
        Clique no botão abaixo para ser redirecionado ao novo endereço.
        </p>
        <a href="https://www.tipscode.tech/" class="button">Acessar Novo Link</a>
      </div>
    );
  }

}

export default SalesPage;