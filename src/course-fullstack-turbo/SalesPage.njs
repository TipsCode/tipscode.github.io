import Nullstack from 'nullstack';

import Hero from './Hero';
import CourseDetails from './CourseDetails';
import WhatLearn from './WhatLearn';
import MoreDetails from './MoreDetails';
import Bonus from './Bonus';
import Testimonials from './Testimonials';
import Projects from './Projects';
import CallToAction from './CallToAction';
import Teacher from './Teacher';
import Faq from './Faq';
import Footer from '../layout/Footer';
import Contact from '../layout/Contact';
import Whatsapp from '../layout/Whatsapp';
import Workshop from './Workshop';
import Print from './Print';
import Warranty from './Warranty';
import Argumentation from './Argumentation';
import StepByStep from './StepByStep';

class SalesPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso Desenvolvedor FullStack Turbo`;
    page.description = `${project.name} Você no próximo nível`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png'
  }

  
  
  render({ router }) {
    
    return (
      <div class="bg-tips-dark" style="background-color: #000"> 
        <Hero />
        <Warranty />
        <Whatsapp linkWhats="https://wa.me/5588997623061?text=Tenho%20duvida%20sobre%20o%20curso%20fullstack%20turbo" />
        <Print />
        <Projects />
        <WhatLearn />
        <Testimonials />
        <Argumentation />
        <StepByStep />
        <Workshop />
        <MoreDetails />
        <CallToAction />
        <Teacher />
        <Faq />
        <Footer
          class={
           {
             footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10',
             p: 'text-center sm:text-center w-full',
           }
         }
          src="/TipsCodelogo.png"
          light
        />
      </div>
    );
  }

}

export default SalesPage;