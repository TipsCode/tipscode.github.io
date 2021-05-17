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

class SalesPage extends Nullstack {

  prepare({ project, page }) {
    page.title = `${project.name} - TipsCode`;
    page.description = `${project.name} Descomplicando a Tecnologia`;
    page.locale = 'pt-BR';
  }


  render() {
    return (
      <div class="bg-tips-dark">
        <Hero />
        <CourseDetails />
        <WhatLearn />
        <MoreDetails />
        <Bonus />
        <Testimonials />
        <Projects />
        <CallToAction />
        <Teacher />
        <Faq />
         <Footer
          class={
           {
             footer: 'flex flex-col items-center py-16 sm:flex-row sm:justify-around text-white bg-tips-gray-dark bg-opacity-10',
             p: 'sm:text-center w-full',
           }
         }
          src="./TipsCodelogo.png"
          light
        />
      </div>
    );
  }

}

export default SalesPage;