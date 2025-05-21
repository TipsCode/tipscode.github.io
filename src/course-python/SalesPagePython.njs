import Nullstack from 'nullstack';

import FacebookPixel from '../layout/FacebookPixel'
import Menu from './Menu'
import Hero from './Hero';
import VideoSales from './VideoSales'
import StepByStepSection from './StepByStepSection';
import DetailsCard from '../course-react-pro/DetailsCard';
//import Content from './Content';
import Content2 from './Content2';
import DevSalary from './DevSalary';
import CardActing from './CardActing';
import Statistics from './Statistics';
import Testimonials from './Testimonials';
import Mentor from './Mentor';
import PriceSection from './PriceSection';
import FinalPage from './FinalPage';
import Faqs from './Faqs'

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
      <div class="bg-[#1e1e1e] overflow-hidden">
        <figure class="icon-whats">
          <a href="https://wa.me/558899073834?text=Curso%20de%20Python" target='_blank'>
            <img src="/sales-page-python-img/img-whats-icon.png" alt="icone de imagem do whatsapp" />
          </a>
        </figure>
      <FacebookPixel id="1057566742678452" />
        <Menu />
       <Hero />
       <VideoSales />
       <Testimonials />
       <DetailsCard />
         <Content2 />
         <StepByStepSection />  
         <Mentor /> 
        <DevSalary />
         <Statistics/> 
         {/* <CardActing/> */}
         {/* <Content />  problema para build */}
        {/* <Testimony /> problema para build*/}
        <PriceSection />  
        <Faqs/>
       <FinalPage/> 

    
      </div>
    );
  }

}

export default SalesPagePython;