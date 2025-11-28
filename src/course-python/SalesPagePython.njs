import Nullstack from 'nullstack';

// import FacebookPixel from '../layout/FacebookPixel'
// import Menu from './Menu'
// import Hero from './Hero';
// import VideoSales from './VideoSales'
// import StepByStepSection from './StepByStepSection';
// import DetailsCard from '../course-react-pro/DetailsCard';
//import Content from './Content';
// import Content2 from './Content2';
// import DevSalary from './DevSalary';
// import CardActing from './CardActing';
// import Statistics from './Statistics';
// import Testimonials from './Testimonials';
// import Mentor from './Mentor';
// import PriceSection from './PriceSection';
// import FinalPage from './FinalPage';
// import Faqs from './Faqs'

import './SalesPagePython.css'


// import Faqs from './Faqs.njs';


class SalesPagePython extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso de Python `;
    page.description = `${project.name} do zero ao avançado`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png';
  }

  render() {
    return (
      
      <div class="container-page-python">
        <div>
          <h1>Este conteúdo foi movido!</h1>
          <p>
          O site que você está tentando acessar agora está disponível em um novo link.
          Clique no botão abaixo para ser redirecionado ao novo endereço.
          </p>
        <a href="https://python.tipscode.tech/" class="button">Acessar Novo Link</a>
        </div>

      </div>
     
    );
  }

}

export default SalesPagePython;