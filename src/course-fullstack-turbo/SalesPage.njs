import Nullstack from 'nullstack';

import Hero from './Hero';
import CourseDetails from './CourseDetails';
import WhatLearn from './WhatLearn';
import MoreDetails from './MoreDetails';
import Bonus from './Bonus';
import Testimonials from './Testimonials';
import Projects from './Projects';
import Calltoaction from './Calltoaction';
import Teacher from './Teacher';
import Faq from './Faq';
import Footer from './Footer';

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
        <Calltoaction />
        <Teacher />
        <Faq />
        <Footer />
      </div>
    );
  }

}

export default SalesPage;