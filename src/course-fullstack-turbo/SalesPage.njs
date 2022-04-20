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
import FacebookPixel from '../layout/FacebookPixel';

class SalesPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - Curso Desenvolvedor FullStack Turbo`;
    page.description = `${project.name} Você no próximo nível`;
    page.locale = 'pt-BR';
    page.image = '/image-1200x630.png'
  }


  render({ router }) {
    return (
      <div class="bg-tips-dark">
        <div>
           <FacebookPixel id="294337825339805" />
        </div>
        <Hero />
        <CourseDetails />
        <WhatLearn />
        <MoreDetails />
        <Bonus />
        <Testimonials />
        <Projects />
        <CallToAction />
        <Teacher />
        <Faq classe="bg-tips-dark" />
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