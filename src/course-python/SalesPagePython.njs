import Nullstack from 'nullstack';

import Menu from './Menu'
import Hero from './Hero';
import StepByStepSection from './StepByStepSection.njs';
//import Content from './Content.njs';
import Content2 from './Content2.njs';
import DevSalary from './DevSalary.njs';
import CardActing from './CardActing.njs';
import Statistics from './Statistics.njs';
//import Testimony from './Testimony.njs';
import AboutWorks from './AboutWorks.njs';
import PriceSection from './PriceSection.njs';
import FinalPage from './FinalPage';
import Faqs from './Faqs.njs'


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
        <Menu />
       <Hero />
         <CardActing/>
         <Statistics/> 
         <StepByStepSection />  
         {/* <Content />  problema para build */}
         <Content2 />
        <DevSalary />
        {/* <Testimony /> problema para build*/}
         <AboutWorks /> 
        <PriceSection />  
        <Faqs/>
       <FinalPage/> 
      </div>
    );
  }

}

export default SalesPagePython;